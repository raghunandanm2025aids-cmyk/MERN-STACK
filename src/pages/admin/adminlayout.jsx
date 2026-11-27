import { Link,Outlet } from "react-router-dom";

function Adminlayout(){
    return(
        <div>
        <h1>This is only accessible to admins</h1>
        <nav>
            <Link to = {"Admindashboard"}>Admindashboard</Link>
            <Link to = {"Adminsettings"}>Adminsettings</Link>
            <Link to = {"Adminuserdetails"}>Adminuserdetails</Link>
        </nav>
        <Outlet/>
        </div>
    )
}
export default Adminlayout