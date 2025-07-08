var userName = "kotoori";
var age = 47;
function getUserInfo(uname, uage) {
    return [uname, uage];
}
var _a = getUserInfo(userName, age), getUname = _a[0], getUage = _a[1];
console.log(getUname);
