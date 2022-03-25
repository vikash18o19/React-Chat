import {ChatEngine} from 'react-chat-engine';
import ChatFeed from './components/ChatFeed.jsx'
import LoginForm from './components/LoginForm'

import './App.css';

const App = () => {

    if(!localStorage.getItem('username')) return <LoginForm/>

    return(
        <ChatEngine
            height = "100vh"
            projectID = "027507f1-0f9c-43e0-9744-9379e5eb0ec2"
            userName = {localStorage.getItem('username')}
            userSecret = {localStorage.getItem('password')}
            renderChatFeed ={(ChatAppProps) => <ChatFeed {...ChatAppProps}/>}
        
        />
    );
};
export default App;