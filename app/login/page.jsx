"use client";
import { useEffect } from "react";

export default function Login() {
  useEffect(() => {
    document.title = "Login SIPP";
  }, []);
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
              <h1>Login</h1>
            </div>
            <div>
              <form className=" my-4 flex-col space-y-4">
                <div className="flex flex-col space-y-2">
                  <label htmlFor="username">Username: </label>
                  <input
                    type="text"
                    name="username"
                    id="username"
                    className="w-96 rounded-md text-black px-3 py-0.5"
                  />
                </div>
                <div className="flex flex-col space-y-2">
                  <label htmlFor="password">Password: </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    className="w-96 rounded-md text-black px-3 py-0.5"
                  />
                </div>
                <div>
                  <input type="checkbox" className="me-3 text-xs" />
                  <label>Lihat Password</label>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
