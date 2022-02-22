import CourseModel from '../model/course.model';
import authHeader from './auth-header';
import axios, { AxiosResponse } from "axios";
import backendService from './backend.service';

class CourseService {

    private url: string = backendService.getUrl() + "/course"

    getCourses = (): Promise<AxiosResponse<CourseModel[]>> => {
        return axios.get(this.url + "/all", { headers: authHeader() })
    }

    addCourse = (request: CourseModel): Promise<AxiosResponse<CourseModel>> => {
        return axios.post(this.url, request, { headers: authHeader() })
    }

    editCourse = (request: CourseModel): Promise<AxiosResponse<CourseModel>> => {
        return axios.patch(this.url + `/${request.id}/name`, request, { headers: authHeader() })
    }
}

export default new CourseService()