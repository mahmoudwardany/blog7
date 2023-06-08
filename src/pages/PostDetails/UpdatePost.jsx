import {  useEffect, useState } from 'react';
import './updatePost.css'
import { useDispatch, useSelector } from 'react-redux';
import { updatePost } from '../../redux/apiCalls/postApi';
const UpdatePost = ({setupdatePost,post}) => {
  const dispatch=useDispatch()
  const {categories,updateUserProfile} =useSelector(state=>state.categories)
    const [title, setTitle] = useState(post.title);
    const [description, setDescription] = useState(post.description);
    const [category, setCategory] = useState(post.category);
    const formSubmitHandler=(e)=>{
        e.preventDefault()
      dispatch (updatePost({title,description,category},post?._id))
      window.location.reload()
        setupdatePost(false)
    }
useEffect(()=>{
  
  
},[updateUserProfile])
  return (
    <div className="update-post">
    <form onSubmit={formSubmitHandler} className="update-post-form">
      <abbr title="close">
        <i
          onClick={() => setupdatePost(false)}
          className="fa-regular fa-xmar update-post-form-close"
        ></i>
      </abbr>
      <h1 className="update-post-title">Update Post</h1>
      <input
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        type="text"
        className="update-post-input"
      />
      <select
        className="update-post-input"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option disabled value="">
          Select A Category
        </option>
        {categories?.map((category) => (
          <option value={category.title} key={category._id}>{category.title}</option>
          ))}
      </select>
      <textarea
        className="update-post-textarea"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        rows="5"
      ></textarea>
      <button type="submit" className="update-post-btn">
        Update Post
      </button>
    </form>
  </div>
  )
}

export default UpdatePost