type HelloProps = {
    message?: string,
};
const Hello: React.FunctionComponent<HelloProps> = ({ message }) => {
    return <div>hello {message}</div>;
};
