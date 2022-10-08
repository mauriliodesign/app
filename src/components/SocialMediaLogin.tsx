import { Button } from "@mui/material"

const SocialMediaLogin = (platform: string) => {
    return (
        <Button sx={{
            minWidth: '21.813rem',
            border: '1px solid #608794',
            background: 'rgba(237, 246, 249, 0.2)',
            borderRadius: '16px',
            minHeight: '3.25rem'
        }}>Continue with {platform}</Button>
    )
}

export default SocialMediaLogin;
