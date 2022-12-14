import { createSlice } from '@reduxjs/toolkit';

const initialState = {
 value: [],
};
export const hashtagSlice = createSlice({
 name: 'hashtag',
  initialState,
 reducers: {
   addHashtag: (state, action) => {
     state.value.push(action.payload);
   },
 },
});

export const { addHashtag } = hashtagSlice.actions;
export default hashtagSlice.reducer;