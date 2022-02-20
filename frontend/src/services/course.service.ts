import CourseModel from '../model/course.model';
import authHeader from './auth-header';
import axios from "axios";
import backendService from './backend.service';

class CourseService {

    private url: string = backendService.getUrl() + "/course/"

    getCourses = async (): Promise<CourseModel[]> => {
        const response = await axios.get<CourseModel[]>(this.url + "all", { headers: authHeader() });
        return response.data;
    }
}

export default new CourseService()