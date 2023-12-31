import { Card, Typography, Box, Fade, IconButton } from '@mui/material';
import React from 'react'
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import InspirationTTF from "./lemonmilk.ttf";
import Stack from '@mui/material/Stack';
import ProjectDialog from './ProjectDialog';

const echoesData = [
    {
        img: './Echoes1.png',
        title: 'Echoes Home Page',
        description: 'Home Page for Echoes.fyi. A user will notice liked tracks being displayed, along with featured playlists and genres they can select. On the bottom is a drawer which displays some information about the currently playing track.',
    },
    {
        img: './Echoes2.png',
        title: 'Recommendations off Genres',
        description: 'The user has the ability to recieve track recommendations based on a large number of genres.'
    },
    {
        img: './Echoes3.png',
        title: 'Track Menu',
        description: 'Besides simply playing tracks, each track has a number of options available for navigation. '

    },
    {
        img: './Echoes4.png',
        title: 'Recommendations based on Tracks',
        description: 'Echoes can supply users recommendations based on a selected track.'

    }, {
        img: './Echoes5.png',
        title: 'Search',
        description: 'Users can search for tracks, albums, artists, or any combination of the three. Depending on the search, users can filter down the results to display more relevant data.'

    }, {
        img: './Echoes6.png',
        title: 'Statistics',
        description: 'Echoes displays relevant statistics for the signed in users. These statistics can be filtered based on time period. If a user would like to see their top tracks for the last month, they can do so by clicking the "1 month" button at the top of the page.'

    }, {
        img: './Echoes7.png',
        title: 'Playback Settings',
        description: 'Depending on the user\'s account type, a user can globally change their playback to allow for full playback of songs. This utilizes the Spotify SDK to connect to the Spotify Player and pull playback to Echoes.'

    }, {
        img: './Echoes9.png',

        title: 'Playback Mobile',
        description: 'When Echoes displayed on smaller screen dimensions, a user can select the bottom drawer to display a larger view of the currently playing track.'
    }, {
        img: './Echoes10.png',
        title: 'Recommendation Filters',
        description: 'Besides sorting filters that are present on every table that supplies tracks, recommendations can be filtered down through numerous track features. This allows for better recommendations based on what the user is looking for.'

    }, {
        img: './Echoes11.png',
        title: 'Analysis',
        description: 'A user can view a track\'s Audio Analysis by clicking on the menu option shown above. This analysis will display relevant information regarding the selected track.'
    },
];
const portfolioData = [
    {
        img: './Portfolio1.png',
        title: 'Portfolio Logo Photoshop',
        description: 'The portfolio logo was designed in Photoshop, transformed into a vector, and exported out as an .svg file.',
    },
    {
        img: './Portfolio2.png',
        title: '3D Model via Blender',
        description: 'The portfolio logo from Photoshop was then imported into blender, turned into a mesh, simplified faces, and solidified. This model was then exported out as a .glb file to be used by ThreeJS.'
    },

];
const addinData = [
    {
        img: './AddIn1.jpg',
        title: 'Sign In',
        description: 'This is the Sign-In page to the word add-in. Since the Add-In requires connectivity to tons of different systems, a URL to the user\'s Contract Insight is required.',
    },
    {
        img: './AddIn2.jpg',
        title: 'Opening File from DB',
        description: 'A user can select a number of record types to open up when searching for a file inside of the Add-In.',
    },
    {
        img: './AddIn3.jpg',
        title: 'Create a Record',
        description: 'Records can be created directly from the Word Add-In.'
    },
    {
        img: './AddIn4.jpg',
        title: 'View Record Details',
        description: 'Files are linked to a record location via custom XML attached to the document. When a file is linked, a user can view record details.'
    },
    {
        img: './AddIn5.jpg',
        title: 'View Record',
        description: 'A user can be redirected directly back into Contract Insight to view a record they are linked to. This is done by opening a window, redirecting the user to an outbound page, then redirecting them out to the internet. This is done in this way to get around Microsoft limitations with Window redirections.'
    },

];
const wopiData = [
    {
        img: './Wopi1.png',
        title: 'Word Display',
        description: 'Since this is mostly an API, there is not much front end I can show other than this image. This image shows Word Online being loaded onto an alternate server via the WOPI protocol. Files stored in out DB can be directly loaded, locked, edited, and saved directly to the DB through this.',
    },

];
export default function Home(props) {
    const { color, setValue, setFilter, setAccent } = props

    const [loaded, setLoaded] = React.useState(false);
    const [open, setOpen] = React.useState(false);
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [selectedImages, setSelectedImages] = React.useState([]);
    const [logo, setLogo] = React.useState('');
    const [link, setLink] = React.useState('');
    const [title, setTitle] = React.useState('');
    const [introText, setIntroText] = React.useState('');


    React.useEffect(() => {
        updateLoaded(); setValue(3); setAccent(4); setFilter('none');
        window.document.title='Matt Mills | Projects';

    }, []);

    const updateLoaded = () => {
        setLoaded(true);
    }
    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const theme = createTheme({
        typography: {
            fontFamily: "Inspiration"
        },
        components: {
            MuiCssBaseline: {
                styleOverrides: {
                    "@font-face": {
                        fontFamily: "Inspiration",
                        src: `url(${InspirationTTF}) format("truetype")`
                    },

                }
            }
        }
    });
    const handleClickOpen = (images) => {
        setOpen(true);
        if (images == 'echoes') {
            setIntroText("Echoes.fyi is a individual project built to assist users in retrieving and filtering song recommendations, viewing personal account statistics, and viewing track analyses. This was designed according to Spotify Design Guidelines. Full Track Streaming is available to users with premium accounts.")
            setSelectedImages(echoesData);
            setLogo('./EchoesTextLogo.png');
            setLink('https://echoes.fyi');
        }
        else if (images == 'wopi') {
            setIntroText("Word Online Integration into CobbleStone's Contract Insight to serve as an integrated document editor which can sideload Add-ins. This is essentially an ASP.NET API built with Microsoft being the client. Endpoints and functions are built depending on Microsoft's design specifications.")
            setTitle('WOPI Protocol Implementation')
            setLogo('');
            setSelectedImages(wopiData);
            setLink('https://learn.microsoft.com/en-us/microsoft-365/cloud-storage-partner-program/online/');

        }
        else if (images == 'portfolio') {
            setIntroText("ReactJS Web Application utilizing ThreeJS for background graphics. SVGs were created using Photoshop. 3D Model was created using Blender.")
            setSelectedImages(portfolioData);
            setLogo('./mmillslogowhite.png');
            setLink('https://localhost:3000');
        }
        else {
            setSelectedImages(addinData);
            setIntroText("Word Online Integration into CobbleStone's Contract Insight to serve as an integrated document editor which can sideload Add-ins. This is essentially an ASP.NET API built with Microsoft being the client. Endpoints and functions are built depending on Microsoft's design specifications.")
            setLogo('');
            setTitle('CobbleStone Add-In for Word')
            setLink('https://appsource.microsoft.com/en-us/product/office/WA200005492?tab=Overview');
        }
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Box sx={{ bgcolor:'transparent', position: 'absolute', top:'100px', left:'40px' }}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Fade in={loaded}>
                    <Box sx={{margin:'10px'}}>

                        <Typography variant='h2' sx={{
                            color: 'white'
                        }}>Projects</Typography>

                        <Box m={1} my={2}>
                            <Stack sx={{':hover':{cursor:'pointer'}}} direction="row" alignItems="center" gap={1} onClick={() => { handleClickOpen('wopi') }}>

                                <Typography variant='h6' sx={{ color: color, fontFamily: 'sans-serif' }}>WOPI Protocol Implementation</Typography>
                                <IconButton ><Box component={'img'} src={'./BulletPoint.png'} sx={{ width: '15px', transition: '.3s', ':hover': { width: '18px', filter: 'brightness(5)' } }}></Box></IconButton>
                            </Stack>
                            <Box m={1}  maxWidth={'50vh'}>
                                <Typography variant='body1' sx={{ color: '#CCCCCC', fontFamily: 'sans-serif' }}>2023 - In Progress</Typography>
                                <Box m={1} maxWidth={'50vh'}>
                                    <Typography variant='body1' sx={{ color: '#999999', fontFamily: 'sans-serif' }}>Word Online Integration into CobbleStone's Contract Insight to serve as an integrated document editor which can sideload Add-ins. This is essentially an ASP.NET API built with Microsoft being the client. Endpoints and functions are built depending on Microsoft's design specifications.</Typography>
                                </Box>

                            </Box>

                        </Box>
                        <Box m={1} mt={2} >
                            <Stack sx={{':hover':{cursor:'pointer'}}} direction="row" alignItems="center" gap={1} onClick={() => { handleClickOpen('echoes') }}>

                                <Typography variant='h6' sx={{ color: color, fontFamily: 'sans-serif' }}>Echoes.fyi</Typography>
                                <IconButton ><Box component={'img'} src={'./BulletPoint.png'} sx={{ width: '15px', transition: '.3s', ':hover': { width: '18px', filter: 'brightness(5)' } }}></Box></IconButton>

                            </Stack>
                            <Box m={1} maxWidth={'50vh'}>
                                <Typography variant='body1' sx={{ color: '#CCCCCC', fontFamily: 'sans-serif' }}>2023 - Awaiting Spotify Approval</Typography>
                                <Box m={1} maxWidth={'50vh'}>
                                    <Typography variant='body1' sx={{ color: '#999999', fontFamily: 'sans-serif' }}>Echoes.fyi is a individual project built to assist users in retrieving and filtering song recommendations, viewing personal account statistics, and viewing track analyses. This was designed according to Spotify Design Guidelines. Full Track Streaming is available to users with premium accounts.</Typography>
                                </Box>
                                <Box m={1} maxWidth={'50vh'}>
                                    <Typography variant='body1' sx={{ color: '#999999', fontFamily: 'sans-serif' }}>ReactJS Web Application which consumes the Spotify Web API and Spotify Playback SDK. Deployed via CloudFlare. Graphics created via Photoshop.</Typography>
                                </Box>
                            </Box>

                        </Box>
                        <Box m={1} mt={2}>
                            <Stack sx={{':hover':{cursor:'pointer'}}} direction="row" alignItems="center" gap={1} onClick={() => { handleClickOpen('portfolio') }}>
                                <Typography variant='h6' sx={{ color: color, fontFamily: 'sans-serif' }}>Portfolio</Typography>
                                <IconButton ><Box component={'img'} src={'./BulletPoint.png'} sx={{ width: '15px', transition: '.3s', ':hover': { width: '18px', filter: 'brightness(5)' } }}></Box></IconButton>
                            </Stack>
                            <Box m={1} maxWidth={'50vh'}>
                                <Typography variant='body1' sx={{ color: '#CCCCCC', fontFamily: 'sans-serif' }}>2023</Typography>
                                <Box m={1} maxWidth={'50vh'}>
                                    <Typography variant='body1' sx={{ color: '#999999', fontFamily: 'sans-serif' }}>What you're currently looking at! </Typography>
                                </Box>
                                <Box m={1} maxWidth={'50vh'}>
                                    <Typography variant='body1' sx={{ color: '#999999', fontFamily: 'sans-serif' }}>ReactJS Web Application utilizing ThreeJS for background graphics. SVGs were created using Photoshop. 3D Model was created using Blender.</Typography>
                                </Box>
                            </Box>

                        </Box>
                        <Box m={1} mb={2}>
                            <Stack sx={{':hover':{cursor:'pointer'}}}direction="row" alignItems="center" gap={1} onClick={() => { handleClickOpen('addin') }}>
                                <Typography variant='h6' sx={{ color: color, fontFamily: 'sans-serif' }}>CobbleStone Add-In for Word</Typography>
                                <IconButton ><Box component={'img'} src={'./BulletPoint.png'} sx={{ width: '15px', transition: '.3s', ':hover': { width: '18px', filter: 'brightness(5)' } }}></Box></IconButton>
                            </Stack>

                            <Box m={1} maxWidth={'50vh'}>
                                <Typography variant='body1' sx={{ color: '#CCCCCC', fontFamily: 'sans-serif' }}>2022 - 2023</Typography>

                                <Box m={1} maxWidth={'50vh'}>
                                    <Typography variant='body1' sx={{ color: '#999999', fontFamily: 'sans-serif' }}>This is an individually developed project created during my time at CobbleStone Software. This project is a web application injected in Word Services (Word Desktop, Word Online, etc.) and sideloaded according to an XML Manifest. This allows for custom ribbon tabs, buttons, and functions.
                                        Some implemented custom functions include replacing contract clauses based on a similarity coefficient. This is made more accurate using a Porter Stemming Algorithm. Other functions include opening files stored in a database directly inside of Word, uploading files to that database, comparing documents using Aspose, and several other complex functions. Requires Contract Insight Enterprise Software for use.</Typography>
                                </Box>
                            </Box>

                        </Box>
                    </Box>
                </Fade>
                <ProjectDialog open={open} onClose={handleClose} color={color} itemData={selectedImages} link={link} logo={logo} title = {title} introText={introText}></ProjectDialog>
            </ThemeProvider>
        </Box>
    );
}