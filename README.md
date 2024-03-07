

# Rental Car Web Application

This repository contains the source code and documentation for a web application designed to facilitate car rental services. The application allows users to browse, book, and manage their car rental reservations.

## Team Information

- Team Name: 6466
- Team Members:
  - Ngô Đăng Hoàng Anh
  - Nguyễn Đăng Hải
  - Đỗ Minh Sáng
  - Trần Tuấn Nghĩa

## Features

The web application offers the following features:

1. User Registration and Authentication:
   - Users can create new accounts or log in with existing ones.
   - User authentication is implemented to ensure secure access to user-specific information.

2. Car Catalog:
   - The application provides a catalog of available cars for rent.
   - Users can browse and search for cars based on various criteria such as make, model, price, and availability.

3. Car Reservation:
   - Authenticated users can book a car by selecting the desired dates and providing necessary details.
   - The application checks the availability of the car and confirms the reservation if it's available.

4. Reservation Management:
   - Users can view and manage their car rental reservations.
   - They can modify or cancel existing reservations as needed.

5. User Reviews and Ratings:
   - Users can leave reviews and ratings for the cars they have rented.
   - The reviews and ratings help other users make informed decisions.

6. Admin Dashboard:
   - An admin dashboard is available for authorized personnel to manage the car catalog and user reservations.
   - Admins can add new cars, update car information, and handle user bookings.

## Technologies Used

The web application is built using the following technologies:

- Front-end:
  - HTML, CSS, JavaScript
  - React.js (JavaScript framework for building user interfaces)
  - Redux (state management library for JavaScript applications)

- Back-end:
  - Node.js (JavaScript runtime)
  - Express.js (web application framework for Node.js)
  - MySQL

## Getting Started

To run the application locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone 
   ```

2. Install the dependencies for the front-end and back-end:

   ```bash
   # 6466
    install front_end :
    npm i react reat-router react-bootstrap bootstrap react-router-dom axios reactstrap
    install backend :
    npm init -y
    npm i express cors nodemon mysql
    npm i redux react-redux @reduxjs/toolkit
   ```

3. Start the front-end and back-end servers:

   ```bash
   # In the client folder
   npm start

   # In the server folder
   npm run start
   ```

4. Access the web application in your browser at `http://localhost:3000`.

## License

This project is licensed under the [MIT License](LICENSE).

## Contributing

Contributions to this project are welcome. If you encounter any issues or have suggestions for improvement, please open an issue or submit a pull request.

## Acknowledgments

We would like to thank our team members and all the contributors who have helped develop and improve this web application. Your contributions are greatly appreciated.