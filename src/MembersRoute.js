import { useEffect, useState } from "react";
const MembersRoute = () => {
    let [email, setEmail] = useState()
    let [username, setUsername] = useState();
    let [password, setPassword] = useState();
    let loggedIn = parseInt(localStorage.getItem("loggedIn"));
    useEffect(() => {
        if (loggedIn) {
            let logUsername = localStorage.getItem("loggedUser")
            let registerDetail = JSON.parse(localStorage.getItem("Registration"))
            for (let i = 0; i < registerDetail.length; i++) {
                if (logUsername == registerDetail[i].username) {
                    setEmail(registerDetail[i].email);
                    setUsername(registerDetail[i].username);
                    setPassword(registerDetail[i].password);
                    break;
                }
            }
        };
    }, []);
    if (loggedIn) {
        return (
            <div className="container-fluid form-control w-50 pb-3 mt-3 mb-3">
                <h2>Logged User Details</h2><br />
                <b>Email : </b>{email}<br /><br />
                <b>User Name : </b>{username}<br /><br />
                <b>Password : </b>{password}<br /><br />
            </div>
        )
    }
};
export default MembersRoute; 