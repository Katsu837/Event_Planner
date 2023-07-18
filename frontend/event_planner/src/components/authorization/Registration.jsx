import React from "react";
import axios from "axios";

const Registration = function ()
{
    const [user, setUser] = useState({
        full_name: "",
        password: "",
        email: ""
    })

    // const navigate = useNavigate()

    const handleSubmit = async (e) => {
        // try {
        //     const response = await axios.post("http://localhost:8080/register", user)
        //     navigate("/main-page") // пока что этой страницы нет, потому что вы еще ее не сделали
        // } catch (error) {
        //     console.error('Ошибка авторизации:', error)
        // }
    };

    return(
        <div className="registration">
            <h2>Registration</h2>
            <form>
                <input type="text" className="reg_full_name" value={user.full_name} onChange={event => setUser({...user, name: event.target.value})} required placeholder="Add your full name" />
                <input type="email" className="reg_email" value={user.email} onChange={event => setUser({...user, email: event.target.value})} required placeholder="Add your email" />
                <input type="password" className="reg_password" value={user.password} onChange={event => setUser({...user, password: event.target.value})} required placeholder="Create a password" pattern="(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*"/>
                <pre>The password must contain 8 characters:
                    - at least one digit
                    - at least one uppercase letter
                    - at least one lowercase letter</pre>
                <Link to="/">Already have an account?</Link>
                <button className="reg_register"
                        onClick={(event) => {
                            event.preventDefault()
                            console.log(user)
                            handleSubmit()
                            // navigate("/main-page")
                        }}
                >Register</button>
            </form>

        </div>)
}

export default Registration;