import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  title: "",
  startDateTime: Date.now(),
  endDateTime: Date.now(),
  location: "",
  eventOptions: {
    Tickets: "free",
    ApprovalRequired: false,
    Capacity: "unlimited",
    Visibility: "public",
  },
  themeOptions: {
    ThemeText: "You Are Invited",
    ThemeLayout: "minimal",
    TextColor: "White",
    TypeFace: "Poppins",
  },
};

const createEventSlice = createSlice({
  name: "createEvent",
  initialState,
  reducers: {
    changeTitle: (state, action) => {
      state.title = action.payload;
    },
    changeStartDateTime: (state, action) => {
      state.startDateTime = action.payload;
    },
    changeEndDateTime: (state, action) => {
      state.endDateTime = action.payload;
    },
    changeLocation: (state, action) => {
      state.location = action.payload;
    },
    changeTicket: (state, action) => {
      state.eventOptions.Tickets = action.payload;
    },
    changeApproval: (state, action) => {
      state.eventOptions.ApprovalRequired =
        !state.eventOptions.ApprovalRequired;
    },
    changeVisibility: (state, action) => {
      state.eventOptions.Visibility = action.payload;
    },
    changeCapacity: (state, action) => {
      state.eventOptions.Capacity = action.payload;
    },
    changeThemeText: (state, action) => {
      state.themeOptions.ThemeText = action.payload;
    },
    changeThemeLayout: (state, action) => {
      state.themeOptions.ThemeLayout = action.payload;
    },
    changeTextColor: (state, action) => {
      state.themeOptions.TextColor = action.payload;
    },
    changeTypeface: (state, action) => {
      state.themeOptions.TypeFace = action.payload;
    },
  },
});

export const {
  changeTitle,
  changeStartDateTime,
  changeEndDateTime,
  changeLocation,
  changeTicket,
  changeApproval,
  changeVisibility,
  changeCapacity,
  changeThemeText,
  changeThemeLayout,
  changeTextColor,
  changeTypeface,
} = createEventSlice.actions;

export default createEventSlice.reducer;
