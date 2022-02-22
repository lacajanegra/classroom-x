import CourseTeacherStudentDetailsModel from './course-teacher-student-details.model';

interface CourseTeacherDetailsModel {
    id: string
    name: string
    students: CourseTeacherStudentDetailsModel[]
}

export default CourseTeacherDetailsModel