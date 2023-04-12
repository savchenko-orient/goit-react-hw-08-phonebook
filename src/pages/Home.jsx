import { Box, Text } from "@chakra-ui/react";

export default function Home() {
    return (
        <>
            <Box
                as='main'
            >
                <Box
                    display='flex'
                    mt={[200, 200, 350]}
                    justifyContent='center'
                >
                    <Box
                    >
                        <Text
                            as='h1'
                            fontSize={[15, 25, 35]}
                            display='flex'
                            alignItems='center'
                        >
                            {'Phonebook says hello'}
                        </Text>
                    </Box>
                </Box>
            </Box>
        </>
    );
};