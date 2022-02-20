import CourseStudentModel from '../model/course-student.model';
import authHeader from './auth-header';
import axios from "axios";
import backendService from './backend.service';

class StudentService {

    private url: string = backendService.getUrl() + "/student/"

    getCourses = async (): Promise<CourseStudentModel[]> => {
        const response = await axios.get<CourseStudentModel[]>(this.url + "courses", { headers: authHeader() });
        return response.data;
    }
}

export default new StudentService()