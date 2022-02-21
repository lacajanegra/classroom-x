import userService from "../services/user.service"
import Courses from './Courses';

const Home: React.FunctionComponent = () => {

    const courseList = userService.hasAnyRole(['ADMIN']) ? (
        <Courses />
    ) : (null)

    return (
        <div>
            {courseList}
        </div>
    )
}

export default Home