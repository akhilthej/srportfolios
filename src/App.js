import React from "react";
import { Routes, Route, useLocation } from 'react-router-dom';
import ReactGA from 'react-ga4'
import { Navbar, Footer, PrivacyPolicy, TermsnConditions, Disclaimer, ShippingandDelivery, ReturnPolicy, Error404, Home, Aboutus, Contactus,
  Modeling, ModelingBasicService, ModelingEliteService, ModelingExpert,
  FinishingSchool, FinishingBasicService, FinishingEliteService, FinishingExpert, 

} from './routes/Routes';
import NavbarMobile from './components/Navbar/NavbarMobile';

const routes = [
  { path: '/', element: <Home /> },
  { path: '/*', element: <Error404 /> },
  
  { path: '/best-modeling-school-in-india', element: <Modeling /> },

  { path: '/aboutus', element: <Aboutus /> },
  { path: '/contactus', element: <Contactus /> },
  { path: '/privacypolicy', element: <PrivacyPolicy /> },
  { path: '/termsconditions', element: <TermsnConditions /> },
  { path: '/returnpolicy', element: <ReturnPolicy /> },
  { path: '/shippingdelivery', element: <ShippingandDelivery /> },
  { path: '/disclaimer', element: <Disclaimer /> },
  
];

ReactGA.initialize('G-8QD5KXH3VB'); // Replace with your Tracking ID

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
