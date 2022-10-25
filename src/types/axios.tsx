import { Method } from "axios";

export interface AxiosParams {
  method?: Method;
  url: string;
  data?: object;
  params?: object;
}
