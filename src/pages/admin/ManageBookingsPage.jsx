import { useState } from 'react';
import { Box, Container, Typography, Card, CardContent, TextField, InputAdornment, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TablePagination, Chip, IconButton, Button, Tabs, Tab } from '@mui/material';
import { Search, CheckCircle, Cancel, Visibility, FilterList } from '@mui/icons-material';

const bookings = [
  { id: 'BK001', student: 'Sarah Ahmed', course: 'Tajweed Course', teacher: 'Qari Yusuf', date: 'Jan 16, 2024', time: '10:00 AM', status: 'confirmed' },
  { id: 'BK002', student: 'Omar Hassan', course: 'Hifz Program', teacher: 'Hafiz Ibrahim', date: 'Jan 17, 2024', time: '2:00 PM', status: 'pending' },
  { id: 'BK003', student: 'Aisha Khan', course: 'Arabic Basics', teacher: 'Ustadh Hassan', date: 'Jan 18, 2024', time: '4:00 PM', status: 'confirmed' },
  { id: 'BK004', student: 'Yusuf Ali', course: 'Quran Nazra', teacher: 'Sheikh Ahmad', date: 'Jan 19, 2024', time: '11:00 AM', status: 'cancelled' },
  { id: 'BK005', student: 'Fatima Noor', course: 'Tafseer', teacher: 'Dr. Fatima', date: 'Jan 20, 2024', time: '3:00 PM', status: 'pending' },
];

const ManageBookingsPage = () => {
  const [page, setPage] = useState(0);
  const [search, setSearch] = useState('');
  const [tab, setTab] = useState(0);

  const getFilteredBookings = () => {
    let filtered = bookings.filter(b => b.student.toLowerCase().includes(search.toLowerCase()) || b.id.toLowerCase().includes(search.toLowerCase()));
    if (tab === 1) return filtered.filter(b => b.status === 'pending');
    if (tab === 2) return filtered.filter(b => b.status === 'confirmed');
    if (tab === 3) return filtered.filter(b => b.status === 'cancelled');
    return filtered;
  };

  const filteredBookings = getFilteredBookings();

  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: '#FAFAF5', py: 4 }}>
      <Container maxWidth="lg">
        <Typography variant="h4" sx={{ fontWeight: 700, mb: 4, color: '#1A1A2E' }}>Manage Bookings</Typography>

        <Card sx={{ borderRadius: 3 }}>
          <Tabs value={tab} onChange={(e, v) => setTab(v)} sx={{ borderBottom: 1, borderColor: 'divider', px: 2 }}>
            <Tab label={`All (${bookings.length})`} />
            <Tab label={`Pending (${bookings.filter(b => b.status === 'pending').length})`} />
            <Tab label={`Confirmed (${bookings.filter(b => b.status === 'confirmed').length})`} />
            <Tab label={`Cancelled (${bookings.filter(b => b.status === 'cancelled').length})`} />
          </Tabs>

          <CardContent sx={{ p: 3 }}>
            <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
              <TextField placeholder="Search bookings..." value={search} onChange={(e) => setSearch(e.target.value)} sx={{ flex: 1 }}
                InputProps={{ startAdornment: <InputAdornment position="start"><Search /></InputAdornment> }} />
              <Button variant="outlined" startIcon={<FilterList />} sx={{ borderColor: '#0D6E3F', color: '#0D6E3F' }}>Filters</Button>
            </Box>

            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow sx={{ backgroundColor: '#f5f5f5' }}>
                    <TableCell sx={{ fontWeight: 700 }}>Booking ID</TableCell>
                    <TableCell sx={{ fontWeight: 700 }}>Student</TableCell>
                    <TableCell sx={{ fontWeight: 700 }}>Course</TableCell>
                    <TableCell sx={{ fontWeight: 700 }}>Teacher</TableCell>
                    <TableCell sx={{ fontWeight: 700 }}>Date & Time</TableCell>
                    <TableCell sx={{ fontWeight: 700 }}>Status</TableCell>
                    <TableCell sx={{ fontWeight: 700 }}>Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {filteredBookings.slice(page * 5, page * 5 + 5).map((booking) => (
                    <TableRow key={booking.id} hover>
                      <TableCell><Typography fontWeight={600} sx={{ color: '#0D6E3F' }}>{booking.id}</Typography></TableCell>
                      <TableCell>{booking.student}</TableCell>
                      <TableCell>{booking.course}</TableCell>
                      <TableCell>{booking.teacher}</TableCell>
                      <TableCell>{booking.date} • {booking.time}</TableCell>
                      <TableCell>
                        <Chip label={booking.status} size="small" sx={{
                          backgroundColor: booking.status === 'confirmed' ? '#E8F5E9' : booking.status === 'pending' ? '#FFF3E0' : '#FFEBEE',
                          color: booking.status === 'confirmed' ? '#0D6E3F' : booking.status === 'pending' ? '#E65100' : '#C62828',
                          textTransform: 'capitalize', fontWeight: 600
                        }} />
                      </TableCell>
                      <TableCell>
                        <IconButton size="small" sx={{ color: '#0D6E3F' }}><Visibility fontSize="small" /></IconButton>
                        {booking.status === 'pending' && (
                          <>
                            <IconButton size="small" sx={{ color: '#0D6E3F' }}><CheckCircle fontSize="small" /></IconButton>
                            <IconButton size="small" sx={{ color: '#D32F2F' }}><Cancel fontSize="small" /></IconButton>
                          </>
                        )}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination component="div" count={filteredBookings.length} page={page} onPageChange={(e, p) => setPage(p)} rowsPerPage={5} rowsPerPageOptions={[5]} />
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
};

export default ManageBookingsPage;
