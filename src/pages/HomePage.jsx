import { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  Chip,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import {
  PlayArrow,
  School,
  Schedule,
  VerifiedUser,
  Groups,
  MenuBook,
  Mosque,
  Star,
  ArrowForward,
  EmojiEvents,
  Public,
  Headset,
} from '@mui/icons-material';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ClassCard from '../components/classes/ClassCard';
import TestimonialCard from '../components/testimonials/TestimonialCard';

// Sample Data
const features = [
  {
    icon: <VerifiedUser sx={{ fontSize: 40 }} />,
    title: 'Certified Teachers',
    description: 'Learn from Hafiz and certified Islamic scholars with years of teaching experience.',
  },
  {
    icon: <Schedule sx={{ fontSize: 40 }} />,
    title: 'Flexible Timing',
    description: 'Choose your preferred time slots that fit your busy schedule.',
  },
  {
    icon: <Headset sx={{ fontSize: 40 }} />,
    title: 'One-on-One Classes',
    description: 'Personal attention with individual sessions for better learning outcomes.',
  },
  {
    icon: <Public sx={{ fontSize: 40 }} />,
    title: 'Learn Anywhere',
    description: 'Access your classes from anywhere in the world with our online platform.',
  },
];

const stats = [
  { value: '5000+', label: 'Students Enrolled', icon: <Groups /> },
  { value: '50+', label: 'Expert Teachers', icon: <School /> },
  { value: '100+', label: 'Courses Available', icon: <MenuBook /> },
  { value: '25+', label: 'Countries Reached', icon: <Public /> },
];

const sampleClasses = [
  {
    id: 1,
    title: 'Quran Nazra for Beginners',
    description: 'Learn to read the Holy Quran with proper pronunciation and basic Tajweed rules.',
    teacher: 'Sheikh Ahmad',
    teacherAvatar: '',
    duration: '3 months',
    price: 49,
    rating: 4.9,
    totalSeats: 20,
    availableSeats: 8,
    category: 'Nazra',
  },
  {
    id: 2,
    title: 'Complete Hifz Program',
    description: 'Comprehensive memorization program to become a Hafiz with expert guidance.',
    teacher: 'Hafiz Ibrahim',
    teacherAvatar: '',
    duration: '24 months',
    price: 79,
    rating: 5.0,
    totalSeats: 15,
    availableSeats: 4,
    category: 'Hifz',
  },
  {
    id: 3,
    title: 'Advanced Tajweed Course',
    description: 'Master the art of Quran recitation with advanced Tajweed rules and practice.',
    teacher: 'Qari Yusuf',
    teacherAvatar: '',
    duration: '6 months',
    price: 59,
    rating: 4.8,
    totalSeats: 25,
    availableSeats: 15,
    category: 'Tajweed',
  },
  {
    id: 4,
    title: 'Tafseer & Understanding',
    description: 'Deep dive into the meanings and interpretations of the Holy Quran.',
    teacher: 'Dr. Fatima',
    teacherAvatar: '',
    duration: '12 months',
    price: 69,
    rating: 4.9,
    totalSeats: 30,
    availableSeats: 22,
    category: 'Tafseer',
  },
];

const testimonials = [
  {
    name: 'Sarah Ahmed',
    avatar: '',
    location: 'New York, USA',
    quote: 'QuranLearn has transformed my Quran learning journey. The teachers are incredibly patient and knowledgeable. My recitation has improved tremendously!',
    rating: 5,
    course: 'Tajweed Course',
  },
  {
    name: 'Omar Hassan',
    avatar: '',
    location: 'London, UK',
    quote: 'The Hifz program is exceptional. My son has memorized 10 Juz in just one year. The structured approach and dedicated teachers make all the difference.',
    rating: 5,
    course: 'Hifz Program',
  },
  {
    name: 'Aisha Khan',
    avatar: '',
    location: 'Toronto, Canada',
    quote: 'As a working mother, the flexible timing options are a blessing. I can learn at my own pace without compromising my other responsibilities.',
    rating: 5,
    course: 'Quran Nazra',
  },
];

const AnimatedCounter = ({ value, label, icon }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const numericValue = parseInt(value.replace(/\D/g, ''));

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const increment = numericValue / steps;
      let current = 0;
      
      const timer = setInterval(() => {
        current += increment;
        if (current >= numericValue) {
          setCount(numericValue);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isInView, numericValue]);

  return (
    <Box ref={ref} sx={{ textAlign: 'center' }}>
      <Box
        sx={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: 60,
          height: 60,
          borderRadius: '50%',
          backgroundColor: 'rgba(212, 175, 55, 0.2)',
          mb: 2,
          color: '#D4AF37',
        }}
      >
        {icon}
      </Box>
      <Typography
        variant="h3"
        sx={{
          fontWeight: 800,
          color: 'white',
          mb: 0.5,
        }}
      >
        {count.toLocaleString()}{value.includes('+') ? '+' : ''}
      </Typography>
      <Typography sx={{ color: 'rgba(255,255,255,0.8)' }}>{label}</Typography>
    </Box>
  );
};

const HomePage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const testimonialSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: isMobile ? 1 : 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
  };

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
          background: 'linear-gradient(135deg, rgba(13, 110, 63, 0.95) 0%, rgba(26, 35, 126, 0.9) 100%)',
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
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 0L100 50L50 100L0 50z' fill='none' stroke='%23D4AF37' stroke-width='1'/%3E%3Cpath d='M25 25L75 25L75 75L25 75z' fill='none' stroke='%23D4AF37' stroke-width='0.5'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
          }}
        />

        {/* Floating Elements */}
        <motion.div
          style={{
            position: 'absolute',
            top: '20%',
            right: '10%',
            opacity: 0.3,
          }}
          animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          <Star sx={{ fontSize: 100, color: '#D4AF37' }} />
        </motion.div>
        <motion.div
          style={{
            position: 'absolute',
            bottom: '20%',
            left: '5%',
            opacity: 0.2,
          }}
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
        >
          <Mosque sx={{ fontSize: 150, color: '#D4AF37' }} />
        </motion.div>

        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1, py: 8 }}>
          <Grid container spacing={6} alignItems="center">
            <Grid size={{ xs: 12, md: 7 }}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Chip
                  label="🌟 #1 Online Quran Academy"
                  sx={{
                    backgroundColor: 'rgba(212, 175, 55, 0.2)',
                    color: '#D4AF37',
                    fontWeight: 600,
                    mb: 3,
                    border: '1px solid rgba(212, 175, 55, 0.3)',
                  }}
                />
                <Typography
                  variant="h1"
                  sx={{
                    color: 'white',
                    fontWeight: 800,
                    mb: 3,
                    fontSize: { xs: '2.5rem', md: '3.5rem', lg: '4rem' },
                    lineHeight: 1.2,
                  }}
                >
                  Learn the Holy{' '}
                  <Box
                    component="span"
                    sx={{
                      background: 'linear-gradient(135deg, #D4AF37 0%, #E4C567 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    Quran
                  </Box>
                  <br />
                  From Home
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    color: 'rgba(255,255,255,0.85)',
                    mb: 4,
                    lineHeight: 1.8,
                    maxWidth: 550,
                    fontWeight: 400,
                  }}
                >
                  Join thousands of students worldwide learning Quran with certified 
                  teachers through our interactive online platform. Start your 
                  spiritual journey today.
                </Typography>

                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mb: 4 }}>
                  <Button
                    component={Link}
                    to="/register"
                    variant="contained"
                    size="large"
                    endIcon={<ArrowForward />}
                    sx={{
                      py: 2,
                      px: 4,
                      fontSize: '1.1rem',
                      background: 'linear-gradient(135deg, #D4AF37 0%, #E4C567 100%)',
                      color: '#1A1A2E',
                      fontWeight: 700,
                      boxShadow: '0 8px 24px rgba(212, 175, 55, 0.4)',
                      '&:hover': {
                        background: 'linear-gradient(135deg, #E4C567 0%, #D4AF37 100%)',
                        transform: 'translateY(-2px)',
                        boxShadow: '0 12px 32px rgba(212, 175, 55, 0.5)',
                      },
                    }}
                  >
                    Start Free Trial
                  </Button>
                  <Button
                    component={Link}
                    to="/classes"
                    variant="outlined"
                    size="large"
                    startIcon={<PlayArrow />}
                    sx={{
                      py: 2,
                      px: 4,
                      fontSize: '1.1rem',
                      color: 'white',
                      borderColor: 'rgba(255,255,255,0.5)',
                      borderWidth: 2,
                      '&:hover': {
                        borderWidth: 2,
                        borderColor: '#D4AF37',
                        backgroundColor: 'rgba(212, 175, 55, 0.1)',
                      },
                    }}
                  >
                    Watch Demo
                  </Button>
                </Box>

                {/* Trust Badges */}
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 4, flexWrap: 'wrap' }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Box
                      sx={{
                        display: 'flex',
                        '& > *': {
                          width: 32,
                          height: 32,
                          borderRadius: '50%',
                          border: '2px solid white',
                          backgroundColor: '#0D6E3F',
                          marginLeft: -1,
                          '&:first-of-type': { marginLeft: 0 },
                        },
                      }}
                    >
                      {[1, 2, 3, 4].map((i) => (
                        <Box key={i} />
                      ))}
                    </Box>
                    <Typography sx={{ color: 'rgba(255,255,255,0.9)', ml: 1 }}>
                      Join <strong>5000+</strong> students
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} sx={{ color: '#D4AF37', fontSize: 20 }} />
                    ))}
                    <Typography sx={{ color: 'rgba(255,255,255,0.9)', ml: 1 }}>
                      4.9/5 Rating
                    </Typography>
                  </Box>
                </Box>
              </motion.div>
            </Grid>

            <Grid size={{ xs: 12, md: 5 }}>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <Box
                  sx={{
                    position: 'relative',
                    width: '100%',
                    height: { xs: 300, md: 450 },
                    borderRadius: 4,
                    overflow: 'hidden',
                    boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
                  }}
                >
                  {/* Placeholder for Hero Image */}
                  <Box
                    sx={{
                      width: '100%',
                      height: '100%',
                      background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.3) 0%, rgba(13, 110, 63, 0.5) 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      position: 'relative',
                    }}
                  >
                    <MenuBook sx={{ fontSize: 150, color: 'rgba(255,255,255,0.3)' }} />
                    
                    {/* Floating Card */}
                    <motion.div
                      style={{
                        position: 'absolute',
                        bottom: 20,
                        left: 20,
                        right: 20,
                      }}
                      animate={{ y: [0, -5, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <Box
                        sx={{
                          backgroundColor: 'rgba(255,255,255,0.95)',
                          borderRadius: 3,
                          p: 2,
                          display: 'flex',
                          alignItems: 'center',
                          gap: 2,
                          boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
                        }}
                      >
                        <Box
                          sx={{
                            width: 50,
                            height: 50,
                            borderRadius: 2,
                            background: 'linear-gradient(135deg, #0D6E3F 0%, #1A8B52 100%)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}
                        >
                          <EmojiEvents sx={{ color: 'white' }} />
                        </Box>
                        <Box>
                          <Typography variant="subtitle2" sx={{ fontWeight: 700, color: '#1A1A2E' }}>
                            Next Class Starting
                          </Typography>
                          <Typography variant="caption" color="text.secondary">
                            Advanced Tajweed - 2 seats left!
                          </Typography>
                        </Box>
                      </Box>
                    </motion.div>
                  </Box>
                </Box>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Features Section */}
      <Box sx={{ py: 10, backgroundColor: '#FAFAF5' }} className="geometric-pattern">
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Typography
                variant="overline"
                sx={{
                  color: '#D4AF37',
                  fontWeight: 600,
                  letterSpacing: 2,
                  mb: 1,
                  display: 'block',
                }}
              >
                WHY CHOOSE US
              </Typography>
              <Typography
                variant="h2"
                sx={{
                  fontWeight: 700,
                  color: '#1A1A2E',
                  mb: 2,
                }}
              >
                Experience Excellence in{' '}
                <Box component="span" sx={{ color: '#0D6E3F' }}>
                  Quranic Education
                </Box>
              </Typography>
              <Typography
                variant="body1"
                color="text.secondary"
                sx={{ maxWidth: 600, mx: 'auto' }}
              >
                We combine traditional teaching methods with modern technology 
                to provide the best learning experience for our students.
              </Typography>
            </motion.div>
          </Box>

          <Grid container spacing={4}>
            {features.map((feature, index) => (
              <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card
                    sx={{
                      height: '100%',
                      textAlign: 'center',
                      p: 3,
                      borderRadius: 4,
                      border: '1px solid rgba(0,0,0,0.05)',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: '0 20px 40px rgba(13, 110, 63, 0.1)',
                        borderColor: '#D4AF37',
                      },
                    }}
                  >
                    <CardContent>
                      <Box
                        sx={{
                          width: 80,
                          height: 80,
                          borderRadius: '50%',
                          background: 'linear-gradient(135deg, rgba(13, 110, 63, 0.1) 0%, rgba(212, 175, 55, 0.1) 100%)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          mx: 'auto',
                          mb: 3,
                          color: '#0D6E3F',
                        }}
                      >
                        {feature.icon}
                      </Box>
                      <Typography
                        variant="h6"
                        sx={{ fontWeight: 700, mb: 2, color: '#1A1A2E' }}
                      >
                        {feature.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                        {feature.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Popular Classes Section */}
      <Box sx={{ py: 10, backgroundColor: 'white' }}>
        <Container maxWidth="lg">
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 6, flexWrap: 'wrap', gap: 2 }}>
            <Box>
              <Typography
                variant="overline"
                sx={{
                  color: '#D4AF37',
                  fontWeight: 600,
                  letterSpacing: 2,
                  display: 'block',
                  mb: 1,
                }}
              >
                EXPLORE COURSES
              </Typography>
              <Typography variant="h3" sx={{ fontWeight: 700, color: '#1A1A2E' }}>
                Popular <Box component="span" sx={{ color: '#0D6E3F' }}>Classes</Box>
              </Typography>
            </Box>
            <Button
              component={Link}
              to="/classes"
              variant="outlined"
              endIcon={<ArrowForward />}
              sx={{
                borderColor: '#0D6E3F',
                color: '#0D6E3F',
                borderWidth: 2,
                px: 3,
                '&:hover': {
                  borderWidth: 2,
                  backgroundColor: 'rgba(13, 110, 63, 0.05)',
                },
              }}
            >
              View All Classes
            </Button>
          </Box>

          <Grid container spacing={4}>
            {sampleClasses.map((classItem, index) => (
              <Grid size={{ xs: 12, sm: 6, lg: 3 }} key={classItem.id}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <ClassCard classData={classItem} />
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Statistics Section */}
      <Box
        sx={{
          py: 10,
          background: 'linear-gradient(135deg, #0D6E3F 0%, #1A237E 100%)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Pattern */}
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
        
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Grid container spacing={6}>
            {stats.map((stat, index) => (
              <Grid size={{ xs: 6, md: 3 }} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <AnimatedCounter {...stat} />
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Testimonials Section */}
      <Box sx={{ py: 10, backgroundColor: '#F5F5DC' }} className="islamic-pattern">
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Typography
                variant="overline"
                sx={{
                  color: '#D4AF37',
                  fontWeight: 600,
                  letterSpacing: 2,
                  display: 'block',
                  mb: 1,
                }}
              >
                TESTIMONIALS
              </Typography>
              <Typography variant="h3" sx={{ fontWeight: 700, color: '#1A1A2E', mb: 2 }}>
                What Our <Box component="span" sx={{ color: '#0D6E3F' }}>Students Say</Box>
              </Typography>
              <Typography
                variant="body1"
                color="text.secondary"
                sx={{ maxWidth: 600, mx: 'auto' }}
              >
                Hear from our community of students and parents about their 
                transformative learning experiences with QuranLearn.
              </Typography>
            </motion.div>
          </Box>

          <Box sx={{ px: { xs: 0, md: 4 } }}>
            <Slider {...testimonialSettings}>
              {testimonials.map((testimonial, index) => (
                <Box key={index} sx={{ px: 2, py: 3 }}>
                  <TestimonialCard testimonial={testimonial} />
                </Box>
              ))}
            </Slider>
          </Box>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box
        sx={{
          py: 10,
          background: 'linear-gradient(135deg, #D4AF37 0%, #E4C567 100%)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Container maxWidth="md" sx={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Typography
              variant="h3"
              sx={{ fontWeight: 700, color: '#1A1A2E', mb: 3 }}
            >
              Ready to Start Your Quran Journey?
            </Typography>
            <Typography
              variant="h6"
              sx={{ color: 'rgba(26, 26, 46, 0.8)', mb: 4, fontWeight: 400 }}
            >
              Join our community of learners and begin your spiritual growth today. 
              Book a free trial class with our expert teachers.
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, flexWrap: 'wrap' }}>
              <Button
                component={Link}
                to="/register"
                variant="contained"
                size="large"
                sx={{
                  py: 2,
                  px: 5,
                  fontSize: '1.1rem',
                  backgroundColor: '#1A1A2E',
                  color: 'white',
                  fontWeight: 700,
                  '&:hover': {
                    backgroundColor: '#0D6E3F',
                  },
                }}
              >
                Get Started Free
              </Button>
              <Button
                component={Link}
                to="/contact"
                variant="outlined"
                size="large"
                sx={{
                  py: 2,
                  px: 5,
                  fontSize: '1.1rem',
                  borderColor: '#1A1A2E',
                  color: '#1A1A2E',
                  borderWidth: 2,
                  fontWeight: 700,
                  '&:hover': {
                    borderWidth: 2,
                    backgroundColor: 'rgba(26, 26, 46, 0.1)',
                  },
                }}
              >
                Contact Us
              </Button>
            </Box>
          </motion.div>
        </Container>
      </Box>
    </Box>
  );
};

export default HomePage;
