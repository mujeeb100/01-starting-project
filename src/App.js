import React,{useState,Fragment} from "react";
import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";

function App() {
const [usersList,setUsersLists]=useState([]);

const addUserHandler=(uName, uAge)=>{
  setUsersLists((prevUsersList)=>{
  return [...prevUsersList,{name:uName,age:uAge, id:Math.random().toString()}]
  });
}

  return (
    <Fragment>
      <AddUser onAddUser={addUserHandler}/>
      <UserList users={usersList}/>
    </Fragment>
  );
}

export default App;
