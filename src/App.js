import './App.css';
import { useState,useEffect } from 'react';
import axios from 'axios';
import User from './components/User';

function App() {

  const [input,setInput] = useState("")
  const [users,setUsers] = useState([])

  useEffect(()=>{
    axios.get("https://api.github.com/users")
    .then(res => setUsers(res.data)).then(console.log(users));
    
  },[])

  const searchUsers = users.filter(user =>{

    return user.login.toLowerCase().includes(input.toLowerCase())
  })

  return (
    <div className="App">
      <div className="search-section">
        <h1>Github Users</h1>
        <input type="text" placeholder='👨🏻‍💻 Search for a user ...' onChange={(e)=> {setInput(e.target.value)}}/>
      </div>
      <div className="user-container">
        {
          searchUsers.map((user,idx)=>{

            return <User key={idx} login={user.login} avatarUrl={user.avatar_url} htmlUrl={user.html_url} reposUrl={user.repos_url}/>
          })
        }
      </div>
    </div>
  );
}

export default App;
