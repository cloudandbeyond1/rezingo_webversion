const { createSlice } = require('@reduxjs/toolkit');

const programSlice = createSlice({
    name: 'program',
    initialState: {
        programs: [],
    },
    reducers: {
        setPrograms(state, action) {
            state.programs = action.payload;
        }
    },
});

export const { setPrograms } = programSlice.actions;
export default programSlice.reducer;
