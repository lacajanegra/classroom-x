import { useParams } from "react-router-dom";
import TeacherCourseView from './TeacherCourseView';

const AdminTeacherCourseView: React.FunctionComponent = () => {

    const { id } = useParams()

    return (
        < TeacherCourseView id={id || '0'} />
    );
}

export default AdminTeacherCourseView;