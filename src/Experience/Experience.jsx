import { Card, Typography, Box, Fade, Stack } from '@mui/material';
import React from 'react'
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import InspirationTTF from "./lemonmilk.ttf";

export default function Awards(props) {
    const { color, setValue, setFilter, setAccent } = props
    const [loaded, setLoaded] = React.useState(false);
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    React.useEffect(() => {
        updateLoaded(); setValue(2); setAccent(3); setFilter('none');
        window.document.title='Matt Mills | Experience';

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

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };
    return (
        <Box sx={{ bgcolor:'transparent', position: 'absolute', top:'100px', left:'40px' }}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Fade in={loaded}>
                    <Stack direction="column" justifyContent="center">

                        <Box sx={{margin:'10px'}}>
                            <Typography variant='h2' sx={{
                                color: 'white'
                            }}>Experience</Typography>
                            <Box m={1} my={2}>
                                <Typography variant='h6' sx={{ color: color, fontFamily: 'sans-serif' }}>CobbleStone Software</Typography>
                                <Box m={1} maxWidth={'50vh'}>
                                    <Typography variant='body1' sx={{ color: '#CCCCCC', fontFamily: 'sans-serif' }}>August 2021 - Current</Typography>
                                    <Box m={1} maxWidth={'50vh'}>
                                        <Typography variant='body4' sx={{ color: '#999999', fontFamily: 'sans-serif' }}>Independently developed a React.js Word Add-In for integration with CobbleStone’s Contract Management Software (Contract Insight) using a REST API.</Typography>
                                    </Box>
                                    <Box m={1} maxWidth={'50vh'}>
                                        <Typography variant='body4' sx={{ color: '#999999', fontFamily: 'sans-serif' }}>Updated a Legacy C# VSTO Plugin to run without the usage of local software, instead completely reliant on a REST API.</Typography>
                                    </Box>
                                    <Box m={1} maxWidth={'50vh'}>
                                        <Typography variant='body4' sx={{ color: '#999999', fontFamily: 'sans-serif' }}>Utilized Microsoft Graph API to allow clients to save files directly into their OneDrive using Contract Insight using ASP.NET. Utilized an OAuth 2.0 flow for retrieving/maintaining access tokens.</Typography>
                                    </Box>
                                    <Box m={1} maxWidth={'50vh'}>
                                        <Typography variant='body4' sx={{ color: '#999999', fontFamily: 'sans-serif' }}>Completed numerous bug fixes.</Typography>
                                    </Box>
                                    <Box m={1} maxWidth={'50vh'}>
                                        <Typography variant='body4' sx={{ color: '#999999', fontFamily: 'sans-serif' }}>Demonstrated projects both asynchronously and synchronously to CEO, CIO, CFO, and several others.</Typography>
                                    </Box>
                                    <Box m={1} maxWidth={'50vh'}>
                                        <Typography variant='body4' sx={{ color: '#999999', fontFamily: 'sans-serif' }}>Researched and defined requirements to meet use cases.</Typography>
                                    </Box>
                                    <Box m={1} maxWidth={'50vh'}>
                                        <Typography variant='body4' sx={{ color: '#999999', fontFamily: 'sans-serif' }}>Provided technical advice and mentorship for newer team members.</Typography>
                                    </Box>
                                    <Box m={1} maxWidth={'50vh'}>
                                        <Typography variant='body4' sx={{ color: '#999999', fontFamily: 'sans-serif' }}>Creation of 15+ complex MS SQL Server stored procedures and innumerable table modifications (T-SQL).</Typography>
                                    </Box>
                                    <Box m={1} maxWidth={'50vh'}>
                                        <Typography variant='body4' sx={{ color: '#999999', fontFamily: 'sans-serif' }}>Lead several client-facing meetings, including resolving bugs/configuration issues in deployed instances of Contract Insight.</Typography>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Stack>

                </Fade>
            </ThemeProvider>
        </Box>
    );
}