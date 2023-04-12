import { extendTheme } from '@chakra-ui/react';

const colors = {
    MainBgColor: '#03a9f4',
    BtnBgColor: '#ffe500',
    TextColor: '#ffe500',
    HoverTextColor: 'white',
    HoverBtnColor: 'white'
};

const styles = {
    global: props => ({
        body: {
            bg: 'MainBgColor',
            color: 'TextColor'
        },
        a: {
            _hover: {
                color: 'HoverTextColor',
                transitionDuration: '1s',
            },
        }
    }),
};

const components = {
    a: {
        baseStyle: props => ({
            _hover: {
                color: 'HoverTextColor'
            },
        }),
    },
    FormLabel: {
        baseStyle: props => ({
            m: '10px 0 10px 0',
            _hover: {
                color: 'HoverTextColor'
            },
        }),
    },
    Input: {
        baseStyle: props => ({
            mt: '10px',
        }),
    },
    Button: {
        baseStyle: props => ({
            bg: 'BtnBgColor',
            color: 'white',
            _hover: {
                bg: 'HoverBtnColor',
                color: 'TextColor',
            }
        }),
    },
};





export const theme = extendTheme({ colors, styles, components });

