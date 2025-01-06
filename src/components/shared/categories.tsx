'use client';
import { Box, ToggleButton, ToggleButtonGroup } from '@mui/material';
import { useState } from 'react';

const CATEGORIES = [
    'Гитары',
    'Клавишные инструменты',
    'Укулеле',
    'Ударные инструменты',
    'Микрофоны и радиосистемы',
    'Наушники и гарнитуры'
]

const Categories = () => {
    const [ activeCategory, setActiveCategory ] = useState<string | null>(CATEGORIES[0]);

    const handleChangeCategory = (
        event: React.MouseEvent<HTMLElement>,
        newCategory: string | null,
    ) => {
        setActiveCategory(newCategory);
    }

    return (
        <Box bgcolor={'background.secondary'} borderRadius={'10px'} display={'inline-flex'}>
            <ToggleButtonGroup
                value={activeCategory}
                exclusive
                onChange={handleChangeCategory}
            >
                {
                    CATEGORIES.map((category, index) => (
                        <ToggleButton key={index} value={category}>
                            { category }
                        </ToggleButton>
                    ))
                }
            </ToggleButtonGroup>
        </Box>
    )
}

export default Categories;