
import Swal from "sweetalert2"; const toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true,
    didOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
});

const ToastPlugin = {
    install(Vue) {
        Vue.prototype.$toast = toast;
    },
};

export default ToastPlugin;