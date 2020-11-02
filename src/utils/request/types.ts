/**
 * @description 出参格式
 */
export interface Result {
  code: number;
  type?: "success" | "error" | "warning";
  msg: string;
  total: number;
  data: any[];
}

/**
 * @description 入参格式
 */
export interface Params {
  url: string;
  method: string;
  params: object;
}
