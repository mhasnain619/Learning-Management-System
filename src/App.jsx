import { Route, Routes } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import ResponsiveDrawer from './Components/Dashboard/Dashboard';
import Home from './Components/Home/Home';
import Profile from './Components/Profile/Profile';
import Users from './Components/Users/Users';
import UserDetails from './Components/Users/UserDetails';
import ProductsCard from './Components/Products/ProductCard/ProductCards';
import ProductDetails from './Components/Products/ProductDetails/ProductDetails';
import GitHubProfileSearch from './Components/GithubUserFinder/UserFinder';
import "@fontsource/montserrat";  // Defaults to weight 400
import "@fontsource/montserrat/700.css"; // Specify bold weight
import './index.css';  // Ensure global styles are applied
import ContactPage from './Components/Contact/Contact';
import LoginPage from './Components/Access/Login/Login';
import SignupPage from './Components/Access/Signup/Signup';
import StudentRegistrationForm from './Components/Pages/Students/StudentRegistration';
import StudentList from './Components/Pages/Students/StudentList';
import DataTable from './Components/Pages/Students/StudentList';

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
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/*" element={<ResponsiveDrawer />}>
          <Route path="student" element={<StudentRegistrationForm />} />
          <Route path="student-list" element={<DataTable />} />
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
