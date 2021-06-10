import React,{useState} from "react";
import "./MyCard.css"
import logo from "./Sanjay2.png"
import {AddUser} from "./AddUser";
import GitHubUserApi from "./GitHubUserApi";

export const MyCard = () =>
{
    const [userData, setUser] = useState([]);

    const saveUserHandler = (user) =>
    {
        GitHubUserApi.getGitHubUser(user.name).then(data=>{setUser((users)=>{
            return [data, ...users];
        });});
    }

        return(
            <div>
                <AddUser saveUser={saveUserHandler}/>
                {userData.map(user =>
                <div className="bg-secondary myCard__control" key={user.id}>
                    <div className="row">
                        <div className="col-sm-5 text-end">
                            <img src={user.avatar_url} className="image"/>
                        </div>
                        <div className="col-sm-6 text-start text-white">
                            <div className="myCard__innerDiv">Name :{user.name}</div>
                            <div className="myCard__innerDiv">Company :{user.company}</div>
                        </div>
                    </div>
                </div>
                )}
            </div>
        )
}
