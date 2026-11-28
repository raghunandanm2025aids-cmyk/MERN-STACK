import {useEffect,useState} from  "react";
import {useLocation} from  "react-router-dom"
function Dashboard() {
    const location = useLocation();
    const [userdata, setUserdata] = useState("");
    //function displaydata() {
        //setUserdata(location,state);
        //console.log(userdata)
    //}
    const [Count, setCount] = usestate(0)
    useEffect(() => {
        setUserdata(location.state)
        console.log(userdata)
    }, [Count])

    const checkpoint = async () => {
        const response = await APi.get("/api/get")
        console.log(response.data);
    return (
        <div>
            <h1>Dashboard</h1>
            <button onClick={() => setCount(Count + 1)}>{
                userdata.username}</button>

            <button onClick={checkpoint}>Button</button>
        </div>
    );
}

export default Dashboard;