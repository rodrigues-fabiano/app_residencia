import axios from 'axios';

const AxiosInstance = axios.create({
    // Device
    baseURL: "http://192.168.1.2:8080/comercio-seguro"

    // Emulador
    // baseURL: "http://10.0.2.2:8080/comercio-seguro"
});

export default AxiosInstance;