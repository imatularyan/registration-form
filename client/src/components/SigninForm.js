import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignInForm = () => {
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const loginUser = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          identifier,
          password,
        }),
      });
      const json = await res.json();
      console.log("data: ", json);
      if (res.ok) {
        window.alert("Login Successfuly");
        navigate("/signup");
      } else {
        window.alert("Sign in failed");
      }
    } catch (error) {
      console.log(error);
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
              src="https://cdn.dribbble.com/users/721278/screenshots/15462857/media/b38ebd3bca3c1f5b2ea12a03258a5aa9.mp4"
            ></video>
          </div>
        </section>
        <section className="bg-white flex-grow flex flex-col overflow-auto h-auto justify-center w-full">
          <main className="  flex flex-grow items-center justify-start m-0 p-0 min-w-[960px] max-w-[1200px]">
            <div className="ml-[100px] mt-20 px-[60px] w-[536px] h-fit text-[#0d0c22]">
              <h2 className=" font-bold text-2xl">Sign In to Website</h2>
              <div className="m-0 p-0">
                <form method="POST" className=" m-0 p-0">
                  <div className="flex flex-col py-3">
                    <label htmlFor="identifier">Username or Email</label>
                    <input
                      type="text"
                      className="outline-none hover:ring-4 ring-green-50 focus:ring-green-100 focus:border-green-300 ease-in-out duration-300"
                      id="identifier"
                      name="email"
                      value={identifier}
                      onChange={(e) => setIdentifier(e.target.value)}
                    />
                  </div>
                  <div className="flex flex-col py-3">
                    <label htmlFor="password">
                      Password
                      <Link
                        to="/forgot-password"
                        className="underline underline-offset-2 relative font-normal text-sm float-right"
                      >
                        Forgot Password?
                      </Link>
                    </label>
                    <input
                      type="password"
                      className="outline-none hover:ring-4 ring-green-50 focus:ring-green-100 focus:border-green-300 ease-in-out duration-300"
                      id="password"
                      autoComplete="current-password"
                      name="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <button
                    className=" flex justify-center items-center h-14 mt-5 py-2 px-5 bg-[#0d0c22] hover:bg-[#565564] text-white font-semibold text-sm rounded-full w-full"
                    type="submit"
                    value="Login"
                    onClick={loginUser}
                  >
                    Sign In
                  </button>
                  <p className=" text-center my-5 font-normal text-sm ">
                    Don't have an account?{" "}
                    <Link
                      to="/signup"
                      className="underline underline-offset-2 "
                    >
                      Sign Up
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

export default SignInForm;
