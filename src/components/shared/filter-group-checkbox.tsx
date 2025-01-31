'use client';

import React, { useState } from 'react';

import { Brand } from '@prisma/client';

import { Box, Button, Checkbox, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Skeleton, Typography } from '@mui/material';

interface Props {
    title: string;
    items: Brand[];
    limit: number;
    loading?: Boolean;
    selectedBrands: Set<number>;
    onClickCheckbox: (id: number) => void;
}

export const FilterGroupCheckbox = (props: Props) => {
    const {
        title,
        items,
        limit,
        loading = false,
        selectedBrands,
        onClickCheckbox
    } = props;

    const [showAll, setShowAll] = useState(false);

    if (loading) {
        return (
            <Box borderBottom={'1px solid #56C8D8'} pb={'15px'}>
                <Typography>
                    {title}
                </Typography>

                <Box mb={'10px'}>
                    {
                        ...Array(limit)
                            .fill(0)
                            .map((_, index) => (
                                <Skeleton
                                    key={index}
                                    height={58}
                                    variant={'rounded'}
                                    animation={'wave'}
                                    sx={{ 'mb': 0.5 }}
                                />
                            ))
                    }
                </Box>

                <Skeleton
                    height={38}
                    width={'60%'}
                    variant={'rounded'}
                    animation={'wave'}
                />
            </Box >
        )
    }

    const list = showAll ? items : items.slice(0, limit);

    return (
        <Box borderBottom={'1px solid #56C8D8'} pb={'15px'}>
            <Typography>
                {title}
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
                        const labelId = `checkbox-list-label-${item.id}`;

                        return (
                            <ListItem
                                key={index}
                                sx={{ p: 0 }}
                            >
                                <ListItemButton role={undefined} onClick={() => onClickCheckbox(item.id)}>
                                    <ListItemIcon>
                                        <Checkbox
                                            edge="start"
                                            checked={selectedBrands.has(item.id)}
                                            inputProps={{ 'aria-labelledby': labelId }}
                                        />
                                    </ListItemIcon>
                                    <ListItemText id={labelId} primary={item.name} />
                                </ListItemButton>
                            </ListItem>
                        );
                    })
                }
            </List>
            {items.length > limit && (
                <Button onClick={() => setShowAll(!showAll)} variant='outlined'>
                    {showAll ? '- Скрыть' : '+ Показать все'}
                </Button>
            )}
        </Box>
    )
}

export default FilterGroupCheckbox;