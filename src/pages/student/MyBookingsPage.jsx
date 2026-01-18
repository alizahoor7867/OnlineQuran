import { useState } from 'react';
import { Box, Container, Typography, Card, CardContent, Tabs, Tab, Chip, Button, Avatar, Grid, IconButton, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import { CalendarMonth, AccessTime, Person, VideoCall, Cancel, Refresh, CheckCircle, Schedule } from '@mui/icons-material';
import { motion } from 'framer-motion';

const bookings = [
  { id: 1, title: 'Tajweed Rules - Lesson 12', teacher: 'Qari Yusuf', date: 'Jan 16, 2024', time: '10:00 AM', status: 'upcoming', type: 'Live' },
  { id: 2, title: 'Hifz Revision - Juz 5', teacher: 'Hafiz Ibrahim', date: 'Jan 17, 2024', time: '2:00 PM', status: 'upcoming', type: 'Live' },
  { id: 3, title: 'Arabic Grammar - Basics', teacher: 'Ustadh Hassan', date: 'Jan 18, 2024', time: '4:00 PM', status: 'upcoming', type: 'Recorded' },
  { id: 4, title: 'Tajweed Rules - Lesson 11', teacher: 'Qari Yusuf', date: 'Jan 14, 2024', time: '10:00 AM', status: 'completed', type: 'Live' },
  { id: 5, title: 'Hifz Revision - Juz 4', teacher: 'Hafiz Ibrahim', date: 'Jan 12, 2024', time: '2:00 PM', status: 'completed', type: 'Live' },
  { id: 6, title: 'Arabic Grammar - Intro', teacher: 'Ustadh Hassan', date: 'Jan 10, 2024', time: '4:00 PM', status: 'cancelled', type: 'Live' },
];

const MyBookingsPage = () => {
  const [tab, setTab] = useState(0);
  const [cancelDialog, setCancelDialog] = useState({ open: false, booking: null });

  const filteredBookings = bookings.filter((b) => {
    if (tab === 0) return b.status === 'upcoming';
    if (tab === 1) return b.status === 'completed';
    return b.status === 'cancelled';
  });

  const getStatusColor = (status) => {
    switch (status) {
      case 'upcoming': return '#0D6E3F';
      case 'completed': return '#1A237E';
      case 'cancelled': return '#D32F2F';
      default: return '#6C757D';
    }
  };

  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: '#FAFAF5', py: 4 }}>
      <Container maxWidth="lg">
        <Typography variant="h4" sx={{ fontWeight: 700, mb: 4, color: '#1A1A2E' }}>My Bookings</Typography>

        <Card sx={{ borderRadius: 3 }}>
          <Tabs value={tab} onChange={(e, v) => setTab(v)} sx={{ borderBottom: 1, borderColor: 'divider', px: 2 }}>
            <Tab label={`Upcoming (${bookings.filter(b => b.status === 'upcoming').length})`} />
            <Tab label={`Completed (${bookings.filter(b => b.status === 'completed').length})`} />
            <Tab label={`Cancelled (${bookings.filter(b => b.status === 'cancelled').length})`} />
          </Tabs>

          <CardContent sx={{ p: 3 }}>
            {filteredBookings.length > 0 ? (
              <Grid container spacing={3}>
                {filteredBookings.map((booking, i) => (
                  <Grid size={{ xs: 12, md: 6 }} key={booking.id}>
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}>
                      <Card sx={{ borderRadius: 3, border: '1px solid #eee', '&:hover': { boxShadow: '0 8px 24px rgba(0,0,0,0.1)' } }}>
                        <CardContent sx={{ p: 3 }}>
                          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                            <Box>
                              <Typography variant="h6" sx={{ fontWeight: 700 }}>{booking.title}</Typography>
                              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 1 }}>
                                <Person sx={{ fontSize: 18, color: '#6C757D' }} />
                                <Typography variant="body2" color="text.secondary">{booking.teacher}</Typography>
                              </Box>
                            </Box>
                            <Chip label={booking.status} size="small" sx={{ backgroundColor: `${getStatusColor(booking.status)}15`, color: getStatusColor(booking.status), fontWeight: 600, textTransform: 'capitalize' }} />
                          </Box>

                          <Box sx={{ display: 'flex', gap: 3, mb: 3 }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                              <CalendarMonth sx={{ fontSize: 18, color: '#0D6E3F' }} />
                              <Typography variant="body2">{booking.date}</Typography>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                              <AccessTime sx={{ fontSize: 18, color: '#D4AF37' }} />
                              <Typography variant="body2">{booking.time}</Typography>
                            </Box>
                          </Box>

                          {booking.status === 'upcoming' && (
                            <Box sx={{ display: 'flex', gap: 2 }}>
                              <Button variant="contained" startIcon={<VideoCall />} sx={{ flex: 1, background: 'linear-gradient(135deg, #0D6E3F 0%, #1A8B52 100%)' }}>Join Class</Button>
                              <Button variant="outlined" startIcon={<Refresh />} sx={{ borderColor: '#0D6E3F', color: '#0D6E3F' }}>Reschedule</Button>
                              <IconButton onClick={() => setCancelDialog({ open: true, booking })} sx={{ color: '#D32F2F' }}><Cancel /></IconButton>
                            </Box>
                          )}
                          {booking.status === 'completed' && (
                            <Button variant="outlined" fullWidth sx={{ borderColor: '#1A237E', color: '#1A237E' }}>View Recording</Button>
                          )}
                        </CardContent>
                      </Card>
                    </motion.div>
                  </Grid>
                ))}
              </Grid>
            ) : (
              <Box sx={{ textAlign: 'center', py: 8 }}>
                <Schedule sx={{ fontSize: 60, color: '#D4AF37', mb: 2 }} />
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>No Bookings Found</Typography>
                <Typography color="text.secondary">You don't have any {tab === 0 ? 'upcoming' : tab === 1 ? 'completed' : 'cancelled'} bookings.</Typography>
              </Box>
            )}
          </CardContent>
        </Card>

        {/* Cancel Dialog */}
        <Dialog open={cancelDialog.open} onClose={() => setCancelDialog({ open: false, booking: null })}>
          <DialogTitle>Cancel Booking?</DialogTitle>
          <DialogContent>
            <Typography>Are you sure you want to cancel "{cancelDialog.booking?.title}"? This action cannot be undone.</Typography>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setCancelDialog({ open: false, booking: null })}>Keep Booking</Button>
            <Button color="error" variant="contained">Cancel Booking</Button>
          </DialogActions>
        </Dialog>
      </Container>
    </Box>
  );
};

export default MyBookingsPage;
