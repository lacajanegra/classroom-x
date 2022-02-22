interface TitleProps {
    title: string,
    loading: boolean
}

const Title: React.FunctionComponent<TitleProps> = ({ title, loading }: TitleProps) => {

    return (
        <div>
            <h3><span>{title}</span>
                {loading && (
                    <span className="spinner-border spinner-border-sm"></span>
                )}
            </h3>
        </div>
    )
}

export default Title