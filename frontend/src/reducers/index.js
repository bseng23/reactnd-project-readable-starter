import { combineReducers } from 'redux'
/*
import {
    ADD_POST,
    RECEIVE_POST,
    EDIT_POST,
    DELETE_POST,   
    EDIT_COMMENT,
    DELETE_COMMENT,    
    UPDATE_VOTESCORE,
} from '../actions'
*/

import {
    RECEIVE_POST,
    POST_BY_CATEGORY} from '../actions'


/*
const initialCommentState = {
    "comments": {
      id: null,
      parentId: null,
      timestamp: null,
      body: null,
      author: null,
      voteScore: null,
      deleted: null,
      parentDeleted: null
    }
}

 */

const initialPostState = {}

function listPost (state = initialPostState, action) {
    const { posts, postByCategory } = action

    switch (action.type) {
        case RECEIVE_POST :
        return {
            ...state,
            posts
            
        }        

        case POST_BY_CATEGORY :
        return {
            ...state,
            postByCategory
        }
        
        default :
        return state;

    }
}

export default combineReducers({
    listPost
    
})