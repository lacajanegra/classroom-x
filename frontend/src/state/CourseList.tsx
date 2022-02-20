import { useState } from 'react'

const CourseList: React.FunctionComponent = () => {

    const [name, setName] = useState<string>('')
    const [users, setUsers] = useState<string[]>([])

    const onChange = (value: string) => {
        setName(value)
    }

    const onClick = () => {
        setName('')
        setUsers([...users, name])
    }

    return (
        <div>
            <h3>Course List</h3>

            <ul>
                {
                    users.map((user) => (<li key={user}>{user}</li>))
                }
            </ul>

            <input value={name} onChange={(event) => onChange(event.target.value)} />
            <button onClick={onClick}>Add user</button>
        </div>
    );
}

export default CourseList;