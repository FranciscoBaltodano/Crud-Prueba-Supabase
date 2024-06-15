import { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";

const apiUrl = import.meta.env.VITE_REACT_APP_API_URL;
const apiKey = import.meta.env.VITE_REACT_APP_API_KEY;
export const supabase = createClient(apiUrl, apiKey);

export function useUsers() {
  const [countries, setCountries] = useState([]);
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({
    name: '',
    email: '',
    country: '',
  });

  // Carga los datos de los países y los usuarios al cargar la pagina
  useEffect(() => {
    getCountries();
    getUsers();
  }, []);

  // Me trae en un array los datos de los usuarios
  async function getUsers() {
    const { data, error } = await supabase.from("users").select();
    if (error) {
      console.error('Error fetching users:', error.message);
    } else {
      setUsers(data);
    }
  }

  // Me trae en un array los datos de los países
  async function getCountries() {
    const { data, error } = await supabase.from("countries").select();
    if (error) {
      console.error('Error fetching countries:', error.message);
    } else {
      setCountries(data);
    }
  }

  // Crea un nuevo usuario, solo si tiene todos sus datos
  async function createUser(newUser) {
    if (!newUser.name || !newUser.email || !newUser.country) return;
    const { data, error } = await supabase.from('users').insert([newUser]);
    if (error) {
      console.error('Error inserting user:', error.message);
    } else {
      console.log('User inserted:', data);
      getUsers();
    }
  }

  // Actualiza los datos de un usuario solo si tiene todos sus datos
  async function updateUser(id, updatedUser) {
    if (!updatedUser.name || !updatedUser.email || !updatedUser.country) return;
    const { data, error } = await supabase.from('users').update(updatedUser).eq('id', id);
    if (error) {
      console.error('Error updating user:', error.message);
    } else {
      console.log('User updated:', data);
      getUsers();
    }
  }

  // Elimina un usuario
  async function deleteUser(id) {
    const { data, error } = await supabase.from('users').delete().eq('id', id);
    if (error) {
      console.error('Error deleting user:', error.message);
    } else {
      console.log('User deleted:', data);
      getUsers();
    }
  }

  // Actualiza el useState del user con el valor del input
  const handleChange = (event) => {
    setUser(user => ({
      ...user,
      country: event.target.value,
    }));
  };

  // Crea un nuevo usuario solo si todos lo inputs tienen datos
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!user.name || !user.email || !user.country) return;
    createUser(user);
    setUser({
      name: '',
      email: '',
      country: '',
    });
  };

  return {
    countries,
    users,
    user,
    handleChange,
    handleSubmit,
    setUser,
    updateUser,
    deleteUser,
    getUsers 
  };
}
