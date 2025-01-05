import { Categories, Filters, SortPopup } from "@/components/shared";
import { Box, Container, Typography } from "@mui/material";

export default function Home() {
  return <>
    <Container sx={{ pt: '30px' }}>
      <Typography variant="h4" component={'h2'} fontWeight={'600'}>
        Весь ассортимент
      </Typography>
      <Box display={'flex'} flexDirection={'column'} alignItems={'flex-start'} gap={'20px'}>
        <Categories />
        <SortPopup />
      </Box>
      <Box display={'flex'} gap={'60px'} p={'20px 0'}>
        <Filters />

        <Box flex={1}>
          Список товаров
        </Box>
      </Box>
    </Container>
  </>;
}
