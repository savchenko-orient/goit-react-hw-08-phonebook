import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "redux/operations";
const initialState = {
    items: [],
    isLoading: false,
    error: null
};

const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    extraReducers: builder => {
        return builder
            .addCase(fetchContacts.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                state.items = action.payload
            })
            .addCase(addContact.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                state.items.push(action.payload);
            })
            .addCase(deleteContact.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                state.items = state.items.filter(item => item.id !== action.payload.id);
            })
            .addMatcher(
                isAnyOf(
                    fetchContacts.pending,
                    addContact.pending,
                    deleteContact.pending
                ), (state) => {
                    state.isLoading = true
                }
            )
            .addMatcher(
                isAnyOf(
                    fetchContacts.rejected,
                    addContact.rejected,
                    deleteContact.rejected
                ), (state, action) => {
                    state.isLoading = false;
                    state.error = action.payload
                }
            )
    }
});

export const contactsReducer = contactsSlice.reducer;