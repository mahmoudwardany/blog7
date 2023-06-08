import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import AdminDashboard from "./pages/admin/AdminDashboard";
import CreatePost from "./pages/createPost/CreatePost";
import Post from "./pages/Post-page/Post.jsx";
import PostDetails from "./pages/PostDetails/PostDetails";
import { ToastContainer } from "react-toastify";
import Category from "./pages/Category/Category";
import Profile from "./pages/Profile/Profile";
import Users from "./pages/admin/Users";
import PostsTable from "./pages/admin/PostsTable";
import CategoriesTable from "./pages/admin/CategoriesTable";
import { CommentsTable } from "./pages/admin/CommentsTable";
import Register from "./pages/Forms/Register";
import Login from "./pages/Forms/Login";
import { useSelector } from "react-redux";
import Verifyemail from "./pages/Verify-email/Verify-email";
import Forgotpassword from "./pages/Forms/Forgot-password";
import ResetPassword from "./pages/Forms/ResetPassword";


function App() {
  const {user} =useSelector((state)=>state.auth)

  let routes=createBrowserRouter([
    {
      path:"",element:<Layout />,children:[
        {path:"register",element:!user ? <Register/> : <Navigate to={'/'}/>},
        {path:"user/:userId/verify/:token",element:!user ? <Verifyemail/> : <Navigate to={'/'}/>},
        {path:"login",element:!user ?<Login/> : <Navigate to={'/'}/>},
        {path:"forgot-password",element:!user ?<Forgotpassword/> : <Navigate to={'/'}/>},
        {path:"reset-password/:userId/:token",element:!user ?<ResetPassword/> : <Navigate to={'/'}/>},
        {path:"profile/:id",element:<Profile/>},

        {path:"",element:<Home/>},
        //admin
        {path:"admin",element:user?.isAdmin ?<AdminDashboard/> : <Navigate to={'/'}/>},
        {path:"dashboard/admin/users", element:user?.isAdmin ? <Users/> : <Navigate to={'/'}/>},
        {path:"dashboard/admin/posts", element:user?.isAdmin ? <PostsTable/> : <Navigate to={'/'}/>},
        {path:"dashboard/admin/categories", element:user?.isAdmin ?<CategoriesTable/>: <Navigate to={'/'}/>},
        {path:"dashboard/admin/comments",element:user?.isAdmin ? <CommentsTable/>: <Navigate to={'/'}/>},

        //user
        {path:"/posts/create",element:user ?<CreatePost/> : <Navigate to={'/'}/>},
        {path:"posts",element:<Post/>},
        {path:"posts/details/:id",element:<PostDetails/>},
        {path:"posts/categories/:category",element:<Category/>},
      ]
    }
  ])
  return (
    <>
        <ToastContainer theme='dark' position='top-center'/>
        <RouterProvider router={routes}/>
    </>
   
  );
}

export default App;
