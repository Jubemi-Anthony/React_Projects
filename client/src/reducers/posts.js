import { DELETE, FETCH_ALL, UPDATE, CREATE } from "../constants/types";
//AFTER CREATING THE FUNCTIONS IN REDUCERS, YOU COME HERE TO THE REDUCERS AND DEFINE WHAT YOU WANT TO DO
 
const reducer = (posts = [], action) =>{
    switch (action.type) {
        case DELETE:
            return posts.filter((post) => post._id !== action.payload);
        case FETCH_ALL:
            return action.payload;
        case CREATE:
            return [...posts, action.payload];
        case UPDATE:
            return posts.map((post) => post._id === action.payload._id ? action.payload : post)
            default:
            return posts;
    }
}

export default reducer;