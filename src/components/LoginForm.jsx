import { useState } from "react";
import axios from "axios";
const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('')
    const [error, setError] = useState('');

    const handleSubmit = async(e)=>{
        e.preventDefault();
        const authObject = {'project-ID': "027507f1-0f9c-43e0-9744-9379e5eb0ec2",'User-Name':username, 'User-Secret': password};
        try {
           await axios.get('https://api.chatengine.io/chats',{headers: authObject}) ;
            localStorage.setItem('username',username);
            localStorage.setItem('password',password);
            window.location.reload();
        } catch (error) {
            setError('INCORRECT CREDENTIALS');
        }
    }

    return(
        <div className="wrapper">
            <div className="form">
                <h1 className="Title" style = {{"textAlign" : "center"}}> React Chat</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" value ={username} onChange={(e)=>{setUsername(e.target.value)}} className="input" placeholder="username" required/>
                    <input type="text" value ={password} onChange={(e)=>{setPassword(e.target.value)}} className="input" placeholder="password" required/>
                    <div allign = "center">
                        <button type = "submit" className="button">
                            <span>Start React Chat</span>
                        </button>

                    </div>
                    <h2 className="error">
                        {error}
                    </h2>
                </form>
            </div>

        </div>
    )

}
export default LoginForm;