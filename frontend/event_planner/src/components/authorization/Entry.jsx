import React, { useState } from "react";

function Entry() {

    const [user, setUser] = useState({
        email: "",
        password: ""
    })

    // const { token, setToken } = useContext(AuthContext);

    // const navigate = useNavigate()

    const handleSubmit = async (e) => {
        // try {
        //   const response = await axios.post("http://localhost:8080/login", user)
        //   setToken(response.data)
        //   console.log({token})

        //   console.log('Успешная авторизация:', response.data)
        //   navigate("/main-page") // пока что этой страницы нет, потому что вы еще ее не сделали
        // } catch (error) {
        //   console.error('Ошибка авторизации:', error)
        // }
    };


    return (
        <div className="Entry">
            <h2>Entry</h2>
            <form>
                <input type="text" id="login-entry" value={user.email} onChange={event => setUser({...user, email: event.target.value})} required />
                <input type="password" id="password-entry" value={user.password} onChange={event => setUser({...user, password: event.target.value})} required />
                {/* <Link to="/registration">Wanna create an account?</Link> */}
                <button id="entry"
                        onClick={(event)=>{
                            event.preventDefault()
                            handleSubmit()
                        }}>Entry</button>
            </form>
        </div>
    );
}

export default Entry;