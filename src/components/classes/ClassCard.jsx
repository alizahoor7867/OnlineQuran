import {
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Typography,
  Box,
  Button,
  Chip,
  Rating,
  Avatar,
} from '@mui/material';
import {
  AccessTime,
  People,
  Star,
  ArrowForward,
} from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const ClassCard = ({ classData }) => {
  const {
    id,
    title,
    description,
    image,
    teacher,
    teacherAvatar,
    duration,
    price,
    rating,
    totalSeats,
    availableSeats,
    category,
  } = classData;

  const seatsPercentage = (availableSeats / totalSeats) * 100;
  const seatsStatus = seatsPercentage > 50 ? 'success' : seatsPercentage > 20 ? 'warning' : 'error';

  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <Card
        sx={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          borderRadius: 4,
          overflow: 'hidden',
          position: 'relative',
          transition: 'box-shadow 0.3s ease',
          '&:hover': {
            boxShadow: '0 20px 40px rgba(13, 110, 63, 0.15)',
          },
        }}
      >
        {/* Category Badge */}
        <Chip
          label={category}
          size="small"
          sx={{
            position: 'absolute',
            top: 16,
            left: 16,
            zIndex: 1,
            backgroundColor: 'rgba(13, 110, 63, 0.9)',
            color: 'white',
            fontWeight: 600,
          }}
        />

        {/* Image */}
        <CardMedia
          component="div"
          sx={{
            height: 200,
            position: 'relative',
            background: image 
              ? `url(${image}) center/cover`
              : 'linear-gradient(135deg, #0D6E3F 0%, #1A237E 100%)',
          }}
        >
          <Box
            sx={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              height: '50%',
              background: 'linear-gradient(to top, rgba(0,0,0,0.6), transparent)',
            }}
          />
          {/* Price Badge */}
          <Box
            sx={{
              position: 'absolute',
              bottom: 16,
              right: 16,
              backgroundColor: '#D4AF37',
              color: '#1A1A2E',
              px: 2,
              py: 0.5,
              borderRadius: 2,
              fontWeight: 700,
              fontSize: '1.1rem',
            }}
          >
            ${price}/mo
          </Box>
        </CardMedia>

        <CardContent sx={{ flexGrow: 1, p: 3 }}>
          {/* Title */}
          <Typography
            variant="h6"
            sx={{
              fontWeight: 700,
              mb: 1,
              color: '#1A1A2E',
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
            }}
          >
            {title}
          </Typography>

          {/* Description */}
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              mb: 2,
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
              lineHeight: 1.6,
            }}
          >
            {description}
          </Typography>

          {/* Teacher Info */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
            <Avatar
              src={teacherAvatar}
              sx={{
                width: 36,
                height: 36,
                border: '2px solid #D4AF37',
              }}
            >
              {teacher?.charAt(0)}
            </Avatar>
            <Box>
              <Typography variant="body2" sx={{ fontWeight: 600, color: '#1A1A2E' }}>
                {teacher}
              </Typography>
              <Typography variant="caption" color="text.secondary">
                Instructor
              </Typography>
            </Box>
          </Box>

          {/* Stats */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 3, mb: 2 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
              <AccessTime sx={{ fontSize: 18, color: '#0D6E3F' }} />
              <Typography variant="body2" color="text.secondary">
                {duration}
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
              <Star sx={{ fontSize: 18, color: '#D4AF37' }} />
              <Typography variant="body2" color="text.secondary">
                {rating}
              </Typography>
            </Box>
          </Box>

          {/* Seats Indicator */}
          <Box sx={{ mb: 1 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                <People sx={{ fontSize: 16, color: '#6C757D' }} />
                <Typography variant="caption" color="text.secondary">
                  Available Seats
                </Typography>
              </Box>
              <Typography
                variant="caption"
                sx={{
                  fontWeight: 600,
                  color: seatsStatus === 'success' ? '#0D6E3F' : seatsStatus === 'warning' ? '#ED6C02' : '#D32F2F',
                }}
              >
                {availableSeats}/{totalSeats}
              </Typography>
            </Box>
            <Box
              sx={{
                height: 6,
                borderRadius: 3,
                backgroundColor: 'rgba(0,0,0,0.1)',
                overflow: 'hidden',
              }}
            >
              <Box
                sx={{
                  height: '100%',
                  width: `${seatsPercentage}%`,
                  borderRadius: 3,
                  backgroundColor: seatsStatus === 'success' ? '#0D6E3F' : seatsStatus === 'warning' ? '#ED6C02' : '#D32F2F',
                  transition: 'width 0.3s ease',
                }}
              />
            </Box>
          </Box>
        </CardContent>

        <CardActions sx={{ p: 3, pt: 0 }}>
          <Button
            component={Link}
            to={`/classes/${id}`}
            fullWidth
            variant="contained"
            endIcon={<ArrowForward />}
            sx={{
              py: 1.5,
              background: 'linear-gradient(135deg, #0D6E3F 0%, #1A8B52 100%)',
              fontWeight: 600,
              '&:hover': {
                background: 'linear-gradient(135deg, #0A5530 0%, #0D6E3F 100%)',
              },
            }}
          >
            View Details
          </Button>
        </CardActions>
      </Card>
    </motion.div>
  );
};

export default ClassCard;
