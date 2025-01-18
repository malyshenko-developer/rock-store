import { Box, Button, Container, Typography } from '@mui/material'
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import Image from 'next/image';
import SearchInput from './search-input';


const Header = () => {
  return (
    <Box component={'header'} p={'20px 10px'} bgcolor={'background.secondary'}>
        <Container sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Box display={'flex'} alignItems={'center'}>
                <Image
                    src={'/logo.svg'}
                    alt='Logo image'
                    width={'50'}
                    height={'50'}
                />
                <Typography component={'h1'} fontWeight={'600'}>
                    Rock Store
                </Typography>
            </Box>

            <Box mx={10} flex={1}>
                <SearchInput />
            </Box>

            <Box display={'flex'} gap={'20px'}>
                <Button startIcon={<PersonIcon />}>
                    Войти
                </Button>
                <Button sx={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                    <b>520 $</b>
                    <span style={{ fontSize: '16px' }}>|</span>
                    <Box display={'flex'} alignItems={'center'} gap={'1px'}>
                        <ShoppingCartIcon />
                        <b>3</b>
                    </Box>
                </Button>
            </Box>
        </Container>
    </Box>
  )
}

export default Header;