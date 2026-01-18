import {
  Box,
  Container,
  Grid,
  Typography,
  IconButton,
  TextField,
  Button,
  Divider,
  Link as MuiLink,
} from '@mui/material';
import {
  AutoStories as QuranIcon,
  Facebook,
  Twitter,
  Instagram,
  YouTube,
  WhatsApp,
  Email,
  Phone,
  LocationOn,
  ArrowForward,
  Favorite,
} from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const quickLinks = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Our Classes', path: '/classes' },
  { label: 'Teachers', path: '/teachers' },
  { label: 'Contact', path: '/contact' },
];

const courses = [
  { label: 'Quran Nazra', path: '/classes?category=nazra' },
  { label: 'Hifz Program', path: '/classes?category=hifz' },
  { label: 'Tajweed Course', path: '/classes?category=tajweed' },
  { label: 'Tafseer Classes', path: '/classes?category=tafseer' },
  { label: 'Arabic Language', path: '/classes?category=arabic' },
];

const socialLinks = [
  { icon: <Facebook />, url: '#', label: 'Facebook', color: '#1877F2' },
  { icon: <Twitter />, url: '#', label: 'Twitter', color: '#1DA1F2' },
  { icon: <Instagram />, url: '#', label: 'Instagram', color: '#E4405F' },
  { icon: <YouTube />, url: '#', label: 'YouTube', color: '#FF0000' },
  { icon: <WhatsApp />, url: '#', label: 'WhatsApp', color: '#25D366' },
];

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        background: 'linear-gradient(135deg, #1A1A2E 0%, #0D6E3F 100%)',
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
          opacity: 0.05,
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23D4AF37' stroke-width='1'%3E%3Cpath d='M0 40L40 0L80 40L40 80z'/%3E%3Cpath d='M20 40L40 20L60 40L40 60z'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
        }}
      />

      {/* Newsletter Section */}
      <Box
        sx={{
          py: 6,
          background: 'rgba(212, 175, 55, 0.1)',
          borderBottom: '1px solid rgba(212, 175, 55, 0.2)',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography variant="h4" sx={{ fontWeight: 700, mb: 1 }}>
                Subscribe to Our Newsletter
              </Typography>
              <Typography sx={{ opacity: 0.8 }}>
                Get updates about new courses, schedules, and Islamic knowledge resources
              </Typography>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Box sx={{ display: 'flex', gap: 2 }}>
                <TextField
                  fullWidth
                  placeholder="Enter your email address"
                  variant="outlined"
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      backgroundColor: 'rgba(255,255,255,0.1)',
                      color: 'white',
                      borderRadius: 2,
                      '& fieldset': {
                        borderColor: 'rgba(255,255,255,0.3)',
                      },
                      '&:hover fieldset': {
                        borderColor: 'rgba(212, 175, 55, 0.5)',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: '#D4AF37',
                      },
                    },
                    '& .MuiInputBase-input::placeholder': {
                      color: 'rgba(255,255,255,0.6)',
                    },
                  }}
                />
                <Button
                  variant="contained"
                  sx={{
                    px: 4,
                    background: 'linear-gradient(135deg, #D4AF37 0%, #E4C567 100%)',
                    color: '#1A1A2E',
                    fontWeight: 600,
                    whiteSpace: 'nowrap',
                    '&:hover': {
                      background: 'linear-gradient(135deg, #E4C567 0%, #D4AF37 100%)',
                    },
                  }}
                  endIcon={<ArrowForward />}
                >
                  Subscribe
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Main Footer Content */}
      <Container maxWidth="lg" sx={{ py: 8, position: 'relative', zIndex: 1 }}>
        <Grid container spacing={4}>
          {/* Brand Section */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
              <QuranIcon sx={{ fontSize: 40, color: '#D4AF37' }} />
              <Typography
                variant="h5"
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
            <Typography sx={{ opacity: 0.8, mb: 3, lineHeight: 1.8 }}>
              Dedicated to providing quality Quranic education to students worldwide. 
              Learn from certified teachers in a comfortable environment with flexible 
              scheduling options.
            </Typography>
            
            {/* Social Links */}
            <Box sx={{ display: 'flex', gap: 1 }}>
              {socialLinks.map((social) => (
                <motion.div
                  key={social.label}
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <IconButton
                    component="a"
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    sx={{
                      color: 'white',
                      backgroundColor: 'rgba(255,255,255,0.1)',
                      '&:hover': {
                        backgroundColor: social.color,
                      },
                    }}
                  >
                    {social.icon}
                  </IconButton>
                </motion.div>
              ))}
            </Box>
          </Grid>

          {/* Quick Links */}
          <Grid size={{ xs: 12, sm: 6, md: 2 }}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 600,
                mb: 3,
                color: '#D4AF37',
              }}
            >
              Quick Links
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
              {quickLinks.map((link) => (
                <MuiLink
                  key={link.label}
                  component={Link}
                  to={link.path}
                  sx={{
                    color: 'rgba(255,255,255,0.8)',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      color: '#D4AF37',
                      transform: 'translateX(5px)',
                    },
                    display: 'block',
                  }}
                >
                  {link.label}
                </MuiLink>
              ))}
            </Box>
          </Grid>

          {/* Courses */}
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 600,
                mb: 3,
                color: '#D4AF37',
              }}
            >
              Our Courses
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
              {courses.map((course) => (
                <MuiLink
                  key={course.label}
                  component={Link}
                  to={course.path}
                  sx={{
                    color: 'rgba(255,255,255,0.8)',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      color: '#D4AF37',
                      transform: 'translateX(5px)',
                    },
                    display: 'block',
                  }}
                >
                  {course.label}
                </MuiLink>
              ))}
            </Box>
          </Grid>

          {/* Contact Info */}
          <Grid size={{ xs: 12, md: 3 }}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 600,
                mb: 3,
                color: '#D4AF37',
              }}
            >
              Contact Us
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                <LocationOn sx={{ color: '#D4AF37', mt: 0.5 }} />
                <Typography sx={{ opacity: 0.8 }}>
                  123 Islamic Center Road,<br />
                  Knowledge City, KC 12345
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Phone sx={{ color: '#D4AF37' }} />
                <Typography sx={{ opacity: 0.8 }}>+1 (555) 123-4567</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Email sx={{ color: '#D4AF37' }} />
                <Typography sx={{ opacity: 0.8 }}>info@quranlearn.com</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <WhatsApp sx={{ color: '#D4AF37' }} />
                <Typography sx={{ opacity: 0.8 }}>+1 (555) 987-6543</Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* Bottom Bar */}
      <Box
        sx={{
          borderTop: '1px solid rgba(255,255,255,0.1)',
          py: 3,
          position: 'relative',
          zIndex: 1,
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: 2,
            }}
          >
            <Typography sx={{ opacity: 0.7, textAlign: { xs: 'center', md: 'left' } }}>
              © {new Date().getFullYear()} QuranLearn. All rights reserved.
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Typography sx={{ opacity: 0.7 }}>Made with</Typography>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <Favorite sx={{ color: '#D4AF37', fontSize: 18 }} />
              </motion.div>
              <Typography sx={{ opacity: 0.7 }}>for the Ummah</Typography>
            </Box>
            <Box sx={{ display: 'flex', gap: 3 }}>
              <MuiLink
                component={Link}
                to="/privacy"
                sx={{
                  color: 'rgba(255,255,255,0.7)',
                  textDecoration: 'none',
                  '&:hover': { color: '#D4AF37' },
                }}
              >
                Privacy Policy
              </MuiLink>
              <MuiLink
                component={Link}
                to="/terms"
                sx={{
                  color: 'rgba(255,255,255,0.7)',
                  textDecoration: 'none',
                  '&:hover': { color: '#D4AF37' },
                }}
              >
                Terms of Service
              </MuiLink>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Footer;
