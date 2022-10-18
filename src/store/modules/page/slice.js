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
      const { sectionId, data } = action.payload;
      const index = state.page.body.items.findIndex((s) => s._id === sectionId);

      state.page.body.items[index] = data;
    },
    createElement: (state, action) => {
      const { sectionId, element } = action.payload;
      const index = state.page.body.items.findIndex((s) => s._id === sectionId);

      state.page.body.items[index].elements.push({
        _id: v4(),
        ...element,
      });
    },
    deleteElement: (state, action) => {
      const data = action.payload;
      const sectionIndex = state.page.body.items.findIndex((s) => s._id === data.sectionId);
      const itemIndex = state.page.body.items[sectionIndex].elements.findIndex(
        (s) => s._id === data._id,
      );

      state.page.body.items[sectionIndex].elements.splice(itemIndex, 1);
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
  deleteElement,
} = pageSlice.actions;
