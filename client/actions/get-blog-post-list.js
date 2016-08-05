import axios from 'axios'

export const BLOG_POST_LIST_RECEIVED = "BLOG_POST_LIST_RECEIVED";

export function getBlogPostList() {
    //needs to be FSA compliant for redux-promise library to work
    return {
        type: BLOG_POST_LIST_RECEIVED,
        payload: axios.get("/api/blog-posts")
    }
}