import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import PersonIcon from '@mui/icons-material/Person';
import AddIcon from '@mui/icons-material/Add';
import Typography from '@mui/material/Typography';
import { blue } from '@mui/material/colors';
import { Card, CardMedia, CardActionArea, Box, CardContent } from '@mui/material';
import { Link } from "react-router-dom";
import Stack from '@mui/material/Stack';
import Images from './ImageMasonry';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

export default function SimpleDialog(props) {
    const { onClose, open, color, itemData, link, logo, title, introText } = props;

    const handleClose = () => {
        onClose();
    };

    const handleListItemClick = () => {
        onClose();
    };

    return (
        <Dialog scroll={'body'} PaperProps={{ sx: { minWidth: '90vw' } }} onClose={handleClose} open={open} sx={{

            '& .MuiPaper-root': {
                backgroundColor: '#0f0f0f',
                minWidth: '90vw',
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
                    <Typography variant='body1' sx={{ color: '#CCCCCC', fontFamily: 'sans-serif' }}>{introText}</Typography>
                    <Images color={color} itemData={itemData} link={link} logo={logo}></Images>
                </CardContent>
            </Card>
        </Dialog>
    );
}