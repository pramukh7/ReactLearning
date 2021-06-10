import React, {Component} from "react";
import "./MyCard.css"
import logo from "./Sanjay2.png"
import {AddUser} from "./AddUser";

const DUMMY_USERS = [
    {

        id: 'A',
        userName: 'AARNA',
        company : 'Amazon',

    },
    {

        id: 'B',
        userName: 'Akshar',
        company : 'Google',

    },
    {

        id: 'C',
        userName: 'Vaishali',
        company : 'Etobicoke General Hospital',
    },
    {

        id: 'D',
        userName: 'SANJAY',
        company : 'PointClickCare',
    },
];

class MyCard extends Component
{


    constructor(props) {
        super(props);
        this.user = [];
        this.state =
        {
            user : DUMMY_USERS
        };
    }

    saveUserHandler (users){
           const result = {...users,...this.state.user};
            console.log(result);
    }

    render() {
        return(
            <div>
                <AddUser saveUser={this.saveUserHandler.bind(this)}/>
                {this.state.user.map(user =>
                <div className="bg-secondary myCard__control" key={user.id}>
                    <div className="row">
                        <div className="col-sm-5 text-end">
                            <img src={logo} className="image"/>
                        </div>
                        <div className="col-sm-6 text-start text-white">
                            <div className="myCard__innerDiv">Name :{user.userName}</div>
                            <div className="myCard__innerDiv">Company :{user.company}</div>
                        </div>
                    </div>
                </div>
                )}
            </div>
        )
    }
}
export default MyCard