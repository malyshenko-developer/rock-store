'use client';

import { useCategoryStore } from '@/store/category';
import { Box, ToggleButton, ToggleButtonGroup } from '@mui/material';
import { Category } from '@prisma/client';

interface Props {
    items: Category[];
}

const Categories = (props: Props) => {
    const { items } = props;

    const categoryActiveId = useCategoryStore((state) => state.activeId);
    const setCategoryActiveId = useCategoryStore((state) => state.setActiveId);

    const handleChangeCategory = (
        event: React.MouseEvent<HTMLElement>,
        newCategory: string | null,
    ) => {
        if (newCategory !== null) {
            setCategoryActiveId(Number(newCategory));
        }
    }

    return (
        <Box bgcolor={'background.secondary'} borderRadius={'10px'} display={'inline-flex'}>
            <ToggleButtonGroup
                value={categoryActiveId}
                exclusive
                onChange={handleChangeCategory}
            >
                {
                    items.map((category) => (
                        <ToggleButton key={category.id} value={category.id} href={`/#${category.name}`}>
                            {category.name}
                        </ToggleButton>
                    ))
                }
            </ToggleButtonGroup>
        </Box>
    )
}

export default Categories;