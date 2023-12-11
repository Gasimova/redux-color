import { AppBar, Box, Button, Container, Link, Toolbar, Typography } from '@mui/material'
import AdbIcon from '@mui/icons-material/Adb';
import { useNavigate } from 'react-router-dom';

export const Header = () => {
    const navigate = useNavigate()
    return (

        <AppBar position="static" style={{ backgroundColor: "black" }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        onClick={()=>navigate('/')}
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        LOGO
                    </Typography>

                    <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center', justifyContent: "center" }}>
                        <Typography sx={{ minWidth: 100 }}><Link className='link_style' component='button' onClick={()=>navigate('/')}>Home</Link></Typography>
                        <Typography sx={{ minWidth: 100 }}><Link component='button' className='link_style' onClick={()=>navigate('/create')}>Create</Link></Typography>
                    </Box>

                </Toolbar>
            </Container>
        </AppBar>
    )
}
