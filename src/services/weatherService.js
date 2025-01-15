import axios from 'axios';

const apiKey = 'b02c4ab7d508d8896db80f7c34519a42'; // Replace this with your actual API key
    const city = 'kanpur';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

export const fetchWeatherData = async (city) => {
  try {
    const response = await axios.get(baseUrl, {
      params: {
        q: city,
        appid: apiKey,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
