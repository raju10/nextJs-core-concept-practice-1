"use client";
import { registerUser } from "@/app/actions/auth/registerUser";
import React from "react";

export default function RegisterForm() {
  const handleRegister = async (e) => {
    e.preventDefault();
    const form = e.target;
    const username = form.name.value;
    const password = form.password.value;
    const payload = { username, password };
    console.log(payload);
    const result = await registerUser(payload);
    console.log(result);
  };
  return (
    <div className="w-full max-w-6xl mx-auto p-10">
      <form onSubmit={handleRegister} action="">
        <div className="">
          <label htmlFor="" className="block">
            User Name
          </label>
          <input type="text" name="name" id="" className="border w-[50%]" />
        </div>
        {/* <div className="">
          {" "}
          <label htmlFor="" className="block">
            {" "}
            Email
          </label>
          <input type="email" name="email" id="" className="border w-[50%]" />
        </div> */}
        <div className="">
          <label htmlFor="" className="block">
            Password
          </label>
          <input
            type="password"
            name="password"
            id=""
            className="border w-[50%]"
          />
        </div>
        <input
          type="submit"
          value="Register"
          className="p-2 bg-green-500 mt-4"
        />
      </form>
    </div>
  );
}
