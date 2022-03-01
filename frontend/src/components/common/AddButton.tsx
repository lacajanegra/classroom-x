interface AddButtonProps {
    children: JSX.Element
}

const AddButton: React.FunctionComponent<AddButtonProps> = ({ children }: AddButtonProps) => {

    return (
        <div className="d-flex flex-row-reverse mb-2">
            {children}
        </div >
    )

}

export default AddButton