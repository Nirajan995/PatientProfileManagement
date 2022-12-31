import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

let config = {
   position: "top-right",
   autoClose: 2000,
   hideProgressBar: false,
   closeOnClick: true,
   pauseOnHover: true,
   draggable: true,
   progress: undefined,
   theme: "light",
}
class ToastifyService {

   success(message) {
      toast.success(message, config);
   }

   error(message) {
      toast.error(message, config);
   }
}

export default new ToastifyService();