import CourseTeacherModel from '../model/course-teacher.model';
import authHeader from './auth-header';
import axios, { AxiosResponse } from "axios";
import backendService from './backend.service';

class TeacherService {

    private url: string = backendService.getUrl() + "/teacher/"

    getCourses = (): Promise<AxiosResponse<CourseTeacherModel[]>> => {
        return axios.get(this.url + "courses", { headers: authHeader() })
    }
}

export default new TeacherService()