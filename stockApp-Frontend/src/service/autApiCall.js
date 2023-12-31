import axios from "axios";

export const login = async (values) => {
  const URL = import.meta.env.VITE_BASE_URL;

  try {
    const { data } = await axios.post(`http://127.0.0.1:8000/auth/login`, values);
console.log(data);  
} catch (error) {
    console.log(error);
  }
};
