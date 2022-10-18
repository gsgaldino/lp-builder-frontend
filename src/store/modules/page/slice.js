import { createSlice } from '@reduxjs/toolkit';
import { v4 } from 'uuid';

const INITIAL_STATE = {
  page: {
    body: {
      items: [],
    },
    html: {},
    head: {},
  },
};

const pageSlice = createSlice({
  name: 'page',
  initialState: INITIAL_STATE,
  reducers: {
    fetchPage: () => {},
    updatePageSuccess: (state, action) => {
      state.page = action.payload;
    },
    fetchPageSuccess: (state, action) => {
      state.page = action.payload;
    },
    createSection: () => {},
    deleteSection: (state, action) => {
      const { sectionId } = action.payload;

      state.page.body.items = state.page.body.items.filter((s) => s._id !== sectionId);
    },
    deleteSectionSuccess: () => {},
    updateSection: (state, action) => {
      const updated = action.payload;
      const index = state.page.body.items.findIndex((s) => s._id === updated._id);

      state.page.body.items[index] = updated;
    },
    createElement: (state, action) => {
      const { sectionId, element } = action.payload;

      const index = state.page.body.items.findIndex((s) => s._id === sectionId);

      state.page.body.items[index].elements.push({
        _id: v4(),
        ...element,
      });
    },
  },
});

export default pageSlice.reducer;
export const {
  fetchPage,
  fetchPageSuccess,
  createSection,
  deleteSection,
  deleteSectionSuccess,
  createElement,
  updatePageSuccess,
  updateSection,
} = pageSlice.actions;
