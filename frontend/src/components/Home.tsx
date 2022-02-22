import userService from "../services/user.service"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'

const Home: React.FunctionComponent = () => {

    const user = userService.getUser()

    return (
        <div className="text-center">
            <FontAwesomeIcon icon={faUserCircle} size="5x" />
            <div>Hola {user.name}</div>
        </div>
    )
}

export default Home