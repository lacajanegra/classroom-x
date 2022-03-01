import TeacherModel from '../../model/teacher.model';
import TableContainer from '../common/TableContainer';

interface TeachersProps {
    teachers: TeacherModel[]
}

const Teachers: React.FunctionComponent<TeachersProps> = ({ teachers }: TeachersProps) => {

    return (
        <TableContainer
            elements={teachers}
            header={<tr>
                <th scope="col">Nombre</th>
                <th scope="col">Correo</th>
            </tr>
            }
            body={teachers.map((teacher) => (
                <tr key={teacher.id} >
                    <td>{teacher.name}</td>
                    <td>{teacher.email}</td>
                </tr>
            ))}
        />
    )
}

export default Teachers;