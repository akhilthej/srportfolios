import React from "react";
import { Routes, Route, useLocation } from 'react-router-dom';
import ReactGA from 'react-ga4'
import { Navbar, Footer, PrivacyPolicy, TermsnConditions, Disclaimer, ShippingandDelivery, ReturnPolicy, Error404, Home, Aboutus, Contactus,
  Gallery_Portfolio,

} from './routes/Routes';
import NavbarMobile from './components/Navbar/NavbarMobile';

const routes = [
  { path: '/', element: <Home /> },
  { path: '/*', element: <Error404 /> },
  
  { path: '/best-portfolio-photoshoots-in-india', element: <Gallery_Portfolio /> },

  { path: '/aboutus', element: <Aboutus /> },
  { path: '/contactus', element: <Contactus /> },
  { path: '/privacypolicy', element: <PrivacyPolicy /> },
  { path: '/termsconditions', element: <TermsnConditions /> },
  { path: '/returnpolicy', element: <ReturnPolicy /> },
  { path: '/shippingdelivery', element: <ShippingandDelivery /> },
  { path: '/disclaimer', element: <Disclaimer /> },
  
];

export function App() {
  const location = useLocation();
  window.scrollTo(0, 0);


  return (
    <>
      <Navbar />
      <NavbarMobile />
      <Routes location={location} key={location.pathname}>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
