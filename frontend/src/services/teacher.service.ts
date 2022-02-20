import CourseTeacherModel from '../model/course-teacher.model';
import authHeader from './auth-header';
import axios from "axios";
import backendService from './backend.service';

class TeacherService {

    private url: string = backendService.getUrl() + "/teacher/"

    getCourses = async (): Promise<CourseTeacherModel[]> => {
        const response = await axios.get<CourseTeacherModel[]>(this.url + "courses", { headers: authHeader() });
        return response.data;
    }
}

export default new TeacherService()