import Swal from "sweetalert2";


const toast = Swal.mixin({
    toast: true,
    position: "top",
    showConfirmButton: false,
    color: "#ffffff",
    timer: 3000,
    animation: false,
    customClass: {
        popup: "rikumoti-toast",
        title: "rikumoti-toast-title"
    },
    didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
    }
});

export const showSuccess = (title) => {
    return toast.fire({
        title,
        background: "#8b5cf6",
        timerProgressBar: false
    });
}

export const showError = (title) => {
    return toast.fire({
        title,
        background: "#ef4444",
        timerProgressBar: false
    });
}

export const showInfo = (title) => {
    return toast.fire({
        icon: "info",
        title
    });
};

export const showConfirm = (title, text = "") => {
    return Swal.fire({
        title,
        text,
        showCancelButton: true,
        confirmButtonText: "Yes",
        cancelButtonText: "Cancel",
        background:"#1e293b",
        color: "#f8fafc",
        confirmButtonColor: "#ef4444",
        cancelButtonColor: "#64748b",
        reverseButtons: true
    });
}
