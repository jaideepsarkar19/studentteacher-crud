import './App.css';
import React from 'react';
import Sidebar from './components/Sidebar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    
    <div className="App">
      
        <Sidebar/>
    </div>
      
  );
}

export default App;
