import { toast } from "react-toastify";

export const toastWarning = (message) => {
    toast.warning(message, {
        position: "top-left",
        className: "warningToast",
        theme: "dark",
    })
}

export const toastSuccess = (message) => {
    toast.success(message, {
        position: "top-left",
        className: "successToast",
        theme: "dark",
    })
}

export const toastError = (message) => {
    toast.error(message, {
        position: "top-left",
        className: "errorToast",
        theme: "dark",
    })
}

export const toastLoading = (message) => {
    toast.loading(message, {
        position: "top-left",
        className: "loadingToast",
        theme: "dark",
    })
}

export const toastInfo = (message) => {
    toast.info(message, {
        position: "top-left",
        className: "infoToast",
        theme: "dark",
    })
}