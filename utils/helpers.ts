export const urlPatternValidation = URL => {
  //eslint-disable-next-line
  const regex = new RegExp("^(http[s]?:\\/\\/(www\\.)?|ftp:\\/\\/(www\\.)?|www\\.){1}([0-9A-Za-z-\\.@:%_\+~#=]+)+((\\.[a-zA-Z]{2,3})+)(/(.)*)?(\\?(.)*)?");    
  return regex.test(URL);
};

const units = ['bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
   
export const convertBytes = (x) => {
  let l = 0, n = parseInt(x, 10) || 0;
  while(n >= 1024 && ++l){
      n = n/1024;
  }
  return(n.toFixed(n < 10 && l > 0 ? 1 : 0) + ' ' + units[l]);
}

export const getValue = (object, fieldName) => {
  return (object[fieldName] || object[`tns:${fieldName}`] || [])[0];
};

/** Parses JPK formatted object to format used in the app */
export const parseJpkObject = (object): any => {
  const properties = Object.entries(object).reduce((acc, [name, value]) => {
    return {
      ...acc,
      [name.replace('tns:', '')]: Array.isArray(value) ? value[0] : value,
    };
  }, {});
  return properties;
};

/** Parses JPK formatted array to format used in the app */
export const parseJpkArray = array => {
  const rows = array.map(row => parseJpkObject(row));
  return rows;
};
