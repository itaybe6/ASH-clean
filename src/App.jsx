import { useEffect, useState } from "react";
import {  Router, Routes, Route, useLocation } from "react-router-dom";
import ManagerRegistrationAddB from "./pages/ManagerRegistrationAddB";
import HomePageIphone from "./pages/HomePageIphone";
import ManagerJobs from "./pages/ManagerJobs";
import ManagerJobsMobile from "./pages/ManagerJobsMobile";
import ManagerAddWorker from "./pages/ManagerAddWorker";
import ManagerDisplayUsers from "./pages/ManagerDisplayUsers";
import ManagerDisplayWorkers from "./pages/ManagerDisplayWorkers";
import ManagerDisplayUsersMobile from "./pages/ManagerDisplayUsersMobile";
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
import ManagerEditUser from "./pages/ManagerEditUser";
import ManagerEditUserMobile from "./pages/ManagerEditUserMobile";

import Loader from "./components/Loader";

function PageTransition({ children }) {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
      setLoading(true);
      const timer = setTimeout(() => setLoading(false), 1000); // זמן טעינה קצר

      return () => clearTimeout(timer);
  }, [location]);

  return (
      <>
          {loading && <Loader />}
          <div className="page-transition">{children}</div> {/* הוספנו את האנימציה */}
      </>
  );
  
}

function App() {
  const [isMobile, setIsMobile] = useState(false);
  
  const checkScreenSize = () => {
    const mobileBreakpoint = 768;
    setIsMobile(window.innerWidth <= mobileBreakpoint);
  };

  useEffect(() => {
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
      <PageTransition>
        <Routes>
          <Route path="/homepage" element={isMobile ? <HomePageIphone /> : <HomePage />} />
          <Route path="/manager-jobs" element={isMobile ? <ManagerJobsMobile /> : <ManagerJobs />} />
          <Route path="/manager-add-worker" element={isMobile ? <ManagerAddWorkerIphone /> : <ManagerAddWorker />} />
          <Route path="/manager-display-users" element={isMobile ? <ManagerDisplayUsersMobile /> : <ManagerDisplayUsers />} />
          <Route path="/manager-customer-jobs-done" element={isMobile ? <ManagerCustomerJobsDoneMobile /> : <ManagerCustomerJobsDone />} />
          <Route path="/manager-customer-jobs" element={isMobile ? <ManagerCustomerJobsMobile /> : <ManagerCustomerJobs />} />
          <Route path="/manager-edit-branch" element={isMobile ? <ManagerEditBranchMobile /> : <ManagerEditBranch />} />
          <Route path="/manager-add-customer" element={isMobile ? <ManagerRegistrationAddCustomerMobile /> : <ManagerRegistrationAddCustomer />} />
          <Route path="/manager-edit-profile" element={isMobile ? <ManagerEditProfileIphone /> : <ManagerEditProfile />} />
          <Route path="/worker-future-jobs" element={isMobile ? <WorkerBranchSearchIphon /> : <WorkerFutureJobs />} />
          <Route path="/worker-edit-profile" element={isMobile ? <WorkerEditProfileMobile /> : <WorkerEditProfile />} />
          <Route path="/worker-job-suc" element={isMobile ? <WorkerJobSucMobile /> : <WorkerJobSuc />} />
          <Route path="/client-contact-us" element={isMobile ? <ClientContactUsMobile /> : <ClientContactUs />} />
          <Route path="/client-future-jobs" element={isMobile ? <ClientFutureJobsMobile /> : <ClientFutureJobs />} />
          <Route path="/client-edit-profile" element={isMobile ? <ClientEditProfileMobile /> : <ClientEditProfile />} />
          <Route path="/clientJobs" element={isMobile ? <ClientBranchIphone /> : <ClientJobs />} />
          <Route path="/login" element={isMobile ? <LoginMobile /> : <Login />} />
          <Route path="/accessibility-desktop" element={isMobile ? <AccessibilityIphone /> : <AccessibilityDesktop />} />
          <Route path="/mobile-menu-worker" element={isMobile ? <MobileMenuWorker /> : <MobileMenuManager />} />
          <Route path="/manager-registration-add-branches" element={isMobile ? <ManagerRegistrationAddBranchesMobile /> : <ManagerRegistrationAddB />} />
          <Route path="/manager-edit-user/:id/:type" element={isMobile ? <ManagerEditUserMobile /> : <ManagerEditUser />} />

        </Routes>
      </PageTransition>
  );
}

export default App;

