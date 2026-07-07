import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet, Router, useNavigate } from "react-router";
import type { RootState } from "../../redux/store";

function ProtectedRoute({
  forSeller,
  forAdmin,
}: {
  forSeller?: boolean;
  forAdmin?: boolean;
}) {
  const user = useSelector((state: RootState) => state.user.value);
  //   const navigate = useNavigate();

  if (user) {
    if (forSeller) {
      if (user.isSeller) {
        return <Outlet />;
      } else {
        return <Navigate to={"/forbidden"} replace />; // feels like glitch
      }
    }

    if (forAdmin) {
      if (user.isAdmin) {
        return <Outlet />;
      } else {
        return <Navigate to={"/forbidden"} />; // feels like glitch
      }
    }

    return <Outlet />;
  } else {
    // navigate("/login"); // not working
    return <Navigate to={"/login"} replace />; // feels like glitch
  }
}

export default ProtectedRoute;
