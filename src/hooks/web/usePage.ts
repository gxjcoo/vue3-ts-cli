
import type { RouteLocationRaw } from 'vue-router';

import { useRouter } from 'vue-router';
import { isString } from '@/utils/is';
function handleError(e: Error) {
  console.error(e);
  // 101是为了 大于 打开时候设置的100延时防止闪动
  setTimeout(() => {
    alert('error')
  }, 101);
}
// page switch
export function useGo() {
  const { push, replace } = useRouter();
  function go(opt: RouteLocationRaw | string, isReplace = false) {
    if (isString(opt)) {
      isReplace ? replace(opt).catch(handleError) : push(opt).catch(handleError);
    } else {
      const o = opt as RouteLocationRaw;
      isReplace ? replace(o).catch(handleError) : push(o).catch(handleError);
    }
  }
  return go;
}
