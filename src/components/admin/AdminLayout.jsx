import { useState } from 'react';
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  IconButton,
  Typography,
  Avatar,
  Divider,
  useMediaQuery,
  useTheme,
  AppBar,
  Toolbar,
  Tooltip,
} from '@mui/material';
import {
  Dashboard,
  School,
  People,
  Person,
  CalendarMonth,
  Settings,
  Logout,
  Menu as MenuIcon,
  ChevronLeft,
  AutoStories,
} from '@mui/icons-material';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const drawerWidth = 280;
const collapsedWidth = 80;

const menuItems = [
  { label: 'Dashboard', path: '/admin', icon: <Dashboard /> },
  { label: 'Classes', path: '/admin/classes', icon: <School /> },
  { label: 'Students', path: '/admin/students', icon: <People /> },
  { label: 'Teachers', path: '/admin/teachers', icon: <Person /> },
  { label: 'Bookings', path: '/admin/bookings', icon: <CalendarMonth /> },
  { label: 'Settings', path: '/admin/settings', icon: <Settings /> },
];

const AdminLayout = ({ children }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isTablet = useMediaQuery(theme.breakpoints.down('lg'));
  const [mobileOpen, setMobileOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(isTablet);
  const location = useLocation();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const isActive = (path) => {
    if (path === '/admin') {
      return location.pathname === '/admin' || location.pathname === '/admin/dashboard';
    }
    return location.pathname === path;
  };

  const currentDrawerWidth = collapsed && !isMobile ? collapsedWidth : drawerWidth;

  const drawerContent = (
    <Box
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        background: 'linear-gradient(180deg, #0D6E3F 0%, #1A237E 100%)',
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
          opacity: 0.08,
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0L60 30L30 60L0 30z' fill='none' stroke='%23D4AF37' stroke-width='1'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          pointerEvents: 'none',
        }}
      />

      {/* Logo Section */}
      <Box
        sx={{
          p: collapsed && !isMobile ? 2 : 3,
          display: 'flex',
          alignItems: 'center',
          justifyContent: collapsed && !isMobile ? 'center' : 'space-between',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <AutoStories sx={{ fontSize: 32, color: '#D4AF37' }} />
          <AnimatePresence>
            {(!collapsed || isMobile) && (
              <motion.div
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: 'auto' }}
                exit={{ opacity: 0, width: 0 }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 700,
                    background: 'linear-gradient(135deg, #D4AF37 0%, #E4C567 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    whiteSpace: 'nowrap',
                  }}
                >
                  Admin Panel
                </Typography>
              </motion.div>
            )}
          </AnimatePresence>
        </Box>
        {!isMobile && (
          <IconButton
            onClick={() => setCollapsed(!collapsed)}
            sx={{
              color: 'white',
              backgroundColor: 'rgba(255,255,255,0.1)',
              '&:hover': { backgroundColor: 'rgba(255,255,255,0.2)' },
              display: collapsed ? 'none' : 'flex',
            }}
            size="small"
          >
            <ChevronLeft />
          </IconButton>
        )}
      </Box>

      <Divider sx={{ borderColor: 'rgba(255,255,255,0.1)' }} />

      {/* Navigation */}
      <List sx={{ flex: 1, px: collapsed && !isMobile ? 1 : 2, py: 2 }}>
        {menuItems.map((item, index) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.05 }}
          >
            <Tooltip title={collapsed && !isMobile ? item.label : ''} placement="right">
              <ListItem disablePadding sx={{ mb: 0.5 }}>
                <ListItemButton
                  component={Link}
                  to={item.path}
                  onClick={isMobile ? handleDrawerToggle : undefined}
                  sx={{
                    borderRadius: 2,
                    minHeight: 48,
                    justifyContent: collapsed && !isMobile ? 'center' : 'flex-start',
                    px: collapsed && !isMobile ? 2 : 2.5,
                    backgroundColor: isActive(item.path)
                      ? 'rgba(212, 175, 55, 0.25)'
                      : 'transparent',
                    border: isActive(item.path)
                      ? '1px solid rgba(212, 175, 55, 0.4)'
                      : '1px solid transparent',
                    '&:hover': {
                      backgroundColor: isActive(item.path)
                        ? 'rgba(212, 175, 55, 0.3)'
                        : 'rgba(255,255,255,0.1)',
                    },
                  }}
                >
                  <ListItemIcon
                    sx={{
                      color: isActive(item.path) ? '#D4AF37' : 'rgba(255,255,255,0.8)',
                      minWidth: collapsed && !isMobile ? 0 : 45,
                      justifyContent: 'center',
                    }}
                  >
                    {item.icon}
                  </ListItemIcon>
                  <AnimatePresence>
                    {(!collapsed || isMobile) && (
                      <motion.div
                        initial={{ opacity: 0, width: 0 }}
                        animate={{ opacity: 1, width: 'auto' }}
                        exit={{ opacity: 0, width: 0 }}
                      >
                        <ListItemText
                          primary={item.label}
                          sx={{
                            '& .MuiTypography-root': {
                              fontWeight: isActive(item.path) ? 600 : 400,
                              color: isActive(item.path) ? '#D4AF37' : 'white',
                              whiteSpace: 'nowrap',
                            },
                          }}
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </ListItemButton>
              </ListItem>
            </Tooltip>
          </motion.div>
        ))}
      </List>

      <Divider sx={{ borderColor: 'rgba(255,255,255,0.1)' }} />

      {/* User Profile */}
      <Box
        sx={{
          p: collapsed && !isMobile ? 2 : 3,
          display: 'flex',
          alignItems: 'center',
          gap: 2,
          justifyContent: collapsed && !isMobile ? 'center' : 'flex-start',
        }}
      >
        <Avatar
          sx={{
            width: 40,
            height: 40,
            backgroundColor: '#D4AF37',
            color: '#1A1A2E',
            fontWeight: 700,
          }}
        >
          A
        </Avatar>
        <AnimatePresence>
          {(!collapsed || isMobile) && (
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: 'auto' }}
              exit={{ opacity: 0, width: 0 }}
              style={{ flex: 1, overflow: 'hidden' }}
            >
              <Typography
                variant="body2"
                sx={{ fontWeight: 600, color: 'white', whiteSpace: 'nowrap' }}
              >
                Admin User
              </Typography>
              <Typography
                variant="caption"
                sx={{ color: 'rgba(255,255,255,0.6)', whiteSpace: 'nowrap' }}
              >
                admin@quranlearn.com
              </Typography>
            </motion.div>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {(!collapsed || isMobile) && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <IconButton size="small" sx={{ color: 'rgba(255,255,255,0.6)' }}>
                <Logout fontSize="small" />
              </IconButton>
            </motion.div>
          )}
        </AnimatePresence>
      </Box>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh' }}>
      {/* Mobile AppBar */}
      {isMobile && (
        <AppBar
          position="fixed"
          sx={{
            background: 'linear-gradient(135deg, #0D6E3F 0%, #1A237E 100%)',
            boxShadow: '0 2px 10px rgba(0,0,0,0.15)',
          }}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <AutoStories sx={{ fontSize: 28, color: '#D4AF37', mr: 1 }} />
            <Typography
              variant="h6"
              sx={{
                fontWeight: 700,
                background: 'linear-gradient(135deg, #D4AF37 0%, #E4C567 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Admin Panel
            </Typography>
          </Toolbar>
        </AppBar>
      )}

      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            border: 'none',
          },
        }}
      >
        {drawerContent}
      </Drawer>

      {/* Desktop Drawer */}
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: 'none', md: 'block' },
          '& .MuiDrawer-paper': {
            width: currentDrawerWidth,
            border: 'none',
            transition: 'width 0.3s ease',
            overflowX: 'hidden',
          },
        }}
        open
      >
        {drawerContent}
      </Drawer>

      {/* Main Content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          width: { xs: '100%', md: `calc(100% - ${currentDrawerWidth}px)` },
          minHeight: '100vh',
          backgroundColor: '#FAFAF5',
          transition: 'width 0.3s ease, margin 0.3s ease',
          mt: { xs: 8, md: 0 },
        }}
      >
        {/* Expand button when collapsed - desktop only */}
        {collapsed && !isMobile && (
          <IconButton
            onClick={() => setCollapsed(false)}
            sx={{
              position: 'fixed',
              left: collapsedWidth - 15,
              top: 20,
              zIndex: 1200,
              backgroundColor: '#0D6E3F',
              color: 'white',
              width: 30,
              height: 30,
              '&:hover': { backgroundColor: '#1A8B52' },
              boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
            }}
          >
            <MenuIcon sx={{ fontSize: 18 }} />
          </IconButton>
        )}
        {children}
      </Box>
    </Box>
  );
};

export default AdminLayout;
