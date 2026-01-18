import { Box, Container, Typography, Grid, Card, CardContent, Avatar, Button, LinearProgress, Chip, List, ListItem, ListItemAvatar, ListItemText, IconButton } from '@mui/material';
import { CalendarMonth, AccessTime, School, MenuBook, TrendingUp, Notifications, ArrowForward, PlayCircle, VideoCall } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const upcomingClasses = [
  { id: 1, title: 'Tajweed Rules - Lesson 12', teacher: 'Qari Yusuf', time: '10:00 AM', date: 'Today', type: 'Live' },
  { id: 2, title: 'Hifz Revision - Juz 5', teacher: 'Hafiz Ibrahim', time: '2:00 PM', date: 'Tomorrow', type: 'Live' },
  { id: 3, title: 'Arabic Grammar - Basics', teacher: 'Ustadh Hassan', time: '4:00 PM', date: 'Jan 18', type: 'Recorded' },
];

const progress = [
  { course: 'Tajweed Course', progress: 65, color: '#0D6E3F' },
  { course: 'Hifz Program', progress: 40, color: '#D4AF37' },
  { course: 'Arabic Language', progress: 25, color: '#1A237E' },
];

const StudentDashboard = () => {
  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: '#FAFAF5', py: 4 }}>
      <Container maxWidth="lg">
        {/* Welcome Section */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <Card sx={{ mb: 4, borderRadius: 3, background: 'linear-gradient(135deg, #0D6E3F 0%, #1A237E 100%)', color: 'white', position: 'relative', overflow: 'hidden' }}>
            <Box sx={{ position: 'absolute', right: -50, top: -50, width: 200, height: 200, borderRadius: '50%', background: 'rgba(212,175,55,0.1)' }} />
            <CardContent sx={{ p: 4, position: 'relative' }}>
              <Grid container alignItems="center" spacing={3}>
                <Grid size={{ xs: 12, md: 8 }}>
                  <Typography variant="h4" sx={{ fontWeight: 700, mb: 1 }}>Assalamu Alaikum, Ahmed! 👋</Typography>
                  <Typography sx={{ opacity: 0.9, mb: 2 }}>Welcome back! You have 2 classes scheduled today. Keep up the great work on your Quran journey!</Typography>
                  <Box sx={{ display: 'flex', gap: 2 }}>
                    <Chip icon={<School sx={{ color: '#D4AF37 !important' }} />} label="3 Active Courses" sx={{ backgroundColor: 'rgba(255,255,255,0.2)', color: 'white' }} />
                    <Chip icon={<TrendingUp sx={{ color: '#D4AF37 !important' }} />} label="15 Day Streak" sx={{ backgroundColor: 'rgba(255,255,255,0.2)', color: 'white' }} />
                  </Box>
                </Grid>
                <Grid size={{ xs: 12, md: 4 }} sx={{ textAlign: 'right' }}>
                  <Button variant="contained" startIcon={<VideoCall />} sx={{ background: '#D4AF37', color: '#1A1A2E', fontWeight: 600, '&:hover': { background: '#E4C567' } }}>
                    Join Next Class
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </motion.div>

        <Grid container spacing={4}>
          {/* Stats Cards */}
          <Grid size={{ xs: 12, md: 8 }}>
            <Grid container spacing={3}>
              {[
                { label: 'Total Classes', value: '48', icon: <School />, color: '#0D6E3F' },
                { label: 'Hours Learned', value: '72', icon: <AccessTime />, color: '#D4AF37' },
                { label: 'Completed Lessons', value: '36', icon: <MenuBook />, color: '#1A237E' },
              ].map((stat, i) => (
                <Grid size={{ xs: 12, sm: 4 }} key={i}>
                  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}>
                    <Card sx={{ borderRadius: 3, height: '100%' }}>
                      <CardContent sx={{ p: 3 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
                          <Box sx={{ width: 50, height: 50, borderRadius: 2, backgroundColor: `${stat.color}15`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: stat.color }}>{stat.icon}</Box>
                        </Box>
                        <Typography variant="h4" sx={{ fontWeight: 700, color: '#1A1A2E' }}>{stat.value}</Typography>
                        <Typography color="text.secondary">{stat.label}</Typography>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Grid>
              ))}
            </Grid>

            {/* Course Progress */}
            <Card sx={{ mt: 4, borderRadius: 3 }}>
              <CardContent sx={{ p: 4 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                  <Typography variant="h6" sx={{ fontWeight: 700 }}>Course Progress</Typography>
                  <Button component={Link} to="/student/courses" endIcon={<ArrowForward />} sx={{ color: '#0D6E3F' }}>View All</Button>
                </Box>
                {progress.map((course, i) => (
                  <Box key={i} sx={{ mb: 3 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                      <Typography fontWeight={600}>{course.course}</Typography>
                      <Typography color="text.secondary">{course.progress}%</Typography>
                    </Box>
                    <LinearProgress variant="determinate" value={course.progress} sx={{ height: 8, borderRadius: 4, backgroundColor: '#E0E0E0', '& .MuiLinearProgress-bar': { backgroundColor: course.color, borderRadius: 4 } }} />
                  </Box>
                ))}
              </CardContent>
            </Card>
          </Grid>

          {/* Upcoming Classes */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Card sx={{ borderRadius: 3, height: '100%' }}>
              <CardContent sx={{ p: 4 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                  <Typography variant="h6" sx={{ fontWeight: 700 }}>Upcoming Classes</Typography>
                  <IconButton size="small"><Notifications sx={{ color: '#0D6E3F' }} /></IconButton>
                </Box>
                <List sx={{ p: 0 }}>
                  {upcomingClasses.map((cls, i) => (
                    <ListItem key={i} sx={{ px: 0, py: 2, borderBottom: i < upcomingClasses.length - 1 ? '1px solid #eee' : 'none' }}>
                      <ListItemAvatar>
                        <Avatar sx={{ backgroundColor: cls.type === 'Live' ? '#0D6E3F' : '#1A237E' }}>
                          {cls.type === 'Live' ? <VideoCall /> : <PlayCircle />}
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText
                        primary={<Typography fontWeight={600} sx={{ fontSize: '0.95rem' }}>{cls.title}</Typography>}
                        secondary={
                          <Box sx={{ display: 'flex', gap: 1, mt: 0.5 }}>
                            <Chip size="small" label={cls.date} sx={{ height: 22, fontSize: '0.75rem' }} />
                            <Chip size="small" label={cls.time} sx={{ height: 22, fontSize: '0.75rem' }} />
                          </Box>
                        }
                      />
                    </ListItem>
                  ))}
                </List>
                <Button component={Link} to="/student/bookings" fullWidth variant="outlined" sx={{ mt: 2, borderColor: '#0D6E3F', color: '#0D6E3F' }}>View All Bookings</Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default StudentDashboard;
