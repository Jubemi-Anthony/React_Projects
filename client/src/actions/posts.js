import * as api from '../api';
import { DELETE, FETCH_ALL, UPDATE, CREATE } from "../constants/types";

//AFTER RECEIVING FROM THE API YOU'LL CREATE AND EXPORT THESE FUNCTIONS AND GO TO REDUCERS TO CREATE CASES FOR THEM

//Action Creators
export const getPosts = () => async(dispatch) =>{
    try {
        const {data} = await api.fetchPosts();

        dispatch({ type: FETCH_ALL, payload: data })
    } catch (error) {
        console.log(error.message);
    }
}


export const createPost = (post) => async (dispatch) =>{
    try {
        const {data} = await api.createPost(post);

        dispatch({type: CREATE, payload: data});
    } catch (error) {
        console.log(error);
    }
}

export const updatePost = (id, post) => async (dispatch) =>{
    try {
       const {data} = await api.updatePost(id, post);

       dispatch({type: UPDATE, payload: data});
    } catch (error) {
        console.log(error);
    }
}

export const deletePost = (id) => async (dispatch) =>{
    try {
        await api.deletePost(id);

        dispatch({type: DELETE, payload: id});
    } catch (error) {
        console.log(error);
    }
}

export const likePost = (id) => async (dispatch) =>{
    try {
        const {data} = await api.likePost(id);

        dispatch({type: 'UPDATE', payload: data});
    } catch (error) {
       console.log(error); 
    }
}