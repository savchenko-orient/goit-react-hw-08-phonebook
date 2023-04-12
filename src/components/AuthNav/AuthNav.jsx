import { Link } from "react-router-dom";
import { Text, Box } from "@chakra-ui/react";

export const AuthNav = () => {
    return (
        <Box>
            <Text
                as={Link}
                to="/register"
                fontSize='20px'
                p='10px 10px 5px 0px'
            >
                Register
            </Text>
            <Text
                as={Link}
                to="/login"
                fontSize='20px'
                p='10px 10px 5px 0px'
            >
                Log In
            </Text>
        </Box>
    );
};