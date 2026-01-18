import { useState } from 'react';
import { Box, Container, Typography, Grid, TextField, Button, Card, CardContent, Accordion, AccordionSummary, AccordionDetails, Snackbar, Alert } from '@mui/material';
import { LocationOn, Phone, Email, WhatsApp, AccessTime, Send, ExpandMore } from '@mui/icons-material';
import { motion } from 'framer-motion';

const contactInfo = [
  { icon: <LocationOn sx={{ fontSize: 28 }} />, title: 'Address', content: '123 Islamic Center Road, Knowledge City, KC 12345' },
  { icon: <Phone sx={{ fontSize: 28 }} />, title: 'Phone', content: '+1 (555) 123-4567' },
  { icon: <Email sx={{ fontSize: 28 }} />, title: 'Email', content: 'info@quranlearn.com' },
  { icon: <WhatsApp sx={{ fontSize: 28 }} />, title: 'WhatsApp', content: '+1 (555) 987-6543' },
];

const faqs = [
  { question: 'How do I enroll in a class?', answer: 'Simply register on our website, browse available classes, and click "Book Now" on your preferred class. You can select your preferred time slot and complete the booking.' },
  { question: 'What are the class timings?', answer: 'We offer flexible scheduling with classes available 24/7. You can choose any time slot that fits your schedule during the booking process.' },
  { question: 'Do you offer free trial classes?', answer: 'Yes! We offer a free trial class for all new students. Register and request a trial to experience our teaching methodology.' },
  { question: 'What qualifications do your teachers have?', answer: 'All our teachers are certified Huffaz or have formal Islamic education. Many hold Ijazahs and degrees from renowned Islamic institutions.' },
  { question: 'Can I reschedule my booked classes?', answer: 'Yes, you can reschedule classes up to 4 hours before the scheduled time through your student dashboard.' },
];

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSuccess(true);
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  return (
    <Box>
      <Box sx={{ py: 12, background: 'linear-gradient(135deg, rgba(13, 110, 63, 0.95) 0%, rgba(26, 35, 126, 0.9) 100%)' }}>
        <Container maxWidth="lg">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <Typography variant="h2" sx={{ color: 'white', fontWeight: 700, textAlign: 'center', mb: 3 }}>
              Contact <Box component="span" sx={{ color: '#D4AF37' }}>Us</Box>
            </Typography>
            <Typography variant="h6" sx={{ color: 'rgba(255,255,255,0.85)', textAlign: 'center', maxWidth: 700, mx: 'auto' }}>
              Have questions? We're here to help. Reach out and we'll respond as soon as possible.
            </Typography>
          </motion.div>
        </Container>
      </Box>

      <Box sx={{ py: 10, backgroundColor: '#FAFAF5' }}>
        <Container maxWidth="lg">
          <Grid container spacing={6}>
            <Grid size={{ xs: 12, md: 5 }}>
              <Typography variant="h4" sx={{ fontWeight: 700, mb: 4, color: '#1A1A2E' }}>Get in Touch</Typography>
              <Grid container spacing={3}>
                {contactInfo.map((info, index) => (
                  <Grid size={12} key={index}>
                    <Card sx={{ borderRadius: 3, transition: 'all 0.3s', '&:hover': { transform: 'translateY(-4px)', boxShadow: '0 12px 30px rgba(13,110,63,0.1)' } }}>
                      <CardContent sx={{ display: 'flex', alignItems: 'center', gap: 2, p: 3 }}>
                        <Box sx={{ width: 56, height: 56, borderRadius: 2, background: 'linear-gradient(135deg, rgba(13,110,63,0.1) 0%, rgba(212,175,55,0.1) 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#0D6E3F' }}>
                          {info.icon}
                        </Box>
                        <Box>
                          <Typography variant="subtitle2" color="text.secondary">{info.title}</Typography>
                          <Typography variant="body1" sx={{ fontWeight: 600, color: '#1A1A2E' }}>{info.content}</Typography>
                        </Box>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
              <Card sx={{ mt: 3, borderRadius: 3, background: 'linear-gradient(135deg, #0D6E3F 0%, #1A237E 100%)', color: 'white' }}>
                <CardContent sx={{ p: 3 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <AccessTime sx={{ fontSize: 28 }} />
                    <Box>
                      <Typography variant="subtitle2" sx={{ opacity: 0.9 }}>Business Hours</Typography>
                      <Typography variant="body1" sx={{ fontWeight: 600 }}>24/7 - Classes Available Anytime</Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>

            <Grid size={{ xs: 12, md: 7 }}>
              <Card sx={{ borderRadius: 4, p: 4 }}>
                <Typography variant="h5" sx={{ fontWeight: 700, mb: 3, color: '#1A1A2E' }}>Send us a Message</Typography>
                <form onSubmit={handleSubmit}>
                  <Grid container spacing={3}>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField fullWidth label="Your Name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField fullWidth label="Email Address" type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField fullWidth label="Phone Number" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField fullWidth label="Subject" value={formData.subject} onChange={(e) => setFormData({ ...formData, subject: e.target.value })} required />
                    </Grid>
                    <Grid size={12}>
                      <TextField fullWidth multiline rows={4} label="Your Message" value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} required />
                    </Grid>
                    <Grid size={12}>
                      <Button type="submit" variant="contained" size="large" endIcon={<Send />} sx={{ py: 1.5, px: 4, background: 'linear-gradient(135deg, #0D6E3F 0%, #1A8B52 100%)', fontWeight: 600 }}>
                        Send Message
                      </Button>
                    </Grid>
                  </Grid>
                </form>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box sx={{ py: 10, backgroundColor: 'white' }}>
        <Container maxWidth="md">
          <Typography variant="h4" sx={{ fontWeight: 700, mb: 4, textAlign: 'center', color: '#1A1A2E' }}>
            Frequently Asked <Box component="span" sx={{ color: '#0D6E3F' }}>Questions</Box>
          </Typography>
          {faqs.map((faq, index) => (
            <Accordion key={index} sx={{ mb: 2, borderRadius: 2, '&:before': { display: 'none' }, boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
              <AccordionSummary expandIcon={<ExpandMore />}>
                <Typography sx={{ fontWeight: 600 }}>{faq.question}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography color="text.secondary">{faq.answer}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Container>
      </Box>

      <Snackbar open={showSuccess} autoHideDuration={6000} onClose={() => setShowSuccess(false)} anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}>
        <Alert severity="success" onClose={() => setShowSuccess(false)}>Message sent successfully! We'll get back to you soon.</Alert>
      </Snackbar>
    </Box>
  );
};

export default ContactPage;
