import userService from "../services/user.service"

const Home: React.FunctionComponent = () => {

    const user = userService.getUser()

    return (
        <div>
            Hola {user.name}
        </div>
    )
}

export default Home