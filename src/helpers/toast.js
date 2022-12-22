import { toast } from "react-toastify";

export const showToast = (message = "", type = "") => {

  if (type === "success") {

    toast.success(
      message,
      {
        autoClose: 1000,
        closeOnClick: true,
        draggable: true,
        hideProgressBar: false,
        pauseOnHover: true,
        position: "bottom-right",
        progress: null,
        theme: "light"
      }
    );
    return;

  }
  if (type === "error") {

    toast.error(
      message,
      {
        autoClose: 1000,
        closeOnClick: true,
        draggable: true,
        hideProgressBar: false,
        pauseOnHover: true,
        position: "bottom-right",
        progress: null,
        theme: "light"
      }
    );
    return;

  }

  toast(
    message,
    {
      autoClose: 2000,
      closeOnClick: true,
      draggable: true,
      hideProgressBar: false,
      pauseOnHover: true,
      position: "bottom-right",
      progress: null,
      theme: "light"
    }
  );

};
