import { Card, Typography, Box, Fade } from '@mui/material';
import React from 'react'
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import InspirationTTF from "./lemonmilk.ttf";

export default function Awards(props) {
    const { color, setValue, setFilter, setAccent } = props
    const [loaded, setLoaded] = React.useState(false);

    React.useEffect(() => {
        updateLoaded(); setValue(1); setAccent(2); setFilter('none');
        window.document.title='Matt Mills | Awards';

    }, []);
    const updateLoaded = () => {
        setLoaded(true);
    }
    const [anchorElNav, setAnchorElNav] = React.useState(null);
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

    return (
        <Box sx={{bgcolor:'transparent', position: 'absolute', top:'100px', left:'40px' }}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Fade in={loaded}>

                    <Box sx={{margin:'10px'}}>

                        <Typography variant='h2' sx={{
                            color: 'white'
                        }}>Awards</Typography>
                        <Box m={1} my={2}>
                            <Typography variant='h6' sx={{ color: color, fontFamily: 'sans-serif' }}>Developer of the Year - CobbleStone Software 2023</Typography>
                            <Box m={1} maxWidth={'50vh'}>
                                <Typography variant='body1' sx={{ color: '#999999', fontFamily: 'sans-serif' }}>Awarded for my contributions to CobbleStone's Contract Insight Software through the completion of the CobbleStone Add-In for Word</Typography>
                            </Box>
                        </Box>
                        <Box m={1}>
                            <Typography variant='h6' sx={{ color: color, fontFamily: 'sans-serif' }}>Excellence in Information Technology - University of Scranton 2021</Typography>
                            <Box m={1} maxWidth={'50vh'}>
                                <Typography variant='body1' sx={{ color: '#999999', fontFamily: 'sans-serif' }}>Awarded for obtaining the highest GPA among peers in the same major</Typography>
                            </Box>
                        </Box>
                    </Box>
                </Fade>
            </ThemeProvider>
        </Box>
    );
}