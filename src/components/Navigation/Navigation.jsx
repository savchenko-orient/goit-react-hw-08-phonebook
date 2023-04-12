import { Link } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';
import { Text, Box } from '@chakra-ui/react';

export const Navigation = () => {
    const { isLoggedIn } = useAuth();

    return (
        <Box
            as='nav'
            alignItems='center'
            justifyContent='center'
            display='flex'
        >
            <Text
                as={Link}
                to='/'
                fontSize='20px'
                p='0px 10px 0px 10px'
                _hover={{
                    borderRight: "1px solid white",
                }}
            >
                Home
            </Text >
            {
                isLoggedIn && (
                    <Text
                        as={Link}
                        to='/contacts'
                        fontSize='20px'
                        p='0px 10px 0px 10px'
                        _hover={{
                            borderRight: "1px solid white",
                        }}
                    >Contacts
                    </Text>
                )
            }
        </Box >
    );
};