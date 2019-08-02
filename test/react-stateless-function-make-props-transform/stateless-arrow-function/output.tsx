type HelloProps = {
    message?: string,
};
const Hello: React.FunctionComponent<HelloProps> = ({ message }) => {
    return <div>hello {message}</div>;
};
Hello.propTypes = {
    message: PropTypes.string,
};
