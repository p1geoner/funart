import axios from "axios";
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";

export default function axiosConfig() {
  const devOrProd = process.env.NEXT_PUBLIC_BACK_URL;
  const user = "token";

  const instance = axios.create({
    baseURL: devOrProd,
  });

  instance.interceptors.request.use(
    (config) => {
      // Проверяем тип запроса на GET или POST
      if (config.method === "get") {
        config.headers["token"] = user;
        config.headers["Content-Type"] = "multipart/form-data";
      } else if (config.method === "post") {
        config.headers["token"] = user;
        config.headers["Content-Type"] = "multipart/form-data";
      } else if (config.method === "delete") {
        config.headers["token"] = user;
      }
      return config;
    },
    (error) => Promise.reject(error),
  );

  instance.interceptors.response.use(
    (response) => response,
    async (error) => {
      console.log(error);
      // if (error.response.status === 401 || error.response.status === 404) {
      //   // localStorage.clear();
      //   // debugger;
      //   // window.location.reload();
      //   console.log("Not auth", error);
      // }
    },
  );

  return instance;
}
