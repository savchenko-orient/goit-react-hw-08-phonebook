import { useDispatch } from "react-redux";
import { addContact } from "redux/contacts/operations";
import { FormControl, FormLabel, Input, Button, Box } from '@chakra-ui/react';

export const ContactEditor = () => {
    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.currentTarget;
        const name = form.elements.name.value;
        const number = form.elements.number.value;
        if (name && number !== '') {
            dispatch(addContact({ name: name, number: number }));
            form.reset();
            return;
        }
        alert('Contact cannot be empty. Enter some text!');
    };

    return (
        <Box
            justifyContent='center'
            display='flex'
            mt= '50px'
        >
        <form onSubmit={handleSubmit}>
            <FormControl>
                <FormLabel>
                    Name
                    <Input
                        name="name"
                        type='text'
                        placeholder='Please enter the name'
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        required
                    />
                </FormLabel>
                <FormLabel>
                    Number
                    <Input
                        type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                        placeholder='Please enter phone number'
                        minLength="7"
                        maxLength="10"
                    />
                </FormLabel>
                <Button
                    type='submit'
                    bg='BtnBgColor'
                >
                    Add contact
                </Button>
            </FormControl>
            </form>
        </Box>
    )
};