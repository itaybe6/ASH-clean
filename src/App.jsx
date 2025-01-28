import { useEffect, useState } from "react";
import { Routes, Route, useNavigationType, useLocation } from "react-router-dom";
import ManagerRegistrationAddB from "./pages/ManagerRegistrationAddB";
import HomePageIphone from "./pages/HomePageIphone";
import ManagerJobs from "./pages/ManagerJobs";
import ManagerJobsMobile from "./pages/ManagerJobsMobile";
import ManagerAddWorker from "./pages/ManagerAddWorker";
import ManagerDisplayCustomers from "./pages/ManagerDisplayCustomers";
import ManagerDisplayWorkers from "./pages/ManagerDisplayWorkers";
import ManagerDisplayCustomersMobile from "./pages/ManagerDisplayCustomersMobile";
import ManagerDisplayWorkersMobile from "./pages/ManagerDisplayWorkersMobile";
import ManagerCustomerJobsDone from "./pages/ManagerCustomerJobsDone";
import ManagerCustomerJobsDoneMobile from "./pages/ManagerCustomerJobsDoneMobile";
import ManagerCustomerJobs from "./pages/ManagerCustomerJobs";
import ManagerCustomerJobsMobile from "./pages/ManagerCustomerJobsMobile";
import ManagerEditBranch from "./pages/ManagerEditBranch";
import ManagerEditBranchMobile from "./pages/ManagerEditBranchMobile";
import ManagerRegistrationAddCustomer from "./pages/ManagerRegistrationAddCustomer";
import ManagerAddWorkerIphone from "./pages/ManagerAddWorkerIphone";
import ManagerRegistrationAddCustomerMobile from "./pages/ManagerRegistrationAddCustomerMobile";
import ManagerEditProfile from "./pages/ManagerEditProfile";
import ManagerEditProfileIphone from "./pages/ManagerEditProfileIphone";
import ManagerRegistrationAddBranchesMobile from "./pages/ManagerRegistrationAddBranchesMobile";
import WorkerBranchSearchIphon from "./pages/WorkerBranchSearchIphon";
import WorkerFutureJobs from "./pages/WorkerFutureJobs";
import WorkerEditProfileMobile from "./pages/WorkerEditProfileMobile";
import WorkerEditProfile from "./pages/WorkerEditProfile";
import WorkerJobSuc from "./pages/WorkerJobSuc";
import WorkerJobSucMobile from "./pages/WorkerJobSucMobile";
import ClientContactUs from "./pages/ClientContactUs";
import ClientEditProfileMobile from "./pages/ClientEditProfileMobile";
import ClientEditProfile from "./pages/ClientEditProfile";
import ClientContactUsMobile from "./pages/ClientContactUsMobile";
import ClientJobs from "./pages/ClientJobs";
import ClientBranchIphone from "./pages/ClientBranchIphone";
import ClientFutureJobs from "./pages/ClientFutureJobs";
import Login from "./pages/Login";
import ClientFutureJobsMobile from "./pages/ClientFutureJobsMobile";
import LoginMobile from "./pages/LoginMobile";
import AccessibilityDesktop from "./pages/AccessibilityDesktop";
import AccessibilityIphone from "./pages/AccessibilityIphone";
import HomePage from "./pages/HomePageDesktop";
import MobileMenuWorker from "./pages/MobileMenuWorker";
import MobileMenuManager from "./pages/MobileMenuManager";
import MobileMenuClient from "./pages/MobileMenuClient";

function App() {
  const [isMobile, setIsMobile] = useState(false);

  const checkScreenSize = () => {
    const mobileBreakpoint = 768; // גודל מסך למובייל
    setIsMobile(window.innerWidth <= mobileBreakpoint);
  };

  useEffect(() => {
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <Routes>
      {/* רכיב 1 */}
      <Route
        path="/" // fix width side bar
        element={isMobile ? <ClientEditProfileMobile /> : <ClientEditProfile />}
      />
      {/* רכיב 2 */}
      <Route
        path="/homepage-mobile"
        element={isMobile ? <HomePageIphone /> : <HomePage />}
      />
      {/* רכיב 3 */}
      <Route
        path="/manager-jobs"
        element={isMobile ? <ManagerJobsMobile /> : <ManagerJobs />}
      />
      {/* רכיב 4 */}
      <Route
        path="/manager-add-worker"           
        element={isMobile ? <ManagerAddWorkerIphone /> : <ManagerAddWorker />}
      />
      
      {/* רכיב 5 */}
      <Route
        path="/manager-display-customers"
        element={
          isMobile ? <ManagerDisplayCustomersMobile /> : <ManagerDisplayCustomers />
        }
      />
      {/* רכיב 6 */}
      <Route
        path="/manager-display-workers"
        element={
          isMobile ? <ManagerDisplayWorkersMobile /> : <ManagerDisplayWorkers />
        }
      />
      {/* רכיב 7 */}
      <Route
        path="/manager-customer-jobs-done"
        element={
          isMobile ? (
            <ManagerCustomerJobsDoneMobile />
          ) : (
            <ManagerCustomerJobsDone />
          )
        }
      />
      {/* רכיב 8 */}
      <Route
        path="/manager-customer-jobs"
        element={
          isMobile ? <ManagerCustomerJobsMobile /> : <ManagerCustomerJobs />
        }
      />
      {/* רכיב 9 */}
      <Route
        path="/manager-edit-branch"
        element={
          isMobile ? <ManagerEditBranchMobile /> : <ManagerEditBranch />
        }
      />
      {/* רכיב 10 */}
      <Route
        path="/manager-registration-add-customer"
        element={
          isMobile ? (
            <ManagerRegistrationAddCustomerMobile />
          ) : (
            <ManagerRegistrationAddCustomer />
          )
        }
      />
      {/* רכיב 11 */}
      <Route
        path="/manager-edit-profile"
        element={
          isMobile ? <ManagerEditProfileIphone /> : <ManagerEditProfile />
        }
      />
      {/* רכיב 12 */}
      <Route
        path="/worker-future-jobs"
        element={       // change the name 
          isMobile ? <WorkerBranchSearchIphon /> : <WorkerFutureJobs />
        }
      />
      {/* רכיב 13 */}
      <Route
        path="/worker-edit-profile"
        element={
          isMobile ? <WorkerEditProfileMobile /> : <WorkerEditProfile />
        }
      />
      {/* רכיב 14 */}
      <Route
        path="/worker-job-suc"
        element={isMobile ? <WorkerJobSucMobile /> : <WorkerJobSuc />}
      />
      {/* רכיב 15 */}
      <Route
        path="/client-contact-us"
        element={isMobile ? <ClientContactUsMobile /> : <ClientContactUs />}
      />
      {/* רכיב 16 */}
      <Route
        path="/client-jobs"
        element={
          isMobile ? <ClientFutureJobsMobile /> : <ClientFutureJobs />
        }
      />
      {/* רכיב 17 */}
      <Route
        path="/login"
        element={isMobile ? <LoginMobile /> : <Login />}
      />
      {/* רכיב 18 */}
      <Route
        path="/accessibility-desktop"
        element={
          isMobile ? <AccessibilityIphone /> : <AccessibilityDesktop />
        }
      />
      {/* רכיב 19 */}
      <Route
        path="/mobile-menu-worker"
        element={
          isMobile ? <MobileMenuWorker /> : <MobileMenuManager />
        }
      />
      {/* רכיב 20 */}
      <Route
        path="/clientJobs"
        element={     //change the name 
          isMobile ? <ClientBranchIphone /> : <ClientJobs />
        }
      />
    </Routes>
  );
}

export default App;


{/* <Routes>






<Route
  path="/manager-registration-add-branches-mobile"
  element={<ManagerRegistrationAddBranchesMobile />}
/>





<Route path="/mobile-menu-worker" element={<MobileMenuWorker />} />
<Route path="/mobile-menu-manager" element={<MobileMenuManager />} />
<Route path="/mobile-menu-client" element={<MobileMenuClient />} />
</Routes>
); */}