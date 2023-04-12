
import { Contact } from "components/Contact/Contact";
import { List, ListItem } from "@chakra-ui/react";


export const Phonebook = ({ filterContacts }) => {
    return (
        <>
            <List
                display='flex'
                flexDir='column'
                gap='10px'
                alignItems='center'
            >
                {filterContacts.map(contact => (
                    <ListItem
                        display='flex'
                        justifyContent='space-between'
                        color='HoverTextColor'
                        alignItems='center'
                        bg='black'
                        borderRadius='6px'
                        width={[ 290, 400, 550]}
                    >
                        <Contact id={contact.id} name={contact.name} number={contact.number} />
                    </ListItem>
                ))}
            </List>
        </>
    );
};