import './FormGroup.css'

import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface FormGroupProps {
    icon: IconProp
    input: JSX.Element
    error: JSX.Element
}

const FormGroup: React.FunctionComponent<FormGroupProps> = ({ icon, input, error }: FormGroupProps) => {

    return (
        <div className="mb-2">
            <div className="input-group">
                <div className="input-group-prepend">
                    <span className="input-group-text fix-form-icon-width"> <FontAwesomeIcon icon={icon} /> </span>
                </div>
                {input}
                {error}
            </div>
        </div>
    )
}

export default FormGroup;