import CourseStudentModel from '../model/course-student.model';
import authHeader from './auth-header';
import axios, { AxiosResponse } from "axios";
import backendService from './backend.service';
import StudentModel from '../model/student.model';

class StudentService {

    private url: string = backendService.getUrl() + "/student/"

    getCourses = (): Promise<AxiosResponse<CourseStudentModel[]>> => {
        return axios.get(this.url + "courses", { headers: authHeader() })
    }

    getStudents = (): Promise<AxiosResponse<StudentModel[]>> => {
        return axios.get(this.url + "all", { headers: authHeader() })
    }
}

export default new StudentService()