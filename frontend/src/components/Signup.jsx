import React, { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../config";

export default function Signup() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const handleCheckbox = (gender) => {
    setUser({ ...user, gender });
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${BASE_URL}/api/v1/user/register`, user, {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      });

      toast.success("Account created successfully!");
      navigate("/login");
      console.log("Signup success:", res.data);
    } catch (err) {
      console.error("Signup error:", err);
      toast.error(err.response?.data?.message || "Something went wrong");
    }

    // Reset form after submission
    setUser({
      fullName: "",
      username: "",
      password: "",
      confirmPassword: "",
      gender: "",
    });
  };

  return (
    <div className="">
      <div className="w-full p-6 shadow-md rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100">
        <h1 className="text-4xl font-bold text-center">Create an account</h1>
        <p className="text-white text-xs text-center">
          Enter your details below to create your account
        </p>

        <form onSubmit={onSubmitHandler}>
          <div className="flex flex-col gap-2 mt-3">
            <label>Full Name</label>
            <input
              type="text"
              placeholder="John Doe"
              value={user.fullName}
              onChange={(e) => setUser({ ...user, fullName: e.target.value })}
              className="bg-white rounded-md shadow-md text-black w-full input input-bordered"
            />

            <label>Username</label>
            <input
              type="text"
              placeholder="johndoe"
              value={user.username}
              onChange={(e) => setUser({ ...user, username: e.target.value })}
              className="bg-white rounded-md shadow-md text-black w-full input input-bordered"
            />

            <label>Password</label>
            <input
              type="password"
              placeholder="********"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              className="bg-white rounded-md shadow-md text-black w-full input input-bordered"
            />

            <label>Confirm Password</label>
            <input
              type="password"
              placeholder="********"
              value={user.confirmPassword}
              onChange={(e) =>
                setUser({ ...user, confirmPassword: e.target.value })
              }
              className="bg-white rounded-md shadow-md text-black w-full input input-bordered"
            />

            <div className="flex justify-around items-center mt-3">
              <div>
                <p>Male</p>
                <input
                  type="radio"
                  checked={user.gender === "male"}
                  onChange={() => handleCheckbox("male")}
                  className="checkbox"
                />
              </div>

              <div>
                <p>Female</p>
                <input
                  type="radio"
                  checked={user.gender === "female"}
                  onChange={() => handleCheckbox("female")}
                  className="checkbox"
                />
              </div>
            </div>

            <button type="submit" className="btn btn-secondary mt-4">
              Sign up
            </button>
          </div>
        </form>

        <p className="text-xs text-center mt-3">
          Already have an account? <a href="/login">Log In</a>
        </p>
      </div>
    </div>
  );
}
