interface TableContainerProps {
    elements: any[]
    header: JSX.Element
    body: JSX.Element[]
}

const TableContainer: React.FunctionComponent<TableContainerProps> = ({ elements, header, body }: TableContainerProps) => {

    return (
        < div >
            {elements && elements.length !== 0 &&
                <div className="table-responsive">
                    < table className='table table-sm table-striped'>
                        <thead>
                            {header}
                        </thead>
                        <tbody>
                            {body}
                        </tbody>
                    </table >
                </div>
            }
        </div >
    )
}

export default TableContainer;