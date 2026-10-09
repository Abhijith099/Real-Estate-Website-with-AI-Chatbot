import React, { useContext, useEffect } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Outlet, useLocation } from "react-router-dom"; // ✅ added useLocation
import { useAuth0 } from "@auth0/auth0-react";
import UserDetailContext from "../../context/UserDetailContext";
import { useMutation } from "react-query";
import { createUser } from "../../utils/api";
import useFavourites from "../../hooks/useFavourites";
import useBookings from "../../hooks/useBookings";

const Layout = () => {
  useFavourites();
  useBookings();

  const { isAuthenticated, user, getAccessTokenWithPopup } = useAuth0();
  const { setUserDetails } = useContext(UserDetailContext);
  const location = useLocation(); // ✅ get current route

  const { mutate } = useMutation({
    mutationKey: [user?.email],
    mutationFn: (token) => createUser(user?.email, token),
  });

  useEffect(() => {
    const getTokenAndRegsiter = async () => {
      const res = await getAccessTokenWithPopup({
        authorizationParams: {
          audience: "http://localhost:8000",
          scope: "open id profile email",
        },
      });
      localStorage.setItem("access_token", res);
      setUserDetails((prev) => ({ ...prev, token: res }));
      mutate(res);
    };

    isAuthenticated && getTokenAndRegsiter();
  }, [isAuthenticated]);

  // ✅ Hide footer + change background for chatbot page
  const isChatPage = location.pathname === "/chat";

  return (
    <>
      <div
        style={{
          background: isChatPage ? "#fff" : "var(--black)", // 👈 white background for chatbot
          overflow: "hidden",
          minHeight: "100vh", // ensures full screen layout
        }}
      >
        <Header />
        <Outlet />
      </div>

      {!isChatPage && <Footer />} {/* 👈 hide footer only on chatbot page */}
    </>
  );
};

export default Layout;
