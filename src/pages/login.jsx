import { useState } from "react";

function Login(){
  const[email, setEmail] = useState("");
  const[password, setPassword] = useState("");

  const formSubmit=(e)=>e.preventDefault();

    console.log(email,password)
    return(
        /* <div className="text-blue-500">HI </div>

        <input type="email" required placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <br></br>
        <input type="password" required placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} />
         <br></br>
        <button type="sumbit" onClick={()=>print()}>sumbit</button>} */
      <form onSubmit={formSubmit}>
        <input type="email" required placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <br></br>
         <br></br>
        <input type="password" required placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <br></br>
         <br></br>
         
        <button type="submit" onClick={()=>console.log(email,password)}>submit</button>
        <br></br>
        {/*}
        <button type="submit" onClick={console.log(email,password)}>submit</button>*/}
      </form>)
} export default Login;
