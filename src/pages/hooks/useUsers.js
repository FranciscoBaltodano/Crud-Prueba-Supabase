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

  useEffect(() => {
    getCountries();
    getUsers();
  }, []);

  async function getUsers() {
    const { data, error } = await supabase.from("users").select();
    if (error) {
      console.error('Error fetching users:', error.message);
    } else {
      setUsers(data);
    }
  };

  async function getCountries() {
    const { data, error } = await supabase.from("countries").select();
    if (error) {
      console.error('Error fetching countries:', error.message);
    } else {
      setCountries(data);
    }
  };

  async function createUser(newUser) {
    const { data, error } = await supabase.from('users').insert([newUser]);
    if (error) {
      console.error('Error inserting user:', error.message);
    } else {
      console.log('User inserted:', data);
      getUsers();
    }
  };

  const handleChange = (event) => {
    setUser(user => ({
      ...user,
      country: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Submitting user:', user);
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
    setUser
  };
}
