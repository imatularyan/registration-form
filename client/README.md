# Registration Form Project - Bharat Intern

## Introduction

The Registration Form project is a web application that allows users to sign up and log in using either their email or username along with a password. It features a user-friendly and minimalist design for seamless user interaction.

## Features

- **User Registration:** Users can create an account with a unique username or email and a password.
- **User Login:** Users can log in using either their username or email along with their password.
- **Responsive Design:** Utilizing Tailwind CSS for a modern and responsive user interface.

## Technology Stack

- **Frontend:** React
- **Styling:** Tailwind CSS
- **Backend:** Node.js, Express
- **Database:** MongoDB

## Project Structure

```
/registration-form
├── client/
│   ├── node_modules/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── App.css
│   │   ├── App.js
│   │   ├── App.test.js
│   │   ├── index.js
│   │   └── tailwind.css
│   ├── .gitignore
│   ├── package-lock.json
│   ├── package.json
│   ├── README.md
│   └── tailwind.config.js
└── server/
    ├── node_modules/
    ├── src/
    │   ├── db/
    │   │   └── db.connect.js
    │   ├── model/
    │   │   └── userSchema.js
    │   └── router/
    │       └── auth.js
    ├── .env
    ├── .gitignore
    ├── app.js
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
# Client-side dependencies
cd client
npm install

# Server-side dependencies
cd ../server
npm install
```

3. **Set up environment variables**

Create a `.env` file in the server directory and add the following variables:

```
MONGODB_USERNAME=yourMongoDBUsername
MONGODB_PASSWORD=yourMongoDBPassword
DATABASE_NAME=yourMongoDBName
PORT=8000
```

4. **Start the server**

```sh
cd server
npm start
```

5. **Start the client**

```sh
cd ../client
npm start
```

## Usage

After starting both the server and client, open your browser and navigate to `http://localhost:3000` to use the registration form. You can sign up with a unique username or email, and then log in using your credentials.

## Contributing

Contributions to the Registration Form project are welcome. Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/AmazingFeature`).
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the branch (`git push origin feature/AmazingFeature`).
5. Open a pull request.
