import axios, { Method, AxiosResponse } from "axios";
import { ArticleQueryParams } from "../types/blog";

const dev = axios.create({
  baseURL: "https://dev.to/api",
});

type Params = ArticleQueryParams;
const request = <T>(
  method: Method,
  url: string,
  params: Params
): Promise<AxiosResponse<T>> => {
  return dev.request<T>({
    method,
    url,
    params,
  });
};

export default request;
