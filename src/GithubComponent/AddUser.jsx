import React, {useState} from "react";
import "./AddUser.css"
export const AddUser = (props) =>
{
    const [showAddUser, setShowAddUser] = useState(false);


    const showAddUserForm = () =>{
        setShowAddUser(true);
    }

    const [user, setUser] = useState('');

    const userHandler = (event) =>
    {
        setUser(event.target.value)
    }

    const addUserHandler = (event)=>
    {
        event.preventDefault();
        const userData = {
            id: Math.random().toString(),
            username: user,
            company : "",
        };
        props.saveUser(userData);
        setUser("");
        setShowAddUser(false);
    }

    let isShowAddUser;
    if(showAddUser)
    {
        isShowAddUser = <form onSubmit={addUserHandler}>
            <i className="fa fa-user text-primary icon__control" ></i>
            <input type="text" value={user} onChange={userHandler} required/>
            <button type="submit" className="btn-primary">Add User</button>
        </form>
    }

    const cancelHandler = () =>
    {
        setShowAddUser(false);
    }

    return(
        <div>
            <button onClick={showAddUserForm} className="btn-success button__control">Add</button>
            <button onClick={cancelHandler} className="btn-danger button__control">Cancel</button>
            {isShowAddUser}
        </div>
    )
}