'use client';

import { createTheme } from "@mui/material";

declare module '@mui/material/styles' {
    interface TypeBackground {
        secondary?: string;
    }

    interface Palette {
        background: TypeBackground,
        custom: {
            accent: string;
        }
    }

    interface PaletteOptions {
        custom?: {
            accent?: string;
        }
    }

    interface Theme {
        palette: Palette
    }
}

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        background: {
            default: '#181A27',
            secondary: '#232538'
        },
        text: {
            primary: '#E0E0E0'
        },
        custom: {
            accent: '#56C8D8'
        },
        primary: {
            main: '#56C8D8'
        }
    },
    typography: {
        allVariants: {
            color: ' #FFFFFF'
        },
        body1: {
            color: '#E0E0E0'
        }
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    '&::-webkit-scrollbar': {
                        width: '8px',
                        height: '8px',
                    },
                    '&::-webkit-scrollbar-track': {
                        backgroundColor: '#2e2e2e',
                        borderRadius: '4px',
                    },
                    '&::-webkit-scrollbar-thumb': {
                        backgroundColor: '#505050',
                        borderRadius: '4px',
                        '&:hover': {
                            backgroundColor: '#757575',
                        },
                    },
                    '&::-webkit-scrollbar-corner': {
                        backgroundColor: '#2e2e2e',
                    },
                },
            },
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    backgroundColor: '#232538'
                }
            }
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    backgroundColor: '#2E3246',
                    color: '#E0E0E0',
                    fontWeight: '600',
                    '&:hover': {
                        backgroundColor: '#56C8D8',
                        color: '#3A3A3A',
                        fontWeight: '600',
                        '& .MuiTypography-root': {
                            color: '#3A3A3A'
                        }
                    },
                },
                outlined: {
                    backgroundColor: 'transparent'
                }
            }
        },
        MuiPopper: {
            styleOverrides: {
                root: {
                    zIndex: 31,
                },
            },
        },
        MuiToggleButtonGroup: {
            styleOverrides: {
                grouped: {
                    borderColor: '#56C8D8',
                    transition: 'all 0.3s ease-in-out',
                    '&:hover': {
                        boxShadow: '0px 8px 20px rgba(86, 200, 216, 0.6), 0px 4px 30px rgba(86, 200, 216, 0.5)'
                    }
                }
            }
        },
        MuiToggleButton: {
            styleOverrides: {
                root: {
                    backgroundColor: '#2E3246',
                    color: '#E0E0E0',
                    fontWeight: '600',
                    padding: '6px',
                    '&:hover': {
                        backgroundColor: '#56C8D8',
                        color: '#3A3A3A',
                        fontWeight: '600'
                    },
                    '&.Mui-selected': {
                        backgroundColor: '#56C8D8',
                        color: '#3A3A3A',
                        fontWeight: '600',
                        '&:hover': {
                        backgroundColor: '#56C8D8',
                        color: '#3A3A3A',
                        },
                    },
                }
            }
        },
        MuiDialog: {
            styleOverrides: {
                paper: {
                    backgroundColor: '#232538',
                    boxShadow: '0px 11px 15px -7px rgba(255,255,255,0.2), 0px 24px 38px 3px rgba(255,255,255,0.14), 0px 9px 46px 8px rgba(255,255,255,0.12)'
                }
            }
        },
        MuiMenu: {
            styleOverrides: {
                paper: {
                    backgroundColor: '#232538',
                    color: '#E0E0E0',
                    boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.25)',
                    minWidth: '180px',
                }
            }
        },
        MuiMenuItem: {
            styleOverrides: {
                root: {
                    '&:hover': {
                        backgroundColor: '#56C8D8',
                        color: '#181A27',
                    },
                }
            }
        },
        MuiSwitch: {            
            styleOverrides: {
                switchBase: {
                    '&.Mui-checked': {
                        color: '#56C8D8',
                        '& + .MuiSwitch-track': {
                            backgroundColor: '#E0E0E0',
                            opacity: 1
                        }
                    }
                },
                track: {
                    backgroundColor: '#E0E0E0'
                }
            }
        },
        MuiSlider: {
            styleOverrides: {
                valueLabel: {
                    backgroundColor: '#2E3246',
                },
            },
        },
    },
});

export { darkTheme };