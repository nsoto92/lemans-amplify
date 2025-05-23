"use client";

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import MenuIcon from '@mui/icons-material/Menu';
import { Phone } from '@mui/icons-material';
import Image from 'next/image';
import locale from '@/locales/es';

// const pages = [
//   { name: locale.appBar.pages.services.name, href: locale.appBar.pages.services.href },
// ];

function ResponsiveAppBar() {
  const router = useRouter();
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const pathname = usePathname();
  const isLoginPage = pathname === '/login';

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleNavigation = (href: string) => {
    router.push(href);
    handleCloseNavMenu();
  };

  return (
    !isLoginPage && (
      <AppBar 
        position="static" 
        sx={{ 
          backgroundColor: 'white',
          boxShadow: '0 2px 20px rgba(0,0,0,0.1)',
          borderBottom: '1px solid rgba(0,0,0,0.05)'
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ justifyContent: 'space-between', py: 1 }}>
            {/* Logo Section */}
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Image
                src="/logo.png"
                alt="LeMans Logo"
                height={50}
                width={50}
                style={{ marginRight: '12px' }}
              />
              <Typography
                variant="h6"
                component="a"
                href="/"
                sx={{
                  fontFamily: 'Inter',
                  fontWeight: 700,
                  fontSize: '1.5rem',
                  color: 'primary.main',
                  textDecoration: 'none',
                  letterSpacing: '-0.02em'
                }}
              >
                LeMans
              </Typography>
            </Box>

            {/* Desktop Pages Navigation */}
            {/* <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 1 }}>
              {pages.map((page) => (
                <Button
                  key={page.name}
                  onClick={() => handleNavigation(page.href)}
                  sx={{
                    color: 'text.primary',
                    fontWeight: 500,
                    px: 2,
                    py: 1,
                    borderRadius: 2,
                    '&:hover': {
                      backgroundColor: 'grey.100'
                    }
                  }}
                >
                  {page.name}
                </Button>
              ))}
            </Box> */}

            {/* CTA Section */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', color: 'text.secondary' }}>
                <Phone sx={{ fontSize: 18, mr: 1 }} />
                <Typography variant="body2" fontWeight={500}>
                  (000) 000-0000
                </Typography>
              </Box>
              <Button
                variant="contained"
                href="/services"
                sx={{
                  px: 3,
                  background: 'linear-gradient(135deg, #FFD700 0%, #B8860B 100%)',
                  color: 'black',
                  '&:hover': {
                    background: 'linear-gradient(135deg, #B8860B 0%, #FFD700 100%)',
                  }
                }}
              >
                {locale.appBar.pages.services.name}
              </Button>
            </Box>

            {/* Mobile Menu */}
            <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                onClick={handleOpenNavMenu}
                color="inherit"
                sx={{ color: 'primary.main' }}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                anchorEl={anchorElNav}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{ display: { xs: 'block', md: 'none' } }}
              >
                {/* {pages.map((page) => (
                  <MenuItem key={page.name} onClick={() => handleNavigation(page.href)}>
                    <Typography textAlign="center">{page.name}</Typography>
                  </MenuItem>
                ))} */}
                <MenuItem>
                  <Button variant="contained" fullWidth href="/services">
                    {locale.appBar.pages.services.name}
                  </Button>
                </MenuItem>
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    )
  );
}

export default ResponsiveAppBar;
