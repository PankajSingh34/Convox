import React ,{useState} from "react";
import toast from "react-hot-toast";
import axios from "axios";
export default function Signup() {
 
 const [user, setUser] = useState({
  fullName: "",
  username: "",
  password: "",
  confirmPassword: "",
  gender:"",
 });

 const handleCheckbox = (gender) => {
  setUser({...user,gender});
 }
 const onSubmitHandler =async (e) => {
  e.preventDefault();
  try{
 const res= await axios.post('http://localhost:3000/api/v1/user/register',user,{headers:{
  "Content-Type": "application/json"},
  withCredentials: true
})
navigate('/Login');
console.log(res);
  }catch(err){
    toast.error(err.response.data.message);
    console.log(err);
  }
  setUser({fullName: "",
    username: "",  
    password: "",
    confirmPassword: "",
    gender:"",});
 }
  return (
    <div className="">
      <div className="w-full p-6 shadow-md rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 ">
        <h1 className="text-4xl font-bold text-center">Create an account</h1>
        <p className="text-white text-xs text-center">
          Enter your details below to create your account
        </p>

        <form action="" onSubmit={onSubmitHandler}>
          <div className="flex flex-col gap-2 mt-3">
            <label className="">Full Name</label>
            <input  value={user.fullName}
            onChange={(e)=>setUser({...user,fullName:e.target.value})}
              type="text"
              placeholder="john doe"
              className="bg-white rounded-md shadow-md text-black w-full input input-bordered"
            ></input>

           <label className="">username</label>
            <input  value={user.username}
            onChange={(e)=>setUser({...user,username:e.target.value})}
              type="text"
              placeholder="john doe"
              className="bg-white rounded-md shadow-md text-black w-full input input-bordered"
            ></input>

           
            <label>Password</label>
            <input value={user.password}
            onChange={(e)=>setUser({...user,password:e.target.value})}
              type="password" placeholder="********"
              className="bg-white rounded-md shadow-md text-black w-full input input-bordered"
            ></input>

            <label>Confirm Password</label>
            <input value={ user.confirmPassword}
              
              onChange={(e)=>setUser({...user,confirmPassword:e.target.value})}
              type="password" placeholder="********"
              className="bg-white shadow-md rounded-md text-black w-full input input-bordered"
            ></input>

            <div className="flex justify-around items-center">
              <div>
                <p>Male</p>
                <input checked={user.gender=="male"}
                onChange={()=>handleCheckbox("male")}
                type="radio" className="checkbox " />
              </div>

              <div>
                <p>Female</p>
                <input checked={user.gender=="female"}
                onChange={()=>handleCheckbox("female")}
                type="radio" className="checkbox " />
              </div>
            </div>
            <button type="submit"
              className="btn btn-secondary mt-4"
            >
              Sign up
            </button>
          </div>
        </form>
        <p className="text-xs text-center mt-3">
          Already have an account? <a href="/Login">Log In</a>
        </p>
      </div>
    </div>
  );
}
