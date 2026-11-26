import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Registerschema } from "../components/registerschema ";

function Register(){
    const navigate=useNavigate();
    const {register,handleSubmit, formState:{errors}}= useForm({
        resolver:zodResolver(Registerschema)
    })
    function onSubmit(data){
        console.log(data)
        alert("register success")
        navigate("/")
    }
    return(
                <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" placeholder="Enter username" name="username" {...register("name")}/>
                <p>{errors.name?.message}</p>
                <input type="password" placeholder="Enter password" name="password" {...register("password")} />
                <p>{errors.password?.message}</p>
                <input type="email" placeholder="Enter email" name="email" {...register("email")}/>
                <p>errors.email?.message</p>
                <input type="age" placeholder="Enter age" name="age"  {...register("age")}  />
                <p>{errors.age?.message}</p>
                <button type ="submit">Login</button>
                </form>
    )
}
export default Register;