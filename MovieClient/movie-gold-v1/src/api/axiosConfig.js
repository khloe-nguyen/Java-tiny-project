import axios from "axios";

export default axios.create({
  baseURL: "https://0d14-2402-800-63e9-6ffe-9487-e738-4585-ad94.ngrok-free.app",
  // baseURL: "http://localhost:8080",   2 cach deu ok, cach 1: tao ra link ngrok thay the cho link 8080 này
  headers: { "ngrok-skip-browser-warning": "true" },
});
