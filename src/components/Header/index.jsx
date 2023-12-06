import { AppBar, Box, Container, Link, Toolbar, Typography } from '@mui/material'
import AdbIcon from '@mui/icons-material/Adb';

export const Header = () => {
    return (

        <AppBar position="static" style={{ backgroundColor: "black" }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
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
                        <Typography sx={{ minWidth: 100 }}><Link href="/" className='link_style'>Home</Link></Typography>
                        <Typography sx={{ minWidth: 100 }}><Link href="/create" className='link_style'>Create</Link></Typography>
                    </Box>

                </Toolbar>
            </Container>
        </AppBar>
    )
}
