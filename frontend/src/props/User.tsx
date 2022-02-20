interface UserProps {
    name: string
    email: string
    onClick: () => void
}

const User : React.FunctionComponent<UserProps> = ({ name, email, onClick, children }) => {
    return (
        <div>
            Name: {name}
            Email: {email}
            <button onClick={onClick}>Click me {name} {children} </button>
        </div>
    );
}

export default User;