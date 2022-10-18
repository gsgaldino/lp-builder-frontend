const { createSlice } = require('@reduxjs/toolkit');

const INITIAL_STATE = {
  isOpen: false,
  sectionSettings: {
    isOpen: false,
    data: {},
  },
  elementSettings: {
    isOpen: false,
    data: [],
  },
};

const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState: INITIAL_STATE,
  reducers: {
    setShowSectionSettings: (state, action) => {
      state.sectionSettings.isOpen = action.payload;
    },
    setSectionData: (state, action) => {
      state.sectionSettings.data = action.payload;
    },
    setShowElementSettings: (state, action) => {
      state.elementSettings.isOpen = action.payload;
    },
    setElementData: (state, action) => {
      state.elementSettings.data = action.payload;
    },
    setIsOpen: (state, action) => {
      state.isOpen = action.payload;
    },
  },
});

export const {
  setShowSectionSettings,
  setShowElementSettings,
  setElementData,
  setSectionData,
  setIsOpen,
} = sidebarSlice.actions;
export default sidebarSlice.reducer;
