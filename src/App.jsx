import { Route, Routes } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import ResponsiveDrawer from './Components/Dashboard/Dashboard';
import Home from './Pages/Home/Home';
import Profile from './Components/Profile/Profile';
import Users from './Pages/Users/Users';
import UserDetails from './Pages/Users/UserDetails';
import ProductsCard from './Pages/Products/ProductCard/ProductCards';
import ProductDetails from './Pages/Products/ProductDetails/ProductDetails';
import GitHubProfileSearch from './Pages/GithubUserFinder/UserFinder';
import "@fontsource/montserrat";  // Defaults to weight 400
import "@fontsource/montserrat/700.css"; // Specify bold weight
import './index.css';  // Ensure global styles are applied
import ContactPage from './Pages/Contact/Contact';
import LoginPage from './Access/Login/Login';
import SignupPage from './Access/Signup/Signup';
import StudentRegistrationForm from './Pages/Students/StudentRegistration';
import DataTable from './Pages/Students/StudentList';
import TeacherRegistrationForm from './Pages/Teachers/TeacherRegistration';
import TeacherList from './Pages/Teachers/TeachertList';
import SubjectRegistrationForm from './Pages/Subjects/AddSubject';
import AddSubject from './Pages/Subjects/SubjectList';

// Material UI Theme
const theme = createTheme({
  typography: {
    fontFamily: 'Montserrat, sans-serif',
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        {/* Access */}

        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />

        {/* dashboard */}

        <Route path="/*" element={<ResponsiveDrawer />}>

          {/* student Routes */}
          <Route path="student-registration" element={<StudentRegistrationForm />} />
          <Route path="student-list" element={<DataTable />} />

          {/* Teacher Routes */}
          <Route path="teacher-registration" element={<TeacherRegistrationForm />} />
          <Route path="teacher-list" element={<TeacherList />} />

          {/* Subjects Routes */}
          <Route path="add-subject" element={<SubjectRegistrationForm />} />
          <Route path="subject-list" element={<AddSubject />} />


          <Route path="home" element={<Home />} />
          <Route path="profile" element={<Profile />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="users" element={<Users />} />
          <Route path="users/:id" element={<UserDetails />} />
          <Route path='products' element={<ProductsCard />} />
          <Route path='products/:id' element={<ProductDetails />} />
          <Route path='githubuserfinder' element={<GitHubProfileSearch />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
