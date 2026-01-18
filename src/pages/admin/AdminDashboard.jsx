import { Box, Container, Typography, Grid, Card, CardContent, Button, Avatar, LinearProgress, IconButton, List, ListItem, ListItemAvatar, ListItemText, Chip } from '@mui/material';
import { People, School, MenuBook, AttachMoney, TrendingUp, MoreVert, Add, ArrowUpward, Visibility } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const stats = [
  { label: 'Total Students', value: '5,248', change: '+12%', icon: <People />, color: '#0D6E3F' },
  { label: 'Active Classes', value: '156', change: '+8%', icon: <School />, color: '#D4AF37' },
  { label: 'Total Bookings', value: '1,420', change: '+23%', icon: <MenuBook />, color: '#1A237E' },
  { label: 'Revenue', value: '$48,520', change: '+18%', icon: <AttachMoney />, color: '#009688' },
];

const recentBookings = [
  { student: 'Sarah Ahmed', course: 'Tajweed Course', status: 'confirmed', time: '2 hours ago' },
  { student: 'Omar Hassan', course: 'Hifz Program', status: 'pending', time: '3 hours ago' },
  { student: 'Aisha Khan', course: 'Arabic Basics', status: 'confirmed', time: '5 hours ago' },
  { student: 'Yusuf Ali', course: 'Quran Nazra', status: 'cancelled', time: '1 day ago' },
];

const topCourses = [
  { name: 'Quran Nazra', students: 1250, revenue: 12500 },
  { name: 'Hifz Program', students: 890, revenue: 18600 },
  { name: 'Tajweed Course', students: 720, revenue: 9800 },
  { name: 'Tafseer Classes', students: 450, revenue: 6200 },
];

const AdminDashboard = () => {
  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: '#FAFAF5', py: 4 }}>
      <Container maxWidth="lg">
        {/* Header */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
          <Box>
            <Typography variant="h4" sx={{ fontWeight: 700, color: '#1A1A2E' }}>Admin Dashboard</Typography>
            <Typography color="text.secondary">Welcome back! Here's what's happening today.</Typography>
          </Box>
          <Button variant="contained" startIcon={<Add />} sx={{ background: 'linear-gradient(135deg, #0D6E3F 0%, #1A8B52 100%)' }}>Add New Class</Button>
        </Box>

        {/* Stats Cards */}
        <Grid container spacing={3} sx={{ mb: 4 }}>
          {stats.map((stat, i) => (
            <Grid size={{ xs: 12, sm: 6, md: 3 }} key={i}>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}>
                <Card sx={{ borderRadius: 3, height: '100%' }}>
                  <CardContent sx={{ p: 3 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                      <Box sx={{ width: 50, height: 50, borderRadius: 2, backgroundColor: `${stat.color}15`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: stat.color }}>
                        {stat.icon}
                      </Box>
                      <Chip icon={<ArrowUpward sx={{ fontSize: 14 }} />} label={stat.change} size="small" sx={{ backgroundColor: '#E8F5E9', color: '#0D6E3F', fontWeight: 600 }} />
                    </Box>
                    <Typography variant="h4" sx={{ fontWeight: 700, color: '#1A1A2E' }}>{stat.value}</Typography>
                    <Typography color="text.secondary">{stat.label}</Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        <Grid container spacing={4}>
          {/* Recent Bookings */}
          <Grid size={{ xs: 12, md: 7 }}>
            <Card sx={{ borderRadius: 3, height: '100%' }}>
              <CardContent sx={{ p: 3 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                  <Typography variant="h6" sx={{ fontWeight: 700 }}>Recent Bookings</Typography>
                  <Button component={Link} to="/admin/bookings" endIcon={<Visibility />} sx={{ color: '#0D6E3F' }}>View All</Button>
                </Box>
                <List sx={{ p: 0 }}>
                  {recentBookings.map((booking, i) => (
                    <ListItem key={i} sx={{ px: 0, py: 2, borderBottom: i < recentBookings.length - 1 ? '1px solid #eee' : 'none' }}>
                      <ListItemAvatar>
                        <Avatar sx={{ backgroundColor: '#0D6E3F' }}>{booking.student.charAt(0)}</Avatar>
                      </ListItemAvatar>
                      <ListItemText
                        primary={<Typography fontWeight={600}>{booking.student}</Typography>}
                        secondary={<Typography variant="body2" color="text.secondary">{booking.course} • {booking.time}</Typography>}
                      />
                      <Chip label={booking.status} size="small" sx={{
                        backgroundColor: booking.status === 'confirmed' ? '#E8F5E9' : booking.status === 'pending' ? '#FFF3E0' : '#FFEBEE',
                        color: booking.status === 'confirmed' ? '#0D6E3F' : booking.status === 'pending' ? '#E65100' : '#C62828',
                        fontWeight: 600, textTransform: 'capitalize'
                      }} />
                    </ListItem>
                  ))}
                </List>
              </CardContent>
            </Card>
          </Grid>

          {/* Top Courses */}
          <Grid size={{ xs: 12, md: 5 }}>
            <Card sx={{ borderRadius: 3, height: '100%' }}>
              <CardContent sx={{ p: 3 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                  <Typography variant="h6" sx={{ fontWeight: 700 }}>Top Courses</Typography>
                  <IconButton size="small"><MoreVert /></IconButton>
                </Box>
                {topCourses.map((course, i) => (
                  <Box key={i} sx={{ mb: 3 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                      <Typography fontWeight={600}>{course.name}</Typography>
                      <Typography color="text.secondary">{course.students} students</Typography>
                    </Box>
                    <LinearProgress variant="determinate" value={(course.students / 1250) * 100} sx={{ height: 8, borderRadius: 4, backgroundColor: '#E0E0E0', '& .MuiLinearProgress-bar': { backgroundColor: i === 0 ? '#0D6E3F' : i === 1 ? '#D4AF37' : i === 2 ? '#1A237E' : '#009688', borderRadius: 4 } }} />
                  </Box>
                ))}
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* Quick Actions */}
        <Grid container spacing={3} sx={{ mt: 2 }}>
          {[
            { label: 'Manage Classes', path: '/admin/classes', icon: <School />, color: '#0D6E3F' },
            { label: 'Manage Students', path: '/admin/students', icon: <People />, color: '#D4AF37' },
            { label: 'Manage Bookings', path: '/admin/bookings', icon: <MenuBook />, color: '#1A237E' },
          ].map((action, i) => (
            <Grid size={{ xs: 12, sm: 4 }} key={i}>
              <Button component={Link} to={action.path} fullWidth variant="outlined" startIcon={action.icon}
                sx={{ py: 2, borderColor: action.color, color: action.color, fontWeight: 600, '&:hover': { borderColor: action.color, backgroundColor: `${action.color}10` } }}>
                {action.label}
              </Button>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default AdminDashboard;
