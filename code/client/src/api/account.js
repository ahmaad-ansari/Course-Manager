import Axios from "axios";

export const getAccount = async (values) => {
    const body = { ...values };
    try {
        const response = await Axios.post(
            "http://localhost:5000/account/getAccount/",
            body
        );
        
        console.log(response);
        return response;
    } catch (err) {
        return false;
    }
};

export const checkLogin = async (values) => {
    const body = { ...values };
    try {
        const response = await Axios.post(
            "http://localhost:5000/account/login/",
            body
        );
        
        console.log(response);
        return response;
    } catch (err) {
        return false;
    }
};

