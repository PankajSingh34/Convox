import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import axios from 'axios';
import { useDispatch } from 'react-redux';

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        'http://localhost:3000/api/v1/user/login',
        user,
        {
          headers: {
            'Content-Type': 'application/json'
          },
          withCredentials: true
        }
      );

      toast.success("Login successful!"); //Displays a success message when login is successful.
      navigate('/');                        //Navigates to the homepage (/).
      dispatch(setAuthUser(res.data));
      console.log(res);

    } catch (err) {
      console.log("Login Error:", err);
    
      setUser({ username: "", password: "" });
    }
  };

  return (
    <div className="">
      <div className="w-full p-6 shadow-md rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 ">
        <h1 className="text-4xl font-bold text-center">Login</h1>
        <p className="text-white text-xs text-center">
          Enter your credentials to log in
        </p>

        <form onSubmit={onSubmitHandler}>
          <div className="flex flex-col gap-4 mt-3">
            <label className="text-sm font-semibold text-white">Username</label>
            <input
              type="text"
              value={user.username}
              onChange={(e) => setUser({ ...user, username: e.target.value })}
              placeholder="john doe"
              className="bg-white rounded-md shadow-md text-black w-full input input-bordered"
            />

            <label className="text-sm font-semibold text-white">Password</label>
            <input
              type="password"
              placeholder="********"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              className="bg-white rounded-md shadow-md text-black w-full input input-bordered"
            />

            <button type="submit" className="btn btn-secondary mt-4">
              Login
            </button>
          </div>
        </form>

        <p className="text-xs text-center mt-3">
          Don't have an account? <a href="/Signup" className="text-blue-400 underline">Signup</a>
        </p>
      </div>
    </div>
  );
}
