import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { Suspense, lazy } from "react";
// import Devices from './Modules/AdminModule/Pages/Devices/index';
// import Sidebar from './Common/SideBar/Sidebar';
// import Devices from "./Modules/AdminModule/Pages/Devices"

const Intents = lazy(() => import('./Modules/Intents/Intents'));
const Rooms = lazy(() => import('./Modules/Rooms/Rooms'));
const CheckIn = lazy(() => import('./Modules/CheckIn/CheckIn'));
const FaqEditor = lazy(() => import('./Modules/FAQ/FaqEditor'));
const CheckOut = lazy(() => import('./Modules/Checkout/Checkout'));
const Devices = lazy(() => import('./Modules/AdminModule/Pages/Devices/index'));
const StaffDirectory = lazy(() => import('./Modules/AdminModule/Pages/StaffDirectory/StaffDirectory'));
const StaffRequestMapping = lazy(() => import('./Modules/AdminModule/Pages/StaffRequestMapping/StaffRequestMapping'));
const HotelAnalyticsDashboard = lazy(() => import('./Modules/Analytics/HotelAnalyticsDashboard'));
const Sidebar = lazy(() => import('./Common/SideBar/Sidebar'));

function App() {

  return (
    <Router>
      <Sidebar />
      <Routes>

        <Route
          path="/requests"
          element={<Intents />}
        />
        <Route
          path="/admin/devices"
          element={
            <Suspense fallback={<div>Devices are loading please wait...</div>} >
              <Devices />
            </Suspense>}
        />
        <Route
          path="/admin/staff-directory"
          element={
            <Suspense fallback={<div>Staff details are loading please wait...</div>} >
              <StaffDirectory />
            </Suspense>}
        />
        <Route
          path="/admin/staff-request-mapping"
          element={
            <Suspense fallback={<div>Staff mapping details are loading please wait...</div>} >
              <StaffRequestMapping />
            </Suspense>}
        />
        <Route
          path="/admin/rooms"
          element={<Rooms />}
        />
        <Route
          path="/check-in"
          element={<CheckIn />}
        />
        <Route
          path="/check-out"
          element={<CheckOut />}
        />
        <Route
          path="/faq"
          element={<FaqEditor />}
        />
        <Route
          path="/analytics"
          element={<HotelAnalyticsDashboard />}
        />
        {/*   <Route
            path="/services"
            element={<Services />}
        />
        <Route
            path="/services/services1"
            element={<ServicesOne />}
        />
        <Route
            path="/services/services2"
            element={<ServicesTwo />}
        />
        <Route
            path="/services/services3"
            element={<ServicesThree />}
        />
        <Route
            path="/contact"
            element={<Contact />}
        />
        <Route
            path="/events"
            element={<Events />}
        />
        <Route
            path="/events/events1"
            element={<EventsOne />}
        />
        <Route
            path="/events/events2"
            element={<EventsTwo />}
        />
        <Route
            path="/support"
            element={<Support />} 
        />*/}
      </Routes>
    </Router>
  );
}

export default App;
