import logo from './logo.svg';
import './App.css';
import Welcome from './pages/Welcome';
import PlanLayout from './pages/layouts/PlanLayout';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PhoneConfirmatio from './pages/PhoneConfirmatio';
import CodeConfirm from './pages/CodeConfirm';
import AllowNotification from './pages/AllowNotification';
import AppLayout from './pages/layouts/AppLayout';
import Home from './pages/Home';
import Explore from './pages/Explore';
import Profile from './pages/Profile';

function App() {
  return (
    <BrowserRouter>
        
        <PlanLayout>

            <Routes>
              <Route exact path='/' Component={Welcome}/>
              <Route exact path='/invite' Component={PhoneConfirmatio}/>
              <Route exact path='/code_confirm' Component={CodeConfirm}/>
              <Route exact path='/allow_notifications' Component={AllowNotification}/>
            </Routes>
        </PlanLayout>

            <AppLayout>
            <Routes>
              <Route exact path='/home' Component={()=> <Home/>}/>
              <Route exact path='/explore' Component={()=> <Explore/>}/>
              <Route exact path='/profile' Component={()=> <Profile/>}/>
            </Routes>
            </AppLayout>


    </BrowserRouter>
  );
}

export default App;
