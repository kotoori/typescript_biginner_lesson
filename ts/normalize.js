function normalize(value) {
    if (value == null) { //引数の値がnullかどうか判別
        throw new Error('null or undefined');
    }
    return value;
}
var user = { id: 1, name: 'kotoori' };
var validUser = normalize(user);
console.log(validUser.name);
var noUser = null;
var validNoUser = normalize(noUser);
console.log(validNoUser.name);
