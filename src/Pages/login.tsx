import react, { useEffect } from "react";
import { useState } from "react";
// import useForm from "../Componet/passwordValidations";
import { useForm, SubmitHandler } from "react-hook-form";
function LoginPage() {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [gender, setGender] = useState("")
    // const [errors, setErrors] = useState({});
    // const [isLogin, setIsLogin] = useState(false);

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit: SubmitHandler<any> = data => console.log("name is : " + name, "email is : " + email, "gender is : " + gender);;
    const onSubmitError: SubmitHandler<any> = data => console.log(data);

    // useEffect(() => {
    //     //Runs only on the first render
    //     console.log("hello");
    // }, []);

    // useEffect(() => {
    //     //Runs on the first render
    //     //And any time any dependency value changes
    // });

    function handleName(e: any) {
        setName(e.target.value)

    }
    function handleEmail(e: any) {
        setEmail(e.target.value)

    }
    function handlePassword(e: any) {
        setPassword(e.target.value)

    }
    function handleGender(e: any) {
        setGender(e.target.value)

    }

    // function dedmuonnd()

    function Login() {
        console.log("name is : " + name, "email is : " + email, "gender is : " + gender);

    }

    return (
        < >

            <div>
                hello
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="name-label"></label>
                <input {...register("name", { minLength: 5 })} type="text" id="name-label" name="name" placeholder="Name" onChange={handleName} />
                {errors.name && <span>This field is required</span>}
                <label htmlFor="email-label"></label>
                <input type="text" id="name-label" name="email" placeholder="Email" onChange={handleEmail} />
                <label htmlFor="password-label"></label>
                <input type="password" id="password-label" name="password" placeholder="Password" onChange={handlePassword} />
                <label htmlFor="gender-label"> Gender</label>
                <select name="gender" id="gender-abel" onChange={handleGender}>
                    <option value="male">Male</option>
                    <option value="female">Female</option>

                </select>
                <button type="submit" > Login </button>
            </form>
        </>
    );
}

export default LoginPage;