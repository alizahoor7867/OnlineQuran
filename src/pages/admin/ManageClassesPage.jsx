import { useState } from 'react';
import { Box, Container, Typography, Card, CardContent, Button, TextField, InputAdornment, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TablePagination, Chip, IconButton, Dialog, DialogTitle, DialogContent, DialogActions, Grid, FormControl, InputLabel, Select, MenuItem, Avatar } from '@mui/material';
import { Search, Add, Edit, Delete, Visibility, FilterList } from '@mui/icons-material';
import { motion } from 'framer-motion';

const classes = [
  { id: 1, title: 'Quran Nazra for Beginners', category: 'Nazra', teacher: 'Sheikh Ahmad', price: 49, seats: 20, enrolled: 12, status: 'active' },
  { id: 2, title: 'Complete Hifz Program', category: 'Hifz', teacher: 'Hafiz Ibrahim', price: 79, seats: 15, enrolled: 11, status: 'active' },
  { id: 3, title: 'Advanced Tajweed', category: 'Tajweed', teacher: 'Qari Yusuf', price: 59, seats: 25, enrolled: 10, status: 'active' },
  { id: 4, title: 'Tafseer & Understanding', category: 'Tafseer', teacher: 'Dr. Fatima', price: 69, seats: 30, enrolled: 8, status: 'active' },
  { id: 5, title: 'Kids Quran Classes', category: 'Nazra', teacher: 'Sister Maryam', price: 39, seats: 15, enrolled: 12, status: 'full' },
  { id: 6, title: 'Arabic for Quran', category: 'Arabic', teacher: 'Ustadh Hassan', price: 55, seats: 20, enrolled: 8, status: 'active' },
];

const ManageClassesPage = () => {
  const [page, setPage] = useState(0);
  const [search, setSearch] = useState('');
  const [addDialog, setAddDialog] = useState(false);

  const filteredClasses = classes.filter(c => c.title.toLowerCase().includes(search.toLowerCase()));

  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: '#FAFAF5', py: 4 }}>
      <Container maxWidth="lg">
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
          <Typography variant="h4" sx={{ fontWeight: 700, color: '#1A1A2E' }}>Manage Classes</Typography>
          <Button variant="contained" startIcon={<Add />} onClick={() => setAddDialog(true)} sx={{ background: 'linear-gradient(135deg, #0D6E3F 0%, #1A8B52 100%)' }}>Add New Class</Button>
        </Box>

        <Card sx={{ borderRadius: 3 }}>
          <CardContent sx={{ p: 3 }}>
            {/* Filters */}
            <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
              <TextField placeholder="Search classes..." value={search} onChange={(e) => setSearch(e.target.value)} sx={{ flex: 1 }}
                InputProps={{ startAdornment: <InputAdornment position="start"><Search /></InputAdornment> }} />
              <Button variant="outlined" startIcon={<FilterList />} sx={{ borderColor: '#0D6E3F', color: '#0D6E3F' }}>Filters</Button>
            </Box>

            {/* Table */}
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow sx={{ backgroundColor: '#f5f5f5' }}>
                    <TableCell sx={{ fontWeight: 700 }}>Class</TableCell>
                    <TableCell sx={{ fontWeight: 700 }}>Category</TableCell>
                    <TableCell sx={{ fontWeight: 700 }}>Teacher</TableCell>
                    <TableCell sx={{ fontWeight: 700 }}>Price</TableCell>
                    <TableCell sx={{ fontWeight: 700 }}>Enrolled</TableCell>
                    <TableCell sx={{ fontWeight: 700 }}>Status</TableCell>
                    <TableCell sx={{ fontWeight: 700 }}>Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {filteredClasses.slice(page * 5, page * 5 + 5).map((cls) => (
                    <TableRow key={cls.id} hover>
                      <TableCell><Typography fontWeight={600}>{cls.title}</Typography></TableCell>
                      <TableCell><Chip label={cls.category} size="small" sx={{ backgroundColor: '#E8F5E9', color: '#0D6E3F' }} /></TableCell>
                      <TableCell>{cls.teacher}</TableCell>
                      <TableCell>${cls.price}/mo</TableCell>
                      <TableCell>{cls.enrolled}/{cls.seats}</TableCell>
                      <TableCell>
                        <Chip label={cls.status} size="small" sx={{ backgroundColor: cls.status === 'active' ? '#E8F5E9' : '#FFEBEE', color: cls.status === 'active' ? '#0D6E3F' : '#C62828', textTransform: 'capitalize' }} />
                      </TableCell>
                      <TableCell>
                        <IconButton size="small" sx={{ color: '#0D6E3F' }}><Visibility fontSize="small" /></IconButton>
                        <IconButton size="small" sx={{ color: '#D4AF37' }}><Edit fontSize="small" /></IconButton>
                        <IconButton size="small" sx={{ color: '#D32F2F' }}><Delete fontSize="small" /></IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination component="div" count={filteredClasses.length} page={page} onPageChange={(e, p) => setPage(p)} rowsPerPage={5} rowsPerPageOptions={[5]} />
          </CardContent>
        </Card>

        {/* Add Dialog */}
        <Dialog open={addDialog} onClose={() => setAddDialog(false)} maxWidth="sm" fullWidth>
          <DialogTitle sx={{ fontWeight: 700 }}>Add New Class</DialogTitle>
          <DialogContent>
            <Grid container spacing={3} sx={{ mt: 1 }}>
              <Grid size={12}><TextField fullWidth label="Class Title" /></Grid>
              <Grid size={6}><FormControl fullWidth><InputLabel>Category</InputLabel><Select label="Category"><MenuItem value="nazra">Nazra</MenuItem><MenuItem value="hifz">Hifz</MenuItem><MenuItem value="tajweed">Tajweed</MenuItem></Select></FormControl></Grid>
              <Grid size={6}><TextField fullWidth label="Price" type="number" /></Grid>
              <Grid size={6}><TextField fullWidth label="Total Seats" type="number" /></Grid>
              <Grid size={6}><TextField fullWidth label="Duration" /></Grid>
              <Grid size={12}><TextField fullWidth multiline rows={3} label="Description" /></Grid>
            </Grid>
          </DialogContent>
          <DialogActions sx={{ p: 3 }}>
            <Button onClick={() => setAddDialog(false)}>Cancel</Button>
            <Button variant="contained" sx={{ background: 'linear-gradient(135deg, #0D6E3F 0%, #1A8B52 100%)' }}>Add Class</Button>
          </DialogActions>
        </Dialog>
      </Container>
    </Box>
  );
};

export default ManageClassesPage;
