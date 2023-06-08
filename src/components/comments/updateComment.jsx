import {  useState } from 'react';
import './updateComment.css'
import { useDispatch, useSelector } from 'react-redux';
import { updateComments } from '../../redux/apiCalls/commentApi';

const UpdateComment = ({setupdateComment,updateCommentModel,onDataReceived}) => {
    const [text, setText] = useState(updateCommentModel.text);
    const {isLoading}=useSelector(state=>state.posts)
  const dispatch = useDispatch();

    const handleInputChange = (event) => {
      setText(event.target.value);
    };
    const formSubmitHandler = (e) => {
      e.preventDefault();
      setupdateComment(false);

      dispatch(updateComments(updateCommentModel?._id, {text}));
      window.location.reload()
    };
  return (
    <div className="update-comment">
    <form onSubmit={formSubmitHandler} className="update-comment-form">
      {isLoading?<p>loading....</p>:
      <>
        <abbr title="close">
        <i
          onClick={() => setupdateComment(false)}
          className="fa-regular fa-xmark  update-comment-form-close mx-2"
        ></i>
        
      </abbr>
      <h1 className="update-comment-title">Edit Comment</h1>
      <input
        onChange={handleInputChange}
        value={text}
        type="text"
        className="update-comment-input"
      />
      <button type="submit" className="update-comment-btn">
        Update Comment
      </button>
      </>
      }
     
    </form>
  </div>
  )
}

export default UpdateComment