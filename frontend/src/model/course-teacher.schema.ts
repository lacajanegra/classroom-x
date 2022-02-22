import * as Yup from 'yup';

import CourseTeacherModel from './course-teacher.model';

const CourseTeacherSchema : Yup.SchemaOf<CourseTeacherModel> = Yup.object().shape({
    id: Yup.string().required("Debe seleccionar una materia"),
    message: Yup.string().optional()
});

export default CourseTeacherSchema