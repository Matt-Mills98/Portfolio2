import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import Typography from '@mui/material/Typography';
import { Card, CardActionArea, CardContent } from '@mui/material';
import { Link } from "react-router-dom";
import Stack from '@mui/material/Stack';
import Images from './ImageMasonry';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

export default function SimpleDialog(props) {
    const { onClose, open, color, itemData, link, logo, title, introText } = props;
    const handleClose = () => {
        onClose();
    };

  

    return (
        <Dialog scroll={'body'} PaperProps={{ sx: { minWidth: '90vw' } }} onClose={handleClose} open={open} sx={{

            '& .MuiPaper-root': {
                backgroundColor: '#0f0f0f',
                minWidth: '90vw',
                minHeight: '30vh',

            },

        }}>
            <Card sx={{ bgcolor: '#0f0f0f' }} >
                <CardActionArea component={Link} to={link} >
                    <Stack direction="row" alignItems="center" m='10px'>
                        {logo ? (<img src={logo} style={{ maxHeight: '100px', maxWidth: '100%' }}></img>
                        ) : (<Typography variant={'h4'} sx={{ color: 'white' }}>{title}</Typography>
                        )}
                        <ExitToAppIcon sx={{ m: '10px', color: 'white' }} />
                    </Stack>
                </CardActionArea>
                <CardContent>
                    <Typography variant='body1' sx={{ fontFamily: 'sans-serif', color: '#CCCCCC' }}>{introText}</Typography>
                    <Images  color={color} itemData={itemData} link={link} logo={logo}></Images>
                </CardContent>


            </Card>
        </Dialog>
    );
}