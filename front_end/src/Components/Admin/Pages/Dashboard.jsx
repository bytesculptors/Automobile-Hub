import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { CarDataContext } from '../../data/CarDataContext'
import "./Styles/Dashboard.css"
import { UserContext } from '../../data/UserContext';
function Dashboard() {

  const { carData } = useContext(CarDataContext);
  const { userData } = useContext(UserContext);
  console.log("Car", carData);
  const dataLength = carData ? carData.length : 0;
  const [showCarTable, setShowCarTable] = useState(true);
  const toggleTable = () => {
    setShowCarTable(!showCarTable);
  };

  const [newCar, setNewCar] = useState({
    brand: "",
    model: "",
    year: "",
    transmission: "",
    num_seats: "",
    fuel_type: "",
    price_per_day: "",
    image: ""
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewCar({ ...newCar, [name]: value });
  };

  const handleDelete = (car) => {
    axios.post('http://localhost:8082/dashboard', {key: "delete car", value: car})
      .then(res => {
        console.log("compelte delete");
        window.location.reload();
      })
      .catch(err => console.log(err));
  }

  const handleAddCar = () => {
    axios.post('http://localhost:8082/dashboard', newCar)
      .then(response => {
        console.log(response);
        window.location.reload();
      })
      .catch(error => {
        console.error('Error adding car:', error);
      });
  };



  return (
    <div className='dashboard_content'>
      <div className="car_table_header">
        <button className="car_table_button" onClick={toggleTable}>
          Total Cars: {dataLength}
        </button>
      </div>

      {showCarTable ? (<div className="table_content">
        <table className='table_position table table-secondary table-striped table-hover'>
          <thead>
            <tr>
              <th>Brand</th>
              <th>Model</th>
              <th>Year</th>
              <th>Transmission</th>
              <th>Number of Seats</th>
              <th>Fuel Type</th>
              <th>Price per Day</th>
              <th>Image</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {carData && carData.map((car) => (
              <tr key={car.car_id}>
                <td>{car.brand}</td>
                <td>{car.model}</td>
                <td>{car.year}</td>
                <td>{car.tranmission}</td>
                <td>{car.num_seats}</td>
                <td>{car.fuel_type}</td>
                <td>{car.price_per_day.toLocaleString("vi-VN")}</td>
                <td className='car_image'>  <a href={car.image}> Image Link</a></td>
                <td className='delete_button'>
                  <button onClick={ () => handleDelete(car)}>
                    <i class="ri-delete-bin-line"></i>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            <tr>
              <td>
                <input
                  type="text"
                  name="brand"
                  value={newCar.brand}
                  onChange={handleInputChange}
                />
              </td>
              <td>
                <input
                  type="text"
                  name="model"
                  value={newCar.model}
                  onChange={handleInputChange}
                />
              </td>
              <td>
                <input
                  type="text"
                  name="year"
                  value={newCar.year}
                  onChange={handleInputChange}
                />
              </td>
              <td>
                <input
                  type="text"
                  name="transmission"
                  value={newCar.transmission}
                  onChange={handleInputChange}
                />
              </td>
              <td>
                <input
                  type="text"
                  name="num_seats"
                  value={newCar.num_seats}
                  onChange={handleInputChange}
                />
              </td>
              <td>
                <input
                  type="text"
                  name="fuel_type"
                  value={newCar.fuel_type}
                  onChange={handleInputChange}
                />
              </td>
              <td>
                <input
                  type="text"
                  name="price_per_day"
                  value={newCar.price_per_day}
                  onChange={handleInputChange}
                />
              </td>
              <td className='car_image'>
                <input
                  type="text"
                  name="image"
                  value={newCar.image}
                  onChange={handleInputChange}
                />
              </td>
            </tr>
          </tbody>
        </table>
        <button className="add_car_button" onClick={handleAddCar}>
          Add Car
        </button>
      </div>) : (
        <div className="table_content hidden">
          <table className="table_position table table-secondary table-striped table-hover">
            <thead>
              <tr>
                <th>Brand</th>
                <th>Model</th>
                <th>Year</th>
                <th>Transmission</th>
                <th>Number of Seats</th>
                <th>Fuel Type</th>
                <th>Price per Day</th>
                <th>Image</th>
              </tr>
            </thead>
          </table>
        </div>
      )}
      <div className="total_user">
        Total User: {userData && userData.length}
      </div>
      <div className="user_info">
        {userData && userData.map((user) => (
          <div key={user.user_id} className="user_details">
            <img src={user.user_images} alt="User Image" />
            <div className='info'>
              <p>
                <span>Email: </span>
                {user.user_email}
              </p>
              <p>
                <span>Phone Number: </span>
                {user.phone_number}
              </p>
              {user.date_of_birth && (
                <p>
                  <span>Date of Birth: </span>
                  {new Date(user.date_of_birth).toISOString().slice(0, 10)}
                </p>
              )}
              <p>
                <span>Full Name: </span>
                {user.full_name}
              </p>
              <p>
                <span>Address: </span>
                {user.address}
              </p>
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}

export default Dashboard
