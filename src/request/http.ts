import axios from "axios";
import { ElMessage } from "element-plus";

const baseURL = process.env.NODE_ENV == "development" ? "http://localhost:8080/about" : "http://localhost:8080/about";
// 创建axios实例
const http = axios.create({
    baseURL: baseURL,
    timeout: 15000, // 请求超时时间
    headers: { "Content-Type": "application/json" },
    withCredentials: true // 跨域session
})

// respone拦截器
http.interceptors.response.use(
    response => {
        if (response.data.code !== 200) {
            ElMessage.error({ 
                message: response.data,
                type: "error"}
            );
            console.log("ERROR " + response)
        } else {
            return response.data
        }
    },
    error => {
        ElMessage.error({ 
            message: error,
            type: "error"
        });
        console.log("err " + error) // for debug
        return Promise.reject(error)
    }
)

export default http;