import { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Button,
  TextField,
  InputAdornment,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
  Chip,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Avatar,
  Rating,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import {
  Search,
  Add,
  Edit,
  Delete,
  Visibility,
  FilterList,
  Email,
  Phone,
} from '@mui/icons-material';
import { motion } from 'framer-motion';

const teachers = [
  {
    id: 1,
    name: 'Sheikh Ahmad',
    email: 'sheikh.ahmad@quranlearn.com',
    phone: '+1 555-1001',
    specialization: 'Nazra',
    classes: 3,
    students: 45,
    rating: 4.9,
    status: 'active',
  },
  {
    id: 2,
    name: 'Hafiz Ibrahim',
    email: 'hafiz.ibrahim@quranlearn.com',
    phone: '+1 555-1002',
    specialization: 'Hifz',
    classes: 2,
    students: 28,
    rating: 5.0,
    status: 'active',
  },
  {
    id: 3,
    name: 'Qari Yusuf',
    email: 'qari.yusuf@quranlearn.com',
    phone: '+1 555-1003',
    specialization: 'Tajweed',
    classes: 4,
    students: 62,
    rating: 4.8,
    status: 'active',
  },
  {
    id: 4,
    name: 'Dr. Fatima',
    email: 'dr.fatima@quranlearn.com',
    phone: '+1 555-1004',
    specialization: 'Tafseer',
    classes: 2,
    students: 35,
    rating: 4.9,
    status: 'active',
  },
  {
    id: 5,
    name: 'Sister Maryam',
    email: 'sister.maryam@quranlearn.com',
    phone: '+1 555-1005',
    specialization: 'Kids Quran',
    classes: 3,
    students: 40,
    rating: 4.7,
    status: 'active',
  },
  {
    id: 6,
    name: 'Ustadh Hassan',
    email: 'ustadh.hassan@quranlearn.com',
    phone: '+1 555-1006',
    specialization: 'Arabic',
    classes: 2,
    students: 30,
    rating: 4.8,
    status: 'inactive',
  },
];

const ManageTeachersPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));
  const [page, setPage] = useState(0);
  const [search, setSearch] = useState('');
  const [addDialog, setAddDialog] = useState(false);
  const [viewDialog, setViewDialog] = useState(false);
  const [selectedTeacher, setSelectedTeacher] = useState(null);

  const filteredTeachers = teachers.filter(
    (t) =>
      t.name.toLowerCase().includes(search.toLowerCase()) ||
      t.email.toLowerCase().includes(search.toLowerCase()) ||
      t.specialization.toLowerCase().includes(search.toLowerCase())
  );

  const handleViewTeacher = (teacher) => {
    setSelectedTeacher(teacher);
    setViewDialog(true);
  };

  // Mobile Card View
  const MobileTeacherCard = ({ teacher }) => (
    <Card sx={{ mb: 2, borderRadius: 3 }}>
      <CardContent sx={{ p: 2 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
          <Avatar
            sx={{
              width: 50,
              height: 50,
              backgroundColor: '#0D6E3F',
              fontWeight: 700,
            }}
          >
            {teacher.name.charAt(0)}
          </Avatar>
          <Box sx={{ flex: 1 }}>
            <Typography variant="subtitle1" fontWeight={700}>
              {teacher.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {teacher.email}
            </Typography>
          </Box>
          <Chip
            label={teacher.status}
            size="small"
            sx={{
              backgroundColor: teacher.status === 'active' ? '#E8F5E9' : '#FFEBEE',
              color: teacher.status === 'active' ? '#0D6E3F' : '#C62828',
              textTransform: 'capitalize',
              fontWeight: 600,
            }}
          />
        </Box>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
          <Chip
            label={teacher.specialization}
            size="small"
            sx={{ backgroundColor: '#E8F5E9', color: '#0D6E3F' }}
          />
          <Chip
            label={`${teacher.classes} classes`}
            size="small"
            variant="outlined"
          />
          <Chip
            label={`${teacher.students} students`}
            size="small"
            variant="outlined"
          />
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
            <Rating value={teacher.rating} precision={0.1} size="small" readOnly />
            <Typography variant="body2" color="text.secondary">
              ({teacher.rating})
            </Typography>
          </Box>
          <Box>
            <IconButton
              size="small"
              sx={{ color: '#0D6E3F' }}
              onClick={() => handleViewTeacher(teacher)}
            >
              <Visibility fontSize="small" />
            </IconButton>
            <IconButton size="small" sx={{ color: '#D4AF37' }}>
              <Edit fontSize="small" />
            </IconButton>
            <IconButton size="small" sx={{ color: '#D32F2F' }}>
              <Delete fontSize="small" />
            </IconButton>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );

  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: '#FAFAF5', py: { xs: 2, md: 4 } }}>
      <Container maxWidth="lg">
        {/* Header */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: { xs: 'stretch', sm: 'center' },
            gap: 2,
            mb: 4,
          }}
        >
          <Typography variant={isMobile ? 'h5' : 'h4'} sx={{ fontWeight: 700, color: '#1A1A2E' }}>
            Manage Teachers
          </Typography>
          <Button
            variant="contained"
            startIcon={<Add />}
            onClick={() => setAddDialog(true)}
            fullWidth={isMobile}
            sx={{
              background: 'linear-gradient(135deg, #0D6E3F 0%, #1A8B52 100%)',
            }}
          >
            Add New Teacher
          </Button>
        </Box>

        <Card sx={{ borderRadius: 3 }}>
          <CardContent sx={{ p: { xs: 2, md: 3 } }}>
            {/* Search & Filters */}
            <Box
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' },
                gap: 2,
                mb: 3,
              }}
            >
              <TextField
                placeholder="Search teachers..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Search />
                    </InputAdornment>
                  ),
                }}
              />
              <Button
                variant="outlined"
                startIcon={<FilterList />}
                sx={{
                  borderColor: '#0D6E3F',
                  color: '#0D6E3F',
                  minWidth: { xs: '100%', sm: 'auto' },
                }}
              >
                Filters
              </Button>
            </Box>

            {/* Mobile View - Card Layout */}
            {isMobile ? (
              <Box>
                {filteredTeachers.slice(page * 5, page * 5 + 5).map((teacher) => (
                  <motion.div
                    key={teacher.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <MobileTeacherCard teacher={teacher} />
                  </motion.div>
                ))}
              </Box>
            ) : (
              /* Desktop/Tablet View - Table Layout */
              <TableContainer>
                <Table size={isTablet ? 'small' : 'medium'}>
                  <TableHead>
                    <TableRow sx={{ backgroundColor: '#f5f5f5' }}>
                      <TableCell sx={{ fontWeight: 700 }}>Teacher</TableCell>
                      <TableCell sx={{ fontWeight: 700 }}>Specialization</TableCell>
                      {!isTablet && <TableCell sx={{ fontWeight: 700 }}>Contact</TableCell>}
                      <TableCell sx={{ fontWeight: 700 }}>Classes</TableCell>
                      <TableCell sx={{ fontWeight: 700 }}>Rating</TableCell>
                      <TableCell sx={{ fontWeight: 700 }}>Status</TableCell>
                      <TableCell sx={{ fontWeight: 700 }}>Actions</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {filteredTeachers.slice(page * 5, page * 5 + 5).map((teacher) => (
                      <TableRow key={teacher.id} hover>
                        <TableCell>
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                            <Avatar sx={{ backgroundColor: '#0D6E3F' }}>
                              {teacher.name.charAt(0)}
                            </Avatar>
                            <Box>
                              <Typography fontWeight={600}>{teacher.name}</Typography>
                              <Typography variant="body2" color="text.secondary">
                                {teacher.email}
                              </Typography>
                            </Box>
                          </Box>
                        </TableCell>
                        <TableCell>
                          <Chip
                            label={teacher.specialization}
                            size="small"
                            sx={{ backgroundColor: '#E8F5E9', color: '#0D6E3F' }}
                          />
                        </TableCell>
                        {!isTablet && <TableCell>{teacher.phone}</TableCell>}
                        <TableCell>
                          {teacher.classes} ({teacher.students} students)
                        </TableCell>
                        <TableCell>
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                            <Rating value={teacher.rating} precision={0.1} size="small" readOnly />
                            <Typography variant="body2" color="text.secondary">
                              {teacher.rating}
                            </Typography>
                          </Box>
                        </TableCell>
                        <TableCell>
                          <Chip
                            label={teacher.status}
                            size="small"
                            sx={{
                              backgroundColor:
                                teacher.status === 'active' ? '#E8F5E9' : '#FFEBEE',
                              color: teacher.status === 'active' ? '#0D6E3F' : '#C62828',
                              textTransform: 'capitalize',
                              fontWeight: 600,
                            }}
                          />
                        </TableCell>
                        <TableCell>
                          <IconButton
                            size="small"
                            sx={{ color: '#0D6E3F' }}
                            onClick={() => handleViewTeacher(teacher)}
                          >
                            <Visibility fontSize="small" />
                          </IconButton>
                          <IconButton size="small" sx={{ color: '#D4AF37' }}>
                            <Edit fontSize="small" />
                          </IconButton>
                          <IconButton size="small" sx={{ color: '#D32F2F' }}>
                            <Delete fontSize="small" />
                          </IconButton>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            )}

            <TablePagination
              component="div"
              count={filteredTeachers.length}
              page={page}
              onPageChange={(e, p) => setPage(p)}
              rowsPerPage={5}
              rowsPerPageOptions={[5]}
            />
          </CardContent>
        </Card>

        {/* Add Teacher Dialog */}
        <Dialog
          open={addDialog}
          onClose={() => setAddDialog(false)}
          maxWidth="sm"
          fullWidth
          fullScreen={isMobile}
        >
          <DialogTitle sx={{ fontWeight: 700 }}>Add New Teacher</DialogTitle>
          <DialogContent>
            <Grid container spacing={3} sx={{ mt: 1 }}>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth label="Full Name" />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth label="Email" type="email" />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth label="Phone" />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <InputLabel>Specialization</InputLabel>
                  <Select label="Specialization">
                    <MenuItem value="nazra">Nazra</MenuItem>
                    <MenuItem value="hifz">Hifz</MenuItem>
                    <MenuItem value="tajweed">Tajweed</MenuItem>
                    <MenuItem value="tafseer">Tafseer</MenuItem>
                    <MenuItem value="arabic">Arabic</MenuItem>
                    <MenuItem value="kids">Kids Quran</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <TextField fullWidth multiline rows={3} label="Bio / About" />
              </Grid>
            </Grid>
          </DialogContent>
          <DialogActions sx={{ p: 3 }}>
            <Button onClick={() => setAddDialog(false)}>Cancel</Button>
            <Button
              variant="contained"
              sx={{
                background: 'linear-gradient(135deg, #0D6E3F 0%, #1A8B52 100%)',
              }}
            >
              Add Teacher
            </Button>
          </DialogActions>
        </Dialog>

        {/* View Teacher Dialog */}
        <Dialog
          open={viewDialog}
          onClose={() => setViewDialog(false)}
          maxWidth="sm"
          fullWidth
          fullScreen={isMobile}
        >
          <DialogTitle sx={{ fontWeight: 700 }}>Teacher Profile</DialogTitle>
          <DialogContent>
            {selectedTeacher && (
              <Box sx={{ textAlign: 'center', py: 2 }}>
                <Avatar
                  sx={{
                    width: 80,
                    height: 80,
                    backgroundColor: '#0D6E3F',
                    fontSize: '2rem',
                    fontWeight: 700,
                    mx: 'auto',
                    mb: 2,
                  }}
                >
                  {selectedTeacher.name.charAt(0)}
                </Avatar>
                <Typography variant="h5" fontWeight={700} gutterBottom>
                  {selectedTeacher.name}
                </Typography>
                <Chip
                  label={selectedTeacher.specialization}
                  sx={{ backgroundColor: '#E8F5E9', color: '#0D6E3F', mb: 2 }}
                />
                <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1, mb: 3 }}>
                  <Rating value={selectedTeacher.rating} precision={0.1} readOnly />
                  <Typography color="text.secondary">({selectedTeacher.rating})</Typography>
                </Box>
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <Card variant="outlined">
                      <CardContent>
                        <Typography variant="h4" fontWeight={700} color="primary">
                          {selectedTeacher.classes}
                        </Typography>
                        <Typography color="text.secondary">Classes</Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                  <Grid item xs={6}>
                    <Card variant="outlined">
                      <CardContent>
                        <Typography variant="h4" fontWeight={700} sx={{ color: '#D4AF37' }}>
                          {selectedTeacher.students}
                        </Typography>
                        <Typography color="text.secondary">Students</Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                </Grid>
                <Box sx={{ mt: 3, textAlign: 'left' }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                    <Email sx={{ color: '#0D6E3F' }} />
                    <Typography>{selectedTeacher.email}</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Phone sx={{ color: '#0D6E3F' }} />
                    <Typography>{selectedTeacher.phone}</Typography>
                  </Box>
                </Box>
              </Box>
            )}
          </DialogContent>
          <DialogActions sx={{ p: 3 }}>
            <Button onClick={() => setViewDialog(false)}>Close</Button>
            <Button
              variant="contained"
              sx={{
                background: 'linear-gradient(135deg, #0D6E3F 0%, #1A8B52 100%)',
              }}
            >
              Edit Teacher
            </Button>
          </DialogActions>
        </Dialog>
      </Container>
    </Box>
  );
};

export default ManageTeachersPage;
