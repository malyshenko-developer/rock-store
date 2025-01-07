/* eslint-disable @typescript-eslint/no-explicit-any */
import { Categories, Filters, SortPopup, ProductsCategoryList } from "@/components/shared";
import { Box, Container, Typography } from "@mui/material";

const GUITARS: any = [
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
];

const KEYBOARDS: any = [
  {
    id: 0,
    name: 'KORG LP-380 WH U',
    price: 114990,
    imageUrl: 'https://www.muztorg.ru/files/sized/f250x250/c3v/9cr/m36/5ck/sg0/cs0/ssw/s4s/s/c3v9crm365cksg0cs0ssws4ss.jpg',
  },
  {
    id: 1,
    name: 'Artesia Performer Black',
    price: 26970,
    imageUrl: 'https://www.muztorg.ru/files/sized/f250x250/73r/lo4/fhs/fwg/sgo/0s0/kws/040/8/73rlo4fhsfwgsgo0s0kws0408.jpg',
  },
  {
    id: 2,
    name: 'KORG LP-380 RW U',
    price: 112490,
    imageUrl: 'https://www.muztorg.ru/files/sized/f250x250/8y6/wfs/ogo/2sk/8gw/ck8/cww/ogw/8y6wfsogo2sk8gwck8cwwogw0.jpg',
  },
  {
    id: 3,
    name: 'YAMAHA PSR-SX900, без адаптера',
    price: 279990,
    imageUrl: 'https://www.muztorg.ru/files/sized/f250x250/6du/gxn/6ej/b0g/s88/0ok/soo/s0g/c/6dugxn6ejb0gs880oksoos0gc.jpeg',
  }
];


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

        <Box flex={1} display={'flex'} flexDirection={'column'} gap={2}>
          <ProductsCategoryList title={'Гитары'}
            categoryId={0}
            products={GUITARS}
          />

          <ProductsCategoryList title={'Клавишные инструменты'}
            categoryId={1}
            products={KEYBOARDS}
          />
        </Box>

      </Box>
    </Container>
  </>;
}