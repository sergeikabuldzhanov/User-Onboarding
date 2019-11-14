import React from 'react';
import {useState, useEffect} from 'react';
import './App.css';
import OnboardingForm from './components/OnboardingForm';
import UserCard from './components/UserCard';

function App() {
  const [users, setUsers] = useState([]);

  function addUserToState(userData){
    setUsers([...users, userData]);
  }

  return (
    <div className="App">
      <OnboardingForm addUserToState = {addUserToState}/>
      {
        users.map(user=><UserCard user={user} key={user.id}/>)
      }
    </div>
  );
}

export default App;
