import { useState } from 'react';
import {
  Box, Container, Typography, Grid, TextField, InputAdornment, Chip,
} from '@mui/material';
import { Search } from '@mui/icons-material';
import { motion } from 'framer-motion';
import TeacherCard from '../components/teachers/TeacherCard';

const specializations = ['All', 'Nazra', 'Hifz', 'Tajweed', 'Tafseer', 'Arabic'];

const teachers = [
  { id: 1, name: 'Sheikh Ahmad Rahman', title: 'Senior Quran Instructor', avatar: '', specializations: ['Nazra', 'Tajweed'], experience: 15, rating: 4.9, totalStudents: 500, bio: 'Hafiz with Ijazah, graduate of Al-Azhar University.', social: { email: 'sheikh@quranlearn.com' } },
  { id: 2, name: 'Hafiz Ibrahim Ali', title: 'Hifz Program Director', avatar: '', specializations: ['Hifz', 'Tajweed'], experience: 20, rating: 5.0, totalStudents: 300, bio: 'Trained over 100 Huffaz with expert memorization techniques.', social: { email: 'ibrahim@quranlearn.com' } },
  { id: 3, name: 'Qari Yusuf Mohammed', title: 'Tajweed Specialist', avatar: '', specializations: ['Tajweed'], experience: 12, rating: 4.8, totalStudents: 400, bio: 'Certified in 10 Qiraat with multiple Ijazahs.', social: { email: 'yusuf@quranlearn.com' } },
  { id: 4, name: 'Dr. Fatima Al-Hassan', title: 'Tafseer & Islamic Studies', avatar: '', specializations: ['Tafseer', 'Arabic'], experience: 18, rating: 4.9, totalStudents: 350, bio: 'PhD in Islamic Studies from Madinah University.', social: { email: 'fatima@quranlearn.com' } },
  { id: 5, name: 'Ustadh Hassan Malik', title: 'Arabic Language Expert', avatar: '', specializations: ['Arabic'], experience: 10, rating: 4.7, totalStudents: 250, bio: 'Native speaker with expertise in Quranic linguistics.', social: { email: 'hassan@quranlearn.com' } },
  { id: 6, name: 'Sister Maryam Khan', title: 'Kids Quran Teacher', avatar: '', specializations: ['Nazra'], experience: 8, rating: 5.0, totalStudents: 200, bio: 'Specialized in teaching children aged 5-12.', social: { email: 'maryam@quranlearn.com' } },
];

const TeachersPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSpec, setSelectedSpec] = useState('All');

  const filteredTeachers = teachers.filter((teacher) => {
    const matchesSearch = teacher.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesSpec = selectedSpec === 'All' || teacher.specializations.includes(selectedSpec);
    return matchesSearch && matchesSpec;
  });

  return (
    <Box>
      <Box sx={{ py: 12, background: 'linear-gradient(135deg, rgba(13, 110, 63, 0.95) 0%, rgba(26, 35, 126, 0.9) 100%)', position: 'relative' }}>
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <Typography variant="h2" sx={{ color: 'white', fontWeight: 700, textAlign: 'center', mb: 3 }}>
              Our <Box component="span" sx={{ color: '#D4AF37' }}>Teachers</Box>
            </Typography>
            <Typography variant="h6" sx={{ color: 'rgba(255,255,255,0.85)', textAlign: 'center', maxWidth: 700, mx: 'auto', mb: 5 }}>
              Learn from certified scholars and experienced educators dedicated to your Quranic goals.
            </Typography>
            <Box sx={{ maxWidth: 600, mx: 'auto' }}>
              <TextField fullWidth placeholder="Search teachers..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}
                InputProps={{ startAdornment: <InputAdornment position="start"><Search sx={{ color: 'rgba(255,255,255,0.7)' }} /></InputAdornment> }}
                sx={{ '& .MuiOutlinedInput-root': { backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: 3, color: 'white', '& fieldset': { borderColor: 'rgba(255,255,255,0.3)' } } }}
              />
            </Box>
          </motion.div>
        </Container>
      </Box>

      <Box sx={{ py: 8, backgroundColor: '#FAFAF5' }}>
        <Container maxWidth="lg">
          <Box sx={{ mb: 6, display: 'flex', flexWrap: 'wrap', gap: 1.5, justifyContent: 'center' }}>
            {specializations.map((spec) => (
              <Chip key={spec} label={spec} onClick={() => setSelectedSpec(spec)}
                sx={{ px: 2, py: 2.5, fontSize: '0.95rem', fontWeight: 600, backgroundColor: selectedSpec === spec ? '#0D6E3F' : 'white', color: selectedSpec === spec ? 'white' : '#1A1A2E', border: '2px solid', borderColor: selectedSpec === spec ? '#0D6E3F' : 'transparent', transition: 'all 0.3s ease', '&:hover': { transform: 'translateY(-2px)' } }}
              />
            ))}
          </Box>
          <Grid container spacing={4}>
            {filteredTeachers.map((teacher, index) => (
              <Grid size={{ xs: 12, sm: 6, lg: 3 }} key={teacher.id}>
                <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }} style={{ paddingTop: 50 }}>
                  <TeacherCard teacher={teacher} />
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default TeachersPage;
