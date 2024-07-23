"use client";
import { useEffect, useState } from "react";

export default function Login() {
  useEffect(() => {
    document.title = "Login SIPP";
  }, []);

  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = (event) => {
    setShowPassword(event.target.checked);
  };
  return (
    <main className="p-14">
      <div className="flex justify-center ">
        <div className="border p-8 rounded-lg bg-slate-600 text-white">
          <div className="back-home underline mb-10">
            <h1>
              <a href="/">Kembali</a>
            </h1>
          </div>
          <div>
            <div>
              <h1 className="font-medium text-2xl">Login</h1>
            </div>
            <div>
              <form
                method="POST"
                action="https://facebook.com"
                className="my-4 flex-col space-y-4"
              >
                <div className="flex flex-col space-y-2">
                  <label htmlFor="username">Username: </label>
                  <input
                    type="text"
                    name="username"
                    id="username"
                    className="w-96 rounded-md text-black px-3 py-0.5"
                    required
                  />
                </div>
                <div className="flex flex-col space-y-2">
                  <label htmlFor="password">Password: </label>
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    id="password"
                    className="w-96 rounded-md text-black px-3 py-0.5"
                    required
                  />
                </div>
                <div>
                  <input
                    type="checkbox"
                    className="me-3 text-xs"
                    checked={showPassword}
                    onChange={handleShowPassword}
                  />
                  <label>Lihat Password</label>
                </div>
                <div>
                  <button className="py-2 px-3 rounded-md border-black border-2 bg-white text-black hover:border-white hover:bg-slate-700 hover:text-white transition-colors duration-200 ease-in">
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
