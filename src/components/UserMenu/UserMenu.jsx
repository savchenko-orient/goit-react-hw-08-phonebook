import { useDispatch } from "react-redux";
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks/useAuth';
import { Text, Box, Button } from "@chakra-ui/react";

export const UserMenu = () => {
    const dispatch = useDispatch();
    const { user } = useAuth();

    return (
        <Box
            display='flex'
            alignItems='center'
            justifyContent='center'
        >
            <Text
                as='p'
                fontSize='20px'
                mr='10px'
            >
                Hi{user.name}
            </Text >
            <Button
                type="button"
                onClick={() => dispatch(logOut())}
                bg='BtnBgColor'
                minWidth='15px'
                fontSize='15px'
                p='10px'
            >
                Quit
            </Button>
        </Box>
    );
};