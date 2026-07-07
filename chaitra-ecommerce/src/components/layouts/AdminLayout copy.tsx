import React from "react";
import { Link, Outlet } from "react-router";

function AdminLayout() {

  /* 
  import { logout, setUser } from "../../redux/features/userSlice";

function Header() {
  const reduxUser = useSelector((store: RootState) => store.user.value);
  const dispatch = useDispatch();

  const handleLogout = () => {
    // dispatch(setUser(null));
    dispatch(logout());
  };
   */
  return (
    <>
      <div>Admin Layout</div>
      <div className="grid grid-cols-8">
        <div className="grid-cols-2">
          <p><Link to="/admin/dashboard">Dashboard</Link></p>
          <p><Link to="/admin/products">Products</Link></p>
          <p><Link to="/admin/categories">Categories</Link></p>

          {/* 
           {reduxUser ? (
                <>
                  <span className="mr-4">{reduxUser.firstName}</span>
                  <button onClick={handleLogout}>logout</button>
                </>
                
                */}
        </div>
        <div className="grid-cols-6">
         <Outlet/>
        </div>
      </div>
    </>
  );
}

export default AdminLayout;
