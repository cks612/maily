export const useDebounce = (func: any, wait: number) => {
  let timeout: NodeJS.Timeout | null;

  return (...args: any) => {
    const context = undefined;

    if (timeout) clearTimeout(timeout);

    timeout = setTimeout(() => {
      timeout = null;
      func.apply(context, args);
    }, wait);
  };
};
