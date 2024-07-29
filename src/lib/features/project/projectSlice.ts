import { ProjectStatus } from "@prisma/client";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";


export interface IProject{
    id? : string;
    title? : string;
    explain? : string;
    startAt : Date | null;
    endAt : Date | null; 
    status : ProjectStatus | null;
}

interface ProjectState {
    currentProject : IProject;
    projectList : IProject[];
    loading : boolean;
    error : string | null;
}

const initialState : ProjectState = {
    currentProject : {
        title : '',
        explain: '',
        startAt: null,
        endAt: null,
        status: null,
    },
    projectList : [],
    loading : false,
    error : null,
};

const projectSlice = createSlice({
    name : 'project',
    initialState,
    reducers : {
        updateCurrentProject : (state, action : PayloadAction<Partial<IProject>>) =>{
            state.currentProject = { ...state.currentProject, ...action.payload };
        }
    }
})


export const { updateCurrentProject } = projectSlice.actions;
export default projectSlice.reducer;