import { useState } from 'react';
import { Box, Container, Typography, TextField, Button, Card, CardContent, Divider, IconButton, InputAdornment, Checkbox, FormControlLabel, Link as MuiLink } from '@mui/material';
import { Visibility, VisibilityOff, Email, Lock, Google, Facebook, AutoStories } from '@mui/icons-material';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ email: '', password: '', remember: false });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Demo login - redirect to student dashboard
    navigate('/student/dashboard');
  };

  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', alignItems: 'center', py: 8, background: 'linear-gradient(135deg, rgba(13, 110, 63, 0.05) 0%, rgba(26, 35, 126, 0.05) 100%)' }} className="geometric-pattern">
      <Container maxWidth="sm">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <Card sx={{ borderRadius: 4, overflow: 'hidden', boxShadow: '0 20px 60px rgba(0,0,0,0.1)' }}>
            {/* Header */}
            <Box sx={{ p: 4, background: 'linear-gradient(135deg, #0D6E3F 0%, #1A237E 100%)', textAlign: 'center' }}>
              <AutoStories sx={{ fontSize: 50, color: '#D4AF37', mb: 2 }} />
              <Typography variant="h4" sx={{ color: 'white', fontWeight: 700 }}>Welcome Back</Typography>
              <Typography sx={{ color: 'rgba(255,255,255,0.8)', mt: 1 }}>Sign in to continue your learning journey</Typography>
            </Box>

            <CardContent sx={{ p: 4 }}>
              <form onSubmit={handleSubmit}>
                <TextField fullWidth label="Email Address" type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} sx={{ mb: 3 }}
                  InputProps={{ startAdornment: <InputAdornment position="start"><Email sx={{ color: '#6C757D' }} /></InputAdornment> }} required />
                
                <TextField fullWidth label="Password" type={showPassword ? 'text' : 'password'} value={formData.password} onChange={(e) => setFormData({ ...formData, password: e.target.value })} sx={{ mb: 2 }}
                  InputProps={{
                    startAdornment: <InputAdornment position="start"><Lock sx={{ color: '#6C757D' }} /></InputAdornment>,
                    endAdornment: <InputAdornment position="end"><IconButton onClick={() => setShowPassword(!showPassword)} edge="end">{showPassword ? <VisibilityOff /> : <Visibility />}</IconButton></InputAdornment>
                  }} required />

                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                  <FormControlLabel control={<Checkbox checked={formData.remember} onChange={(e) => setFormData({ ...formData, remember: e.target.checked })} sx={{ color: '#0D6E3F', '&.Mui-checked': { color: '#0D6E3F' } }} />} label="Remember me" />
                  <MuiLink component={Link} to="/forgot-password" sx={{ color: '#0D6E3F', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>Forgot Password?</MuiLink>
                </Box>

                <Button type="submit" fullWidth variant="contained" size="large" sx={{ py: 1.5, mb: 3, background: 'linear-gradient(135deg, #0D6E3F 0%, #1A8B52 100%)', fontWeight: 600, fontSize: '1rem' }}>Sign In</Button>
              </form>

              <Divider sx={{ my: 3 }}><Typography color="text.secondary" variant="body2">OR</Typography></Divider>

              <Box sx={{ display: 'flex', gap: 2. }}>
                <Button fullWidth variant="outlined" startIcon={<Google />} sx={{ py: 1.5, borderColor: '#DB4437', color: '#DB4437', '&:hover': { borderColor: '#DB4437', backgroundColor: 'rgba(219,68,55,0.05)' } }}>Google</Button>
                <Button fullWidth variant="outlined" startIcon={<Facebook />} sx={{ py: 1.5, borderColor: '#1877F2', color: '#1877F2', '&:hover': { borderColor: '#1877F2', backgroundColor: 'rgba(24,119,242,0.05)' } }}>Facebook</Button>
              </Box>

              <Typography sx={{ textAlign: 'center', mt: 3 }} color="text.secondary">
                Don't have an account?{' '}
                <MuiLink component={Link} to="/register" sx={{ color: '#0D6E3F', fontWeight: 600, textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>Register Now</MuiLink>
              </Typography>
            </CardContent>
          </Card>
        </motion.div>
      </Container>
    </Box>
  );
};

export default LoginPage;
