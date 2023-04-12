import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import { useAuth } from 'hooks/useAuth';
import { Box } from '@chakra-ui/react';

export const AppBar = () => {
    const { isLoggedIn } = useAuth();

    return (
        <Box
            as='header'
            display="flex"
            justifyContent="space-between"
            p='5px'
            borderBottom='1px solid black'
        >
            <Navigation />
            {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </Box>
    );
};