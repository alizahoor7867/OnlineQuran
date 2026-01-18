import {
  Box,
  Typography,
  Avatar,
  Rating,
} from '@mui/material';
import { FormatQuote } from '@mui/icons-material';
import { motion } from 'framer-motion';

const TestimonialCard = ({ testimonial }) => {
  const { name, avatar, location, quote, rating, course } = testimonial;

  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <Box
        sx={{
          backgroundColor: 'white',
          borderRadius: 4,
          p: 4,
          position: 'relative',
          boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
          transition: 'box-shadow 0.3s ease',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          '&:hover': {
            boxShadow: '0 12px 40px rgba(13, 110, 63, 0.12)',
          },
        }}
      >
        {/* Quote Icon */}
        <Box
          sx={{
            position: 'absolute',
            top: -15,
            left: 30,
            width: 40,
            height: 40,
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #D4AF37 0%, #E4C567 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 12px rgba(212, 175, 55, 0.3)',
          }}
        >
          <FormatQuote sx={{ color: 'white', fontSize: 24 }} />
        </Box>

        {/* Rating */}
        <Box sx={{ mb: 2, mt: 1 }}>
          <Rating
            value={rating}
            readOnly
            size="small"
            sx={{
              '& .MuiRating-iconFilled': {
                color: '#D4AF37',
              },
            }}
          />
        </Box>

        {/* Quote */}
        <Typography
          variant="body1"
          sx={{
            color: '#4A4A5A',
            fontStyle: 'italic',
            lineHeight: 1.8,
            mb: 3,
            flexGrow: 1,
          }}
        >
          "{quote}"
        </Typography>

        {/* Course Tag */}
        {course && (
          <Typography
            variant="caption"
            sx={{
              display: 'inline-block',
              backgroundColor: 'rgba(13, 110, 63, 0.1)',
              color: '#0D6E3F',
              px: 2,
              py: 0.5,
              borderRadius: 10,
              fontWeight: 500,
              mb: 3,
            }}
          >
            {course}
          </Typography>
        )}

        {/* Author */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Avatar
            src={avatar}
            sx={{
              width: 50,
              height: 50,
              border: '2px solid #D4AF37',
              background: 'linear-gradient(135deg, #0D6E3F 0%, #1A237E 100%)',
            }}
          >
            {name?.charAt(0)}
          </Avatar>
          <Box>
            <Typography
              variant="subtitle2"
              sx={{ fontWeight: 700, color: '#1A1A2E' }}
            >
              {name}
            </Typography>
            <Typography variant="caption" color="text.secondary">
              {location}
            </Typography>
          </Box>
        </Box>
      </Box>
    </motion.div>
  );
};

export default TestimonialCard;
