import { AxiosResponse } from "axios";
import request from "./request";
import { apiRoutes } from "./apiRoutes";
import { Article, ArticleQueryParams } from "../types/blog";

const getArticles = (
  data: ArticleQueryParams
): Promise<AxiosResponse<Array<Article>>> => {
  return request("GET", apiRoutes.blog(data.username), data);
};

export { getArticles };
