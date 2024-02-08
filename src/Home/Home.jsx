import { Typography, Box, Fade, } from '@mui/material';
import React from 'react'
import Tooltip from '@mui/material/Tooltip';

//Home page contents. This page displays name and a list of my stack.
export default function Home(props) {
    const { color, setValue, setFilter, setAccent } = props
    const [loaded, setLoaded] = React.useState(false);
    React.useEffect(() => {
        updateLoaded(); setValue(-1); setAccent(0); setFilter('invert(90%) sepia(74%) saturate(7174%) hue-rotate(280deg) brightness(104%) contrast(123%)');
        window.document.title = 'Matt Mills | Home';

    }, []);
    const updateLoaded = () => {
        setLoaded(true);
    }
    return (
            <Box sx={{ background: 'transparent', position: 'absolute', top: '50%', left: '30px', transform: 'translateY(-50%)' }}>
                <Fade in={loaded}>
                    <Box sx={{
                        margin: '10px',
                        fontFamily: 'sans-serif',
                    }}>
                        <Typography variant='h1' sx={{
                            fontSize: { xs: '4em', md: '5em', xl: '6em' },
                            color: 'white'
                        }}>Matt Mills</Typography>

                        <Typography variant='h5' sx={{ color: color, fontFamily: 'Rubik' }}>Full Stack Developer</Typography>
                        <Box mt={2} maxWidth={'50vh'}>
                            <Tooltip title="C#" placement="top" arrow componentsProps={{
                                tooltip: {
                                    sx: {
                                        bgcolor: color,
                                        '& .MuiTooltip-arrow': {
                                            color: color,
                                        },
                                    },
                                },
                            }}>


                                <Box component={'img'} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" sx={{ margin: '5px', filter: 'grayscale(1);', height: '30px', transition: '.5s', ':hover': { filter: 'none' } }}></Box>

                            </Tooltip>
                            <Tooltip title="JavaScript" placement="top" arrow componentsProps={{
                                tooltip: {
                                    sx: {
                                        bgcolor: color,
                                        '& .MuiTooltip-arrow': {
                                            color: color,
                                        },
                                    },
                                },
                            }}>



                                <Box component={'img'} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" sx={{ margin: '5px', filter: 'grayscale(1);', height: '30px', transition: '.5s', ':hover': { filter: 'none' } }}></Box>

                            </Tooltip>

                            <Tooltip title="ASP.NET" placement="top" arrow componentsProps={{
                                tooltip: {
                                    sx: {
                                        bgcolor: color,
                                        '& .MuiTooltip-arrow': {
                                            color: color,
                                        },
                                    },
                                },
                            }}>



                                <Box component={'img'} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg" sx={{ margin: '5px', filter: 'brightness(1.4) grayscale(1);', height: '30px', transition: '.5s', ':hover': { filter: 'none' } }}></Box>

                            </Tooltip>

                            <Tooltip title=".NET Core" placement="top" arrow componentsProps={{
                                tooltip: {
                                    sx: {
                                        bgcolor: color,
                                        '& .MuiTooltip-arrow': {
                                            color: color,
                                        },
                                    },
                                },
                            }}>



                                <Box component={'img'} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg" sx={{ margin: '5px', filter: 'brightness(3) grayscale(1);', height: '30px', transition: '.5s', ':hover': { filter: 'none' } }}></Box>

                            </Tooltip>

                            <Tooltip title="React.js" placement="top" arrow componentsProps={{
                                tooltip: {
                                    sx: {
                                        bgcolor: color,
                                        '& .MuiTooltip-arrow': {
                                            color: color,
                                        },
                                    },
                                },
                            }}>



                                <Box component={'img'} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" sx={{ margin: '5px', filter: 'grayscale(1);', height: '30px', transition: '.5s', ':hover': { filter: 'none' } }}></Box>

                            </Tooltip>

                            <Tooltip title="Node.js" placement="top" arrow componentsProps={{
                                tooltip: {
                                    sx: {
                                        bgcolor: color,
                                        '& .MuiTooltip-arrow': {
                                            color: color,
                                        },
                                    },
                                },
                            }}>



                                <Box component={'img'} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" sx={{ margin: '5px', filter: 'grayscale(1);', height: '30px', transition: '.5s', ':hover': { filter: 'none' } }}></Box>

                            </Tooltip>

                            <Tooltip title="Material UI" placement="top" arrow componentsProps={{
                                tooltip: {
                                    sx: {
                                        bgcolor: color,
                                        '& .MuiTooltip-arrow': {
                                            color: color,
                                        },
                                    },
                                },
                            }}>



                                <Box component={'img'} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg" sx={{ margin: '5px', filter: 'grayscale(1);', height: '30px', transition: '.5s', ':hover': { filter: 'none' } }}></Box>

                            </Tooltip>

                            <Tooltip title="HTML5" placement="top" arrow componentsProps={{
                                tooltip: {
                                    sx: {
                                        bgcolor: color,
                                        '& .MuiTooltip-arrow': {
                                            color: color,
                                        },
                                    },
                                },
                            }}>



                                <Box component={'img'} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" sx={{ margin: '5px', filter: 'grayscale(1);', height: '30px', transition: '.5s', ':hover': { filter: 'none' } }}></Box>

                            </Tooltip>

                            <Tooltip title="CSS3" placement="top" arrow componentsProps={{
                                tooltip: {
                                    sx: {
                                        bgcolor: color,
                                        '& .MuiTooltip-arrow': {
                                            color: color,
                                        },
                                    },
                                },
                            }}>



                                <Box component={'img'} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" sx={{ margin: '5px', filter: 'grayscale(1);', height: '30px', transition: '.5s', ':hover': { filter: 'none' } }}></Box>

                            </Tooltip>

                            <Tooltip title="PostgreSQL" placement="top" arrow componentsProps={{
                                tooltip: {
                                    sx: {
                                        bgcolor: color,
                                        '& .MuiTooltip-arrow': {
                                            color: color,
                                        },
                                    },
                                },
                            }}>



                                <Box component={'img'} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" sx={{ margin: '5px', filter: 'grayscale(1);', height: '30px', transition: '.5s', ':hover': { filter: 'none' } }}></Box>

                            </Tooltip>

                            <Tooltip title="MS SQL Server" placement="top" arrow componentsProps={{
                                tooltip: {
                                    sx: {
                                        bgcolor: color,
                                        '& .MuiTooltip-arrow': {
                                            color: color,
                                        },
                                    },
                                },
                            }}>



                                <Box component={'img'} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg" sx={{ margin: '5px', filter: 'invert(70%) grayscale(1);', height: '30px', transition: '.5s', ':hover': { filter: 'none' } }}></Box>

                            </Tooltip>

                            <Tooltip title="Azure" placement="top" arrow componentsProps={{
                                tooltip: {
                                    sx: {
                                        bgcolor: color,
                                        '& .MuiTooltip-arrow': {
                                            color: color,
                                        },
                                    },
                                },
                            }}>



                                <Box component={'img'} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" sx={{ margin: '5px', filter: 'grayscale(1);', height: '30px', transition: '.5s', ':hover': { filter: 'none' } }}></Box>

                            </Tooltip>

                            <Tooltip title="Github" placement="top" arrow componentsProps={{
                                tooltip: {
                                    sx: {
                                        bgcolor: color,
                                        '& .MuiTooltip-arrow': {
                                            color: color,
                                        },
                                    },
                                },
                            }}>



                                <Box component={'img'} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" sx={{ margin: '5px', filter: 'brightness(7) grayscale(1);', height: '30px', transition: '.5s', ':hover': { filter: 'none' } }}></Box>

                            </Tooltip>

                            <Tooltip title="Visual Studio" placement="top" arrow componentsProps={{
                                tooltip: {
                                    sx: {
                                        bgcolor: color,
                                        '& .MuiTooltip-arrow': {
                                            color: color,
                                        },
                                    },
                                },
                            }}>



                                <Box component={'img'} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visualstudio/visualstudio-plain.svg" sx={{ margin: '5px', filter: 'brightness(2) grayscale(1);', height: '30px', transition: '.5s', ':hover': { filter: 'none' } }}></Box>

                            </Tooltip>

                            <Tooltip title="Visual Studio Code" placement="top" arrow componentsProps={{
                                tooltip: {
                                    sx: {
                                        bgcolor: color,
                                        '& .MuiTooltip-arrow': {
                                            color: color,
                                        },
                                    },
                                },
                            }}>



                                <Box component={'img'} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" sx={{ margin: '5px', filter: 'brightness(1) grayscale(1);', height: '30px', transition: '.5s', ':hover': { filter: 'none' } }}></Box>

                            </Tooltip>

                            <Tooltip title="Adobe Photoshop" placement="top" arrow componentsProps={{
                                tooltip: {
                                    sx: {
                                        bgcolor: color,
                                        '& .MuiTooltip-arrow': {
                                            color: color,
                                        },
                                    },
                                },
                            }}>



                                <Box component={'img'} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg" sx={{ margin: '5px', filter: 'brightness(1) grayscale(1);', height: '30px', transition: '.5s', ':hover': { filter: 'none' } }}></Box>

                            </Tooltip>

                            <Tooltip title="Adobe Premier Pro" placement="top" arrow componentsProps={{
                                tooltip: {
                                    sx: {
                                        bgcolor: color,
                                        '& .MuiTooltip-arrow': {
                                            color: color,
                                        },
                                    },
                                },
                            }}>



                                <Box component={'img'} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/premierepro/premierepro-plain.svg" sx={{ margin: '5px', filter: 'brightness(6) grayscale(1);', height: '30px', transition: '.5s', ':hover': { filter: 'none' } }}></Box>

                            </Tooltip>
                        </Box>
                    </Box>

                </Fade>

            </Box >
    );
}