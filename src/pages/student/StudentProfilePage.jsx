import { useState } from 'react';
import { Box, Container, Typography, Card, CardContent, Grid, TextField, Button, Avatar, IconButton, InputAdornment, Divider, Switch, FormControlLabel, Snackbar, Alert } from '@mui/material';
import { Person, Email, Phone, Lock, Visibility, VisibilityOff, CameraAlt, Save, Notifications, DarkMode } from '@mui/icons-material';
import { motion } from 'framer-motion';

const StudentProfilePage = () => {
  const [profile, setProfile] = useState({ firstName: 'Ahmed', lastName: 'Khan', email: 'ahmed.khan@email.com', phone: '+1 (555) 123-4567', country: 'United States', timezone: 'EST (UTC-5)' });
  const [showPassword, setShowPassword] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSave = () => setShowSuccess(true);

  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: '#FAFAF5', py: 4 }}>
      <Container maxWidth="lg">
        <Typography variant="h4" sx={{ fontWeight: 700, mb: 4, color: '#1A1A2E' }}>Profile Settings</Typography>

        <Grid container spacing={4}>
          {/* Profile Card */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Card sx={{ borderRadius: 3, textAlign: 'center' }}>
              <CardContent sx={{ p: 4 }}>
                <Box sx={{ position: 'relative', display: 'inline-block', mb: 3 }}>
                  <Avatar sx={{ width: 120, height: 120, fontSize: '3rem', background: 'linear-gradient(135deg, #0D6E3F 0%, #1A237E 100%)', border: '4px solid #D4AF37' }}>AK</Avatar>
                  <IconButton sx={{ position: 'absolute', bottom: 0, right: 0, backgroundColor: '#D4AF37', '&:hover': { backgroundColor: '#E4C567' } }}><CameraAlt sx={{ color: 'white', fontSize: 18 }} /></IconButton>
                </Box>
                <Typography variant="h5" sx={{ fontWeight: 700 }}>{profile.firstName} {profile.lastName}</Typography>
                <Typography color="text.secondary" sx={{ mb: 2 }}>Student</Typography>
                <Divider sx={{ my: 2 }} />
                <Box sx={{ textAlign: 'left' }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}><Typography color="text.secondary">Email</Typography><Typography fontWeight={500}>{profile.email}</Typography></Box>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}><Typography color="text.secondary">Phone</Typography><Typography fontWeight={500}>{profile.phone}</Typography></Box>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between' }}><Typography color="text.secondary">Joined</Typography><Typography fontWeight={500}>Jan 2024</Typography></Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>

          {/* Edit Form */}
          <Grid size={{ xs: 12, md: 8 }}>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <Card sx={{ borderRadius: 3, mb: 4 }}>
                <CardContent sx={{ p: 4 }}>
                  <Typography variant="h6" sx={{ fontWeight: 700, mb: 3 }}>Personal Information</Typography>
                  <Grid container spacing={3}>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField fullWidth label="First Name" value={profile.firstName} onChange={(e) => setProfile({ ...profile, firstName: e.target.value })}
                        InputProps={{ startAdornment: <InputAdornment position="start"><Person sx={{ color: '#6C757D' }} /></InputAdornment> }} />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField fullWidth label="Last Name" value={profile.lastName} onChange={(e) => setProfile({ ...profile, lastName: e.target.value })} />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField fullWidth label="Email" value={profile.email} onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                        InputProps={{ startAdornment: <InputAdornment position="start"><Email sx={{ color: '#6C757D' }} /></InputAdornment> }} />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField fullWidth label="Phone" value={profile.phone} onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
                        InputProps={{ startAdornment: <InputAdornment position="start"><Phone sx={{ color: '#6C757D' }} /></InputAdornment> }} />
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>

              <Card sx={{ borderRadius: 3, mb: 4 }}>
                <CardContent sx={{ p: 4 }}>
                  <Typography variant="h6" sx={{ fontWeight: 700, mb: 3 }}>Change Password</Typography>
                  <Grid container spacing={3}>
                    <Grid size={{ xs: 12 }}>
                      <TextField fullWidth label="Current Password" type={showPassword ? 'text' : 'password'}
                        InputProps={{
                          startAdornment: <InputAdornment position="start"><Lock sx={{ color: '#6C757D' }} /></InputAdornment>,
                          endAdornment: <InputAdornment position="end"><IconButton onClick={() => setShowPassword(!showPassword)}>{showPassword ? <VisibilityOff /> : <Visibility />}</IconButton></InputAdornment>
                        }} />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField fullWidth label="New Password" type="password" />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField fullWidth label="Confirm New Password" type="password" />
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>

              <Card sx={{ borderRadius: 3, mb: 4 }}>
                <CardContent sx={{ p: 4 }}>
                  <Typography variant="h6" sx={{ fontWeight: 700, mb: 3 }}>Preferences</Typography>
                  <FormControlLabel control={<Switch defaultChecked sx={{ '& .Mui-checked': { color: '#0D6E3F' }, '& .Mui-checked + .MuiSwitch-track': { backgroundColor: '#0D6E3F' } }} />} label="Email notifications for class reminders" />
                  <FormControlLabel control={<Switch defaultChecked sx={{ '& .Mui-checked': { color: '#0D6E3F' }, '& .Mui-checked + .MuiSwitch-track': { backgroundColor: '#0D6E3F' } }} />} label="SMS notifications for class reminders" />
                  <FormControlLabel control={<Switch sx={{ '& .Mui-checked': { color: '#0D6E3F' }, '& .Mui-checked + .MuiSwitch-track': { backgroundColor: '#0D6E3F' } }} />} label="Marketing emails and updates" />
                </CardContent>
              </Card>

              <Button variant="contained" size="large" startIcon={<Save />} onClick={handleSave} sx={{ px: 4, background: 'linear-gradient(135deg, #0D6E3F 0%, #1A8B52 100%)', fontWeight: 600 }}>Save Changes</Button>
            </motion.div>
          </Grid>
        </Grid>

        <Snackbar open={showSuccess} autoHideDuration={4000} onClose={() => setShowSuccess(false)} anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}>
          <Alert severity="success" onClose={() => setShowSuccess(false)}>Profile updated successfully!</Alert>
        </Snackbar>
      </Container>
    </Box>
  );
};

export default StudentProfilePage;
