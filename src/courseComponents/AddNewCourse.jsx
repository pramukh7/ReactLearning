import React, {Component} from "react";
import "./AddNewCourse.css"
import {Link} from "react-router-dom"
import CourseServices from "../services/CourseServices";

class AddNewCourse extends Component
{
    constructor(props) {
        super(props);
        this.state = {
            courseName : "",
            description : "",
            price : "",
        }
        this.courseNameHandler = this.courseNameHandler.bind(this);
        this.descriptionHandler = this.descriptionHandler.bind(this);
        this.priceHandler = this.priceHandler.bind(this);
        this.submitCourseHandler = this.submitCourseHandler.bind(this);
    }

    courseNameHandler = (event) =>
    {
        this.setState({courseName:event.target.value});
    }

    descriptionHandler = (event) =>
    {
        this.setState({description:event.target.value});
    }

    priceHandler = (event) =>
    {
        this.setState({price:event.target.value});
    }

    submitCourseHandler = (event) =>
    {
        event.preventDefault();
                const course = {
                    id:Math.floor(Math.random() * 10000) + 1,
                    courseName:this.state.courseName,
                    description:this.state.description,
                    price:this.state.price,
                };
                CourseServices.addNewCourse(course).then(res =>{
                    window.location.href ="/courses";
                });
    }


render() {
    return (
        <div className="addNewEmployee">
            <form onSubmit={this.submitCourseHandler}>
                <div>
                    <label className="label-header__control">Add New Course</label>
                </div>
                <div>
                    <label className="label__control">Name :<br/>
                        <input type="text" className="input__control" value={this.state.courseName} onChange={this.courseNameHandler}
                               placeholder="Course name here..." name="courseName" id="courseName" required />
                    </label>
                </div>
                <div>
                    <label className="label__control">Description :<br/>
                        <input type="text" className="input__control" value={this.state.description} onChange={this.descriptionHandler}
                               placeholder="Course description here..." name="courseDescription" id="courseDescription"
                               required />
                    </label>
                </div>
                <div>
                    <label className="label__control">Price :<br/>
                        <input type="number" className="input__control" value={this.state.price} onChange={this.priceHandler}
                               placeholder="Course price here..." name="coursePrice" id="coursePrice" required />
                    </label>
                </div>
                <div>
                        <button className="success-button__control">Submit</button>
                    <Link to="/courses">
                        <button className="danger-button__control">Cancel</button>
                    </Link>
                </div>
            </form>
        </div>
    )
}
}

export default AddNewCourse;