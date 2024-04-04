import request from "./request";

const API_URL = "https://verification-guddu.onrender.com";


export const submitVerificationCode = (payload) =>request('POST', API_URL + '/verification',payload);
