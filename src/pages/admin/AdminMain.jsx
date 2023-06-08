import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import AddCategory from './AddCategory'
import { useDispatch, useSelector } from 'react-redux'
import { getAllCategories } from '../../redux/apiCalls/categoryApi'
import {  getUserCount } from '../../redux/apiCalls/profileApi'
import {  getpostCount } from '../../redux/apiCalls/postApi.js'
import { fetchAllComments } from '../../redux/apiCalls/commentApi'

const AdminMain = () => {
  const {categories} =useSelector(state=>state.categories)
  const {usersCount} =useSelector(state=>state.profile)
  const {postCount} =useSelector(state=>state.posts)
  const {comments} =useSelector(state=>state.comments)
  const dispatch=useDispatch()

useEffect(()=>{
  dispatch(getAllCategories())
  dispatch (getUserCount())
  dispatch (getpostCount())
  dispatch(fetchAllComments())
    },[dispatch])

  return (
    <div className="admin-main">
    <div className="admin-main-header">
      <div className="admin-main-card">
        <h5 className="admin-card-title">Users</h5>
        <div className="admin-card-count">{usersCount}</div>
        <div className="admin-card-link-wrapper">
          <Link to="/admin/users" className="admin-card-link">
            See all users
          </Link>
          <div className="admin-card-icon">
            <i className="fa-solid fa-person"></i>
          </div>
        </div>
      </div>
      <div className="admin-main-card">
        <h5 className="admin-card-title">Posts</h5>
        <div className="admin-card-count">{postCount}</div>
        <div className="admin-card-link-wrapper">
          <Link to="/admin/posts" className="admin-card-link">
            See all posts
          </Link>
          <div className="admin-card-icon">
            <i className="fa-solid fa-file"></i>
          </div>
        </div>
      </div>
      <div className="admin-main-card">
        <h5 className="admin-card-title">Categories</h5>
        <div className="admin-card-count">{categories?.length}</div>
        <div className="admin-card-link-wrapper">
          <Link
            to="/admin/categories"
            className="admin-card-link"
          >
            See all categories
          </Link>
          <div className="admin-card-icon">
            <i className="fa-solid fa-tag"></i>
          </div>
        </div>
      </div>
      <div className="admin-main-card">
        <h5 className="admin-card-title">Comments</h5>
        <div className="admin-card-count">{comments?.length}</div>
        <div className="admin-card-link-wrapper">
          <Link
            to="/admin/comments"
            className="admin-card-link"
          >
            See all comments
          </Link>
          <div className="admin-card-icon">
            <i className="fa-solid fa-comments"></i>
          </div>
        </div>
      </div>
    </div>
    <AddCategory/>
  </div>
  )
}

export default AdminMain