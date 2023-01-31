import { async } from "@firebase/util";
import { createBrowserRouter } from "react-router-dom";
import Booking from "../components/Booking/Booking";
import BookingRoom from "../components/BookingRoom/BookingRoom";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import Rooms from "../components/Rooms/Rooms";
import Main from "../layouts/Main";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
          path:'/booking',
          loader:async()=>fetch("room.json"),
          element:<Rooms></Rooms>
      },
      {
        path: "/booking/:id",
        loader: async ({ params }) => {
          return fetch(`room.json/booking/${params.id}`);
        },
        element: <Booking></Booking>,
      },
    ],
  },
]);
