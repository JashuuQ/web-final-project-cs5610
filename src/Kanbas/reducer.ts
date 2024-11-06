import { createSlice } from "@reduxjs/toolkit";
import enrollmentsData from "./Database/enrollments.json";

const loadEnrollments = () => {
  const storedEnrollments = localStorage.getItem("enrollments");
  return storedEnrollments ? JSON.parse(storedEnrollments) : enrollmentsData;
};

const initialState = {
  enrollments: loadEnrollments(),
};

const enrollmentSlice = createSlice({
  name: "enrollments",
  initialState,
  reducers: {
    enrollCourse: (state, { payload: { user, course } }) => {
      if (!state.enrollments.some((enrollment: { user: any; course: any; }) => enrollment.user === user && enrollment.course === course)) {
        state.enrollments.push({ user, course });
        localStorage.setItem("enrollments", JSON.stringify(state.enrollments));
      }
    },
    unenrollCourse: (state, { payload: { user, course } }) => {
      state.enrollments = state.enrollments.filter(
        (enrollment: { user: any; course: any; }) => !(enrollment.user === user && enrollment.course === course)
      );
      localStorage.setItem("enrollments", JSON.stringify(state.enrollments));
    },
  },
});

export const { enrollCourse, unenrollCourse } = enrollmentSlice.actions;
export default enrollmentSlice.reducer;