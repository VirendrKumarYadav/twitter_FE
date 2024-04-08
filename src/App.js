import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { RouterProvider } from 'react-router-dom';
import { Router } from './routes/Router';
import 'aos/dist/aos.css'; 

function App() {
 
  return (
    <div>
    
        {/* <Header/> */}
        {/* <Signup/> */}
        {/* <Main /> */}
      
        <RouterProvider router={Router}></RouterProvider>
        <ToastContainer/>
    </div>


  );
}

export default App;
