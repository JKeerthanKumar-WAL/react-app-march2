import { useFormik } from "formik";
import useLocalStorage from "use-local-storage";
import { useState } from "react";
const RegisterRouterFormik = () => {
    let [details, setDetails] = useState([])
    let [result, setResult] = useLocalStorage("Registration", "");
    const formik = useFormik({
        initialValues: {
            email: "",
            username: "",
            password: ""
        },
        onSubmit(values) {
            let object = {
                email: formik.values.email,
                username: formik.values.username,
                password: formik.values.password
            }
            let newDetails = [...details, object]
            setDetails(newDetails);
            setResult(newDetails);
        },
        validate() {
            const errors = {}
            if (formik.values.email.length < 5 || formik.values.email.length > 30) {
                errors.email = "Email must be greater than 5 and less than 30 characters"
            }
            if (formik.values.username.length < 4 || formik.values.username.length > 20) {
                errors.username = "Username must be greater than 4 and less than 20 characters"
            }
            if (formik.values.password.length < 7 || formik.values.password.length > 20) {
                errors.password = "Password must be greater than 7 and less than 20 characters"
            }
            return errors;
        }
    });
    return (
        <div className="container-fluid form-control w-50 pb-3 mt-3 mb-3 ">
            <form onSubmit={formik.handleSubmit} noValidate>
                <h2 className="mt-3">Registration</h2><br />
                <b>Email : </b><input className="form-group mb-3 rounded-3" type="email" name="email" value={formik.values.email} onChange={formik.handleChange} /><br />
                <div className="text-danger mb-3">
                    <b>{formik.errors.email ? formik.errors.email : null}</b>
                </div>
                <b>User Name : </b><input className="form-group mb-3 rounded-3" type="text" name="username" value={formik.values.username} onChange={formik.handleChange} /><br />
                <div className="text-danger mb-3">
                    <b>{formik.errors.username ? formik.errors.username : null}</b>
                </div>
                <b>Password : </b><input className="form-group mb-3 rounded-3" type="password" name="password" value={formik.values.password} onChange={formik.handleChange} /><br />
                <div className="text-danger mb-3">
                    <b>{formik.errors.password ? formik.errors.password : null}</b>
                </div>
                <button className="btn btn-outline-primary mb-3"><b>Register</b></button>
            </form>
        </div>
    );
}
export default RegisterRouterFormik;