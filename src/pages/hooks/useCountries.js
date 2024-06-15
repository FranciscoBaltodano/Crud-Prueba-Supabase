import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

const apiUrl = import.meta.env.VITE_REACT_APP_API_URL;
const apiKey = import.meta.env.VITE_REACT_APP_API_KEY;
const supabase = createClient(apiUrl, apiKey);

export const useCountries = () => {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [currentCountryId, setCurrentCountryId] = useState(null);

  useEffect(() => {
    getCountries();
  }, []);

  const getCountries = async () => {
    const { data, error } = await supabase.from("countries").select();
    if (error) {
      console.error('Error fetching countries:', error.message);
    } else {
      setCountries(data);
    }
  };

  const createCountry = async (newCountry) => {
    if (!newCountry.name) return;
    const { data, error } = await supabase.from('countries').insert([newCountry]);
    if (error) {
      console.error('Error inserting country:', error.message);
    } else {
      console.log('Country inserted:', data);
      getCountries();
    }
  };

  const editCountry = async (editedCountry) => {
    const { data, error } = await supabase.from('countries').update(editedCountry).eq('id', editedCountry.id);
    if (error) {
      console.error('Error updating country:', error.message);
    } else {
      console.log('Country updated:', data);
      getCountries();
      setIsEditing(false);
      setCurrentCountryId(null);
    }
  };

  const deleteCountry = async (id) => {
    const { data, error } = await supabase.from('countries').delete().eq('id', id);
    if (error) {
      console.error('Error deleting country:', error.message);
    } else {
      console.log('Country deleted:', data);
      getCountries();
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newCountry = { name: country };

    if (isEditing) {
      newCountry.id = currentCountryId;
      editCountry(newCountry);
    } else {
      createCountry(newCountry);
    }

    setCountry('');
  };

  const onHandleEdit = (id) => {
    const countryToEdit = countries.find(country => country.id === id);
    if (countryToEdit) {
      setCountry(countryToEdit.name);
      setIsEditing((isEditing) => !isEditing);
      setCurrentCountryId(id);
    }
  };

  return {
    countries,
    country,
    setCountry,
    isEditing,
    handleSubmit,
    onHandleEdit,
    editCountry,
    deleteCountry,
  };
};
