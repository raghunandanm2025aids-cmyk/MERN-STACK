import {useState} from  "react";
import {useLocation} from  "react-router-dom"
function Dashboard() {
    const location = useLocation();
    const [userdata, setUserdata] = useState("");
    function displaydata() {
        setUserdata(location,state);
        console.log(userdata)
    }
    return (
        <div>
            <h1>Dashboard</h1>
            <button onClick={displaydata}>button</button>
        </div>
    );
}

export default Dashboard;