export const checkEmail = (str) => str.split("").filter(item => item === '@').length > 0;


export const checkStrLength = (str, num) => str.trim().length > num; 

export const checkCapitalLetter = (str) => str.trim().toLowerCase() !== str.trim();
export const checkStrWithNumber = (str) => str.split("").filter(item => +item >= 0 && +item <= 9).length > 1;
export const checkConfirmPassword = (str1, str2) => str1 === str2 ;

export const checkPhoneNumber = (str) => {
     return str.trim().split('').find(item => isNaN(+item));
}
