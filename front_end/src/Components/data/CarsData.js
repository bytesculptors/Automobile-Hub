import React, { useContext } from "react";
import axios from "axios";
import { CarDataContext } from "./CarDataContext";
import { useEffect } from "react";

function CarsData() {
  const { carData, setCarData } = useContext(CarDataContext);
  const fetchData = () => {
    axios.post('http://localhost:8082/dashboard', {key: "get Car Data"})
      .then(res => {
        setCarData(res.data);
      })
      .catch(err => console.log(err));
  };

  useEffect(() => {
    fetchData();
    window.addEventListener('load', fetchData);

    return () => {
      window.removeEventListener('load', fetchData);
    };
  }, [])

  return (
    <></>
  );
}

export default CarsData
