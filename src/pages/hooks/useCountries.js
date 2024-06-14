// hooks/useCountries.jsx
import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

const apiUrl = import.meta.env.VITE_REACT_APP_API_URL;
const apiKey = import.meta.env.VITE_REACT_APP_API_KEY;
const supabase = createClient(apiUrl, apiKey);

export const useCountries = () => {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState('');

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
    const { data, error } = await supabase.from('countries').insert([newCountry]);
    if (error) {
      console.error('Error inserting country:', error.message);
    } else {
      console.log('Country inserted:', data);
      getCountries();
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newCountry = { name: country };
    createCountry(newCountry);
    setCountry('');
  };

  return {
    countries,
    country,
    setCountry,
    handleSubmit
  };
};
