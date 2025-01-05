'use client';

import { Box, Slider, TextField } from '@mui/material';
import React from 'react'

const FilterSlider = () => {
    const [ value, setValue ] = React.useState<number[]>([20000, 80000]);

    const handleChangeValue = (event: Event, newValue: number | number[]) => {
        setValue(newValue as number[]);
    }

    return (
        <Box borderBottom={'1px solid #56C8D8'}>
            <Box display={'flex'} gap={'10px'} mb={'10px'}>
                <TextField size='small' value={value[0]} sx={{ textAlign: 'center' }} />
                <TextField size='small' value={value[1]} sx={{ textAlign: 'center' }} />
            </Box>
            <Slider
                value={value}
                onChange={handleChangeValue}
                min={4000}
                max={100000}
                step={1000}
            />
        </Box>
    )
}

export default FilterSlider;