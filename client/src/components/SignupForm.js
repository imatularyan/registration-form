import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    cpassword: "",
  });

  const handleInputs = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const PostData = async (e) => {
    e.preventDefault();
    const { name, username, email, password, cpassword } = user;

    const res = await fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        username,
        email,
        password,
        cpassword,
      }),
    });
    const data = await res.json();

    if (res.status === 422 || !data) {
      window.alert("Registration failed!");
    } else {
      window.alert("Registration successful");
      navigate("/signin");
    }
  };

  return (
    <>
      <div id="main-container" className=" bg-indigo-100 h-screen flex">
        <section className="flex-grow-0">
          <div className="w-[450px] h-full">
            <video
              playsInline
              className=" object-cover w-full h-full"
              autoPlay
              loop
              muted
              src="https://cdn.dribbble.com/users/721278/screenshots/15322527/media/ed945c1890320c7ca9be231cd7397653.mp4"
            ></video>
          </div>
        </section>
        <section className="bg-white flex-grow p-4 flex flex-col overflow-auto h-auto justify-center w-full">
          <main className="flex flex-grow items-center justify-start m-0 p-0 min-w-[960px] max-w-[1200px]">
            <div className="ml-[100px] mt-20 px-[60px] w-[536px] h-fit text-[#0d0c22]">
              <h2 className=" font-bold text-2xl">Sign Up to Website</h2>
              <div className="m-0 p-0">
                <form method="POST" className=" m-0 p-0">
                  <div className=" flex justify-between m-0">
                    <div className="flex flex-col py-3">
                      <label htmlFor="name">Name</label>
                      <input
                        id="name"
                        type="text"
                        className="outline-none hover:ring-4 ring-green-50 focus:ring-green-100 focus:border-green-300 ease-in-out duration-300"
                        name="name"
                        value={user.name}
                        onChange={handleInputs}
                      />
                    </div>
                    <div className="flex flex-col py-3">
                      <label htmlFor="username">Username</label>
                      <input
                        id="username"
                        autoComplete="given-name"
                        type="text"
                        className="outline-none hover:ring-4 ring-green-50 focus:ring-green-100 focus:border-green-300 ease-in-out duration-300"
                        name="username"
                        value={user.username}
                        onChange={handleInputs}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col py-3">
                    <label htmlFor="email">Email</label>
                    <input
                      id="email"
                      type="email"
                      className="outline-none hover:ring-4 ring-green-50 focus:ring-green-100 focus:border-green-300 ease-in-out duration-300"
                      name="email"
                      autoComplete="email"
                      value={user.email}
                      onChange={handleInputs}
                    />
                  </div>
                  <div className="flex flex-col py-3">
                    <label htmlFor="password">Password</label>
                    <input
                      id="password"
                      autoComplete="new-password"
                      type="password"
                      className="outline-none hover:ring-4 ring-green-50 focus:ring-green-100 focus:border-green-300 ease-in-out duration-300"
                      name="password"
                      placeholder="6+ characters"
                      value={user.password}
                      onChange={handleInputs}
                    />
                  </div>

                  <div className="flex flex-col py-3">
                    <label htmlFor="cpassword">Confirm Password</label>
                    <input
                      id="cpassword"
                      autoComplete="new-password"
                      type="password"
                      className="outline-none hover:ring-4 ring-green-50 focus:ring-green-100 focus:border-green-300 ease-in-out duration-300"
                      name="cpassword"
                      placeholder="6+ characters"
                      value={user.cpassword}
                      onChange={handleInputs}
                    />
                  </div>
                  <button
                    className=" flex justify-center items-center h-14 mt-5 py-2 px-5 bg-[#0d0c22] hover:bg-[#565564] text-white font-semibold text-sm rounded-full w-full"
                    type="submit"
                    onClick={PostData}
                  >
                    Create Account
                  </button>
                  <p className=" text-center my-5 font-normal text-sm ">
                    Already have an account?{" "}
                    <Link
                      to="/signin"
                      className="underline underline-offset-2 "
                    >
                      Sign In
                    </Link>
                  </p>
                </form>
              </div>
            </div>
          </main>
        </section>
      </div>
    </>
  );
};

export default Signup;
