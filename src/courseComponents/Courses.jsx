import React, {Component} from "react";
import CourseServices from "../services/CourseServices";

class Courses extends Component {

   constructor(props) {
       super(props);

       this.state = {
           courses : []
       }
   }

    componentDidMount() {
        CourseServices.getCourses().then((res) => {
            this.setState({courses: res.data})
        });
    }

    render() {
        return (
                <div className="container course">
                    <table className="table table-dark table-striped table-hover">
                        <thead className="thead-dark">
                        <tr>
                            <th>Course Name</th>
                            <th>Course Description</th>
                            <th>Course Price</th>
                        </tr>
                        </thead>
                        <tbody>
                        {this.state.courses.map(course =>
                               <tr key={course.id}>
                                   <td>{course.courseName}</td>
                                   <td>{course.description}</td>
                                   <td>{course.price}</td>
                               </tr>
                           )};
                        </tbody>
                    </table>
                </div>
        );
    }
}
export default Courses
