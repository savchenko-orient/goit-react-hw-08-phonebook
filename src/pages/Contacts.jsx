import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "redux/contacts/operations";
import { selectIsLoading } from "redux/contacts/selectors";
import { ContactEditor } from "components/ContactEditor/ContactEditor";
import { Phonebook } from "components/Phonebook/Phonebook";
import { Filter } from "components/Filter/Filter";

export default function Contacts() {
    const dispatch = useDispatch();
    const isLoading = useSelector(selectIsLoading);
    const filterFromStore = useSelector(state => state.filter);
    const contactsFromStore = useSelector(state => state.contacts.items);

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

    const getFilterContacts = () => {
        return contactsFromStore.filter(el =>
            el.name.toLowerCase().includes(filterFromStore.toLowerCase())
        );
    };


    return (
        <>
            <Helmet>
                <title>Contacts</title>
            </Helmet>
            <ContactEditor />
            <div>{isLoading && 'Request in progress...'}</div>
            <Filter />
            <Phonebook
                filterContacts={getFilterContacts()}
            />
        </>
    );
};