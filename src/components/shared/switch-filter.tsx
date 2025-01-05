'use client';

import { Box, Switch } from '@mui/material';
import React, { useState } from 'react'

const SwitchFilter = ({ children } : { children: React.ReactNode }) => {
    const [ checked, setChecked ] = useState(false);

    const handleToggleChecked = () => {
        setChecked(!checked);
    }

    return (
        <Box
            display={'flex'}
            justifyContent={'space-between'}
            alignItems={'center'}
            p={'10px 0'}
            sx={{
                cursor: 'pointer'
            }}
            onClick={handleToggleChecked}
        >
            <Box display={'flex'} gap={'10px'}>
                { children }
            </Box>
            <Switch
                checked={ checked }
            />
        </Box>
    )
}

export default SwitchFilter;