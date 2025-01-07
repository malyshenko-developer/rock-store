/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import React from 'react';

import { Box, Divider, Typography } from '@mui/material';
import ProductCard from './product-card';

import { useIntersection } from 'react-use';
import { useCategoryStore } from '@/store/category';
import { stat } from 'fs';


interface Props {
    title: string;
    products: any[];
    categoryId: number;
}

const ProductsCategoryList = (props: Props) => {

    const {
        title,
        products,
        categoryId,
    } = props;

    const intersectionRef = React.useRef(null);
    const intersection = useIntersection(intersectionRef, {
        threshold: 0.4,
    });

    const setActiveCategoryId = useCategoryStore((state) => state.setActiveId);

    React.useEffect(() => {
        if (intersection?.isIntersecting) {
            setActiveCategoryId(categoryId);

            const newHash = `#${title}`;
            
            if (window.location.hash !== newHash) {
                window.history.pushState(null, '', newHash);
            }
        }
    }, [intersection?.isIntersecting])

    return (
        <Box id={title} ref={intersectionRef}>
            <Typography variant={'h4'} mb={3} fontWeight={600}>
                {title}
            </Typography>

            <Box display="flex"
                flexWrap="wrap"
                justifyContent='center'
                gap={2}
                flex={1}
                pb={2}>
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

            <Divider />
        </Box>
    )
}

export default ProductsCategoryList;