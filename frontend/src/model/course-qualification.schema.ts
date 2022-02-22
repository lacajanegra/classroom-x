import * as Yup from 'yup';
import CourseQualificationModel from './course-qualification.model';

const CourseQualificationSchema : Yup.SchemaOf<CourseQualificationModel> = Yup.object().shape({
    courseId: Yup.string().required("Debe seleccionar un curso"),
    studentId: Yup.string().required("Debe seleccionar un estudiante"),
    qualification: Yup.number().required("Debe agregar una calificación")
    .min(0, "Debe estar entre 0 y 7")
    .max(7, "Debe estar entre 0 y 7"),
    message: Yup.string().optional()
});

export default CourseQualificationSchema