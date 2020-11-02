import { http } from "@/utils/request";

export function getList(params: any) {
  return http({
    url: "/table/getList",
    method: "get",
    params,
  });
}
