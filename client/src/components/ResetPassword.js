import React, { useState } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { getAuth, confirmPasswordReset } from "firebase/auth";

export const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState("");
  const location = useLocation();
  const auth = getAuth();

  // Extract the oobCode (reset code) from URL
  const queryParams = new URLSearchParams(location.search);
  const oobCode = queryParams.get("oobCode");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!oobCode) {
      alert("Error: No reset code provided.");
      return;
    }
    try {
      await confirmPasswordReset(auth, oobCode, newPassword);
      alert("Your password has been reset successfully.");
      // Redirect user to login or another relevant page
    } catch (error) {
      console.error("Error resetting password", error);
      alert(
        "Failed to reset password. Please try again or request a new reset link."
      );
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
              <h2 className=" font-bold text-2xl">Reset Password?</h2>
              <div className=" mb-[26px]">
                <p className=" my-5 text-sm font-normal">
                  Please create a new password. For enhanced security, it
                  should:
                </p>
                <ul className="my-5 text-sm font-normal list-disc list-inside">
                  <li>Be at least 8 characters long</li>
                  <li>Include uppercase and lowercase letters</li>
                  <li>
                    Have at least one number and special character (e.g., !, @,
                    #)
                  </li>
                </ul>
                <p className="my-5 text-sm font-normal">
                  We don't store passwords in readable form for your safety.
                </p>
              </div>
              <div className="m-0 p-0">
                <form onSubmit={handleSubmit} className=" m-0 p-0">
                  <div className="flex flex-col py-3">
                    <label htmlFor="password">New Password</label>
                    <input
                      type="password"
                      className="outline-none hover:ring-4 ring-green-50 focus:ring-green-100 focus:border-green-300 ease-in-out duration-300"
                      id="password"
                      name="password"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                    />
                  </div>
                  <button
                    className=" flex justify-center items-center h-10 mt-[22px] py-[10px] px-[20px] bg-[#0d0c22] hover:bg-[#565564] text-white font-semibold text-[13px] rounded-full w-[200px] max-w-[960px]"
                    type="submit"
                  >
                    Reset Password
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
