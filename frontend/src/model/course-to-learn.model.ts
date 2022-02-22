import CourseToLearnTeacherModel from "./course-to-learn-teacher.model";

interface CourseToLearnModel {
    id: string
    name: string
    teachers: CourseToLearnTeacherModel[]
}

export default CourseToLearnModel