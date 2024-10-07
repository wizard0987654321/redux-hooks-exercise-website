import App from "./App";
import Navigation from "./components/Navigation";
import SecondPage from "./components/SecondPage";
import ErrorPage from "./components/ErrorPage";

const routes = [
    {
      path: "/",
      element: <Navigation />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <App /> },
        { path: "homepage/", element: <App /> },
        { path: "secondpage/", element: <SecondPage />},
      ]
    },
  ];
  
  export default routes;