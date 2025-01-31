'use client';

import React from 'react'

import { Box, Slider, TextField } from '@mui/material';

interface Props {
    prices: number[];
    handleChangePrices: (_: Event, newPrices: number | number[]) => void;
    handleChangeOnePrice: (index: number, value: number) => void;
}


const FilterSlider = (props: Props) => {
    const { prices, handleChangePrices, handleChangeOnePrice } = props;

    return (
        <Box borderBottom={'1px solid #56C8D8'}>
            <Box display={'flex'} gap={'10px'} mb={'10px'}>
                <TextField
                    type='number'
                    size='small'
                    value={prices[0]}
                    onChange={(e) => handleChangeOnePrice(0, Number(e.target.value))}
                    sx={{ textAlign: 'center' }}
                />
                <TextField
                    type='number'
                    size='small'
                    value={[prices[1]]}
                    onChange={(e) => handleChangeOnePrice(1, Number(e.target.value))}
                    sx={{ textAlign: 'center' }}
                />
            </Box>
            <Slider
                value={prices}
                onChange={handleChangePrices}
                min={4000}
                max={100000}
                step={1000}
            />
        </Box>
    )
}

export default FilterSlider;