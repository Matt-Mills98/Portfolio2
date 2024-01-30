import { Typography, Box, Fade, IconButton } from '@mui/material';
import React from 'react'
import Stack from '@mui/material/Stack';
import { Link } from "react-router-dom";



//Displays some project information. I'll likely go more into detail of this in the future.
//There's some unused portions attached inside this folder, I originally had an image masonry attached to this which displayed some relevant information about 
//a page. I am likely to resuse some stuff there so it is not currently deleted, as well as many project images in the public folder.
export default function Home(props) {
    const { color, setValue, setFilter, setAccent } = props
    const [loaded, setLoaded] = React.useState(false);

    React.useEffect(() => {
        updateLoaded(); setValue(3); setAccent(4); setFilter('none');
        window.document.title = 'Matt Mills | Projects';

    }, []);

    const updateLoaded = () => {
        setLoaded(true);
    }
    return (

            <Box sx={{ bgcolor: 'transparent', position: 'absolute', top: '100px', left: '40px' }}>
                <Fade in={loaded}>
                    <Box sx={{ margin: '10px' }}>
                        <Typography variant='h2' sx={{
                            fontSize: { xs: '3em', md: '4em', xl: '5em' },
                            color: 'white'
                        }}>Projects</Typography>
                        <Box m={1} mt={2}>
                            <Stack direction="row" alignItems="center" gap={1} >
                                <Typography variant='h6' sx={{ color: color, fontFamily: 'sans-serif' }}>WOPI Protocol Implementation</Typography>
                            </Stack>
                            <Box m={1} maxWidth={'50vh'}>
                                <Typography variant='body1' sx={{ color: '#FFFFFF', fontFamily: 'sans-serif' }}>2023 - In Progress</Typography>
                                <Box m={1} maxWidth={'50vh'}>
                                    <Typography variant='body1' sx={{ fontSize: { xs: '.9em', sm: '1em', xl: '1em' }, color: '#CCCCCC', fontFamily: 'sans-serif' }}>Word Online Integration into CobbleStone's Contract Insight to serve as an integrated document editor which can sideload Add-ins. This is essentially an ASP.NET API built with Microsoft being the client. Endpoints and functions are built depending on Microsoft's design specifications.</Typography>
                                </Box>
                            </Box>
                        </Box>
                        <Box m={1} mt={2}>
                            <Stack component={Link} to='https://echoes.fyi' sx={{ ':hover': { cursor: 'pointer' }, textDecoration: 'none' }} direction="row" alignItems="center" gap={1} >
                                <Typography variant='h6' sx={{ color: color, fontFamily: 'sans-serif' }}>Echoes.fyi</Typography>
                                <IconButton ><Box component={'img'} src={'./BulletPoint.png'} sx={{ width: '15px', transition: '.3s', ':hover': { width: '18px', filter: 'brightness(5)' } }}></Box></IconButton>
                            </Stack>
                            <Box m={1} maxWidth={'50vh'}>
                                <Typography variant='body1' sx={{ color: '#FFFFFF', fontFamily: 'sans-serif' }}>2023 - Awaiting Spotify Approval</Typography>
                                <Box m={1} maxWidth={'50vh'}>
                                    <Typography variant='body1' sx={{ fontSize: { xs: '.9em', sm: '1em', xl: '1em' }, color: '#CCCCCC', fontFamily: 'sans-serif' }}>Echoes.fyi is an individual project built to assist users in retrieving and filtering song recommendations, viewing personal account statistics, and viewing track analyses. This was designed according to Spotify Design Guidelines. Full Track Streaming is available to users with premium accounts.</Typography>
                                </Box>
                                <Box m={1} maxWidth={'50vh'}>
                                    <Typography variant='body1' sx={{ fontSize: { xs: '.9em', sm: '1em', xl: '1em' }, color: '#CCCCCC', fontFamily: 'sans-serif' }}>ReactJS Web Application which consumes the Spotify Web API and Spotify Playback SDK. Deployed via CloudFlare. Graphics created via Photoshop.</Typography>
                                </Box>
                            </Box>
                        </Box>
                        <Box m={1} mt={2}>
                            <Stack component={Link} to='https://m-mills.com' sx={{ ':hover': { cursor: 'pointer' }, textDecoration: 'none' }} direction="row" alignItems="center" gap={1} >
                                <Typography variant='h6' sx={{ color: color, fontFamily: 'sans-serif' }}>Portfolio</Typography>
                                <IconButton ><Box component={'img'} src={'./BulletPoint.png'} sx={{ width: '15px', transition: '.3s', ':hover': { width: '18px', filter: 'brightness(5)' } }}></Box></IconButton>
                            </Stack>
                            <Box m={1} maxWidth={'50vh'}>
                                <Typography variant='body1' sx={{ color: '#FFFFFF', fontFamily: 'sans-serif' }}>2023</Typography>
                                <Box m={1} maxWidth={'50vh'}>
                                    <Typography variant='body1' sx={{ fontSize: { xs: '.9em', sm: '1em', xl: '1em' }, color: '#CCCCCC', fontFamily: 'sans-serif' }}>What you're currently looking at! </Typography>
                                </Box>
                                <Box m={1} maxWidth={'50vh'}>
                                    <Typography variant='body1' sx={{ fontSize: { xs: '.9em', sm: '1em', xl: '1em' }, color: '#CCCCCC', fontFamily: 'sans-serif' }}>ReactJS Web Application utilizing ThreeJS for background graphics. SVGs were created using Photoshop. 3D Model was created using Blender.</Typography>
                                </Box>
                            </Box>
                        </Box>
                        <Box m={1} mb='50px'>
                            <Stack component={Link} to='https://appsource.microsoft.com/en-us/product/office/WA200005492?tab=Overview' sx={{ ':hover': { cursor: 'pointer' }, textDecoration: 'none' }} direction="row" alignItems="center" gap={1}>
                                <Typography variant='h6' sx={{ color: color, fontFamily: 'sans-serif' }}>CobbleStone Add-In for Word</Typography>
                                <IconButton ><Box component={'img'} src={'./BulletPoint.png'} sx={{ width: '15px', transition: '.3s', ':hover': { width: '18px', filter: 'brightness(5)' } }}></Box></IconButton>
                            </Stack>
                            <Box m={1} maxWidth={'50vh'}>
                                <Typography variant='body1' sx={{ color: '#CCCCCC', fontFamily: 'sans-serif' }}>2022 - 2023</Typography>
                                <Box m={1} maxWidth={'50vh'}>
                                    <Typography variant='body1' sx={{ fontSize: { xs: '.9em', sm: '1em', xl: '1em' }, color: '#CCCCCC', fontFamily: 'sans-serif' }}>This is an individually developed project created during my time at CobbleStone Software. This project is a web application injected in Word Services (Word Desktop, Word Online, etc.) and sideloaded according to an XML Manifest. This allows for custom ribbon tabs, buttons, and functions.
                                        Some implemented custom functions include replacing contract clauses based on a similarity coefficient. This is made more accurate using a Porter Stemming Algorithm. Other functions include opening files stored in a database directly inside of Word, uploading files to that database, comparing documents using Aspose, and several other complex functions. Requires Contract Insight Enterprise Software for use.</Typography>
                                </Box>
                            </Box>

                        </Box>
                    </Box>
                </Fade>
            </Box>
    );
}