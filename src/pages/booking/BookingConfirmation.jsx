import { Box, Container, Typography, Card, CardContent, Button, Grid, Divider } from '@mui/material';
import { CheckCircle, CalendarMonth, AccessTime, Person, Download, Home, School } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const bookingDetails = {
  id: 'BK-2024-001',
  title: 'Complete Tajweed Course',
  teacher: 'Qari Yusuf Mohammed',
  day: 'Monday',
  time: '10:00 AM',
  frequency: 'Weekly',
  startDate: 'January 20, 2024',
  price: 59,
};

const BookingConfirmation = () => {
  return (
    <Box sx={{ minHeight: '100vh', py: 8, background: 'linear-gradient(135deg, rgba(13, 110, 63, 0.05) 0%, rgba(26, 35, 126, 0.05) 100%)' }} className="geometric-pattern">
      <Container maxWidth="sm">
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
          <Card sx={{ borderRadius: 4, textAlign: 'center', overflow: 'hidden' }}>
            {/* Success Header */}
            <Box sx={{ p: 4, background: 'linear-gradient(135deg, #0D6E3F 0%, #1A8B52 100%)' }}>
              <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.2, type: 'spring' }}>
                <Box sx={{ width: 80, height: 80, borderRadius: '50%', backgroundColor: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', mx: 'auto', mb: 2 }}>
                  <CheckCircle sx={{ fontSize: 50, color: '#0D6E3F' }} />
                </Box>
              </motion.div>
              <Typography variant="h4" sx={{ color: 'white', fontWeight: 700, mb: 1 }}>Booking Confirmed!</Typography>
              <Typography sx={{ color: 'rgba(255,255,255,0.9)' }}>Your class has been successfully booked</Typography>
            </Box>

            <CardContent sx={{ p: 4 }}>
              {/* Booking ID */}
              <Box sx={{ backgroundColor: '#f5f5f5', borderRadius: 2, p: 2, mb: 3 }}>
                <Typography variant="caption" color="text.secondary">Booking Reference</Typography>
                <Typography variant="h6" sx={{ fontWeight: 700, color: '#0D6E3F' }}>{bookingDetails.id}</Typography>
              </Box>

              {/* Details */}
              <Box sx={{ textAlign: 'left', mb: 3 }}>
                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>{bookingDetails.title}</Typography>
                
                <Grid container spacing={2}>
                  <Grid size={6}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                      <Person sx={{ color: '#0D6E3F' }} />
                      <Box>
                        <Typography variant="caption" color="text.secondary">Teacher</Typography>
                        <Typography variant="body2" fontWeight={600}>{bookingDetails.teacher}</Typography>
                      </Box>
                    </Box>
                  </Grid>
                  <Grid size={6}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                      <CalendarMonth sx={{ color: '#D4AF37' }} />
                      <Box>
                        <Typography variant="caption" color="text.secondary">Day</Typography>
                        <Typography variant="body2" fontWeight={600}>{bookingDetails.day}</Typography>
                      </Box>
                    </Box>
                  </Grid>
                  <Grid size={6}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <AccessTime sx={{ color: '#1A237E' }} />
                      <Box>
                        <Typography variant="caption" color="text.secondary">Time</Typography>
                        <Typography variant="body2" fontWeight={600}>{bookingDetails.time}</Typography>
                      </Box>
                    </Box>
                  </Grid>
                  <Grid size={6}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <School sx={{ color: '#0D6E3F' }} />
                      <Box>
                        <Typography variant="caption" color="text.secondary">Starts</Typography>
                        <Typography variant="body2" fontWeight={600}>{bookingDetails.startDate}</Typography>
                      </Box>
                    </Box>
                  </Grid>
                </Grid>
              </Box>

              <Divider sx={{ my: 3 }} />

              {/* Payment */}
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                <Typography color="text.secondary">Monthly Fee</Typography>
                <Typography variant="h5" sx={{ fontWeight: 700, color: '#0D6E3F' }}>${bookingDetails.price}/mo</Typography>
              </Box>

              {/* Actions */}
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Button component={Link} to="/student/dashboard" fullWidth variant="contained" startIcon={<Home />} sx={{ py: 1.5, background: 'linear-gradient(135deg, #0D6E3F 0%, #1A8B52 100%)', fontWeight: 600 }}>
                  Go to Dashboard
                </Button>
                <Button component={Link} to="/classes" fullWidth variant="outlined" startIcon={<School />} sx={{ py: 1.5, borderColor: '#0D6E3F', color: '#0D6E3F' }}>
                  Browse More Classes
                </Button>
              </Box>

              {/* Info */}
              <Typography variant="body2" color="text.secondary" sx={{ mt: 3, lineHeight: 1.6 }}>
                A confirmation email has been sent to your registered email address. 
                You'll receive a reminder before each class.
              </Typography>
            </CardContent>
          </Card>
        </motion.div>
      </Container>
    </Box>
  );
};

export default BookingConfirmation;
