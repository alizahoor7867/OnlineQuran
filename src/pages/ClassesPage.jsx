import { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  TextField,
  InputAdornment,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Chip,
  Pagination,
  Button,
} from '@mui/material';
import {
  Search,
  FilterList,
  School,
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import ClassCard from '../components/classes/ClassCard';

const categories = ['All', 'Nazra', 'Hifz', 'Tajweed', 'Tafseer', 'Arabic', 'Islamic Studies'];
const levels = ['All Levels', 'Beginner', 'Intermediate', 'Advanced'];
const durations = ['Any Duration', '1-3 Months', '3-6 Months', '6-12 Months', '12+ Months'];

const allClasses = [
  {
    id: 1,
    title: 'Quran Nazra for Beginners',
    description: 'Learn to read the Holy Quran with proper pronunciation and basic Tajweed rules.',
    teacher: 'Sheikh Ahmad',
    teacherAvatar: '',
    duration: '3 months',
    price: 49,
    rating: 4.9,
    totalSeats: 20,
    availableSeats: 8,
    category: 'Nazra',
    level: 'Beginner',
  },
  {
    id: 2,
    title: 'Complete Hifz Program',
    description: 'Comprehensive memorization program to become a Hafiz with expert guidance.',
    teacher: 'Hafiz Ibrahim',
    teacherAvatar: '',
    duration: '24 months',
    price: 79,
    rating: 5.0,
    totalSeats: 15,
    availableSeats: 4,
    category: 'Hifz',
    level: 'All Levels',
  },
  {
    id: 3,
    title: 'Advanced Tajweed Course',
    description: 'Master the art of Quran recitation with advanced Tajweed rules and practice.',
    teacher: 'Qari Yusuf',
    teacherAvatar: '',
    duration: '6 months',
    price: 59,
    rating: 4.8,
    totalSeats: 25,
    availableSeats: 15,
    category: 'Tajweed',
    level: 'Advanced',
  },
  {
    id: 4,
    title: 'Tafseer & Understanding',
    description: 'Deep dive into the meanings and interpretations of the Holy Quran.',
    teacher: 'Dr. Fatima',
    teacherAvatar: '',
    duration: '12 months',
    price: 69,
    rating: 4.9,
    totalSeats: 30,
    availableSeats: 22,
    category: 'Tafseer',
    level: 'Intermediate',
  },
  {
    id: 5,
    title: 'Arabic for Quran',
    description: 'Learn Quranic Arabic to understand the Quran in its original language.',
    teacher: 'Ustadh Hassan',
    teacherAvatar: '',
    duration: '8 months',
    price: 55,
    rating: 4.7,
    totalSeats: 20,
    availableSeats: 12,
    category: 'Arabic',
    level: 'Beginner',
  },
  {
    id: 6,
    title: 'Juz Amma Memorization',
    description: 'Memorize the 30th Juz with proper Tajweed and beautiful recitation.',
    teacher: 'Hafiz Usman',
    teacherAvatar: '',
    duration: '4 months',
    price: 45,
    rating: 4.9,
    totalSeats: 25,
    availableSeats: 10,
    category: 'Hifz',
    level: 'Beginner',
  },
  {
    id: 7,
    title: 'Kids Quran Classes',
    description: 'Fun and engaging Quran lessons designed specifically for children aged 5-12.',
    teacher: 'Sister Maryam',
    teacherAvatar: '',
    duration: '6 months',
    price: 39,
    rating: 5.0,
    totalSeats: 15,
    availableSeats: 3,
    category: 'Nazra',
    level: 'Beginner',
  },
  {
    id: 8,
    title: 'Islamic Studies Foundation',
    description: 'Comprehensive overview of Islamic history, fiqh, and aqeedah.',
    teacher: 'Dr. Ahmad',
    teacherAvatar: '',
    duration: '6 months',
    price: 49,
    rating: 4.6,
    totalSeats: 35,
    availableSeats: 28,
    category: 'Islamic Studies',
    level: 'Beginner',
  },
];

const ClassesPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedLevel, setSelectedLevel] = useState('All Levels');
  const [selectedDuration, setSelectedDuration] = useState('Any Duration');
  const [page, setPage] = useState(1);
  const classesPerPage = 6;

  const filteredClasses = allClasses.filter((classItem) => {
    const matchesSearch = classItem.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         classItem.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         classItem.teacher.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || classItem.category === selectedCategory;
    const matchesLevel = selectedLevel === 'All Levels' || classItem.level === selectedLevel;
    return matchesSearch && matchesCategory && matchesLevel;
  });

  const paginatedClasses = filteredClasses.slice(
    (page - 1) * classesPerPage,
    page * classesPerPage
  );

  const totalPages = Math.ceil(filteredClasses.length / classesPerPage);

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          py: 12,
          background: 'linear-gradient(135deg, rgba(13, 110, 63, 0.95) 0%, rgba(26, 35, 126, 0.9) 100%)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            opacity: 0.1,
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0L60 30L30 60L0 30z' fill='none' stroke='%23D4AF37' stroke-width='1'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
          }}
        />

        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Typography
              variant="h2"
              sx={{
                color: 'white',
                fontWeight: 700,
                textAlign: 'center',
                mb: 3,
              }}
            >
              Our <Box component="span" sx={{ color: '#D4AF37' }}>Classes</Box>
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: 'rgba(255,255,255,0.85)',
                textAlign: 'center',
                maxWidth: 700,
                mx: 'auto',
                lineHeight: 1.8,
                mb: 5,
              }}
            >
              Explore our comprehensive range of Quranic courses designed for all 
              levels. Find the perfect class to begin or continue your learning journey.
            </Typography>

            {/* Search Bar */}
            <Box sx={{ maxWidth: 600, mx: 'auto' }}>
              <TextField
                fullWidth
                placeholder="Search classes, teachers, or topics..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Search sx={{ color: 'rgba(255,255,255,0.7)' }} />
                    </InputAdornment>
                  ),
                }}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    backgroundColor: 'rgba(255,255,255,0.1)',
                    borderRadius: 3,
                    color: 'white',
                    '& fieldset': {
                      borderColor: 'rgba(255,255,255,0.3)',
                    },
                    '&:hover fieldset': {
                      borderColor: 'rgba(212, 175, 55, 0.5)',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#D4AF37',
                    },
                  },
                  '& .MuiInputBase-input::placeholder': {
                    color: 'rgba(255,255,255,0.6)',
                  },
                }}
              />
            </Box>
          </motion.div>
        </Container>
      </Box>

      {/* Filters & Classes */}
      <Box sx={{ py: 8, backgroundColor: '#FAFAF5' }} className="geometric-pattern">
        <Container maxWidth="lg">
          {/* Category Chips */}
          <Box sx={{ mb: 4 }}>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5, justifyContent: 'center' }}>
              {categories.map((category) => (
                <Chip
                  key={category}
                  label={category}
                  onClick={() => {
                    setSelectedCategory(category);
                    setPage(1);
                  }}
                  sx={{
                    px: 2,
                    py: 2.5,
                    fontSize: '0.95rem',
                    fontWeight: 600,
                    backgroundColor: selectedCategory === category ? '#0D6E3F' : 'white',
                    color: selectedCategory === category ? 'white' : '#1A1A2E',
                    border: '2px solid',
                    borderColor: selectedCategory === category ? '#0D6E3F' : 'transparent',
                    boxShadow: selectedCategory === category 
                      ? '0 4px 12px rgba(13, 110, 63, 0.3)' 
                      : '0 2px 8px rgba(0,0,0,0.08)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      backgroundColor: selectedCategory === category ? '#0A5530' : '#F5F5DC',
                      transform: 'translateY(-2px)',
                    },
                  }}
                />
              ))}
            </Box>
          </Box>

          {/* Additional Filters */}
          <Box sx={{ mb: 5 }}>
            <Grid container spacing={3} justifyContent="center">
              <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                <FormControl fullWidth>
                  <InputLabel>Level</InputLabel>
                  <Select
                    value={selectedLevel}
                    label="Level"
                    onChange={(e) => {
                      setSelectedLevel(e.target.value);
                      setPage(1);
                    }}
                    sx={{
                      backgroundColor: 'white',
                      borderRadius: 2,
                    }}
                  >
                    {levels.map((level) => (
                      <MenuItem key={level} value={level}>{level}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                <FormControl fullWidth>
                  <InputLabel>Duration</InputLabel>
                  <Select
                    value={selectedDuration}
                    label="Duration"
                    onChange={(e) => {
                      setSelectedDuration(e.target.value);
                      setPage(1);
                    }}
                    sx={{
                      backgroundColor: 'white',
                      borderRadius: 2,
                    }}
                  >
                    {durations.map((duration) => (
                      <MenuItem key={duration} value={duration}>{duration}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
          </Box>

          {/* Results Count */}
          <Box sx={{ mb: 4, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography variant="body1" color="text.secondary">
              Showing <strong>{paginatedClasses.length}</strong> of <strong>{filteredClasses.length}</strong> classes
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <FilterList sx={{ color: '#6C757D' }} />
              <Typography variant="body2" color="text.secondary">
                {selectedCategory !== 'All' && `${selectedCategory}`}
                {selectedLevel !== 'All Levels' && ` • ${selectedLevel}`}
              </Typography>
            </Box>
          </Box>

          {/* Classes Grid */}
          {paginatedClasses.length > 0 ? (
            <Grid container spacing={4}>
              {paginatedClasses.map((classItem, index) => (
                <Grid size={{ xs: 12, sm: 6, lg: 4 }} key={classItem.id}>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <ClassCard classData={classItem} />
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          ) : (
            <Box sx={{ textAlign: 'center', py: 10 }}>
              <School sx={{ fontSize: 80, color: '#D4AF37', mb: 2 }} />
              <Typography variant="h5" sx={{ fontWeight: 600, color: '#1A1A2E', mb: 1 }}>
                No Classes Found
              </Typography>
              <Typography color="text.secondary" sx={{ mb: 3 }}>
                Try adjusting your search or filters to find available classes.
              </Typography>
              <Button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('All');
                  setSelectedLevel('All Levels');
                  setSelectedDuration('Any Duration');
                }}
                variant="outlined"
                sx={{
                  borderColor: '#0D6E3F',
                  color: '#0D6E3F',
                }}
              >
                Clear Filters
              </Button>
            </Box>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 6 }}>
              <Pagination
                count={totalPages}
                page={page}
                onChange={(e, value) => setPage(value)}
                color="primary"
                size="large"
                sx={{
                  '& .MuiPaginationItem-root': {
                    fontWeight: 600,
                    '&.Mui-selected': {
                      backgroundColor: '#0D6E3F',
                    },
                  },
                }}
              />
            </Box>
          )}
        </Container>
      </Box>
    </Box>
  );
};

export default ClassesPage;
