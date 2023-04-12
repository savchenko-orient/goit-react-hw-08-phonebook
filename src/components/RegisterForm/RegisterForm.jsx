import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { FormControl, FormLabel, Input, Button, Box } from '@chakra-ui/react';

export const RegisterForm = () => {
    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.currentTarget;
        dispatch(
            register({
                name: form.elements.name.value,
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
        >
            <form
            onSubmit={handleSubmit}
            autoComplete="off"
            >
            <FormControl
                marginTop='50px'
                gap='15px'
            >
                <FormLabel
                >
                    Username
                    <Input
                        type="text"
                        name="name"
                        size='sm'
                    />
                </FormLabel>
                <FormLabel
                >
                    Email
                    <Input
                        type="email"
                        name="email"
                        size='sm'
                    />
                </FormLabel>
                <FormLabel
                >
                    Password
                    <Input
                        type="password"
                        name="password"
                        size='sm'
                        minLength="7"
                    />
                </FormLabel>
                <Button
                    type="submit"
                    bg='BtnBgColor'
                >
                    Register
                </Button>
            </FormControl>
            </form>
        </Box>
    );
};