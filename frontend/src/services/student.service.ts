import CourseStudentModel from '../model/course-student.model';
import authHeader from './auth-header';
import axios, { AxiosResponse } from "axios";
import backendService from './backend.service';

class StudentService {

    private url: string = backendService.getUrl() + "/student/"

    getCourses = (): Promise<AxiosResponse<CourseStudentModel[]>> => {
        return axios.get(this.url + "courses", { headers: authHeader() })
    }
}

export default new StudentService()