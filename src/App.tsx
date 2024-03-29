import React from 'react'
import { Route, Routes } from 'react-router'
import './App.scss'
import MainLayout from './components/Layout/MainLayout'
import HomePage from './pages/Home/HomePage'
import Page404 from './pages/Page404/Page404'
import Checkmail from './pages/Checkmail/Checkmail'
import Support from './pages/SupportPage/Support'
import About from './pages/About/About'
import HowItWorks from './pages/HowItWorks/HowItWorks'
// import Contacts from './pages/Contacts/Contacts'
import RegPage from './pages/RegistrationPage/RegPageIndex'
import ConfirmPasswordForm from './components/ConfirmPasswordForm/ConfirmPasswordForm'
import RequestPasswordForm from './components/RequestPasswordForm/RequestPasswordForm'
import Donation from './pages/Donation/Donation'
import CheckVacancy from './pages/CheckVacancy/CheckVacancy'

// import Footer from './components/Footer/Footer'
// import AdminLayout from './components/Layout/AdminLayout/AdminLayout.tsx'
// import ProtectedRoute from './routes/ProtectedRouteAdmin.tsx'
// import LoginAdmin from './pages/AdminPanel/LoginAdmin/LoginAdmin.tsx'

const PersonalAccount = React.lazy(() => import('./pages/PersonalAccount/PersonalAccount'))

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="/" element={<HomePage />}>
          <Route path="confirm-password" element={<ConfirmPasswordForm />} />
          <Route path="request-password" element={<RequestPasswordForm />} />
        </Route>
        <Route path="registration" element={<RegPage />} />
        {/* <Route path="/" element={<Footer />}></Route> */}
        <Route
          path="account/*"
          element={
            <React.Suspense fallback={<>...</>}>
              <PersonalAccount />
            </React.Suspense>
          }
        />
        <Route path="/checkMail" element={<Checkmail />} />
        <Route path="/support" element={<Support />} />
        <Route path="*" element={<Page404 />} />
        <Route path="/about" element={<About />} />
        <Route path="/howitworks" element={<HowItWorks />} />
        <Route path="/donation" element={<Donation />} />
        <Route path="/donation" element={<Donation />} />
        <Route path="vacancy/:id" element={<CheckVacancy />} />
      </Route>
      <Route path="*" element={<Page404 />} />
      {/* <Route element={<ProtectedRoute page="admin" />}>
        <Route path="admin" element={<AdminLayout />} />
      </Route> */}
      {/* <Routes path="log-in" element={<LoginAdmin />} /> */}
    </Routes>
  )
}

export default App
