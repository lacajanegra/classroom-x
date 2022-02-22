interface MissingElementsProps {
    elements: any[]
    message: string
}

const MissingElements: React.FunctionComponent<MissingElementsProps> = ({ elements, message }: MissingElementsProps) => {

    return (
        < div >
            {elements && elements.length === 0 && <span>{message}</span>}
        </div>
    )
}

export default MissingElements