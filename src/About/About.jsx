import { Card, Typography, Box, Fade } from '@mui/material';
import React from 'react'
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import InspirationTTF from "./lemonmilk.ttf";

export default function About(props) {
    const { color, setValue, setFilter, setAccent } = props
    const [loaded, setLoaded] = React.useState(false);

    React.useEffect(() => {
        updateLoaded(); setValue(0); setAccent(1); setFilter('none');
        window.document.title='Matt Mills | About';

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

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };
    return (
        <Box sx={{bgcolor:'transparent', position: 'absolute', top:'100px', left:'40px' }}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Fade in={loaded}>

                    <Box sx={{margin:'10px'}}>

                        <Typography variant='h2' sx={{
                            color: 'white'
                        }}>About</Typography>
                        <Typography variant='body1' sx={{ maxWidth: '50vh', color: '#999999', fontFamily: 'sans-serif' }}>Hi. I'm Matt, a software developer currently based in New Jersey, about 30 minutes outside of Philly. Listed below are some brief details about me to help you get to know me better. </Typography>

                        <Box m={1} mt={2}>
                            <Typography variant='h6' sx={{ color: color, fontFamily: 'sans-serif' }}>Interests</Typography>

                            <Box m={1} maxWidth={'50vh'}>
                                <Typography variant='body1' sx={{ color: '#CCCCCC', fontFamily: 'sans-serif' }}>Some of my interests outside of coding include exercise, reading, tech, graphic design, and video games.
                                </Typography>
                                <Box m={1} maxWidth={'50vh'}>
                                    <Typography variant='body1' sx={{ color: '#999999', fontFamily: 'sans-serif' }}>Growing up, I was a competitive swimmer between the ages of 5 to 21 years old. While I certainly experienced both the highs and lows of the sport, I continue to keep in shape to this day. My normal week consists of alternating swimming and lifting after work, which I geniunely enjoy. </Typography>
                                </Box>
                                <Box m={1} maxWidth={'50vh'}>
                                    <Typography variant='body1' sx={{ color: '#999999', fontFamily: 'sans-serif' }}>Reading has always been a relaxing endeavor for myself. I personally enjoy fantasy novels and am currently working my way through Reddit suggestions on my Kindle. </Typography>
                                </Box>
                                <Box m={1} maxWidth={'50vh'}>
                                    <Typography variant='body1' sx={{ color: '#999999', fontFamily: 'sans-serif' }}>Tech has always interested me. About 2 years ago, I finally got around to building a dream PC for myself. I'm currently using that PC to code this site! </Typography>
                                </Box>
                                <Box m={1} maxWidth={'50vh'}>
                                    <Typography variant='body1' sx={{ color: '#999999', fontFamily: 'sans-serif' }}>When I was much younger, I always had a bit of a knack for art. This led to me percieving art classes as one of my favorite subjects. Around 12 years old, I began learning Adobe Photoshop and Cinema 4D, using cracked versions on a PC that had no business running these programs. There, I learned logo design, vector creation, basic 3D modeling, and basic design principles among other things. While I continued to take art and graphic design classes through college, these skills gave me a great foundation for much of my front end development.</Typography>
                                </Box>
                                <Box m={1} maxWidth={'50vh'}>
                                    <Typography variant='body1' sx={{ color: '#999999', fontFamily: 'sans-serif' }}>In my downtime, I'll often play various online games with friends. I personally enjoy party games the most.</Typography>
                                </Box>
                            </Box>
                        </Box>
                        <Box m={1}>
                            <Typography variant='h6' sx={{ color: color, fontFamily: 'sans-serif' }}>Education</Typography>
                            <Box m={1} maxWidth={'50vh'}>
                                <Typography variant='body1' sx={{ color: '#999999', fontFamily: 'sans-serif' }}>I graduated from the University of Scranton in May of 2021 with a BS in Information Technology.</Typography>

                            </Box>
                            <Box m={1} maxWidth={'50vh'}>

                                <Typography variant='body1' sx={{ color: '#999999', fontFamily: 'sans-serif' }}>During my time at Scranton, I was a member of both Upsilon Pi Epsilon (Computing Honors Society) and the swim team. As of December 2023, I believe I still hold around 4 school records for swimming.</Typography>
                            </Box>

                        </Box>
                    </Box>
                </Fade>
            </ThemeProvider>
        </Box>
    );
}