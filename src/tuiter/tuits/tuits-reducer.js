import { createSlice } from '@reduxjs/toolkit';
import tuits from './tuits.json';
import { createTuitThunk, updateTuitThunk, deleteTuitThunk, findTuitsThunk } from '../../services/tuits-thunks';

const initialState = {
  tuits: [],
  loading: false,
};

const currentUser = {
  username: 'NASA',
  handle: '@nasa',
  image: 'nasa.jpeg',
};

const templateTuit = {
  ...currentUser,
  topic: 'Space',
  time: '2h',
  liked: false,
  replies: 0,
  retuits: 0,
  likes: 0,
};

const tuitsSlice = createSlice({
  name: 'tuits',
  initialState,
  extraReducers: {
    [findTuitsThunk.pending]: state => {
      state.loading = true;
      state.tuits = [];
    },
    [findTuitsThunk.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.tuits = payload;
    },
    [findTuitsThunk.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },
    [deleteTuitThunk.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.tuits = state.tuits.filter(t => t._id !== payload);
    },
    [createTuitThunk.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.tuits.push(payload);
    },
    [updateTuitThunk.fulfilled]: (state, { payload }) => {
      state.loading = false;
      const tuitNdx = state.tuits.findIndex(t => t._id === payload._id);
      state.tuits[tuitNdx] = {
        ...state.tuits[tuitNdx],
        ...payload,
      };
    },
  },
  reducers: {
    createTuit(state, action) {
      state.unshift({
        ...action.payload,
        ...templateTuit,
        _id: new Date().getTime(),
      });
    },
    deleteTuit(state, action) {
      const index = state.findIndex(tuit => tuit._id === action.payload);
      state.splice(index, 1);
    },
    updateLikes(state, action) {
      const index = state.findIndex(tuit => tuit._id === action.payload);
      const tuit = state[index];

      if (tuit.liked) {
        tuit.likes--;
        tuit.liked = false;
      } else {
        tuit.likes++;
        tuit.liked = true;
      }
    },
  },
});

export const { createTuit, deleteTuit, updateLikes } = tuitsSlice.actions;
export default tuitsSlice.reducer;
