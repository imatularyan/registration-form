# Registration Form Project

## Introduction

This Registration Form project is a basic web application that provides user registration functionality. It's designed using Node.js and Express for the backend, MongoDB Atlas for data storage, and basic HTML and CSS for the frontend. The form includes validation to check if a user is already registered and displays appropriate success or error messages accordingly.

## Features

- **User Registration:** Allows new users to register by filling out a form.
- **Validation:** Checks if a user with the given email already exists and prevents duplicate registrations.
- **Responsive Design:** Basic CSS for a straightforward and functional user interface.

## Technologies

- **Front-end:** HTML, CSS
- **Back-end:** Node.js, Express
- **Database:** MongoDB Atlas
- **Dependencies:** body-parser, dotenv, express, mongoose

## Project Structure

```
/registration-form
├── node_modules/
├── public/
│   ├── css/
│   │   └── styles.css
│   └── html/
│       ├── error.html
│       ├── index.html
│       └── success.html
├── .env
├── .gitignore
├── README.md
├── index.js
├── package-lock.json
└── package.json
```

## Installation

1. **Clone the repository**

```sh
git clone https://github.com/imatularyan/registration-form.git
cd registration-form
```

2. **Install dependencies**

```sh
npm install
```

3. **Environment Variables**
   Create a `.env` file in the project root directory and add your MongoDB Atlas credentials and the desired port number.

```
MONGODB_USERNAME=yourMongoDBUsername
MONGODB_PASSWORD=yourMongoDBPassword
PORT=3000
```

4. **Start the server**

```sh
npm start
```

## Usage

After starting the server, open `http://localhost:3000` in your web browser to access the registration form. Fill in the form details and submit. If the email has not been previously registered, a success message will be displayed; otherwise, an error message will appear.

## Contributing

Contributions to the Registration Form project are welcome. Please adhere to the following steps to contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeature`).
3. Commit your changes (`git commit -m 'Add some YourFeature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Open a pull request.
