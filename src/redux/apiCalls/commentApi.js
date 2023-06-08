import request from "../../utils/request";
import { toast } from 'react-toastify'
import { postAction } from "../slices/postSlice";
import { commentAction } from "../slices/commentSlice";


//create Comment
export const addComment = (newComment) => {
    return async (dispatch,getState) => {
        try {
            const { data } = await request.post(`/comments`,newComment,{
                headers:{
                    Authorization:"Bearer " + getState().auth.user.token
                }
            })
            dispatch(postAction.addComment(data))
        } catch (error) {
            toast.error(error.response.data.message)
        }
    }
}
//delete Comment
export const deleteComment = (commentId) => {
    return async (dispatch,getState) => {
        try {
            await request.delete(`/comments/${commentId}`,{
                headers:{
                    Authorization:"Bearer " + getState().auth.user.token
                }
            })
            dispatch(postAction.deleteComment(commentId))
            dispatch(commentAction.deleteComment(commentId))
        } catch (error) {
            toast.error(error?.response?.data?.message)
        }
    }
}
//update Comment
export const updateComments = (commentId,newComment) => {
    return async (dispatch,getState) => {
        try {
    const {data}=   await request.put(`/comments/${commentId}`,newComment,{
                headers:{
                    Authorization:"Bearer " + getState().auth.user.token
                }
            })
            
            dispatch(postAction.updateComment(data))

        } catch (error) {
            toast.error(error.response.data.message)
        }
    }
}

//get All Comments
export const fetchAllComments = () => {
    return async (dispatch,getState) => {
        try {
            const { data } = await request.get(`/comments`,{
                headers:{
                    Authorization:"Bearer " + getState().auth.user.token
                }
            })
            toast.success(data.message)
            dispatch(commentAction.setComment(data.user))
        } catch (error) {
            toast.error(error.response.data.message)
        }
    }
}