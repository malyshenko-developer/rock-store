import { Categories, Filters, SortPopup, ProductsCategoryList } from "@/components/shared";
import { Box, Container, Typography } from "@mui/material";


const products: any = [
  {
    id: 0,
    name: 'IBANEZ GRG7221QA-TKS',
    price: 51490,
    imageUrl: 'https://www.muztorg.ru/files/sized/f250x250/9mm/wwh/utf/hoo/sg8/ogk/k0c/kog/9mmwwhutfhoosg8ogkk0ckog0.jpg',
  },
  {
    id: 1,
    name: 'IBANEZ GRGR131EX-BKF',
    price: 34010,
    imageUrl: 'https://www.muztorg.ru/files/7vq/y7t/8pk/ccg/ssw/0os/os8/ogc/g/7vqy7t8pkccgssw0osos8ogcg.jpg',
  },
  {
    id: 2,
    name: 'IBANEZ GRGR221PA-AQB',
    price: 42560,
    imageUrl: 'https://www.muztorg.ru/files/8ly/qa7/9yh/ao8/wcc/sc4/s8g/kwk/8lyqa79yhao8wccsc4s8gkwk0.jpg',
  },
  {
    id: 3,
    name: 'ROCKDALE Stars Plus HT HH Black',
    price: 14300,
    imageUrl: 'https://www.muztorg.ru/files/sized/f250x250/dfu/811/mqs/rw4/k00/88w/4gs/sww/8/dfu811mqsrw4k0088w4gssww8.jpg',
  },
  {
    id: 4,
    name: 'IBANEZ GRG121SP-GYC',
    price: 45190,
    imageUrl: 'https://www.muztorg.ru/files/sized/f250x250/2mh/l70/l23/bsw/s8w/kwk/c00/4ss/c/2mhl70l23bsws8wkwkc004ssc.jpg',
  },
  {
    id: 5,
    name: 'IBANEZ GRG121DX-BKF',
    price: 33110,
    imageUrl: 'https://www.muztorg.ru/files/sized/f250x250/5zk/jmc/q7y/18o/ccs/00s/kks/cgw/g/5zkjmcq7y18occs00skkscgwg.jpg',
  },
]


export default function Home() {
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
        <Categories />
        <SortPopup />
      </Box>
      <Box display={'flex'} gap={'30px'} p={'20px 0'}>
        <Filters />

        <ProductsCategoryList title={'Гитары'}
          categoryId={1}
          products={products}
        />
      </Box>
    </Container>
  </>;
}