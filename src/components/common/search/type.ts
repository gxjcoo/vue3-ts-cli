interface Options {
  label: string;
  value: string | number;
}

export interface Formlist {
  //默认值
  value?: string | number;
  //标题
  label: string;
  //字段名
  key: string;
  //类型
  type: string;
  placeholder: string;
  //select 选项
  options?: Options[];
}
