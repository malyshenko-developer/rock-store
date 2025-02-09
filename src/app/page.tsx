/* eslint-disable @typescript-eslint/no-explicit-any */
import { prisma } from "@/prisma/prisma-client";

import { Box, Container, Typography } from "@mui/material";

import { Categories, Filters, SortPopup, ProductsCategoryList } from "@/components/shared";


export default async function Home() {
  const categories = await prisma.category.findMany({
    include: {
      products: {
        include: {
          brand: true
        }
      },
    }
  });

  return <>
    <Container sx={{ pt: '30px' }}>
      <Typography variant="h4" component={'h2'} fontWeight={'600'} mb={2}>
        Весь ассортимент
      </Typography>
      <Box display={'flex'}
        flexDirection={'column'}
        alignItems={'flex-start'}
        gap={'20px'}
        position={'sticky'}
        top={0}
        bgcolor={'background.secondary'}
        p={2}
        borderRadius={'10px'}
        boxShadow={'0px 8px 20px rgba(86, 200, 216, 0.3), 0px 4px 30px rgba(86, 200, 216, 0.3)'}
        zIndex={10}
      >
        <Categories items={categories.filter((category) => category.products.length > 0)} />
        <SortPopup />
      </Box>
      <Box display={'flex'} gap={'30px'} p={'20px 0'}>
        <Filters />

        <Box flex={1} display={'flex'} flexDirection={'column'} gap={2}>
          {
            categories.map((category) => (
              category.products.length > 0 && (
                <ProductsCategoryList
                  key={category.id}
                  title={category.name}
                  categoryId={category.id}
                  products={category.products}
                />
              )
            ))
          }
        </Box>

      </Box>
    </Container>
  </>;
}