import Axios from "axios";

export const getEnrolledCourses = async (values) => {
    const body = { ...values };
    try {
        const response = await Axios.post(
            "http://localhost:5000/course/getEnrolledCourse/",
            body
        );
        console.log(response);
        return response;
    } catch (err) {
        return false;
    }
};

export const getDept = async (values) => {
    const body = { ...values };
    try {
        const response = await Axios.post(
            "http://localhost:5000/course/getDept/",
            body
        );
        console.log(response);
        return response;
    } catch (err) {
        return false;
    }
};

export const getLec = async (values) => {
    const body = { ...values };
    try {
        const response = await Axios.post(
            "http://localhost:5000/course/getLec/",
            body
        );
        console.log(response);
        return response;
    } catch (err) {
        return false;
    }
};

export const addCourse = async (values) => {
    const body = { ...values };
    try {
        const response = await Axios.post(
            "http://localhost:5000/course/addCourse/",
            body
        );
        console.log(response);
        return response;
    } catch (err) {
        return false;
    }
};

export const deleteCourse = async (values) => {
    const body = { ...values };
    try {
        const response = await Axios.post(
            "http://localhost:5000/course/deleteCourse/",
            body
        );
        console.log(response);
        return response;
    } catch (err) {
        return false;
    }
};

export const getCourseId = async (values) => {
    const body = { ...values };
    try {
        const response = await Axios.post(
            "http://localhost:5000/course/getCourseId/",
            body
        );
        console.log(response);
        return response;
    } catch (err) {
        return false;
    }
};