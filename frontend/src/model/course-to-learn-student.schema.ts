import * as Yup from 'yup';
import CourseToLearnStudentModel from './course-to-learn-student.model';

const CourseToLearnStudentSchema : Yup.SchemaOf<CourseToLearnStudentModel> = Yup.object().shape({
    courseId: Yup.string().required("Debe seleccionar una materia"),
    teacherId: Yup.string().required("Debe seleccionar un profesor"),
    message: Yup.string().optional()
});

export default CourseToLearnStudentSchema