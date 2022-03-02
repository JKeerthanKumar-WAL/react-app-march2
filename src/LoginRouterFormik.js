import { useFormik } from "formik";
import { useState } from "react";
const LoginRouterFormik = () => {
    let [details, setDetails] = useState();
    let [result, setResult] = useState([]);
    const show = () => {
        for (let i = 0; i < result.length; i++) {
            if (result[i].username == details[0].username && result[i].password == details[0].password) {
                document.querySelector(".showHeading").textContent = "You are logged in";
                localStorage.setItem("loggedIn", 1);
                localStorage.setItem("loggedUser", details[0].username)
                break;
            }
            document.querySelector(".showHeading").textContent = "You are not logged in";
            localStorage.setItem("loggedIn", 0)
            localStorage.setItem("loggedUser", null)
        }
    }
    const formik = useFormik({
        initialValues: {
            username: "",
            password: ""
        },
        onSubmit(values) {
            let logObject = {
                username: formik.values.username,
                password: formik.values.password
            }
            let newDetails = [logObject];
            setDetails(newDetails);
            let acquiredResult = JSON.parse(localStorage.getItem("Registration"));
            setResult(acquiredResult);
        },
        validate() {
            const errors = {}
            if (formik.values.username.length < 4 || formik.values.username.length > 20) {
                errors.username = "Username must be greater than 4 and less than 20 characters"
            }
            if (formik.values.password.length < 7 || formik.values.password.length > 20) {
                errors.password = "Password must be greater than 7 and less than 20 characters"
            }
            return errors;
        },
    })
    show();
    return (
        <div className="container-fluid form-control w-50 pb-3 mt-3 mb-3">
            <form onSubmit={formik.handleSubmit} noValidate>
                <h2 className="mt-3">Log In</h2><br />
                <b>User Name : </b><input className="form-group mb-3 rounded-3" type="text" name="username" value={formik.values.username} onChange={formik.handleChange} /><br />
                <div className="text-danger mb-3">
                    <b>{formik.errors.username ? formik.errors.username : null}</b>
                </div>
                <b>Password : </b><input className="form-group mb-3 rounded-3" type="password" name="password" value={formik.values.password} onChange={formik.handleChange} /><br />
                <div className="text-danger mb-3">
                    <b>{formik.errors.password ? formik.errors.password : null}</b>
                </div>
                <button className="btn btn-outline-success mb-3"><b>Log In</b></button><br /><br />
                <h4 className="showHeading"></h4>
            </form>
        </div>
    );
}
export default LoginRouterFormik;

