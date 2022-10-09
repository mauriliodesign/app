import { Button } from "@mui/material";
import { FC } from "react";

type SocialMediaLoginProps = {
    platform: string;
};

const SocialMediaLogin: FC<SocialMediaLoginProps> = ({ platform }) => {
    return (
        <Button
            sx={{
                minWidth: "21.813rem",
                border: "1px solid #608794",
                background: "rgba(237, 246, 249, 0.2)",
                borderRadius: "16px",
                minHeight: "3.25rem",
                textTransform: "none"
            }}
        >
            Continue with {platform}
        </Button>
    );
};

export default SocialMediaLogin;
