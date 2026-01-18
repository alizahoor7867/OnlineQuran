import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Box, Container, Typography, Grid, Card, CardContent, Button, Chip, Avatar, Rating, Tabs, Tab, List, ListItem, ListItemIcon, ListItemText, Divider } from '@mui/material';
import { AccessTime, People, Star, CalendarMonth, CheckCircle, PlayCircle, ArrowForward, School, MenuBook } from '@mui/icons-material';
import { motion } from 'framer-motion';

const classData = {
  id: 1,
  title: 'Complete Tajweed Course - Beautify Your Recitation',
  description: 'Master the art of Quran recitation with comprehensive Tajweed rules. This course covers everything from basic pronunciation to advanced melodious recitation techniques.',
  fullDescription: 'Our Advanced Tajweed Course is designed for students who want to perfect their Quran recitation. You will learn the science of Tajweed from its fundamental rules to advanced applications. The course includes practical exercises, one-on-one feedback sessions, and regular assessments to track your progress.',
  teacher: 'Qari Yusuf Mohammed',
  teacherAvatar: '',
  teacherBio: 'Certified in 10 Qiraat with multiple Ijazahs. 12 years of teaching experience.',
  duration: '6 months',
  price: 59,
  rating: 4.8,
  totalStudents: 400,
  totalSeats: 25,
  availableSeats: 15,
  category: 'Tajweed',
  level: 'All Levels',
  language: 'English & Arabic',
  curriculum: ['Makharij al-Huruf (Articulation Points)', 'Sifat al-Huruf (Letter Characteristics)', 'Rules of Noon Sakinah & Tanween', 'Rules of Meem Sakinah', 'Al-Madd (Prolongation Rules)', 'Rules of Lam & Ra', 'Waqf & Ibtida (Stopping & Starting)', 'Practical Application & Assessment'],
  features: ['Live one-on-one sessions', 'Flexible scheduling', 'Recorded lesson access', 'Progress tracking', 'Certificate upon completion', 'Lifetime course access'],
};

const ClassDetailsPage = () => {
  const { id } = useParams();
  const [tab, setTab] = useState(0);

  return (
    <Box>
      <Box sx={{ py: 10, background: 'linear-gradient(135deg, rgba(13, 110, 63, 0.95) 0%, rgba(26, 35, 126, 0.9) 100%)', position: 'relative' }}>
        <Container maxWidth="lg">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Chip label={classData.category} sx={{ mb: 2, backgroundColor: 'rgba(212, 175, 55, 0.2)', color: '#D4AF37', fontWeight: 600 }} />
            <Typography variant="h3" sx={{ color: 'white', fontWeight: 700, mb: 2 }}>{classData.title}</Typography>
            <Typography sx={{ color: 'rgba(255,255,255,0.85)', mb: 3, maxWidth: 700 }}>{classData.description}</Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 3, flexWrap: 'wrap' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Avatar src={classData.teacherAvatar} sx={{ border: '2px solid #D4AF37' }}>{classData.teacher.charAt(0)}</Avatar>
                <Typography sx={{ color: 'white' }}>{classData.teacher}</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                <Rating value={classData.rating} readOnly size="small" sx={{ '& .MuiRating-iconFilled': { color: '#D4AF37' } }} />
                <Typography sx={{ color: 'rgba(255,255,255,0.9)' }}>({classData.rating})</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, color: 'rgba(255,255,255,0.9)' }}>
                <People fontSize="small" /><Typography>{classData.totalStudents}+ students</Typography>
              </Box>
            </Box>
          </motion.div>
        </Container>
      </Box>

      <Box sx={{ py: 6, backgroundColor: '#FAFAF5' }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            <Grid size={{ xs: 12, md: 8 }}>
              <Card sx={{ borderRadius: 3, mb: 4 }}>
                <Tabs value={tab} onChange={(e, v) => setTab(v)} sx={{ borderBottom: 1, borderColor: 'divider', px: 2 }}>
                  <Tab label="Overview" />
                  <Tab label="Curriculum" />
                  <Tab label="Instructor" />
                </Tabs>
                <CardContent sx={{ p: 4 }}>
                  {tab === 0 && (
                    <Box>
                      <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>About This Course</Typography>
                      <Typography color="text.secondary" sx={{ mb: 4, lineHeight: 1.8 }}>{classData.fullDescription}</Typography>
                      <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>What You'll Learn</Typography>
                      <Grid container spacing={2}>
                        {classData.features.map((feature, i) => (
                          <Grid size={{ xs: 12, sm: 6 }} key={i}>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                              <CheckCircle sx={{ color: '#0D6E3F' }} />
                              <Typography>{feature}</Typography>
                            </Box>
                          </Grid>
                        ))}
                      </Grid>
                    </Box>
                  )}
                  {tab === 1 && (
                    <Box>
                      <Typography variant="h6" sx={{ fontWeight: 700, mb: 3 }}>Course Curriculum</Typography>
                      <List>
                        {classData.curriculum.map((item, i) => (
                          <ListItem key={i} sx={{ py: 2, borderBottom: '1px solid #eee' }}>
                            <ListItemIcon><MenuBook sx={{ color: '#0D6E3F' }} /></ListItemIcon>
                            <ListItemText primary={`Module ${i + 1}: ${item}`} />
                          </ListItem>
                        ))}
                      </List>
                    </Box>
                  )}
                  {tab === 2 && (
                    <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 3 }}>
                      <Avatar sx={{ width: 80, height: 80, border: '3px solid #D4AF37', background: 'linear-gradient(135deg, #0D6E3F 0%, #1A237E 100%)' }}>{classData.teacher.charAt(0)}</Avatar>
                      <Box>
                        <Typography variant="h6" sx={{ fontWeight: 700 }}>{classData.teacher}</Typography>
                        <Typography color="text.secondary" sx={{ mb: 2 }}>{classData.teacherBio}</Typography>
                        <Box sx={{ display: 'flex', gap: 3 }}>
                          <Box><Typography variant="h6" sx={{ color: '#0D6E3F', fontWeight: 700 }}>{classData.totalStudents}+</Typography><Typography variant="caption" color="text.secondary">Students</Typography></Box>
                          <Box><Typography variant="h6" sx={{ color: '#0D6E3F', fontWeight: 700 }}>12+</Typography><Typography variant="caption" color="text.secondary">Years Exp.</Typography></Box>
                        </Box>
                      </Box>
                    </Box>
                  )}
                </CardContent>
              </Card>
            </Grid>

            <Grid size={{ xs: 12, md: 4 }}>
              <Card sx={{ borderRadius: 3, position: 'sticky', top: 100 }}>
                <CardContent sx={{ p: 4 }}>
                  <Typography variant="h3" sx={{ fontWeight: 700, color: '#0D6E3F', mb: 1 }}>${classData.price}<Typography component="span" variant="body1" color="text.secondary">/month</Typography></Typography>
                  <Divider sx={{ my: 3 }} />
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mb: 3 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}><Typography color="text.secondary">Duration</Typography><Typography fontWeight={600}>{classData.duration}</Typography></Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}><Typography color="text.secondary">Level</Typography><Typography fontWeight={600}>{classData.level}</Typography></Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}><Typography color="text.secondary">Language</Typography><Typography fontWeight={600}>{classData.language}</Typography></Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}><Typography color="text.secondary">Available Seats</Typography><Typography fontWeight={600} color={classData.availableSeats < 5 ? 'error.main' : 'success.main'}>{classData.availableSeats}/{classData.totalSeats}</Typography></Box>
                  </Box>
                  <Button component={Link} to={`/booking/${classData.id}`} fullWidth variant="contained" size="large" endIcon={<ArrowForward />} sx={{ py: 1.5, mb: 2, background: 'linear-gradient(135deg, #0D6E3F 0%, #1A8B52 100%)', fontWeight: 600 }}>Book Now</Button>
                  <Button fullWidth variant="outlined" startIcon={<PlayCircle />} sx={{ py: 1.5, borderColor: '#0D6E3F', color: '#0D6E3F' }}>Request Free Trial</Button>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default ClassDetailsPage;
