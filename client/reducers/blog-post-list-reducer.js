import { BLOG_POST_LIST_RECEIVED } from './../actions/index'

export function BlogPostListReducer(state = null, action) {
    switch(action.type) {
        case BLOG_POST_LIST_RECEIVED:
            return action.payload.data
    }
    return state
}