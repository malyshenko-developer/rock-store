/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

import { Box, Typography } from '@mui/material';
import ProductCard from './product-card';

interface Props {
    title: string;
    products: any[];
    categoryId: number;
}

const ProductsCategoryList = (props: Props) => {
    const {
        title,
        products,
    } = props;

    return (
        <Box display={'flex'} flexDirection={'column'} flex={1}>
            <Typography variant={'h4'} mb={3} fontWeight={600}>
                {title}
            </Typography>

            <Box display="flex"
                flexWrap="wrap"
                justifyContent='center'
                gap={2}
                flex={1}>
                    {products
                        .map((product) => (
                            <ProductCard key={product.id}
                                id={product.id}
                                name={product.name}
                                price={product.price}
                                imageUrl={product.imageUrl}
                            />
                        ))
                    }
            </Box>
        </Box>
    )
}

export default ProductsCategoryList;