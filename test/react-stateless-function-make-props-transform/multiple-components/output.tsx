type HelloProps = {
    message?: string,
};
const Hello: React.FunctionComponent<HelloProps> = ({ message }) => {
    return <div>hello {message}</div>;
};
type HeyProps = {
    name: string,
};
const Hey: React.FunctionComponent<HeyProps> = ({ name }) => {
    return <div>hey, {name}</div>;
};
Hey.propTypes = {
    name: PropTypes.string.isRequired,
};
Hello.propTypes = {
    message: PropTypes.string,
};
