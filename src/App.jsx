import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, CssBaseline, Box } from '@mui/material';
import theme from './theme/theme';

// Layout Components
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import AdminLayout from './components/admin/AdminLayout';

// Main Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ClassesPage from './pages/ClassesPage';
import ClassDetailsPage from './pages/ClassDetailsPage';
import TeachersPage from './pages/TeachersPage';
import ContactPage from './pages/ContactPage';

// Auth Pages
import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';

// Student Pages
import StudentDashboard from './pages/student/StudentDashboard';
import MyBookingsPage from './pages/student/MyBookingsPage';
import StudentProfilePage from './pages/student/StudentProfilePage';

// Booking Pages
import BookingPage from './pages/booking/BookingPage';
import BookingConfirmation from './pages/booking/BookingConfirmation';

// Admin Pages
import AdminDashboard from './pages/admin/AdminDashboard';
import ManageClassesPage from './pages/admin/ManageClassesPage';
import ManageStudentsPage from './pages/admin/ManageStudentsPage';
import ManageBookingsPage from './pages/admin/ManageBookingsPage';
import ManageTeachersPage from './pages/admin/ManageTeachersPage';
import SettingsPage from './pages/admin/SettingsPage';

// Layout wrapper for pages with Navbar and Footer
const MainLayout = ({ children }) => (
  <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
    <Navbar />
    <Box component="main" sx={{ flexGrow: 1 }}>
      {children}
    </Box>
    <Footer />
  </Box>
);

// Layout for auth pages (no footer)
const AuthLayout = ({ children }) => (
  <Box sx={{ minHeight: '100vh' }}>
    {children}
  </Box>
);

// Layout for dashboard pages (simplified)
const DashboardLayout = ({ children }) => (
  <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
    <Navbar />
    <Box component="main" sx={{ flexGrow: 1 }}>
      {children}
    </Box>
  </Box>
);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          {/* Main Public Routes */}
          <Route path="/" element={<MainLayout><HomePage /></MainLayout>} />
          <Route path="/about" element={<MainLayout><AboutPage /></MainLayout>} />
          <Route path="/classes" element={<MainLayout><ClassesPage /></MainLayout>} />
          <Route path="/classes/:id" element={<MainLayout><ClassDetailsPage /></MainLayout>} />
          <Route path="/teachers" element={<MainLayout><TeachersPage /></MainLayout>} />
          <Route path="/contact" element={<MainLayout><ContactPage /></MainLayout>} />

          {/* Auth Routes */}
          <Route path="/login" element={<AuthLayout><LoginPage /></AuthLayout>} />
          <Route path="/register" element={<AuthLayout><RegisterPage /></AuthLayout>} />

          {/* Booking Routes */}
          <Route path="/booking/:classId" element={<DashboardLayout><BookingPage /></DashboardLayout>} />
          <Route path="/booking/confirmation" element={<DashboardLayout><BookingConfirmation /></DashboardLayout>} />

          {/* Student Dashboard Routes */}
          <Route path="/student/dashboard" element={<DashboardLayout><StudentDashboard /></DashboardLayout>} />
          <Route path="/student/bookings" element={<DashboardLayout><MyBookingsPage /></DashboardLayout>} />
          <Route path="/student/profile" element={<DashboardLayout><StudentProfilePage /></DashboardLayout>} />

          {/* Admin Dashboard Routes */}
          <Route path="/admin" element={<AdminLayout><AdminDashboard /></AdminLayout>} />
          <Route path="/admin/dashboard" element={<AdminLayout><AdminDashboard /></AdminLayout>} />
          <Route path="/admin/classes" element={<AdminLayout><ManageClassesPage /></AdminLayout>} />
          <Route path="/admin/students" element={<AdminLayout><ManageStudentsPage /></AdminLayout>} />
          <Route path="/admin/teachers" element={<AdminLayout><ManageTeachersPage /></AdminLayout>} />
          <Route path="/admin/bookings" element={<AdminLayout><ManageBookingsPage /></AdminLayout>} />
          <Route path="/admin/settings" element={<AdminLayout><SettingsPage /></AdminLayout>} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
