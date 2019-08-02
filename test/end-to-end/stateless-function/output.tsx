type HelloProps = {
    message?: string,
};
export const Hello: React.FunctionComponent<HelloProps> = ({ message }) => {
    return <div>hello {message}</div>;
};
