import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Outlet, Link } from "react-router-dom";
import Animation from './Animation/Animation';
import Home from './Home/Home';
import { Tabs, Tab } from '@mui/material';
import Awards from './Awards/Awards'
import Experience from './Experience/Experience'
import Projects from './Projects/Projects'
import About from './About/About';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import LoadingAnimation from './Animation/LoadingAnimation';


const accents = ['#b700ff', '#08f3ff', '#ffea00', '#09ff00', '#ff5500']
const shuffle = (accent = 0) => [
  { color: '#444', roughness: 0.1 },
  { color: '#444', roughness: 0.75 },
  { color: '#444', roughness: 0.75 },
  { color: 'white', roughness: 0.1 },
  { color: 'white', roughness: 0.75 },
  { color: 'white', roughness: 0.1 },
  { color: accents[accent], roughness: 0.1, accent: true },
  { color: accents[accent], roughness: 0.75, accent: true },
  { color: accents[accent], roughness: 0.1, accent: true }
]

function getCurrentDimension() {
  return {
    width: window.innerWidth,
    height: window.innerHeight
  }
}

export default function App() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [accent, setAccent] = React.useState(0);
  const [filter, setFilter] = React.useState('');
  const [value, setValue] = React.useState(-1);
  const [loaded, setLoaded] = React.useState(false);
  const [screenSize, setScreenSize] = React.useState(getCurrentDimension());

  const delay = ms => new Promise(res => setTimeout(res, ms));

  const handleLoading = async () => {
    await delay(4000);
    setLoaded(true);
  }
  React.useEffect(() => {
    const updateDimension = () => {
      setScreenSize(getCurrentDimension())
    }
    window.addEventListener('resize', updateDimension);


    return (() => {
      window.removeEventListener('resize', updateDimension);
    })
  }, [screenSize])

  React.useEffect(() => {
    handleLoading();
  }, [])


  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const click = (num) => {
    setAccent(num);
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };


  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ bgcolor: ' #0f0f0f' }}>

      <BrowserRouter>

        <Box sx={{ bgcolor: ' #0f0f0f' }}>
          {screenSize.width>500 && !loaded &&
            <LoadingAnimation color={accents[accent]} loaded={loaded}></LoadingAnimation>
          }

          <AppBar position="fixed" sx={{ bgcolor: 'black' }}>
            <Container sx={{ width: '95vw' }}>
              <Toolbar disableGutters sx={{}}>

                <Box sx={{ flexGrow: 1, marginLeft: 'auto', display: { xs: 'flex', md: 'none' } }}>
                  <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleOpenNavMenu}
                    color="inherit"
                  >
                    <Box
                      component="img"

                      sx={{
                        width: '35px', height: '35px', filter: filter
                      }}
                      alt="Mmills Logo"
                      src="mmillslogowhite.png"
                    />
                  </IconButton>
                  <Menu
                    id="menu-appbar"
                    anchorEl={anchorElNav}
                    anchorOrigin={{
                      vertical: 'bottom',
                      horizontal: 'left',
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'left',
                    }}
                    open={Boolean(anchorElNav)}
                    onClose={handleCloseNavMenu}
                    sx={{
                      display: { xs: 'block', md: 'none' }, "& .MuiPaper-root": {
                        backgroundColor: "black"
                      }
                    }}
                  >
                    <MenuItem key={'Home'} sx={{ transition: '.3s', ':hover': { bgcolor: '#222222' } }} component={Link} to='./' onClick={() => { setFilter(false); click(0); handleCloseNavMenu(); }}>
                      <Typography sx={{ color: '#CCCCCC' }} textAlign="center">Home</Typography>
                    </MenuItem>
                    <MenuItem key={'About'} sx={{ transition: '.3s', ':hover': { bgcolor: '#222222' } }} component={Link} to='./About' onClick={() => { setFilter(false); click(1); handleCloseNavMenu(); }}>
                      <Typography sx={{ color: '#CCCCCC' }} textAlign="center">About</Typography>
                    </MenuItem>
                    <MenuItem key={'Awards'} sx={{ transition: '.3s', ':hover': { bgcolor: '#222222' } }} component={Link} to='./Awards' onClick={() => { setFilter(false); click(2); handleCloseNavMenu(); }}>
                      <Typography sx={{ color: '#CCCCCC' }} textAlign="center">Awards</Typography>
                    </MenuItem>
                    <MenuItem key={'Projects'} sx={{ transition: '.3s', ':hover': { bgcolor: '#222222' } }} component={Link} to='./Experience' onClick={() => { setFilter(false); click(3); handleCloseNavMenu(); }}>
                      <Typography sx={{ color: '#CCCCCC' }} textAlign="center">Experience</Typography>
                    </MenuItem>
                    <MenuItem key={'Projects'} sx={{ transition: '.3s', ':hover': { bgcolor: '#222222' } }} component={Link} to='./Projects' onClick={() => { setFilter(false); click(4); handleCloseNavMenu(); }}>
                      <Typography sx={{ color: '#CCCCCC' }} textAlign="center">Projects</Typography>
                    </MenuItem>
                  </Menu>
                </Box>
                <Box sx={{ flexGrow: 1, justifyContent: 'left', display: { xs: 'none', md: 'flex' } }}>
                  <IconButton sx={{ mt: 2, color: 'white', display: 'block', }} component={Link} to='./' onClick={() => { setFilter('invert(89%) sepia(74%) saturate(7174%) hue-rotate(280deg) brightness(104%) contrast(123%)'); handleCloseNavMenu(); handleChange(-1); click(0); }}>

                    <Box
                      component="img"

                      sx={{
                        width: '35px', height: '35px', filter: filter
                      }}
                      alt="Mmills Logo"
                      src="mmillslogowhite.png"
                    />
                  </IconButton>
                  <Tabs textColor='#CCCCCC' sx={{ my: 2, }} TabIndicatorProps={{
                    sx: {
                      backgroundColor: accents[accent],
                    },
                  }} value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab onClick={() => { setFilter(false); handleCloseNavMenu(); click(1); }} sx={{ color: 'white', }} label="About" component={Link} to='./About' />

                    <Tab onClick={() => { setFilter(false); handleCloseNavMenu(); click(2); }} sx={{ color: 'white', }} label="Awards" component={Link} to='./Awards' />
                    <Tab onClick={() => { setFilter(false); handleCloseNavMenu(); click(3); }} sx={{ color: 'white', }} label="Experience" component={Link} to='./Experience' />
                    <Tab onClick={() => { setFilter(false); handleCloseNavMenu(); click(4); }} sx={{ color: 'white', }} label="Projects" component={Link} to='./Projects' />
                  </Tabs>



                </Box>

                <IconButton component={Link} to='https://github.com/Matt-Mills98' sx={{ color: accents[accent], transition: '.3s', ":hover": { color: 'white' } }}><GitHubIcon fontSize='large' /></IconButton>
                <IconButton component={Link} to='https://www.linkedin.com/in/matt-mills-633b00214/' sx={{ color: accents[accent], transition: '.3s', ":hover": { color: 'white' } }}><LinkedInIcon fontSize='large' /></IconButton>
                <IconButton href={'mailto:mattmills32013@gmail.com'} sx={{ color: accents[accent], transition: '.3s', ":hover": { color: 'white' } }}><EmailIcon fontSize='large' /></IconButton>
              </Toolbar>
            </Container>

          </AppBar>
          <Box>
            <Box sx={{
              position: 'fixed', top: 0, width: '99.3vw', height: '100vh', zIndex: 0, visibility: { xs: 'collapse', sm: 'visible' }
            }}>
              <Animation shuffle={shuffle} accents={accents} accent={accent} width={screenSize.width} />
            </Box>
            <Outlet />
            <Routes>

              <Route index element={<Box sx={{ margin: 1, userSelect: 'none', '-webkit-touch-callout': 'none' }}><Home color={accents[accent]} setValue={setValue} setFilter={setFilter} setAccent={click}></Home></Box>}></Route>
              <Route path="About" element={<Box sx={{ margin: 1, userSelect: 'none', '-webkit-touch-callout': 'none' }}><About color={accents[accent]} setValue={setValue} setFilter={setFilter} setAccent={click}></About></Box>}></Route>
              <Route path="Awards" element={<Box sx={{ margin: 1, userSelect: 'none', '-webkit-touch-callout': 'none' }}><Awards color={accents[accent]} setValue={setValue} setFilter={setFilter} setAccent={click}></Awards></Box>}></Route>
              <Route path="Experience" element={<Box sx={{ margin: 1, userSelect: 'none', '-webkit-touch-callout': 'none' }}><Experience color={accents[accent]} setValue={setValue} setFilter={setFilter} setAccent={click}></Experience></Box>}></Route>
              <Route path="Projects" element={<Box sx={{ margin: 1, userSelect: 'none', '-webkit-touch-callout': 'none' }}><Projects color={accents[accent]} setValue={setValue} setFilter={setFilter} setAccent={click}></Projects></Box>}></Route>

            </Routes>



          </Box>
        </Box>


      </BrowserRouter>
    </Box>

  );
}
