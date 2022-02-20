import CourseModel from '../model/course.model'
import { useState } from 'react'

const courses: CourseModel[] = [
    { id: '1', name: 'Algebra' },
    { id: '2', name: 'Calculo' },
    { id: '3', name: 'Fisica' }
]

const CourseSearch: React.FunctionComponent = () => {

    const [name, setName] = useState<string>('')
    const [course, setCourse] = useState<CourseModel | undefined>()

    const onChange = (value: string) => {
        setName(value)
    }

    const onClick = () => {
        setName('')
        const found = courses.find((course) => { return course.name === name })

        if (!found) {
            console.log('No esta el curso')
        }

        setCourse(found)
    }

    return (
        <div>
            <h3>Course Search</h3>
            <div>
                {course && course.id}
                {course && course.name}
            </div>
            <input value={name} onChange={(event) => onChange(event.target.value)} />
            <button onClick={onClick}>search</button>
        </div>
    );
}

export default CourseSearch;