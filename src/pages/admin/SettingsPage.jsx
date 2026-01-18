import { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Grid,
  TextField,
  Switch,
  FormControlLabel,
  Button,
  Divider,
  Avatar,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemSecondaryAction,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  useMediaQuery,
  useTheme,
  Tabs,
  Tab,
  IconButton,
  Alert,
} from '@mui/material';
import {
  Person,
  Notifications,
  Schedule,
  Payment,
  Security,
  Language,
  Palette,
  Save,
  PhotoCamera,
  Email,
  Phone,
  LocationOn,
} from '@mui/icons-material';
import { motion } from 'framer-motion';

const SettingsPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));
  const [activeTab, setActiveTab] = useState(0);
  const [saved, setSaved] = useState(false);

  const [settings, setSettings] = useState({
    // Profile
    name: 'Admin User',
    email: 'admin@quranlearn.com',
    phone: '+1 555-0000',
    location: 'New York, USA',
    // Notifications
    emailNotifications: true,
    bookingAlerts: true,
    studentMessages: true,
    weeklyReports: false,
    marketingEmails: false,
    // Schedule
    defaultClassDuration: 60,
    breakBetweenClasses: 15,
    workingDaysStart: 'Monday',
    workingDaysEnd: 'Friday',
    // System
    language: 'en',
    timezone: 'America/New_York',
    theme: 'light',
  });

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  const handleChange = (field, value) => {
    setSettings((prev) => ({ ...prev, [field]: value }));
  };

  const tabItems = [
    { label: 'Profile', icon: <Person /> },
    { label: 'Notifications', icon: <Notifications /> },
    { label: 'Schedule', icon: <Schedule /> },
    { label: 'System', icon: <Palette /> },
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 0:
        return (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
            <Card sx={{ borderRadius: 3 }}>
              <CardContent sx={{ p: { xs: 2, md: 4 } }}>
                <Typography variant="h6" fontWeight={700} gutterBottom>
                  Profile Information
                </Typography>
                <Typography color="text.secondary" sx={{ mb: 3 }}>
                  Update your personal information and profile settings.
                </Typography>

                {/* Avatar Section */}
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', sm: 'row' },
                    alignItems: { xs: 'center', sm: 'flex-start' },
                    gap: 3,
                    mb: 4,
                  }}
                >
                  <Box sx={{ position: 'relative' }}>
                    <Avatar
                      sx={{
                        width: 100,
                        height: 100,
                        backgroundColor: '#0D6E3F',
                        fontSize: '2.5rem',
                        fontWeight: 700,
                      }}
                    >
                      A
                    </Avatar>
                    <IconButton
                      size="small"
                      sx={{
                        position: 'absolute',
                        bottom: 0,
                        right: 0,
                        backgroundColor: '#D4AF37',
                        color: 'white',
                        '&:hover': { backgroundColor: '#B4942F' },
                      }}
                    >
                      <PhotoCamera fontSize="small" />
                    </IconButton>
                  </Box>
                  <Box sx={{ textAlign: { xs: 'center', sm: 'left' } }}>
                    <Typography variant="h6" fontWeight={700}>
                      {settings.name}
                    </Typography>
                    <Typography color="text.secondary">Administrator</Typography>
                    <Button
                      size="small"
                      sx={{ mt: 1, color: '#0D6E3F' }}
                    >
                      Change Avatar
                    </Button>
                  </Box>
                </Box>

                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Full Name"
                      value={settings.name}
                      onChange={(e) => handleChange('name', e.target.value)}
                      InputProps={{
                        startAdornment: <Person sx={{ mr: 1, color: '#0D6E3F' }} />,
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Email"
                      value={settings.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                      InputProps={{
                        startAdornment: <Email sx={{ mr: 1, color: '#0D6E3F' }} />,
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Phone"
                      value={settings.phone}
                      onChange={(e) => handleChange('phone', e.target.value)}
                      InputProps={{
                        startAdornment: <Phone sx={{ mr: 1, color: '#0D6E3F' }} />,
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Location"
                      value={settings.location}
                      onChange={(e) => handleChange('location', e.target.value)}
                      InputProps={{
                        startAdornment: <LocationOn sx={{ mr: 1, color: '#0D6E3F' }} />,
                      }}
                    />
                  </Grid>
                </Grid>

                <Divider sx={{ my: 4 }} />

                <Typography variant="h6" fontWeight={700} gutterBottom>
                  Security
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 2 }}>
                  <Button
                    variant="outlined"
                    startIcon={<Security />}
                    sx={{ borderColor: '#0D6E3F', color: '#0D6E3F' }}
                  >
                    Change Password
                  </Button>
                  <Button
                    variant="outlined"
                    startIcon={<Security />}
                    sx={{ borderColor: '#D4AF37', color: '#D4AF37' }}
                  >
                    Enable 2FA
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </motion.div>
        );

      case 1:
        return (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
            <Card sx={{ borderRadius: 3 }}>
              <CardContent sx={{ p: { xs: 2, md: 4 } }}>
                <Typography variant="h6" fontWeight={700} gutterBottom>
                  Notification Preferences
                </Typography>
                <Typography color="text.secondary" sx={{ mb: 3 }}>
                  Manage how you receive notifications and alerts.
                </Typography>

                <List>
                  {[
                    {
                      key: 'emailNotifications',
                      label: 'Email Notifications',
                      desc: 'Receive notifications via email',
                    },
                    {
                      key: 'bookingAlerts',
                      label: 'Booking Alerts',
                      desc: 'Get notified when new bookings are made',
                    },
                    {
                      key: 'studentMessages',
                      label: 'Student Messages',
                      desc: 'Receive messages from students and parents',
                    },
                    {
                      key: 'weeklyReports',
                      label: 'Weekly Reports',
                      desc: 'Receive weekly summaries of activity',
                    },
                    {
                      key: 'marketingEmails',
                      label: 'Marketing Emails',
                      desc: 'Receive promotional content and updates',
                    },
                  ].map((item, index) => (
                    <ListItem
                      key={item.key}
                      sx={{
                        px: 0,
                        borderBottom: index < 4 ? '1px solid #eee' : 'none',
                      }}
                    >
                      <ListItemIcon sx={{ minWidth: 40 }}>
                        <Notifications sx={{ color: '#0D6E3F' }} />
                      </ListItemIcon>
                      <ListItemText
                        primary={<Typography fontWeight={600}>{item.label}</Typography>}
                        secondary={item.desc}
                      />
                      <ListItemSecondaryAction>
                        <Switch
                          checked={settings[item.key]}
                          onChange={(e) => handleChange(item.key, e.target.checked)}
                          sx={{
                            '& .MuiSwitch-switchBase.Mui-checked': {
                              color: '#0D6E3F',
                            },
                            '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                              backgroundColor: '#0D6E3F',
                            },
                          }}
                        />
                      </ListItemSecondaryAction>
                    </ListItem>
                  ))}
                </List>
              </CardContent>
            </Card>
          </motion.div>
        );

      case 2:
        return (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
            <Card sx={{ borderRadius: 3 }}>
              <CardContent sx={{ p: { xs: 2, md: 4 } }}>
                <Typography variant="h6" fontWeight={700} gutterBottom>
                  Schedule Settings
                </Typography>
                <Typography color="text.secondary" sx={{ mb: 3 }}>
                  Configure default class scheduling options.
                </Typography>

                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Default Class Duration (minutes)"
                      type="number"
                      value={settings.defaultClassDuration}
                      onChange={(e) =>
                        handleChange('defaultClassDuration', parseInt(e.target.value))
                      }
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Break Between Classes (minutes)"
                      type="number"
                      value={settings.breakBetweenClasses}
                      onChange={(e) =>
                        handleChange('breakBetweenClasses', parseInt(e.target.value))
                      }
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <FormControl fullWidth>
                      <InputLabel>Working Days Start</InputLabel>
                      <Select
                        value={settings.workingDaysStart}
                        label="Working Days Start"
                        onChange={(e) => handleChange('workingDaysStart', e.target.value)}
                      >
                        {['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'].map((day) => (
                          <MenuItem key={day} value={day}>
                            {day}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <FormControl fullWidth>
                      <InputLabel>Working Days End</InputLabel>
                      <Select
                        value={settings.workingDaysEnd}
                        label="Working Days End"
                        onChange={(e) => handleChange('workingDaysEnd', e.target.value)}
                      >
                        {['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'].map((day) => (
                          <MenuItem key={day} value={day}>
                            {day}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Grid>
                </Grid>

                <Divider sx={{ my: 4 }} />

                <Typography variant="h6" fontWeight={700} gutterBottom>
                  Payment Settings
                </Typography>
                <Alert severity="info" sx={{ mb: 2 }}>
                  Payment gateway configuration coming soon. Contact support for manual setup.
                </Alert>
                <Button
                  variant="outlined"
                  startIcon={<Payment />}
                  sx={{ borderColor: '#0D6E3F', color: '#0D6E3F' }}
                >
                  Configure Payment Gateway
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        );

      case 3:
        return (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
            <Card sx={{ borderRadius: 3 }}>
              <CardContent sx={{ p: { xs: 2, md: 4 } }}>
                <Typography variant="h6" fontWeight={700} gutterBottom>
                  System Preferences
                </Typography>
                <Typography color="text.secondary" sx={{ mb: 3 }}>
                  Customize your system settings and preferences.
                </Typography>

                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <FormControl fullWidth>
                      <InputLabel>Language</InputLabel>
                      <Select
                        value={settings.language}
                        label="Language"
                        onChange={(e) => handleChange('language', e.target.value)}
                        startAdornment={<Language sx={{ mr: 1, color: '#0D6E3F' }} />}
                      >
                        <MenuItem value="en">English</MenuItem>
                        <MenuItem value="ar">العربية (Arabic)</MenuItem>
                        <MenuItem value="ur">اردو (Urdu)</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <FormControl fullWidth>
                      <InputLabel>Timezone</InputLabel>
                      <Select
                        value={settings.timezone}
                        label="Timezone"
                        onChange={(e) => handleChange('timezone', e.target.value)}
                      >
                        <MenuItem value="America/New_York">Eastern Time (ET)</MenuItem>
                        <MenuItem value="America/Chicago">Central Time (CT)</MenuItem>
                        <MenuItem value="America/Denver">Mountain Time (MT)</MenuItem>
                        <MenuItem value="America/Los_Angeles">Pacific Time (PT)</MenuItem>
                        <MenuItem value="Europe/London">London (GMT)</MenuItem>
                        <MenuItem value="Asia/Dubai">Dubai (GST)</MenuItem>
                        <MenuItem value="Asia/Karachi">Pakistan (PKT)</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <FormControl fullWidth>
                      <InputLabel>Theme</InputLabel>
                      <Select
                        value={settings.theme}
                        label="Theme"
                        onChange={(e) => handleChange('theme', e.target.value)}
                        startAdornment={<Palette sx={{ mr: 1, color: '#0D6E3F' }} />}
                      >
                        <MenuItem value="light">Light Mode</MenuItem>
                        <MenuItem value="dark">Dark Mode</MenuItem>
                        <MenuItem value="system">System Default</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </motion.div>
        );

      default:
        return null;
    }
  };

  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: '#FAFAF5', py: { xs: 2, md: 4 } }}>
      <Container maxWidth="lg">
        {/* Header */}
        <Box sx={{ mb: 4 }}>
          <Typography
            variant={isMobile ? 'h5' : 'h4'}
            sx={{ fontWeight: 700, color: '#1A1A2E', mb: 1 }}
          >
            Settings
          </Typography>
          <Typography color="text.secondary">
            Manage your account settings and preferences
          </Typography>
        </Box>

        {saved && (
          <Alert
            severity="success"
            sx={{ mb: 3, borderRadius: 2 }}
            onClose={() => setSaved(false)}
          >
            Settings saved successfully!
          </Alert>
        )}

        <Grid container spacing={3}>
          {/* Sidebar - Desktop */}
          {!isTablet && (
            <Grid item md={3}>
              <Card sx={{ borderRadius: 3, position: 'sticky', top: 20 }}>
                <List sx={{ py: 1 }}>
                  {tabItems.map((item, index) => (
                    <ListItem
                      key={item.label}
                      button
                      onClick={() => setActiveTab(index)}
                      sx={{
                        borderRadius: 2,
                        mx: 1,
                        mb: 0.5,
                        backgroundColor:
                          activeTab === index ? 'rgba(13, 110, 63, 0.1)' : 'transparent',
                        '&:hover': {
                          backgroundColor:
                            activeTab === index
                              ? 'rgba(13, 110, 63, 0.15)'
                              : 'rgba(0,0,0,0.04)',
                        },
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          color: activeTab === index ? '#0D6E3F' : 'text.secondary',
                          minWidth: 40,
                        }}
                      >
                        {item.icon}
                      </ListItemIcon>
                      <ListItemText
                        primary={item.label}
                        sx={{
                          '& .MuiTypography-root': {
                            fontWeight: activeTab === index ? 600 : 400,
                            color: activeTab === index ? '#0D6E3F' : 'inherit',
                          },
                        }}
                      />
                    </ListItem>
                  ))}
                </List>
              </Card>
            </Grid>
          )}

          {/* Main Content */}
          <Grid item xs={12} md={9}>
            {/* Mobile/Tablet Tabs */}
            {isTablet && (
              <Card sx={{ borderRadius: 3, mb: 3 }}>
                <Tabs
                  value={activeTab}
                  onChange={(e, v) => setActiveTab(v)}
                  variant={isMobile ? 'scrollable' : 'fullWidth'}
                  scrollButtons="auto"
                  sx={{
                    '& .MuiTab-root': {
                      minHeight: 60,
                    },
                    '& .Mui-selected': {
                      color: '#0D6E3F !important',
                    },
                    '& .MuiTabs-indicator': {
                      backgroundColor: '#0D6E3F',
                    },
                  }}
                >
                  {tabItems.map((item) => (
                    <Tab
                      key={item.label}
                      icon={item.icon}
                      label={isMobile ? '' : item.label}
                      iconPosition="start"
                    />
                  ))}
                </Tabs>
              </Card>
            )}

            {renderTabContent()}

            {/* Save Button */}
            <Box
              sx={{
                mt: 3,
                display: 'flex',
                justifyContent: { xs: 'stretch', sm: 'flex-end' },
              }}
            >
              <Button
                variant="contained"
                startIcon={<Save />}
                onClick={handleSave}
                fullWidth={isMobile}
                sx={{
                  py: 1.5,
                  px: 4,
                  background: 'linear-gradient(135deg, #0D6E3F 0%, #1A8B52 100%)',
                  boxShadow: '0 4px 15px rgba(13, 110, 63, 0.3)',
                }}
              >
                Save Changes
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default SettingsPage;
