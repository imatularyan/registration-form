# Registration Form Project - Bharat Intern

## Introduction

The Registration Form project is a web application that allows users to sign up and log in using either their email or username along with a password. It features a user-friendly and minimalist design for seamless user interaction.

## Features

- **User Registration:** Users can create an account with a unique username or email and a password.
- **User Login:** Users can log in using either their username or email along with their password.
- **Responsive Design:** Utilizing Tailwind CSS for a modern and responsive user interface.

## Technology Stack

### Frontend

**React** is used for building the user interface. Its component-based architecture makes it ideal for developing complex user interfaces like our registration form.

### Styling

**Tailwind CSS** is used for styling due to its utility-first approach, making it easy to design a responsive and visually appealing UI without writing custom CSS.

### Backend

**Node.js** and **Express** provide a scalable and efficient server environment. Express simplifies routing and request handling, making it suitable for our application's backend structure.

### Database

**MongoDB** offers a flexible, document-oriented database system. It's used for storing user registration data, chosen for its scalability and ease of use with JSON-like documents.

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
    ├── package.json
    └── README.md
```

## Installation

1. **Clone the repository**

```sh
git clone https://github.com/your-username/registration-form.git
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
DATABASE_NAME=registrationDB
PORT=5000
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

---
