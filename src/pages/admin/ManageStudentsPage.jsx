import { useState } from 'react';
import { Box, Container, Typography, Card, CardContent, TextField, InputAdornment, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TablePagination, Chip, IconButton, Avatar, Button } from '@mui/material';
import { Search, Visibility, Delete, FilterList, Email, Download } from '@mui/icons-material';

const students = [
  { id: 1, name: 'Sarah Ahmed', email: 'sarah@email.com', phone: '+1 555-1234', courses: 2, joined: 'Jan 10, 2024', status: 'active' },
  { id: 2, name: 'Omar Hassan', email: 'omar@email.com', phone: '+1 555-2345', courses: 1, joined: 'Jan 12, 2024', status: 'active' },
  { id: 3, name: 'Aisha Khan', email: 'aisha@email.com', phone: '+1 555-3456', courses: 3, joined: 'Jan 8, 2024', status: 'active' },
  { id: 4, name: 'Yusuf Ali', email: 'yusuf@email.com', phone: '+1 555-4567', courses: 1, joined: 'Jan 5, 2024', status: 'inactive' },
  { id: 5, name: 'Fatima Noor', email: 'fatima@email.com', phone: '+1 555-5678', courses: 2, joined: 'Jan 3, 2024', status: 'active' },
];

const ManageStudentsPage = () => {
  const [page, setPage] = useState(0);
  const [search, setSearch] = useState('');

  const filteredStudents = students.filter(s => s.name.toLowerCase().includes(search.toLowerCase()) || s.email.toLowerCase().includes(search.toLowerCase()));

  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: '#FAFAF5', py: 4 }}>
      <Container maxWidth="lg">
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
          <Typography variant="h4" sx={{ fontWeight: 700, color: '#1A1A2E' }}>Manage Students</Typography>
          <Button variant="outlined" startIcon={<Download />} sx={{ borderColor: '#0D6E3F', color: '#0D6E3F' }}>Export CSV</Button>
        </Box>

        <Card sx={{ borderRadius: 3 }}>
          <CardContent sx={{ p: 3 }}>
            <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
              <TextField placeholder="Search students..." value={search} onChange={(e) => setSearch(e.target.value)} sx={{ flex: 1 }}
                InputProps={{ startAdornment: <InputAdornment position="start"><Search /></InputAdornment> }} />
              <Button variant="outlined" startIcon={<FilterList />} sx={{ borderColor: '#0D6E3F', color: '#0D6E3F' }}>Filters</Button>
            </Box>

            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow sx={{ backgroundColor: '#f5f5f5' }}>
                    <TableCell sx={{ fontWeight: 700 }}>Student</TableCell>
                    <TableCell sx={{ fontWeight: 700 }}>Email</TableCell>
                    <TableCell sx={{ fontWeight: 700 }}>Phone</TableCell>
                    <TableCell sx={{ fontWeight: 700 }}>Courses</TableCell>
                    <TableCell sx={{ fontWeight: 700 }}>Joined</TableCell>
                    <TableCell sx={{ fontWeight: 700 }}>Status</TableCell>
                    <TableCell sx={{ fontWeight: 700 }}>Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {filteredStudents.slice(page * 5, page * 5 + 5).map((student) => (
                    <TableRow key={student.id} hover>
                      <TableCell>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                          <Avatar sx={{ backgroundColor: '#0D6E3F' }}>{student.name.charAt(0)}</Avatar>
                          <Typography fontWeight={600}>{student.name}</Typography>
                        </Box>
                      </TableCell>
                      <TableCell>{student.email}</TableCell>
                      <TableCell>{student.phone}</TableCell>
                      <TableCell>{student.courses}</TableCell>
                      <TableCell>{student.joined}</TableCell>
                      <TableCell>
                        <Chip label={student.status} size="small" sx={{ backgroundColor: student.status === 'active' ? '#E8F5E9' : '#FFEBEE', color: student.status === 'active' ? '#0D6E3F' : '#C62828', textTransform: 'capitalize' }} />
                      </TableCell>
                      <TableCell>
                        <IconButton size="small" sx={{ color: '#0D6E3F' }}><Visibility fontSize="small" /></IconButton>
                        <IconButton size="small" sx={{ color: '#D4AF37' }}><Email fontSize="small" /></IconButton>
                        <IconButton size="small" sx={{ color: '#D32F2F' }}><Delete fontSize="small" /></IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination component="div" count={filteredStudents.length} page={page} onPageChange={(e, p) => setPage(p)} rowsPerPage={5} rowsPerPageOptions={[5]} />
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
};

export default ManageStudentsPage;
