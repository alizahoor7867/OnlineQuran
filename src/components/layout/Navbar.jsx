import { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Box,
  Container,
  useScrollTrigger,
  Slide,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import {
  Menu as MenuIcon,
  Close as CloseIcon,
  Home as HomeIcon,
  Info as InfoIcon,
  School as SchoolIcon,
  People as PeopleIcon,
  ContactMail as ContactIcon,
  Login as LoginIcon,
  PersonAdd as RegisterIcon,
  AutoStories as QuranIcon,
} from '@mui/icons-material';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { label: 'Home', path: '/', icon: <HomeIcon /> },
  { label: 'About', path: '/about', icon: <InfoIcon /> },
  { label: 'Classes', path: '/classes', icon: <SchoolIcon /> },
  { label: 'Teachers', path: '/teachers', icon: <PeopleIcon /> },
  { label: 'Contact', path: '/contact', icon: <ContactIcon /> },
];

function HideOnScroll({ children }) {
  const trigger = useScrollTrigger();
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  const drawer = (
    <Box
      sx={{
        width: 280,
        height: '100%',
        background: 'linear-gradient(135deg, #0D6E3F 0%, #1A237E 100%)',
        color: 'white',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Islamic Pattern Overlay */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.1,
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0L60 30L30 60L0 30z' fill='none' stroke='%23D4AF37' stroke-width='1'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
        }}
      />
      
      <Box sx={{ p: 3, position: 'relative', zIndex: 1 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <QuranIcon sx={{ fontSize: 32, color: '#D4AF37' }} />
            <Typography
              variant="h6"
              sx={{
                fontWeight: 700,
                background: 'linear-gradient(135deg, #D4AF37 0%, #E4C567 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              QuranLearn
            </Typography>
          </Box>
          <IconButton onClick={handleDrawerToggle} sx={{ color: 'white' }}>
            <CloseIcon />
          </IconButton>
        </Box>

        <List>
          {navItems.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <ListItem
                component={Link}
                to={item.path}
                onClick={handleDrawerToggle}
                sx={{
                  borderRadius: 2,
                  mb: 1,
                  backgroundColor: isActive(item.path) ? 'rgba(212, 175, 55, 0.2)' : 'transparent',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  },
                }}
              >
                <ListItemIcon sx={{ color: isActive(item.path) ? '#D4AF37' : 'rgba(255,255,255,0.8)', minWidth: 40 }}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.label}
                  sx={{
                    '& .MuiTypography-root': {
                      fontWeight: isActive(item.path) ? 600 : 400,
                      color: isActive(item.path) ? '#D4AF37' : 'white',
                    },
                  }}
                />
              </ListItem>
            </motion.div>
          ))}
        </List>

        <Box sx={{ mt: 4 }}>
          <Button
            component={Link}
            to="/login"
            onClick={handleDrawerToggle}
            fullWidth
            variant="outlined"
            startIcon={<LoginIcon />}
            sx={{
              mb: 2,
              color: 'white',
              borderColor: 'rgba(255,255,255,0.5)',
              '&:hover': {
                borderColor: '#D4AF37',
                backgroundColor: 'rgba(212, 175, 55, 0.1)',
              },
            }}
          >
            Login
          </Button>
          <Button
            component={Link}
            to="/register"
            onClick={handleDrawerToggle}
            fullWidth
            variant="contained"
            startIcon={<RegisterIcon />}
            sx={{
              background: 'linear-gradient(135deg, #D4AF37 0%, #E4C567 100%)',
              color: '#1A1A2E',
              fontWeight: 600,
              '&:hover': {
                background: 'linear-gradient(135deg, #E4C567 0%, #D4AF37 100%)',
              },
            }}
          >
            Register Now
          </Button>
        </Box>
      </Box>
    </Box>
  );

  return (
    <>
      <HideOnScroll>
        <AppBar
          position="fixed"
          sx={{
            background: scrolled
              ? 'rgba(255, 255, 255, 0.95)'
              : 'linear-gradient(135deg, #0D6E3F 0%, #1A237E 100%)',
            backdropFilter: scrolled ? 'blur(10px)' : 'none',
            boxShadow: scrolled ? '0 2px 20px rgba(0,0,0,0.1)' : '0 2px 10px rgba(0,0,0,0.2)',
            transition: 'all 0.3s ease',
          }}
        >
          <Container maxWidth="xl">
            <Toolbar sx={{ py: 1 }}>
              {/* Logo */}
              <Box
                component={Link}
                to="/"
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                  textDecoration: 'none',
                  flexGrow: { xs: 1, md: 0 },
                }}
              >
                <motion.div
                  whileHover={{ rotate: 10 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <QuranIcon
                    sx={{
                      fontSize: 40,
                      color: scrolled ? '#0D6E3F' : '#D4AF37',
                    }}
                  />
                </motion.div>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 700,
                    background: scrolled
                      ? 'linear-gradient(135deg, #0D6E3F 0%, #1A8B52 100%)'
                      : 'linear-gradient(135deg, #D4AF37 0%, #E4C567 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  QuranLearn
                </Typography>
              </Box>

              {/* Desktop Navigation */}
              {!isMobile && (
                <Box sx={{ display: 'flex', alignItems: 'center', mx: 'auto', gap: 1 }}>
                  {navItems.map((item) => (
                    <Button
                      key={item.label}
                      component={Link}
                      to={item.path}
                      sx={{
                        color: scrolled ? (isActive(item.path) ? '#0D6E3F' : '#1A1A2E') : 'white',
                        fontWeight: isActive(item.path) ? 600 : 500,
                        px: 2,
                        position: 'relative',
                        '&::after': {
                          content: '""',
                          position: 'absolute',
                          bottom: 6,
                          left: '50%',
                          transform: 'translateX(-50%)',
                          width: isActive(item.path) ? '60%' : '0%',
                          height: 3,
                          borderRadius: 2,
                          background: '#D4AF37',
                          transition: 'width 0.3s ease',
                        },
                        '&:hover::after': {
                          width: '60%',
                        },
                      }}
                    >
                      {item.label}
                    </Button>
                  ))}
                </Box>
              )}

              {/* Auth Buttons - Desktop */}
              {!isMobile && (
                <Box sx={{ display: 'flex', gap: 2 }}>
                  <Button
                    component={Link}
                    to="/login"
                    variant="outlined"
                    sx={{
                      borderColor: scrolled ? '#0D6E3F' : 'rgba(255,255,255,0.7)',
                      color: scrolled ? '#0D6E3F' : 'white',
                      borderWidth: 2,
                      '&:hover': {
                        borderWidth: 2,
                        borderColor: scrolled ? '#0D6E3F' : '#D4AF37',
                        backgroundColor: scrolled ? 'rgba(13, 110, 63, 0.05)' : 'rgba(255,255,255,0.1)',
                      },
                    }}
                  >
                    Login
                  </Button>
                  <Button
                    component={Link}
                    to="/register"
                    variant="contained"
                    sx={{
                      background: 'linear-gradient(135deg, #D4AF37 0%, #E4C567 100%)',
                      color: '#1A1A2E',
                      fontWeight: 600,
                      boxShadow: '0 4px 15px rgba(212, 175, 55, 0.3)',
                      '&:hover': {
                        background: 'linear-gradient(135deg, #E4C567 0%, #D4AF37 100%)',
                        boxShadow: '0 6px 20px rgba(212, 175, 55, 0.4)',
                      },
                    }}
                  >
                    Register Now
                  </Button>
                </Box>
              )}

              {/* Mobile Menu Button */}
              {isMobile && (
                <IconButton
                  onClick={handleDrawerToggle}
                  sx={{
                    color: scrolled ? '#0D6E3F' : 'white',
                  }}
                >
                  <MenuIcon sx={{ fontSize: 28 }} />
                </IconButton>
              )}
            </Toolbar>
          </Container>
        </AppBar>
      </HideOnScroll>

      {/* Mobile Drawer */}
      <AnimatePresence>
        <Drawer
          variant="temporary"
          anchor="right"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: 280,
              border: 'none',
            },
          }}
        >
          {drawer}
        </Drawer>
      </AnimatePresence>

      {/* Spacer for fixed navbar */}
      <Toolbar />
    </>
  );
};

export default Navbar;
