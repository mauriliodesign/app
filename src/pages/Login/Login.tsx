import Input from "../../components/Input";

const Login = () => {
    return (
        <div>
            <Input label="Enter your email" variant="outlined" />
            <Input label="Set password" variant="outlined" />
            <Input label="Confirm password" variant="outlined" />
        </div>
    );
};

export default Login;
