'use client';

import { Box, Button, Menu, MenuItem, Typography } from "@mui/material";
import SwapVertIcon from '@mui/icons-material/SwapVert';
import { useState } from "react";

const sortList = [
    'алфавиту',
    'рейтингу'
]

export const SortPopup = () => {
    const [sortOption, setSortOption] = useState(sortList[0]);

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
        
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleChangeSortOption = (option: string) => {
        setSortOption(option);
        handleClose();
    }

    return (
        <Box>
            <Button onClick={handleClick}>
                <SwapVertIcon />
                <Typography
                    fontSize={'inherit'}
                    fontWeight={'inherit'}
                >
                    Сортировка по:
                </Typography>
                <Typography
                    fontSize={'inherit'}
                    fontWeight={'inherit'}
                    color='custom.accent'
                    ml={'10px'}
                >
                    { sortOption }
                </Typography>
            </Button>
            <Menu
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
            >
                {
                    sortList.map(( sortOption, index ) => (
                        <MenuItem key={index} onClick={() => handleChangeSortOption(sortOption)}>
                            { sortOption }
                        </MenuItem>
                    ))
                }
            </Menu>
        </Box>
    )
}

export default SortPopup;