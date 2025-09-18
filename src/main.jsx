import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import "./index.css";
import { ToastContainer } from 'react-toastify';
import Wrapper from './wrapper.jsx';


createRoot(document.getElementById('root')).render(
<Wrapper>

<>   
    <App />
    <ToastContainer position='bottom-right'/>
</>

</Wrapper>

);





 



