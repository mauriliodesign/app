import styled from "@emotion/styled";
import Input from "../../components/Input";
import SignUp from "../../components/SignUp";

const StyledLoginContainer = styled.form`
    background: rgba(237, 246, 249, .2);
    max-width: 40.25rem;
    display: flex;
    flex-direction: column;
    padding: 2rem;
    align-items: center;
`;

const Login = () => {
    return (
        <StyledLoginContainer className="form">
            <Input label="Enter your email" variant="outlined" />
            <Input label="Set password" variant="outlined" />
            <Input label="Confirm password" variant="outlined" />
            <SignUp />
        </StyledLoginContainer>
    );
};

export default Login;
