// src/ToastConfig.ts
import { ToastOptions } from 'react-toastify';

const defaultToastConfig: ToastOptions = {
  position: "top-right",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
};

export default defaultToastConfig;
