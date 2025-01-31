'use client';

import React from 'react';

import { useFilters } from '@/hooks/use-filters';
import { useSyncFiltersWithUrl } from '@/hooks/use-sync-filters-with-url';

import { Box, Typography } from '@mui/material';
import DiscountIcon from '@mui/icons-material/Discount';

import SwitchFilter from './switch-filter';
import FilterSlider from './filter-slider';
import FilterGroupCheckbox from './filter-group-checkbox';


const FiltersContent = () => {
    const { 
        brands,
        loadingBrands,
        toggleBrand,
        selectedBrands,
        prices,
        updateOnePrice,
        updatePrices
    } = useFilters();

    useSyncFiltersWithUrl({ prices, selectedBrands });

    return (
        <Box width={'300px'} bgcolor={'background.secondary'} p={'15px'} borderRadius={'10px'} alignSelf={'flex-start'}>
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
                <FilterSlider
                    prices={prices}
                    handleChangePrices={updatePrices}
                    handleChangeOnePrice={updateOnePrice}
                />
            </Box>
            <Box mt={'15px'}>
                <FilterGroupCheckbox
                    title='Бренды'
                    limit={5}
                    items={brands}
                    loading={loadingBrands}
                    selectedBrands={selectedBrands}
                    onClickCheckbox={toggleBrand}
                />
            </Box>
        </Box>
    )
}

const Filters = () => (
    <React.Suspense>
        <FiltersContent />
    </React.Suspense>
)

export default Filters;