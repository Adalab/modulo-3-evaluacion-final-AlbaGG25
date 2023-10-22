
/// get local storage data
const get = (key, defaultValue) => {
    const localStorageData = localStorage.getItem(key);
    if (localStorageData === null) {
      return defaultValue;
    } else {
      return JSON.parse(localStorageData);
    }
  };
  
// keep data in local storage
  const set = (key, value) => {
    const localStorageData = JSON.stringify(value);
    localStorage.setItem(key, localStorageData);
  };
  
///erase local storage items
  const remove = (key) => {
    localStorage.removeItem(key);
  };
  
///erase local storage
  const clear = () => {
    localStorage.clear();
  };
  
  const objectToExport = {
    get: get,
    set: set,
    remove: remove,
    clear: clear,
  };
  
  export default objectToExport;