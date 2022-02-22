import authHeader from './auth-header';
import axios, { AxiosResponse } from "axios";
import backendService from './backend.service';
import TeacherModel from '../model/teacher.model';
import CourseModel from '../model/course.model';
import CourseTeacherModel from '../model/course-teacher.model';
import CourseTeacherDetailsModel from '../model/course-teacher-details.model';
import CourseQualificationModel from '../model/course-qualification.model';

class TeacherService {

    private url: string = backendService.getUrl() + "/teacher/"

    getCoursesToTeach = (): Promise<AxiosResponse<CourseModel[]>> => {
        return axios.get(this.url + "courses/to-teach", { headers: authHeader() })
    }

    getCourses = (): Promise<AxiosResponse<CourseModel[]>> => {
        return axios.get(this.url + "courses", { headers: authHeader() })
    }

    getTeachers = (): Promise<AxiosResponse<TeacherModel[]>> => {
        return axios.get(this.url + "all", { headers: authHeader() })
    }

    addCourse = (request: CourseTeacherModel): Promise<AxiosResponse<CourseModel>> => {
        return axios.post(this.url + "course/" + request.id, {}, { headers: authHeader() })
    }

    getCourse = (id: string): Promise<AxiosResponse<CourseTeacherDetailsModel>> => {
        return axios.get(this.url + "course/" + id, { headers: authHeader() })
    }
    
    updateQualification = (request: CourseQualificationModel): Promise<AxiosResponse<void>> => {
        return axios.patch(this.url + "course/" + request.courseId + '/student/' + request.studentId + '/qualification', request, { headers: authHeader() })
    }
}

export default new TeacherService()