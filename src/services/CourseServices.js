import axios from "axios";

const COURSE_API_BASE_URL = "http://localhost:9090/courses"

class CourseServices
{
       getCourses = () => {
            return axios.get(COURSE_API_BASE_URL);
        }

        addNewCourse = (course) =>
        {
            return axios.post(COURSE_API_BASE_URL, course);
        }

}
export default new CourseServices()