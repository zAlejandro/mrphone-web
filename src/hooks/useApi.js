import { useState, useEffect } from "react";

export const useApi = (fetchData, initialValue) => {
  const [data, setData] = useState(initialValue);
  useEffect(() => {
    fetchData().then(setData).catch(console.error);
  }, []);
  return data;
};
