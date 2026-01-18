import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Box, Container, Typography, Grid, Card, CardContent, Button, Chip, Stepper, Step, StepLabel, ToggleButton, ToggleButtonGroup, Divider, Alert } from '@mui/material';
import { CalendarMonth, AccessTime, CheckCircle, ArrowForward, ArrowBack } from '@mui/icons-material';
import { motion } from 'framer-motion';

const timeSlots = [
  '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
  '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM', '7:00 PM', '8:00 PM'
];

const days = ['Mon 15', 'Tue 16', 'Wed 17', 'Thu 18', 'Fri 19', 'Sat 20', 'Sun 21'];

const steps = ['Select Date & Time', 'Confirm Booking'];

const classInfo = { title: 'Complete Tajweed Course', teacher: 'Qari Yusuf Mohammed', price: 59, duration: '45 min/session' };

const BookingPage = () => {
  const { classId } = useParams();
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState(0);
  const [selectedDay, setSelectedDay] = useState('Mon 15');
  const [selectedTime, setSelectedTime] = useState('');
  const [frequency, setFrequency] = useState('weekly');

  const handleConfirm = () => navigate('/booking/confirmation');

  return (
    <Box sx={{ minHeight: '100vh', py: 4, backgroundColor: '#FAFAF5' }} className="geometric-pattern">
      <Container maxWidth="lg">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <Typography variant="h4" sx={{ fontWeight: 700, mb: 1, color: '#1A1A2E' }}>Book Your Class</Typography>
          <Typography color="text.secondary" sx={{ mb: 4 }}>Select your preferred date and time for {classInfo.title}</Typography>

          <Stepper activeStep={activeStep} sx={{ mb: 4 }}>
            {steps.map((label) => <Step key={label}><StepLabel>{label}</StepLabel></Step>)}
          </Stepper>

          <Grid container spacing={4}>
            <Grid size={{ xs: 12, md: 8 }}>
              {activeStep === 0 && (
                <Card sx={{ borderRadius: 3 }}>
                  <CardContent sx={{ p: 4 }}>
                    {/* Frequency Selection */}
                    <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>Session Frequency</Typography>
                    <ToggleButtonGroup value={frequency} exclusive onChange={(e, v) => v && setFrequency(v)} sx={{ mb: 4 }}>
                      {['weekly', 'biweekly', 'daily'].map((f) => (
                        <ToggleButton key={f} value={f} sx={{ px: 4, textTransform: 'capitalize', '&.Mui-selected': { backgroundColor: '#0D6E3F', color: 'white', '&:hover': { backgroundColor: '#0A5530' } } }}>{f}</ToggleButton>
                      ))}
                    </ToggleButtonGroup>

                    {/* Day Selection */}
                    <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}><CalendarMonth sx={{ mr: 1, verticalAlign: 'middle' }} />Select Day</Typography>
                    <Box sx={{ display: 'flex', gap: 1.5, flexWrap: 'wrap', mb: 4 }}>
                      {days.map((day) => (
                        <Chip key={day} label={day} onClick={() => setSelectedDay(day)}
                          sx={{ px: 2, py: 2.5, fontSize: '0.9rem', fontWeight: 600, backgroundColor: selectedDay === day ? '#0D6E3F' : 'white', color: selectedDay === day ? 'white' : '#1A1A2E', border: selectedDay === day ? 'none' : '1px solid #ddd', cursor: 'pointer', '&:hover': { backgroundColor: selectedDay === day ? '#0A5530' : '#f5f5f5' } }} />
                      ))}
                    </Box>

                    {/* Time Selection */}
                    <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}><AccessTime sx={{ mr: 1, verticalAlign: 'middle' }} />Select Time</Typography>
                    <Grid container spacing={1.5}>
                      {timeSlots.map((time) => (
                        <Grid size={{ xs: 4, sm: 3, md: 2 }} key={time}>
                          <Button fullWidth variant={selectedTime === time ? 'contained' : 'outlined'} onClick={() => setSelectedTime(time)}
                            sx={{ py: 1.5, fontWeight: 600, borderColor: '#ddd', color: selectedTime === time ? 'white' : '#1A1A2E', backgroundColor: selectedTime === time ? '#0D6E3F' : 'white', '&:hover': { backgroundColor: selectedTime === time ? '#0A5530' : '#f5f5f5', borderColor: '#0D6E3F' } }}>
                            {time}
                          </Button>
                        </Grid>
                      ))}
                    </Grid>

                    {!selectedTime && <Alert severity="info" sx={{ mt: 3 }}>Please select a time slot to continue</Alert>}
                  </CardContent>
                </Card>
              )}

              {activeStep === 1 && (
                <Card sx={{ borderRadius: 3 }}>
                  <CardContent sx={{ p: 4 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
                      <CheckCircle sx={{ color: '#0D6E3F', fontSize: 28 }} />
                      <Typography variant="h6" sx={{ fontWeight: 700 }}>Confirm Your Booking</Typography>
                    </Box>
                    <Alert severity="success" sx={{ mb: 3 }}>Your selected slot is available! Please confirm your booking.</Alert>
                    
                    <Box sx={{ backgroundColor: '#f5f5f5', borderRadius: 2, p: 3 }}>
                      <Typography variant="subtitle2" color="text.secondary">Session Details</Typography>
                      <Typography variant="h6" sx={{ fontWeight: 700, mt: 1 }}>{classInfo.title}</Typography>
                      <Typography color="text.secondary" sx={{ mb: 2 }}>with {classInfo.teacher}</Typography>
                      <Divider sx={{ my: 2 }} />
                      <Grid container spacing={2}>
                        <Grid size={6}><Typography color="text.secondary">Day</Typography><Typography fontWeight={600}>{selectedDay}</Typography></Grid>
                        <Grid size={6}><Typography color="text.secondary">Time</Typography><Typography fontWeight={600}>{selectedTime}</Typography></Grid>
                        <Grid size={6}><Typography color="text.secondary">Frequency</Typography><Typography fontWeight={600} sx={{ textTransform: 'capitalize' }}>{frequency}</Typography></Grid>
                        <Grid size={6}><Typography color="text.secondary">Duration</Typography><Typography fontWeight={600}>{classInfo.duration}</Typography></Grid>
                      </Grid>
                    </Box>
                  </CardContent>
                </Card>
              )}
            </Grid>

            {/* Summary Card */}
            <Grid size={{ xs: 12, md: 4 }}>
              <Card sx={{ borderRadius: 3, position: 'sticky', top: 100 }}>
                <CardContent sx={{ p: 4 }}>
                  <Typography variant="h6" sx={{ fontWeight: 700, mb: 3 }}>Booking Summary</Typography>
                  <Box sx={{ mb: 3 }}>
                    <Typography fontWeight={600}>{classInfo.title}</Typography>
                    <Typography variant="body2" color="text.secondary">{classInfo.teacher}</Typography>
                  </Box>
                  {selectedDay && selectedTime && (
                    <Box sx={{ backgroundColor: '#f5f5f5', borderRadius: 2, p: 2, mb: 3 }}>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}><Typography variant="body2" color="text.secondary">Date</Typography><Typography variant="body2" fontWeight={600}>{selectedDay}</Typography></Box>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}><Typography variant="body2" color="text.secondary">Time</Typography><Typography variant="body2" fontWeight={600}>{selectedTime}</Typography></Box>
                    </Box>
                  )}
                  <Divider sx={{ my: 2 }} />
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
                    <Typography fontWeight={600}>Monthly Fee</Typography>
                    <Typography variant="h5" sx={{ fontWeight: 700, color: '#0D6E3F' }}>${classInfo.price}</Typography>
                  </Box>

                  <Box sx={{ display: 'flex', gap: 2 }}>
                    {activeStep > 0 && <Button onClick={() => setActiveStep(0)} startIcon={<ArrowBack />} sx={{ color: '#6C757D' }}>Back</Button>}
                    <Button fullWidth variant="contained" onClick={() => activeStep === 0 ? setActiveStep(1) : handleConfirm()} disabled={!selectedTime} endIcon={<ArrowForward />} sx={{ py: 1.5, background: 'linear-gradient(135deg, #0D6E3F 0%, #1A8B52 100%)', fontWeight: 600 }}>
                      {activeStep === 0 ? 'Continue' : 'Confirm Booking'}
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default BookingPage;
