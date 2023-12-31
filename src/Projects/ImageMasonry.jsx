import * as React from 'react';
import Box from '@mui/material/Box';
import Masonry from '@mui/lab/Masonry';
import { Typography } from '@mui/material';


export default function ImageMasonry(props) {

    const { color, itemData } = props
    const [filter, setFilter] = React.useState([]);
    const setStyle = () => {
        setFilter('brightness(.5)');
    }
    const setStyleOut = () => {
        setFilter('none');
    }
    const setIsHoveringFilter = (boolVal, index) => {
        let length = itemData.length;
        let newArr = [];
        for (let i = 0; i < length; i++) {
            newArr.push(false);
        }
        newArr[index] = boolVal;
        setFilter(newArr);
    }
    return (
        <Box sx={{ width: '100%' }}>
            <Masonry columns={{ sm: 1, lg: 2 }} spacing={2}>
                {itemData?.map((item, index) => (
                    <div key={index} onClick={() => setIsHoveringFilter(!filter[index], index)} style={{background:'#222222', borderRadius:'4px'}}>

                        <Typography variant={'h6'} sx={{ p: '10px', color: color, fontFamily: 'sans-serif' }}>{item.title}</Typography>
                        <img

                            srcSet={`${item.img}?w=162&auto=format&dpr=2 2x`}
                            src={`${item.img}?w=162&auto=format`}
                            alt={item.title}
                            loading="lazy"

                            style={{
                                display: 'block',
                                width: '100%',
                                cursor: 'pointer',
                                transition: '.5s',
                                marginBottom: '50px',
                                filter: filter[index] ? ('brightness(.05)') : ('none')
                            }}
                        />
                        {filter[index] &&
                            <div style={{
                                position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', fontFamily: 'sans-serif', userSelect: 'none', width: '90%'
                            }}>{item.description}</div>
                        }
                    </div>
                ))}
            </Masonry>
        </Box>
    );
}

