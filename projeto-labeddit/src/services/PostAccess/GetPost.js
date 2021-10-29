import axios from "axios";
import { useEffect, useState } from "react";

const useRequestData = (initialData, url) => {
  const [data, setData] = useState(initialData);

  useEffect(() => {
    getPost();
  }, [url]);

  const header = {
    headers: {
      Authorization: localStorage.getItem("token"),
    },
  };

  const getPost = () => {
    axios
      .get(url, header)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return [data, getPost];
};

export default useRequestData;
