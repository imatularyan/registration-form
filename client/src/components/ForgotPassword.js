import React, { useState } from "react";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";

export const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const auth = getAuth();

    try {
      await sendPasswordResetEmail(auth, email);
      alert("Password reset email sent!");
    } catch (error) {
      console.error("Error sending password reset email", error);
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
        <section className="bg-white flex-grow flex flex-col overflow-auto h-auto w-full">
          <main className=" flex flex-grow items-center justify-start m-0 p-0 min-w-[960px] max-w-[1200px]">
            <div className="ml-[100px] mt-20 px-[60px] max-w-[536px] h-fit text-[#0d0c22]">
              <h2 className=" font-bold text-2xl">Forgot Password?</h2>
              <div className=" mb-[26px]">
                <p className=" my-5 text-sm font-normal">
                  Enter the email address you used when you joined and we’ll
                  send you instructions to reset your password.
                </p>
                <p className="my-5 text-sm font-normal">
                  For security reasons, we do NOT store your password. So rest
                  assured that we will never send your password via email.
                </p>
              </div>
              <div className="m-0 p-0">
                <form onSubmit={handleSubmit} className=" m-0 p-0">
                  <div className="flex flex-col py-3">
                    <label htmlFor="email">Email Address</label>
                    <input
                      type="email"
                      className="outline-none hover:ring-4 ring-green-50 focus:ring-green-100 focus:border-green-300 ease-in-out duration-300"
                      id="email"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <button
                    className=" flex justify-center items-center h-10 mt-[22px] py-[10px] px-[20px] bg-[#0d0c22] hover:bg-[#565564] text-white font-semibold text-[13px] rounded-full w-[200px] max-w-[960px]"
                    type="submit"
                    value="Login"
                  >
                    Send Reset Email
                  </button>
                </form>
              </div>
            </div>
          </main>
        </section>
      </div>
    </>
  );
};
