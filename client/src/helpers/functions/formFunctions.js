export const checkEmail = (str) => {
    return str.length === 0 || /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(str)

}
export const checkPassword = (str) => {
     return str.length === 0 || /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/.test(str)
}

export const checkStrLength = (str, num) => str.length === 0 || str.trim().length > num; 

export const checkCapitalLetter = (str) => str.trim().toLowerCase() !== str.trim();
export const checkStrWithNumber = (str) => str.split("").filter(item => +item >= 0 && +item <= 9).length > 1;
export const checkConfirmPassword = (str1, str2) => str1 === str2 ;

export const checkPhoneNumber = (str) => {
     return str.trim().split('').find(item => isNaN(+item));
}
