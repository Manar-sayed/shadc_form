import { useState } from 'react';

export const GetRequestAction = () => {
  const [data, setData] = useState([]);

  const getRequest = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const json = await response.json();
    setData(json);
  };

  return {
    getRequest,
    data,
  };
};
