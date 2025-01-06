import React from 'react'

import { Box, Button, Card, CardActions, CardContent, CardMedia, Divider, Typography } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

interface Props {
    id: number;
    name: string;
    price: number;
    imageUrl: string;
}

function ProductCard(props: Props) {
    const {
        name,
        price,
        imageUrl,
    } = props;

    return (
        <Card sx={{ maxWidth: 260, width: '100%', display: 'flex', flexDirection: 'column' }}>
            <CardContent sx={{ flex: 1 }} >
                <Box
                    display='flex'
                    justifyContent='center'
                    bgcolor={'white'}
                    borderRadius={'10px'}
                    mb={'8px'}
                    p={'8px'}
                    border={'6px solid'}
                    borderColor={'custom.accent'}
                >
                    <CardMedia
                        component="img"
                        image={imageUrl}
                        sx={{
                            height: '220px',
                            maxWidth: '200px',
                            width: 'auto',
                            objectFit: 'cover',
                        }}
                    />
                </Box>

                <Typography variant='h6' fontWeight={600}>
                    {price} ₽
                </Typography>

                <Typography variant='subtitle1' color='textSecondary'>
                    Гитара
                </Typography>

                <Typography fontSize={'18px'}>
                    {name}
                </Typography>
            </CardContent>

            <Divider />

            <CardActions>
                <Button
                    variant='outlined'
                    endIcon={<AddShoppingCartIcon />}
                    sx={{ width: '100%' }}
                >
                    Купить
                </Button>
            </CardActions>
        </Card>
    )
}

export default ProductCard;