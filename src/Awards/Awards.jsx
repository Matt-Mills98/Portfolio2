import { Typography, Box, Fade } from '@mui/material';
import React from 'react'

//About page contents. Most of these similar page components can be made more modular, but for the sake of a personal 
//project and potential customizability (I'm likely to change these in the future), 
//I am keeping these as individual components. If this were a prod environment, I would have these as a singular component for the purpose of readability and easier changes. 
export default function Awards(props) {
    const { color, setValue, setFilter, setAccent } = props
    const [loaded, setLoaded] = React.useState(false);

    React.useEffect(() => {
        updateLoaded(); setValue(1); setAccent(2); setFilter('none');
        window.document.title = 'Matt Mills | Awards';

    }, []);
    const updateLoaded = () => {
        setLoaded(true);
    }

    return (
        <Box sx={{ background: 'linear-gradient(90deg, rgba(15,15,15,1) 0%, rgba(15,15,15,.75) 47%, rgba(15,15,15,0) 100%);', position: 'absolute', top: '0px', left: '0px', height: '100vh', width: '50vw' }}>

            <Box sx={{ bgcolor: 'transparent', position: 'absolute', top: '100px', left: '40px' }}>
                <Fade in={loaded}>

                    <Box mb={2} sx={{ margin: '10px' }}>

                        <Typography variant='h2' sx={{
                            fontSize: { xs: '3em', md: '4em', xl: '5em' },
                            color: 'white'
                        }}>Awards</Typography>
                        <Box m={1} my={2}>
                            <Typography variant='h6' sx={{ color: color, fontFamily: 'sans-serif' }}>Developer of the Year - CobbleStone Software 2023</Typography>
                            <Box m={1} maxWidth={'50vh'}>
                                <Typography variant='body1' sx={{ fontSize: { xs: '.9em', sm: '1em', xl: '1em' }, color: '#999999', fontFamily: 'sans-serif' }}>Awarded for my contributions to CobbleStone's Contract Insight Software through the completion of the CobbleStone Add-In for Word</Typography>
                            </Box>
                        </Box>
                        <Box m={1}>
                            <Typography variant='h6' sx={{ color: color, fontFamily: 'sans-serif' }}>Excellence in Information Technology - University of Scranton 2021</Typography>
                            <Box m={1} maxWidth={'50vh'}>
                                <Typography variant='body1' sx={{ fontSize: { xs: '.9em', sm: '1em', xl: '1em' }, color: '#999999', fontFamily: 'sans-serif' }}>Awarded for obtaining the highest GPA among peers in the same major</Typography>
                            </Box>
                        </Box>
                    </Box>
                </Fade>
            </Box>
        </Box>
    );
}