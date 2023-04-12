import { useDispatch } from "react-redux"
import { deleteContact } from "redux/contacts/operations";
import { Text, Button } from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";

export const Contact = ({ name, id, number }) => {
    const dispatch = useDispatch();
    const handleDelete = () => dispatch(deleteContact(id));

    return (
        <>
            <Text
                as='p'
                ml='15px'
            >
                {name}
            </Text>
            <Text
                as='p'
            >
                {number}
            </Text>
            <Button
                display='flex'
                justifyContent='center'
                alignItems='center'
                type="button"
                onClick={handleDelete}
                bg='black'
            >
                <CloseIcon
                boxSize={5} color='red.500'
                />
            </Button>
        </>
    );
};