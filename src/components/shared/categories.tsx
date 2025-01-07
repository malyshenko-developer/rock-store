'use client';

import { useCategoryStore } from '@/store/category';
import { Box, ToggleButton, ToggleButtonGroup } from '@mui/material';

const CATEGORIES = [
    {
        id: 1,
        name: 'Гитары',
    },
    {
        id: 2,
        name: 'Клавишные инструменты',
    },
    {
        id: 3,
        name: 'Укулеле',
    },
    {
        id: 4,
        name: 'Ударные инструменты',
    },
    {
        id: 5,
        name: 'Микрофоны и радиосистемы',
    },
    {
        id: 6,
        name: 'Наушники и гарнитуры',
    }
]

const Categories = () => {
    const categoryActiveId = useCategoryStore((state) => state.activeId);
    const setCategoryActiveId = useCategoryStore((state) => state.setActiveId);

    const handleChangeCategory = (
        event: React.MouseEvent<HTMLElement>,
        newCategory: string | null,
    ) => {
        const category = CATEGORIES.find((category) => category.name === newCategory);

        if (category) {
            setCategoryActiveId(category.id);
        }
    }

    return (
        <Box bgcolor={'background.secondary'} borderRadius={'10px'} display={'inline-flex'}>
            <ToggleButtonGroup
                value={CATEGORIES[categoryActiveId]}
                exclusive
                onChange={handleChangeCategory}
            >
                {
                    CATEGORIES.map((category, index) => (
                        <ToggleButton key={index} value={category} href={`/#${category.name}`}>
                            {category.name}
                        </ToggleButton>
                    ))
                }
            </ToggleButtonGroup>
        </Box>
    )
}

export default Categories;