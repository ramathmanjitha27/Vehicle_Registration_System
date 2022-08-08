import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { Link, useNavigate } from 'react-router-dom';
import logo from './images/logoVehicle.jpg'
import Button from '@mui/material/Button';

const Header = () => {
    const navigate = useNavigate();

    const adminItems = [
        {
            text: 'Home',
            onClick: () => navigate('/'),
        },
        {
            text: 'Vehicles',
            onClick: () => navigate('/vehicles'),
        },
    ];

    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <AppBar position="static" style={{ background: '#053769' }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <img src={logo} alt="logo" sx={{ display: { xs: 'none', md: 'flex' }, mr: 1,  }}
                         style={{ width:"4.5%", paddingRight:"10px"}} />
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
                        VRS
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >

                                {adminItems.map((adminItem) => {
                                    const { text, onClick } = adminItem;
                                    return (
                                        <MenuItem key={text} onClick={onClick}>
                                            <Typography textAlign="center">{text}</Typography>
                                        </MenuItem>
                                    );
                                })
                                        }
                        </Menu>
                    </Box>
                    <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href=""
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        LOGO
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>

                        { adminItems.map((adminItem) => {
                                const { text, onClick } = adminItem;
                                return (
                                    <Button
                                        key={text}
                                        onClick={onClick}
                                        sx={{ my: 2, color: 'white', display: 'block' }}
                                    >
                                        {text}
                                    </Button>
                                );
                            })
                                    }
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default Header;
