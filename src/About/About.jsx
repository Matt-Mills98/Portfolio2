import { Typography, Box, Fade } from '@mui/material';
import React from 'react'

//About page contents. Most of these similar page components can be made more modular, but for the sake of a personal 
//project and potential customizability (I'm likely to change these in the future), 
//I am keeping these as individual components. If this were a prod environment, I would have these as a singular component for the purpose of readability and easier changes. 
export default function About(props) {
    const { color, setValue, setFilter, setAccent } = props
    const [loaded, setLoaded] = React.useState(false);

    React.useEffect(() => {
        //
        updateLoaded(); setValue(0); setAccent(1); setFilter('none');
        window.document.title = 'Matt Mills | About';

    }, []);

    //checks if page has been loaded 
    const updateLoaded = () => {
        setLoaded(true);
    }

    return (

            <Box sx={{ bgcolor: 'transparent', position: 'absolute', top: '100px', left: '40px' }}>
                <Fade in={loaded}>
                    <Box mb={2} sx={{ margin: '10px' }}>

                        <Typography variant='h2' sx={{
                            fontSize: { xs: '3em', md: '4em', xl: '5em' },
                            color: 'white'
                        }}>About</Typography>
                        <Box m={1} my={2}>
                            <Typography variant='body1' sx={{ maxWidth: '50vh', color: '#CCCCCC', fontFamily: 'sans-serif' }}>Hi. I'm Matt, a software developer currently based in New Jersey, about 30 minutes outside of Philly. Listed below are some brief details about me to help you get to know me better. </Typography>

                            <Typography variant='h6' sx={{ color: color, fontFamily: 'sans-serif' }}>Interests</Typography>

                            <Box m={1} maxWidth={'50vh'}>
                                <Typography variant='body1' sx={{ color: '#FFFFFF', fontFamily: 'sans-serif' }}>Some of my interests outside of coding include exercise, reading, tech, graphic design, and video games.
                                </Typography>
                                <Box m={1} maxWidth={'50vh'}>
                                    <Typography variant='body1' sx={{ fontSize: { xs: '.9em', sm: '1em', xl: '1em' }, color: '#CCCCCC', fontFamily: 'sans-serif' }}>Growing up, I was a competitive swimmer between the ages of 5 to 21 years old. While I certainly experienced both the highs and lows of the sport, I continue to keep in shape to this day. My normal week consists of alternating swimming and lifting after work, which I genuinely enjoy. </Typography>
                                </Box>
                                <Box m={1} maxWidth={'50vh'}>
                                    <Typography variant='body1' sx={{ fontSize: { xs: '.9em', sm: '1em', xl: '1em' }, color: '#CCCCCC', fontFamily: 'sans-serif' }}>Reading has always been a relaxing endeavor for me. I personally enjoy fantasy novels and am currently working my way through Reddit suggestions on my Kindle. </Typography>
                                </Box>
                                <Box m={1} maxWidth={'50vh'}>
                                    <Typography variant='body1' sx={{ fontSize: { xs: '.9em', sm: '1em', xl: '1em' }, color: '#CCCCCC', fontFamily: 'sans-serif' }}>Tech has always interested me. About 2 years ago, I finally got around to building a dream PC for myself. I'm currently using that PC to code this site! </Typography>
                                </Box>
                                <Box m={1} maxWidth={'50vh'}>
                                    <Typography variant='body1' sx={{ fontSize: { xs: '.9em', sm: '1em', xl: '1em' }, color: '#CCCCCC', fontFamily: 'sans-serif' }}>When I was much younger, I always had a bit of a knack for art. This led to me perceiving art classes as one of my favorite subjects. Around 12 years old, I began learning Adobe Photoshop and Cinema 4D, using cracked versions on a PC that had no business running these programs. There, I learned logo design, vector creation, basic 3D modeling, and basic design principles among other things. While I continued to take art and graphic design classes through college, these skills gave me a great foundation for much of my front-end development.</Typography>
                                </Box>
                                <Box m={1} maxWidth={'50vh'}>
                                    <Typography variant='body1' sx={{ fontSize: { xs: '.9em', sm: '1em', xl: '1em' }, color: '#CCCCCC', fontFamily: 'sans-serif' }}>In my downtime, I'll often play various online games with friends. I personally enjoy party games the most.</Typography>
                                </Box>
                            </Box>
                        </Box>
                        <Box m={1} mb='50px'>
                            <Typography variant='h6' sx={{ color: color, fontFamily: 'sans-serif' }}>Education</Typography>
                            <Box m={1} maxWidth={'50vh'}>
                                <Typography variant='body1' sx={{ fontSize: { xs: '.9em', sm: '1em', xl: '1em' }, color: '#CCCCCC', fontFamily: 'sans-serif' }}>I graduated from the University of Scranton in May of 2021 with a BS in Information Technology.</Typography>

                            </Box>
                            <Box m={1} maxWidth={'50vh'}>

                                <Typography variant='body1' sx={{ fontSize: { xs: '.9em', sm: '1em', xl: '1em' }, color: '#CCCCCC', fontFamily: 'sans-serif' }}>During my time at Scranton, I was a member of both Upsilon Pi Epsilon (Computing Honors Society) and the swim team. As of December 2023, I believe I still hold around 4 school records for swimming.</Typography>
                            </Box>

                        </Box>
                    </Box>
                </Fade>
            </Box>
    );
}