import * as Yup from 'yup';

import CourseModel from './course.model';

const CourseSchema : Yup.SchemaOf<CourseModel> = Yup.object().shape({
    id: Yup.string().optional(),
    name: Yup.string().required("Nombre requerido"),
    message: Yup.string().optional()
});

export default CourseSchema