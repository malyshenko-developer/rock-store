import { Box, Typography } from '@mui/material';
import DiscountIcon from '@mui/icons-material/Discount';
import React from 'react';
import SwitchFilter from './switch-filter';
import FilterSlider from './filter-slider';
import FilterGroupCheckbox from './filter-group-checkbox';

const Filters = () => {

    return (
        <Box width={'330px'} bgcolor={'background.secondary'} p={'15px'} borderRadius={'10px'}>
            <Typography variant='h6' component={'h3'}>
                Фильтрация
            </Typography>
            <Box borderBottom={'1px solid #56C8D8'}>
                <SwitchFilter>
                    <Typography color='custom.accent'>
                            New
                        </Typography>
                    <Typography>
                        Новинки
                    </Typography>
                </SwitchFilter>
                <SwitchFilter>
                    <DiscountIcon color='primary' />
                    <Typography>
                        Со скидкой
                    </Typography>
                </SwitchFilter>
            </Box>
            <Box mt={'15px'}>
                <Typography mb={'10px'}>
                    Цена в ₽
                </Typography>
                <FilterSlider />
            </Box>
            <Box mt={'15px'}>
                <FilterGroupCheckbox
                    title='Бренды'
                    limit={5}
                    items={[
                        {
                            text: 'IBANEZ',
                            value: 1
                        },
                        {
                            text: 'YAMAHA',
                            value: 2
                        },
                        {
                            text: 'REDHILL',
                            value: 3
                        },
                        {
                            text: 'EPIPHONE',
                            value: 4
                        },
                        {
                            text: 'CORT',
                            value: 5
                        },
                        {
                            text: 'CHARVEL',
                            value: 6
                        },
                        {
                            text: 'AIERSI',
                            value: 7
                        },
                        {
                            text: 'DEAN',
                            value: 8
                        },
                        {
                            text: 'FARIDA',
                            value: 9
                        },
                        {
                            text: 'GRETSCH GUITARS',
                            value: 10
                        },
                    ]}
                />
            </Box>
        </Box>
    )
}

export default Filters;