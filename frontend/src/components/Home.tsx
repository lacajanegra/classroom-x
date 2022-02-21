import userService from "../services/user.service"
import Courses from './Courses';

const Home: React.FunctionComponent = () => {

    const courseList = userService.hasAnyRole(['ADMIN']) ? (
        <Courses />
    ) : (<span></span>)

    return (
        <div>
            {courseList}
        </div>
    )
}

export default Home