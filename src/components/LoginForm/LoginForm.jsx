import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { FormControl, FormLabel, Input, Button, Box } from '@chakra-ui/react';

export const LoginForm = () => {
    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.currentTarget;
        dispatch(
            logIn({
                email: form.elements.email.value,
                password: form.elements.password.value,
            })
        );
        form.reset();
    };

    return (
        <Box
            justifyContent='center'
            display='flex'
            mt= '50px'
        >
        <form
            onSubmit={handleSubmit}
            autoComplete="off"
        >
            <FormControl>
                <FormLabel
                >
                    Email
                    <Input
                        type="email"
                        name="email"
                    />
                </FormLabel>
                <FormLabel
                >
                    Password
                    <Input type="password" name="password" />
                </FormLabel>
                <Button
                    type="submit"
                    bg='BtnBgColor'
                >
                    Log In
                </Button>
            </FormControl>
            </form>
        </Box>
    );
};
