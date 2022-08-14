export const useLocalStorage = {
  set: (name: string, data: any) => {
    localStorage.setItem(name, JSON.stringify(data));
  },
  get: (name: string) => {
    const data = localStorage.getItem(name);
    return data ? JSON.parse(data) : "";
  },
};
