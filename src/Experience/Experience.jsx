import { Typography, Box, Fade, Stack } from '@mui/material';
import React from 'react'

//Experience page contents. Most of these similar page components can be made more modular, but for the sake of a personal 
//project and potential customizability (I'm likely to change these in the future), 
//I am keeping these as individual components. If this were a prod environment, I would have these as a singular component for the purpose of readability and easier changes. 
export default function Experience(props) {
    const { color, setValue, setFilter, setAccent } = props
    const [loaded, setLoaded] = React.useState(false);

    React.useEffect(() => {
        updateLoaded(); setValue(2); setAccent(3); setFilter('none');
        window.document.title = 'Matt Mills | Experience';

    }, []);

    const updateLoaded = () => {
        setLoaded(true);
    }

    return (
        <Box sx={{ background: 'linear-gradient(90deg, rgba(15,15,15,1) 0%, rgba(15,15,15,.75) 47%, rgba(15,15,15,0) 100%);', position: 'absolute', top: '0px', left: '0px', height: '100vh', width: '50vw' }}>

            <Box sx={{ bgcolor: 'transparent', position: 'absolute', top: '100px', left: '40px' }}>
                <Fade in={loaded}>
                    <Stack direction="column" justifyContent="center">

                        <Box sx={{ margin: '10px' }}>
                            <Typography variant='h2' sx={{
                                fontSize: { xs: '3em', md: '4em', xl: '5em' },
                                color: 'white'
                            }}>Experience</Typography>
                            <Box m={1} my={2}>
                                <Typography variant='h6' sx={{ color: color, fontFamily: 'sans-serif' }}>CobbleStone Software</Typography>
                                <Box m={1} maxWidth={'50vh'} mb={2}>
                                    <Typography variant='body1' sx={{ color: '#CCCCCC', fontFamily: 'sans-serif' }}>August 2021 - Current</Typography>
                                    <Box m={1} maxWidth={'50vh'}>
                                        <Typography variant='body4' sx={{ fontSize: { xs: '.9em', sm: '1em', xl: '1em' }, color: '#999999', fontFamily: 'sans-serif' }}>Independently developed a React.js Word Add-In for integration with CobbleStone’s Contract Management Software (Contract Insight) using a REST API.</Typography>
                                    </Box>
                                    <Box m={1} maxWidth={'50vh'}>
                                        <Typography variant='body4' sx={{ fontSize: { xs: '.9em', sm: '1em', xl: '1em' }, color: '#999999', fontFamily: 'sans-serif' }}>Updated a Legacy C# VSTO Plugin to run without the usage of local software, instead completely reliant on a REST API.</Typography>
                                    </Box>
                                    <Box m={1} maxWidth={'50vh'}>
                                        <Typography variant='body4' sx={{ fontSize: { xs: '.9em', sm: '1em', xl: '1em' }, color: '#999999', fontFamily: 'sans-serif' }}>Utilized Microsoft Graph API to allow clients to save files directly into their OneDrive using Contract Insight using ASP.NET. Utilized an OAuth 2.0 flow for retrieving/maintaining access tokens.</Typography>
                                    </Box>
                                    <Box m={1} maxWidth={'50vh'}>
                                        <Typography variant='body4' sx={{ fontSize: { xs: '.9em', sm: '1em', xl: '1em' }, color: '#999999', fontFamily: 'sans-serif' }}>Completed numerous bug fixes.</Typography>
                                    </Box>
                                    <Box m={1} maxWidth={'50vh'}>
                                        <Typography variant='body4' sx={{ fontSize: { xs: '.9em', sm: '1em', xl: '1em' }, color: '#999999', fontFamily: 'sans-serif' }}>Demonstrated projects both asynchronously and synchronously to CEO, CIO, CFO, and several others.</Typography>
                                    </Box>
                                    <Box m={1} maxWidth={'50vh'}>
                                        <Typography variant='body4' sx={{ fontSize: { xs: '.9em', sm: '1em', xl: '1em' }, color: '#999999', fontFamily: 'sans-serif' }}>Researched and defined requirements to meet use cases.</Typography>
                                    </Box>
                                    <Box m={1} maxWidth={'50vh'}>
                                        <Typography variant='body4' sx={{ fontSize: { xs: '.9em', sm: '1em', xl: '1em' }, color: '#999999', fontFamily: 'sans-serif' }}>Provided technical advice and mentorship for newer team members.</Typography>
                                    </Box>
                                    <Box m={1} maxWidth={'50vh'}>
                                        <Typography variant='body4' sx={{ fontSize: { xs: '.9em', sm: '1em', xl: '1em' }, color: '#999999', fontFamily: 'sans-serif' }}>Creation of 15+ complex MS SQL Server stored procedures and innumerable table modifications (T-SQL).</Typography>
                                    </Box>
                                    <Box m={1} maxWidth={'50vh'}>
                                        <Typography variant='body4' sx={{ fontSize: { xs: '.9em', sm: '1em', xl: '1em' }, color: '#999999', fontFamily: 'sans-serif' }}>Lead several client-facing meetings, including resolving bugs/configuration issues in deployed instances of Contract Insight.</Typography>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Stack>

                </Fade>
            </Box>
        </Box>
    );
}