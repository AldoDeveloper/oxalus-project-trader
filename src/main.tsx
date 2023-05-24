
import ReactDOM from 'react-dom/client'
import App from './App';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
   <>
      <App/>
      <ToastContainer/>
   </>
)
