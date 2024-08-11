import { ProjectStatus } from "@prisma/client";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { project } from "@/types/project/types";

interface ProjectState {
    currentProject : project;
    projectList : project[];
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
    name : 'project', // action 명
    initialState, //초기 상태
    //리듀서 정의
    reducers : {
        updateCurrentProject : (state, action : PayloadAction<Partial<project>>) =>{
            state.currentProject = { ...state.currentProject, ...action.payload };
        }
    },
    //비동기 처리
    extraReducers(builder){

    }
})

//아래 값으로 Action 생성
// dispatch(projectAction.updateCurrentProject)
// export const { updateCurrentProject } = projectSlice.actions;
export const projectAction = projectSlice.actions;
export default projectSlice.reducer;