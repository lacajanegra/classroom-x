import CourseStudentModel from '../model/course-student.model';
import authHeader from './auth-header';
import axios, { AxiosResponse } from "axios";
import backendService from './backend.service';
import StudentModel from '../model/student.model';
import CourseToLearnModel from '../model/course-to-learn.model';
import CourseToLearnStudentModel from '../model/course-to-learn-student.model';

class StudentService {

    private url: string = backendService.getUrl() + "/student/"

    getCoursesToLearn = (): Promise<AxiosResponse<CourseToLearnModel[]>> => {
        return axios.get(this.url + "courses/to-learn", { headers: authHeader() })
    }

    addCourse = (request: CourseToLearnStudentModel): Promise<AxiosResponse<void>> => {
        return axios.post(this.url + "course/" + request.teacherId, {}, { headers: authHeader() })
    }

    getCourses = (): Promise<AxiosResponse<CourseStudentModel[]>> => {
        return axios.get(this.url + "courses", { headers: authHeader() })
    }

    getStudents = (): Promise<AxiosResponse<StudentModel[]>> => {
        return axios.get(this.url + "all", { headers: authHeader() })
    }
}

export default new StudentService()