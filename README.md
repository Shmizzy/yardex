# Yardex

Yardex is a customer-facing web application that allows users to find and book lawn services easily. This README file provides an overview of the project, installation instructions, usage details, and other important information.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Introduction

Yardex simplifies the process of finding reliable lawn care services. Users can search for available services in their area, view provider ratings and prices, and book services directly through the app. Yardex aims to make lawn care easy and convenient.

## Features

- Browse available lawn care services based on location
- View detailed service provider profiles, including ratings and prices
- Book services directly through the app
- Track the status of booked services
- User-friendly interface with responsive design

## Technologies Used

- Frontend: HTML, CSS, JavaScript, React
- Backend: Node.js, Express
- Database: MongoDB
- Authentication: JWT (JSON Web Tokens)
- Styling: CSS Modules, Kanit font
- Icons: Font Awesome

## Installation

Follow these steps to set up the Yardex app locally:

1. **Clone the repository:**

    ```sh
    git clone https://github.com/your-username/yardex.git
    cd yardex
    ```

2. **Install dependencies:**

    ```sh
    npm install
    ```

3. **Set up environment variables:**

    Create a `.env` file in the root directory and add the following variables:

    ```env
    REACT_APP_API_URL=<BACKEND_URL>
    VITE_GOOGLE_CLOUD_MAP_ID=<YOURAPIKEY>
    VITE_GOOGLE_CLOUD_API_KEY=<YOURAPIKEY>
    ```

4. **Start the development server:**

    ```sh
    npm start
    ```

    The app will be available at `http://localhost:3000`.

## Usage

1. **Home Page:**

    On the home page, users can enter their location in the search bar to find available lawn care services in their area.

2. **Service Listings:**

    Browse the list of available services, view ratings, prices, and select a service provider to see more details.

3. **Booking a Service:**

    Click on the "Book Now" button on a service provider's profile to schedule a service. You will need to sign up or log in to complete the booking.

4. **Tracking Services:**

    After booking, track the status of your service (e.g., in progress, completed) from your dashboard.

## Contributing

We welcome contributions to Yardex! If you have suggestions for improvements or find any issues, please submit a pull request or open an issue on GitHub.

1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature-name`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/your-feature-name`)
5. Open a pull request

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

Thank you for using Yardex! We hope our app makes it easier for you to find and book lawn care services.
