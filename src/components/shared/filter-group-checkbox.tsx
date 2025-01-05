'use client';

import { Box, Button, Checkbox, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material';
import React, { useState } from 'react';

interface Item {
    text: string;
    value: number;
}

interface Props {
    title: string;
    items: Item[];
    limit: number;
}

export const FilterGroupCheckbox = ({ title, items, limit }: Props) => {
    const [showAll, setShowAll] = useState(false);

    const list = showAll ? items : items.slice(0, limit);

    return (
        <Box borderBottom={'1px solid #56C8D8'} pb={'15px'}>
            <Typography>
                { title }
            </Typography>
            <List
                sx={{
                    overflow: 'auto',
                    maxHeight: '350px',
                    mb: '10px'
                }}
            >
                {
                    list.map((item, index) => {
                        const labelId = `checkbox-list-label-${item.value}`;

                        return (
                        <ListItem
                            key={index}
                            sx={{ p: 0 }}
                        >
                            <ListItemButton role={undefined}>
                                <ListItemIcon>
                                    <Checkbox
                                    edge="start"
                                    checked={true}
                                    inputProps={{ 'aria-labelledby': labelId }}
                                    />
                                </ListItemIcon>
                                <ListItemText id={labelId} primary={item.text} />
                            </ListItemButton>
                        </ListItem>
                        );
                    })
                }
            </List>
            { items.length > limit && (
                <Button onClick={() =>  setShowAll(!showAll)} variant='outlined'>
                    { showAll ? '- Скрыть' : '+ Показать все' }
                </Button>
            )}
        </Box>
    )
}

export default FilterGroupCheckbox;