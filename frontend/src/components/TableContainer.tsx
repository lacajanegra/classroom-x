interface TableContainerProps {
    elements: any[]
    children: JSX.Element
}

const TableContainer: React.FunctionComponent<TableContainerProps> = ({ elements, children }: TableContainerProps) => {

    return (
        < div >
            {elements && elements.length !== 0 &&
                <div className="table-responsive">
                    <div>
                        {children}
                    </div>
                </div>
            }
        </div >
    )
}

export default TableContainer;