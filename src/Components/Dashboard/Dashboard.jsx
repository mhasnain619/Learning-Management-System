import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { FaHome } from "react-icons/fa";
import { useNavigate, Outlet, Link } from "react-router-dom";
import jawan from '../../assets/jawan.png';
import { FaCartShopping } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { MdContactPage, MdExpandLess, MdExpandMore } from "react-icons/md";
import { FaGithub } from "react-icons/fa6";
import './Dashboard.css'
import { Avatar, Collapse, Menu, MenuItem, Tooltip } from '@mui/material';
// import './Layout.css'
const drawerWidth = 240;

function ResponsiveDrawer(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const navigate = useNavigate();
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const [isClosing, setIsClosing] = React.useState(false);
    const [openMenus, setOpenMenus] = React.useState({});

    const handleDrawerClose = () => {
        setIsClosing(true);
        setMobileOpen(false);
    };

    const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const handleToggle = (name) => {
        setOpenMenus((prev) => ({
            ...prev,
            [name]: !prev[name],
        }));
    };


    const pages = [
        { name: "Home", icon: <FaHome />, route: "/home" },

        {
            name: "Students", icon: <FaHome />, children: [
                { name: "Student Registration", route: "/student-registration" },
                { name: "Student List", route: "/student-list" }
            ]
        },
        {
            name: "Teachers", icon: <FaHome />, children: [
                { name: "Teacher Registration", route: "/teacher-registration" },
                { name: "Teacher List", route: "/teacher-list" }
            ]
        },
        {
            name: "Subjects", icon: <FaHome />, children: [
                { name: "Add Subject", route: "/add-subject" },
                { name: "Subjects List", route: "/subject-list" }
            ]
        },
        {
            name: "Syllabus", icon: <FaHome />, children: [
                { name: "Add Syllabus", route: "/add-syllabus" },
                { name: "Syllabus List", route: "/syllabus-list" }
            ]
        },
        {
            name: "School", icon: <FaHome />, children: [
                { name: "Student Registration", route: "/school-student-registration" },
                { name: "Teacher Registration", route: "/school-teacher-registration" }
            ]
        },
        {
            name: "Class", icon: <FaHome />, children: [
                { name: "Class Form", route: "/class-form" },
                { name: "Class List", route: "/class-list" }
            ]
        },
        {
            name: "Admission", icon: <FaHome />, children: [
                { name: "Admission Form", route: "/admission-form" },

            ]
        },
        {
            name: "Fees", icon: <FaHome />, children: [
                { name: "Fees Structure", route: "/fees-structure" },
                { name: "Fees Voucher", route: "/fees-voucher" },
                { name: "Fees Submission", route: "/fees-submission" },

            ]
        },
        { name: "Users", icon: <FaUser />, route: "/users" },
        { name: "Products", icon: <FaCartShopping />, route: "/products" },
        { name: "Githubuserfinder", icon: <FaGithub />, route: "/githubuserfinder" },
        { name: "Contact Us", icon: <MdContactPage />, route: "/contact" },
    ];

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            {/* <Toolbar /> */}
            <div className="logo">
                <Link to='/'>
                    <img className="logoImage" height='100%' width='100%' src={jawan} alt="" />
                </Link>
            </div>
            <Divider />
            <List>
                {pages.map((obj, index) => (
                    <div key={index}>
                        <ListItem disablePadding>
                            <ListItemButton onClick={() => obj.children ? handleToggle(obj.name) : navigate(obj.route)}>
                                <ListItemIcon sx={{ minWidth: "35px", fontSize: "20px" }}>{obj.icon}</ListItemIcon>
                                <ListItemText primary={obj.name} />
                                {obj.children && (openMenus[obj.name] ? <MdExpandLess /> : <MdExpandMore />)}
                            </ListItemButton>
                        </ListItem>

                        {obj.children && (
                            <Collapse in={openMenus[obj.name]} timeout="auto" unmountOnExit>
                                <List component="div" disablePadding>
                                    {obj.children.map((child, idx) => (
                                        <ListItem key={idx} disablePadding>
                                            <ListItemButton sx={{ pl: 4 }} onClick={() => navigate(child.route)}>
                                                <ListItemText primary={child.name} />
                                            </ListItemButton>
                                        </ListItem>
                                    ))}
                                </List>
                            </Collapse>
                        )}
                    </div>
                ))}
            </List>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: "flex" }}>
            <CssBaseline />

            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: "none" } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h5" noWrap component="div">
                        LMS
                    </Typography>
                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <FaUser style={{ color: 'white' }} />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {settings.map((setting) => (
                                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                    <Typography sx={{ textAlign: 'center' }}>{setting}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="menu items"
            >
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{ keepMounted: true }}
                    sx={{
                        display: { xs: "block", sm: "none" },
                        "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: "none", sm: "block" },
                        "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            {/* <Box height='120px' width='150px'>
                <img height='100%' width='100%' src={jawan} alt="" />
            </Box> */}
            <Box
                component="main"
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    // height: '100vh',
                    // backgroundColor: 'green',
                    // textAlign: 'start',
                    flexGrow: 1,
                    p: 3,
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                }}
            >


                {document.location.pathname === '/' && <Box sx={{ py: 5 }}>
                    <h3> Welcome to the ExploreEase :</h3>
                    <p>

                        This is the central hub where you can access
                        and manage all key aspects of your application.
                        Navigate through different sections such as Users, Products, Profile, and Contact using the sidebar menu. The dashboard provides a user-friendly interface for quick access to essential data, analytics, and management tools. Get real-time insights and efficiently handle tasks with just a few clicks.
                    </p>
                    <h3>Purpose of This Website :</h3>
                    <p>
                        The primary purpose of this website is to enhance my skills in React Nested Routing while utilizing Material-UI (MUI) for UI components.
                        This project serves as a hands-on practice to efficiently structure a dashboard with multiple pages, implementing a responsive sidebar navigation and seamless transitions between different sections. Through this, I am improving my understanding of React Router, component-based development, and UI/UX design with MUI.
                    </p>
                    <h3>Website Description: Explore, Manage, and Connect</h3>

                    <p> Welcome to YourHub, a dynamic web platform designed to streamline user management, product discovery, and seamless integration with GitHub. Our three core pages—Users, Products, and GitHub User Finder—empower you to organize data, explore resources, and connect with developers effortlessly.
                    </p>
                    <h4> Users Page</h4>
                    <p>            Manage and interact with user profiles in a clean, intuitive interface. View detailed user information, track activity, and customize access levels. Perfect for teams or communities looking to maintain organized user directories with search, filtering, and sorting capabilities.
                    </p>
                    <h4>  Products Page</h4>
                    <p>            Browse a curated catalog of products with rich descriptions, pricing, and availability. Whether you're showcasing software tools, physical goods, or digital services, this page offers a visually engaging experience. Users can filter by category, price, or popularity, making it easy to find exactly what they need.
                    </p>
                    <h3>  GitHub User Finder</h3>
                    <p>            Integrate with GitHub’s API to search for developers in real time. Enter a username to instantly fetch profiles, repositories, activity stats, and social links. Ideal for recruiters, collaborators, or open-source enthusiasts looking to connect with talented developers.
                    </p>
                </Box>}

                {/* Render nested routes (for dynamic content) */}

                <Outlet />
            </Box>
        </Box>
    );
}

ResponsiveDrawer.propTypes = {
    window: PropTypes.func,
};

export default ResponsiveDrawer;
