import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Avatar,
  Button,
} from '@mui/material';
import {
  Mosque,
  AutoStories,
  Groups,
  Favorite,
  EmojiEvents,
  Verified,
  ArrowForward,
  School,
  Psychology,
  Handshake,
  Star,
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const values = [
  {
    icon: <AutoStories sx={{ fontSize: 40 }} />,
    title: 'Excellence in Teaching',
    description: 'We strive for the highest standards in Quranic education with certified and experienced teachers.',
  },
  {
    icon: <Favorite sx={{ fontSize: 40 }} />,
    title: 'Love & Compassion',
    description: 'Our approach is rooted in patience, understanding, and genuine care for every student.',
  },
  {
    icon: <Psychology sx={{ fontSize: 40 }} />,
    title: 'Individual Focus',
    description: 'We recognize that each student is unique and tailor our teaching to their specific needs.',
  },
  {
    icon: <Handshake sx={{ fontSize: 40 }} />,
    title: 'Community Building',
    description: 'We foster a supportive global community of learners united by their love for the Quran.',
  },
];

const milestones = [
  { year: '2015', title: 'Founded', description: 'Started with just 5 teachers and a vision' },
  { year: '2017', title: '1000 Students', description: 'Reached our first thousand students milestone' },
  { year: '2019', title: 'Global Expansion', description: 'Expanded to 15 countries across 4 continents' },
  { year: '2021', title: 'Award Winning', description: 'Recognized as Best Online Quran Academy' },
  { year: '2024', title: '5000+ Students', description: 'Growing community of dedicated learners' },
];

const team = [
  {
    name: 'Sheikh Abdullah Rahman',
    role: 'Founder & Director',
    bio: 'Hafiz with 20+ years of teaching experience, former teacher at Al-Azhar University.',
    avatar: '',
  },
  {
    name: 'Dr. Fatima Al-Hassan',
    role: 'Head of Curriculum',
    bio: 'PhD in Islamic Studies, specializing in Tafseer and Quranic Sciences.',
    avatar: '',
  },
  {
    name: 'Ustadh Ibrahim Malik',
    role: 'Head of Hifz Program',
    bio: 'Hafiz and Qari with Ijazah in 10 Qiraat, trained 100+ Huffaz.',
    avatar: '',
  },
  {
    name: 'Sister Maryam Khan',
    role: 'Student Relations',
    bio: 'Dedicated to ensuring every student has an exceptional learning experience.',
    avatar: '',
  },
];

const AboutPage = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          py: 12,
          background: 'linear-gradient(135deg, rgba(13, 110, 63, 0.95) 0%, rgba(26, 35, 126, 0.9) 100%)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
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
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Typography
              variant="h2"
              sx={{
                color: 'white',
                fontWeight: 700,
                textAlign: 'center',
                mb: 3,
              }}
            >
              About <Box component="span" sx={{ color: '#D4AF37' }}>QuranLearn</Box>
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: 'rgba(255,255,255,0.85)',
                textAlign: 'center',
                maxWidth: 700,
                mx: 'auto',
                lineHeight: 1.8,
              }}
            >
              Dedicated to spreading the light of Quranic knowledge worldwide through 
              innovative online education and compassionate teaching.
            </Typography>
          </motion.div>
        </Container>
      </Box>

      {/* Mission & Vision */}
      <Box sx={{ py: 10, backgroundColor: 'white' }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid size={{ xs: 12, md: 6 }}>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Typography
                  variant="overline"
                  sx={{ color: '#D4AF37', fontWeight: 600, letterSpacing: 2 }}
                >
                  OUR STORY
                </Typography>
                <Typography
                  variant="h3"
                  sx={{ fontWeight: 700, color: '#1A1A2E', mb: 3 }}
                >
                  From a Vision to a{' '}
                  <Box component="span" sx={{ color: '#0D6E3F' }}>
                    Global Community
                  </Box>
                </Typography>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{ mb: 3, lineHeight: 1.8 }}
                >
                  QuranLearn was founded in 2015 with a simple yet profound mission: 
                  to make quality Quranic education accessible to everyone, regardless 
                  of their location or schedule.
                </Typography>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{ mb: 3, lineHeight: 1.8 }}
                >
                  What started as a small initiative with just five dedicated teachers 
                  has grown into a global community of over 5,000 students across 25+ 
                  countries. We've helped countless students memorize the Quran, perfect 
                  their Tajweed, and deepen their understanding of Allah's words.
                </Typography>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{ lineHeight: 1.8 }}
                >
                  Our success is built on the foundation of patience, personalized 
                  attention, and a genuine love for sharing Islamic knowledge. Every 
                  student who joins our family becomes part of something special.
                </Typography>
              </motion.div>
            </Grid>
            
            <Grid size={{ xs: 12, md: 6 }}>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Box
                  sx={{
                    position: 'relative',
                    borderRadius: 4,
                    overflow: 'hidden',
                    height: 400,
                    background: 'linear-gradient(135deg, #0D6E3F 0%, #1A237E 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Mosque sx={{ fontSize: 200, color: 'rgba(255,255,255,0.2)' }} />
                  
                  {/* Stats Overlay */}
                  <Box
                    sx={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      p: 3,
                      background: 'rgba(0,0,0,0.3)',
                      backdropFilter: 'blur(10px)',
                    }}
                  >
                    <Grid container spacing={3}>
                      <Grid size={4}>
                        <Typography variant="h4" sx={{ fontWeight: 700, color: '#D4AF37' }}>
                          9+
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)' }}>
                          Years Experience
                        </Typography>
                      </Grid>
                      <Grid size={4}>
                        <Typography variant="h4" sx={{ fontWeight: 700, color: '#D4AF37' }}>
                          25+
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)' }}>
                          Countries
                        </Typography>
                      </Grid>
                      <Grid size={4}>
                        <Typography variant="h4" sx={{ fontWeight: 700, color: '#D4AF37' }}>
                          500+
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)' }}>
                          Huffaz Graduated
                        </Typography>
                      </Grid>
                    </Grid>
                  </Box>
                </Box>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Our Values */}
      <Box sx={{ py: 10, backgroundColor: '#FAFAF5' }} className="geometric-pattern">
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography
              variant="overline"
              sx={{ color: '#D4AF37', fontWeight: 600, letterSpacing: 2 }}
            >
              OUR VALUES
            </Typography>
            <Typography variant="h3" sx={{ fontWeight: 700, color: '#1A1A2E' }}>
              What We <Box component="span" sx={{ color: '#0D6E3F' }}>Stand For</Box>
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {values.map((value, index) => (
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
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: '0 20px 40px rgba(13, 110, 63, 0.15)',
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
                        {value.icon}
                      </Box>
                      <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, color: '#1A1A2E' }}>
                        {value.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                        {value.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Timeline */}
      <Box sx={{ py: 10, backgroundColor: 'white' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography
              variant="overline"
              sx={{ color: '#D4AF37', fontWeight: 600, letterSpacing: 2 }}
            >
              OUR JOURNEY
            </Typography>
            <Typography variant="h3" sx={{ fontWeight: 700, color: '#1A1A2E' }}>
              Milestones Along the <Box component="span" sx={{ color: '#0D6E3F' }}>Way</Box>
            </Typography>
          </Box>

          <Box sx={{ position: 'relative' }}>
            {/* Timeline Line */}
            <Box
              sx={{
                position: 'absolute',
                left: '50%',
                transform: 'translateX(-50%)',
                width: 4,
                height: '100%',
                background: 'linear-gradient(to bottom, #D4AF37, #0D6E3F)',
                borderRadius: 2,
                display: { xs: 'none', md: 'block' },
              }}
            />

            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: index % 2 === 0 ? 'flex-end' : 'flex-start',
                    mb: 4,
                    position: 'relative',
                  }}
                >
                  <Box
                    sx={{
                      width: { xs: '100%', md: '45%' },
                      p: 3,
                      backgroundColor: '#FAFAF5',
                      borderRadius: 3,
                      position: 'relative',
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: '50%',
                        [index % 2 === 0 ? 'right' : 'left']: { md: -12 },
                        transform: 'translateY(-50%)',
                        width: 0,
                        height: 0,
                        borderStyle: 'solid',
                        borderWidth: index % 2 === 0 
                          ? '10px 0 10px 12px' 
                          : '10px 12px 10px 0',
                        borderColor: index % 2 === 0
                          ? 'transparent transparent transparent #FAFAF5'
                          : 'transparent #FAFAF5 transparent transparent',
                        display: { xs: 'none', md: 'block' },
                      },
                    }}
                  >
                    <Typography variant="h5" sx={{ color: '#D4AF37', fontWeight: 700, mb: 1 }}>
                      {milestone.year}
                    </Typography>
                    <Typography variant="h6" sx={{ fontWeight: 600, color: '#1A1A2E', mb: 1 }}>
                      {milestone.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {milestone.description}
                    </Typography>
                  </Box>
                </Box>
              </motion.div>
            ))}
          </Box>
        </Container>
      </Box>

      {/* Team Section */}
      <Box sx={{ py: 10, backgroundColor: '#F5F5DC' }} className="islamic-pattern">
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography
              variant="overline"
              sx={{ color: '#D4AF37', fontWeight: 600, letterSpacing: 2 }}
            >
              OUR TEAM
            </Typography>
            <Typography variant="h3" sx={{ fontWeight: 700, color: '#1A1A2E', mb: 2 }}>
              Meet the <Box component="span" sx={{ color: '#0D6E3F' }}>Leaders</Box>
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 600, mx: 'auto' }}>
              Our dedicated team of scholars, educators, and administrators work together 
              to provide you with the best learning experience.
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {team.map((member, index) => (
              <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card
                    sx={{
                      textAlign: 'center',
                      p: 3,
                      borderRadius: 4,
                      height: '100%',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: '0 20px 40px rgba(13, 110, 63, 0.15)',
                      },
                    }}
                  >
                    <Avatar
                      src={member.avatar}
                      sx={{
                        width: 100,
                        height: 100,
                        mx: 'auto',
                        mb: 2,
                        border: '4px solid #D4AF37',
                        background: 'linear-gradient(135deg, #0D6E3F 0%, #1A237E 100%)',
                        fontSize: '2rem',
                      }}
                    >
                      {member.name.charAt(0)}
                    </Avatar>
                    <Typography variant="h6" sx={{ fontWeight: 700, color: '#1A1A2E' }}>
                      {member.name}
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      sx={{ color: '#D4AF37', fontWeight: 600, mb: 2 }}
                    >
                      {member.role}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                      {member.bio}
                    </Typography>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* CTA */}
      <Box
        sx={{
          py: 10,
          background: 'linear-gradient(135deg, #0D6E3F 0%, #1A237E 100%)',
          textAlign: 'center',
        }}
      >
        <Container maxWidth="md">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Typography
              variant="h3"
              sx={{ color: 'white', fontWeight: 700, mb: 3 }}
            >
              Join Our Growing Family
            </Typography>
            <Typography
              variant="h6"
              sx={{ color: 'rgba(255,255,255,0.85)', mb: 4, fontWeight: 400 }}
            >
              Start your Quranic journey with us today. Experience the difference 
              that personalized, compassionate teaching can make.
            </Typography>
            <Button
              component={Link}
              to="/register"
              variant="contained"
              size="large"
              endIcon={<ArrowForward />}
              sx={{
                py: 2,
                px: 5,
                fontSize: '1.1rem',
                background: 'linear-gradient(135deg, #D4AF37 0%, #E4C567 100%)',
                color: '#1A1A2E',
                fontWeight: 700,
                '&:hover': {
                  background: 'linear-gradient(135deg, #E4C567 0%, #D4AF37 100%)',
                },
              }}
            >
              Register Now
            </Button>
          </motion.div>
        </Container>
      </Box>
    </Box>
  );
};

export default AboutPage;
