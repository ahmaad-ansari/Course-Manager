import Axios from "axios";

export const getCourses = async (values) => {
    const body = { ...values };
    try {
        const response = await Axios.post(
            "http://localhost:5000/course/getAllCourse/",
            body
        );
        console.log(response);
        return response;
    } catch (err) {
        return false;
    }
};

export const registerCourse = async (values) => {
    const body = { ...values };
    try {
        const response = await Axios.post(
            "http://localhost:5000/course/registerCourse/",
            body
        );
        console.log(response);
        return response;
    } catch (err) {
        return false;
    }
};

export const dropCourse = async (values) => {
    const body = { ...values };
    try {
        const response = await Axios.post(
            "http://localhost:5000/course/dropCourse/",
            body
        );
        console.log(response);
        return response;
    } catch (err) {
        return false;
    }
};