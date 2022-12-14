import { FC } from "react";

type TitleProps = {
    title: string
};

const Title: FC<TitleProps> = ({title}) => {
    return (
        <h1>{title}</h1>
    );
};

export default Title;
