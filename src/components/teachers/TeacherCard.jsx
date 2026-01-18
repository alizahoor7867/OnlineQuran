import {
  Card,
  CardContent,
  Typography,
  Box,
  Avatar,
  Chip,
  IconButton,
  Rating,
} from '@mui/material';
import {
  School,
  Star,
  Facebook,
  Twitter,
  LinkedIn,
  Email,
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const TeacherCard = ({ teacher }) => {
  const {
    id,
    name,
    title,
    avatar,
    specializations,
    experience,
    rating,
    totalStudents,
    bio,
    social,
  } = teacher;

  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <Card
        sx={{
          height: '100%',
          borderRadius: 4,
          overflow: 'visible',
          position: 'relative',
          textAlign: 'center',
          pt: 8,
          transition: 'box-shadow 0.3s ease',
          '&:hover': {
            boxShadow: '0 20px 40px rgba(13, 110, 63, 0.15)',
          },
        }}
      >
        {/* Avatar */}
        <Box
          sx={{
            position: 'absolute',
            top: -50,
            left: '50%',
            transform: 'translateX(-50%)',
          }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <Avatar
              src={avatar}
              sx={{
                width: 100,
                height: 100,
                border: '4px solid white',
                boxShadow: '0 8px 24px rgba(13, 110, 63, 0.2)',
                background: 'linear-gradient(135deg, #0D6E3F 0%, #1A8B52 100%)',
                fontSize: '2rem',
                fontWeight: 700,
              }}
            >
              {name?.charAt(0)}
            </Avatar>
          </motion.div>
          
          {/* Experience Badge */}
          <Box
            sx={{
              position: 'absolute',
              bottom: -5,
              right: -5,
              backgroundColor: '#D4AF37',
              color: '#1A1A2E',
              borderRadius: '50%',
              width: 36,
              height: 36,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 700,
              fontSize: '0.75rem',
              border: '2px solid white',
            }}
          >
            {experience}Y
          </Box>
        </Box>

        <CardContent sx={{ p: 3 }}>
          {/* Name & Title */}
          <Typography
            variant="h6"
            sx={{ fontWeight: 700, color: '#1A1A2E', mb: 0.5 }}
          >
            {name}
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: '#0D6E3F', fontWeight: 500, mb: 2 }}
          >
            {title}
          </Typography>

          {/* Rating */}
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 1, mb: 2 }}>
            <Rating
              value={rating}
              precision={0.1}
              readOnly
              size="small"
              sx={{
                '& .MuiRating-iconFilled': {
                  color: '#D4AF37',
                },
              }}
            />
            <Typography variant="body2" color="text.secondary">
              ({rating})
            </Typography>
          </Box>

          {/* Stats */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              gap: 3,
              mb: 3,
              pb: 3,
              borderBottom: '1px solid rgba(0,0,0,0.1)',
            }}
          >
            <Box sx={{ textAlign: 'center' }}>
              <Typography variant="h6" sx={{ fontWeight: 700, color: '#0D6E3F' }}>
                {totalStudents}+
              </Typography>
              <Typography variant="caption" color="text.secondary">
                Students
              </Typography>
            </Box>
            <Box sx={{ textAlign: 'center' }}>
              <Typography variant="h6" sx={{ fontWeight: 700, color: '#0D6E3F' }}>
                {experience}+
              </Typography>
              <Typography variant="caption" color="text.secondary">
                Years Exp.
              </Typography>
            </Box>
          </Box>

          {/* Specializations */}
          <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 1, mb: 3 }}>
            {specializations?.slice(0, 3).map((spec, index) => (
              <Chip
                key={index}
                label={spec}
                size="small"
                sx={{
                  backgroundColor: 'rgba(13, 110, 63, 0.1)',
                  color: '#0D6E3F',
                  fontWeight: 500,
                }}
              />
            ))}
          </Box>

          {/* Bio */}
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              mb: 3,
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
              lineHeight: 1.6,
            }}
          >
            {bio}
          </Typography>

          {/* Social Links */}
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1 }}>
            {social?.facebook && (
              <IconButton
                component="a"
                href={social.facebook}
                target="_blank"
                size="small"
                sx={{
                  color: '#6C757D',
                  '&:hover': { color: '#1877F2', backgroundColor: 'rgba(24, 119, 242, 0.1)' },
                }}
              >
                <Facebook fontSize="small" />
              </IconButton>
            )}
            {social?.twitter && (
              <IconButton
                component="a"
                href={social.twitter}
                target="_blank"
                size="small"
                sx={{
                  color: '#6C757D',
                  '&:hover': { color: '#1DA1F2', backgroundColor: 'rgba(29, 161, 242, 0.1)' },
                }}
              >
                <Twitter fontSize="small" />
              </IconButton>
            )}
            {social?.linkedin && (
              <IconButton
                component="a"
                href={social.linkedin}
                target="_blank"
                size="small"
                sx={{
                  color: '#6C757D',
                  '&:hover': { color: '#0A66C2', backgroundColor: 'rgba(10, 102, 194, 0.1)' },
                }}
              >
                <LinkedIn fontSize="small" />
              </IconButton>
            )}
            {social?.email && (
              <IconButton
                component="a"
                href={`mailto:${social.email}`}
                size="small"
                sx={{
                  color: '#6C757D',
                  '&:hover': { color: '#0D6E3F', backgroundColor: 'rgba(13, 110, 63, 0.1)' },
                }}
              >
                <Email fontSize="small" />
              </IconButton>
            )}
          </Box>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default TeacherCard;
