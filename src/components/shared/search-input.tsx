'use client';

import React from 'react';

import Link from 'next/link';

import { useDebounce } from 'react-use';

import { Product } from '@prisma/client';

import { API } from '@/services/api-client';

import { Search } from '@mui/icons-material';
import { Box, Divider, Fade, InputAdornment, Popper, TextField, Typography, Link as MuiLink } from '@mui/material';


const SearchInput = () => {

    const [searchQuery, setSearchQuery] = React.useState('');
    const [products, setProducts] = React.useState<Product[]>([]);
    const [focused, setFocused] = React.useState(false);
    const inputRef = React.useRef<HTMLElement | null>(null);

    const handleInputFocus = () => {
        setFocused(true);
    };

    const handleInputBlur = () => {
        setFocused(false);
    };

    const handleItemClick = () => {
        setSearchQuery('');
    }

    useDebounce(
        () => {
            API.products.search(searchQuery).then(items => {
                setProducts(items);
            });
        },
        300,
        [searchQuery]
    );

    return (
        <>
            {focused
                && <Box position='fixed'
                    top={0} bottom={0} left={0} right={0}
                    bgcolor='rgba(0, 0, 0, 0.4)'
                    zIndex={30} />
            }

            <TextField fullWidth
                size='medium'
                label='Поиск'
                placeholder='Найдем нужный товар...'
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                variant='filled'
                inputRef={inputRef}
                slotProps={{
                    input: {
                        startAdornment: <InputAdornment position='start'> <Search /> </InputAdornment>
                    }
                }}
                sx={{
                    zIndex: 30
                }}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />

            <Popper
                open={focused}
                anchorEl={inputRef.current}
                placement="bottom-end"
                transition
                modifiers={[
                    {
                        name: 'offset',
                        options: {
                            offset: [0, 30],
                        },
                    },
                ]}
            >
                {({ TransitionProps }) => (
                    <Fade
                        {...TransitionProps}
                        timeout={400}
                    >
                        <Box
                            borderRadius={1}
                            width={
                                inputRef.current?.parentElement
                                    ? inputRef.current.parentElement.offsetWidth
                                    : 'auto'
                            }
                            bgcolor="#232538"
                            color="#E0E0E0"
                            display='flex'
                            flexDirection='column'
                            gap={2}
                            p={2}
                            boxShadow='0px 8px 20px rgba(86, 200, 216, 0.6), 0px 4px 30px rgba(86, 200, 216, 0.5)'
                        >
                            {
                                products.length <= 0 && (
                                    <Typography>Прости, я ничего не нашёл =(</Typography>
                                )
                            }

                            {
                                products.map(product => (
                                    <>
                                        <Link
                                            key={product.id}
                                            href={`/product/${product.id}`}
                                            onClick={handleItemClick}
                                        >
                                            <MuiLink
                                                display='flex'
                                                alignItems='center'
                                                gap={3}
                                            >
                                                <Box
                                                    display='flex'
                                                    width={150}
                                                    justifyContent='center'
                                                    bgcolor={'white'}
                                                    borderRadius={'10px'}
                                                    p={'8px'}
                                                >
                                                    <img
                                                        src={product.imageUrl}
                                                        alt={product.name}
                                                        width='auto'
                                                        height={100}
                                                    />
                                                </Box>
                                                <Box>
                                                    <Typography variant='subtitle2'>
                                                        Гитары
                                                    </Typography>

                                                    <Typography variant='subtitle1'>
                                                        {product.name}
                                                    </Typography>

                                                    <Typography variant='h6'>
                                                        {product.price} ₽
                                                    </Typography>
                                                </Box>
                                            </MuiLink>
                                        </Link>
                                        <Divider />
                                    </>
                                ))
                            }
                        </Box>
                    </Fade>
                )}
            </Popper>

        </>
    )
}

export default SearchInput;