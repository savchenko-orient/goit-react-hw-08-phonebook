import { useDispatch } from "react-redux";
import { setFilterContacts } from "redux/contacts/filterSlice";
import { Box, FormLabel, Input } from "@chakra-ui/react";


export const Filter = () => {
    const dispatch = useDispatch();
    const onChange = event => {
        const filtered = event.target.value;
        dispatch(setFilterContacts(filtered));
    };


    return (
        <Box
            justifyContent='center'
            display='flex'
            mt='50px'
        >
            <FormLabel
                textAlign='center'
                justifyContent='center'
                display='flex'
                flexDirection='column'
                minWidth='292px'
            >
                Fint contacts by name
                <Input
                    type="text"
                    name="filter"
                    onChange={onChange}
                >
                </Input>
            </FormLabel>
        </Box>
    );
};