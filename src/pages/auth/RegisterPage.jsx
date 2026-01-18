import { useState } from 'react';
import { Box, Container, Typography, TextField, Button, Card, CardContent, Stepper, Step, StepLabel, Grid, FormControl, InputLabel, Select, MenuItem, IconButton, InputAdornment, Link as MuiLink } from '@mui/material';
import { Visibility, VisibilityOff, Person, Email, Lock, Phone, School, ArrowForward, ArrowBack, AutoStories } from '@mui/icons-material';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const steps = ['Personal Info', 'Contact Details', 'Account Setup'];

const RegisterPage = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '', phone: '', country: '', course: '', password: '', confirmPassword: '' });
  const navigate = useNavigate();

  const handleNext = () => setActiveStep((prev) => prev + 1);
  const handleBack = () => setActiveStep((prev) => prev - 1);
  const handleSubmit = (e) => { e.preventDefault(); navigate('/student/dashboard'); };

  const updateForm = (field, value) => setFormData({ ...formData, [field]: value });

  return (
    <Box sx={{ minHeight: '100vh', py: 8, background: 'linear-gradient(135deg, rgba(13, 110, 63, 0.05) 0%, rgba(26, 35, 126, 0.05) 100%)' }} className="geometric-pattern">
      <Container maxWidth="md">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <Card sx={{ borderRadius: 4, overflow: 'hidden', boxShadow: '0 20px 60px rgba(0,0,0,0.1)' }}>
            <Box sx={{ p: 4, background: 'linear-gradient(135deg, #0D6E3F 0%, #1A237E 100%)', textAlign: 'center' }}>
              <AutoStories sx={{ fontSize: 50, color: '#D4AF37', mb: 2 }} />
              <Typography variant="h4" sx={{ color: 'white', fontWeight: 700 }}>Create Account</Typography>
              <Typography sx={{ color: 'rgba(255,255,255,0.8)', mt: 1 }}>Start your Quran learning journey today</Typography>
            </Box>

            <CardContent sx={{ p: 4 }}>
              <Stepper activeStep={activeStep} sx={{ mb: 4 }}>
                {steps.map((label) => (
                  <Step key={label}><StepLabel>{label}</StepLabel></Step>
                ))}
              </Stepper>

              <form onSubmit={handleSubmit}>
                {activeStep === 0 && (
                  <Grid container spacing={3}>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField fullWidth label="First Name" value={formData.firstName} onChange={(e) => updateForm('firstName', e.target.value)}
                        InputProps={{ startAdornment: <InputAdornment position="start"><Person sx={{ color: '#6C757D' }} /></InputAdornment> }} required />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField fullWidth label="Last Name" value={formData.lastName} onChange={(e) => updateForm('lastName', e.target.value)} required />
                    </Grid>
                    <Grid size={12}>
                      <TextField fullWidth label="Email Address" type="email" value={formData.email} onChange={(e) => updateForm('email', e.target.value)}
                        InputProps={{ startAdornment: <InputAdornment position="start"><Email sx={{ color: '#6C757D' }} /></InputAdornment> }} required />
                    </Grid>
                  </Grid>
                )}

                {activeStep === 1 && (
                  <Grid container spacing={3}>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField fullWidth label="Phone Number" value={formData.phone} onChange={(e) => updateForm('phone', e.target.value)}
                        InputProps={{ startAdornment: <InputAdornment position="start"><Phone sx={{ color: '#6C757D' }} /></InputAdornment> }} />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <FormControl fullWidth>
                        <InputLabel>Country</InputLabel>
                        <Select value={formData.country} label="Country" onChange={(e) => updateForm('country', e.target.value)}>
                          <MenuItem value="US">United States</MenuItem>
                          <MenuItem value="UK">United Kingdom</MenuItem>
                          <MenuItem value="CA">Canada</MenuItem>
                          <MenuItem value="PK">Pakistan</MenuItem>
                          <MenuItem value="AE">UAE</MenuItem>
                          <MenuItem value="SA">Saudi Arabia</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid size={12}>
                      <FormControl fullWidth>
                        <InputLabel>Interested Course</InputLabel>
                        <Select value={formData.course} label="Interested Course" onChange={(e) => updateForm('course', e.target.value)}>
                          <MenuItem value="nazra">Quran Nazra</MenuItem>
                          <MenuItem value="hifz">Hifz Program</MenuItem>
                          <MenuItem value="tajweed">Tajweed Course</MenuItem>
                          <MenuItem value="tafseer">Tafseer Classes</MenuItem>
                          <MenuItem value="arabic">Arabic Language</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                  </Grid>
                )}

                {activeStep === 2 && (
                  <Grid container spacing={3}>
                    <Grid size={12}>
                      <TextField fullWidth label="Password" type={showPassword ? 'text' : 'password'} value={formData.password} onChange={(e) => updateForm('password', e.target.value)}
                        InputProps={{
                          startAdornment: <InputAdornment position="start"><Lock sx={{ color: '#6C757D' }} /></InputAdornment>,
                          endAdornment: <InputAdornment position="end"><IconButton onClick={() => setShowPassword(!showPassword)}>{showPassword ? <VisibilityOff /> : <Visibility />}</IconButton></InputAdornment>
                        }} required helperText="At least 8 characters with letters and numbers" />
                    </Grid>
                    <Grid size={12}>
                      <TextField fullWidth label="Confirm Password" type="password" value={formData.confirmPassword} onChange={(e) => updateForm('confirmPassword', e.target.value)} required />
                    </Grid>
                  </Grid>
                )}

                <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 4 }}>
                  <Button disabled={activeStep === 0} onClick={handleBack} startIcon={<ArrowBack />} sx={{ color: '#6C757D' }}>Back</Button>
                  {activeStep === steps.length - 1 ? (
                    <Button type="submit" variant="contained" endIcon={<ArrowForward />} sx={{ px: 4, background: 'linear-gradient(135deg, #0D6E3F 0%, #1A8B52 100%)', fontWeight: 600 }}>Create Account</Button>
                  ) : (
                    <Button onClick={handleNext} variant="contained" endIcon={<ArrowForward />} sx={{ px: 4, background: 'linear-gradient(135deg, #0D6E3F 0%, #1A8B52 100%)', fontWeight: 600 }}>Continue</Button>
                  )}
                </Box>
              </form>

              <Typography sx={{ textAlign: 'center', mt: 4 }} color="text.secondary">
                Already have an account? <MuiLink component={Link} to="/login" sx={{ color: '#0D6E3F', fontWeight: 600, textDecoration: 'none' }}>Sign In</MuiLink>
              </Typography>
            </CardContent>
          </Card>
        </motion.div>
      </Container>
    </Box>
  );
};

export default RegisterPage;
