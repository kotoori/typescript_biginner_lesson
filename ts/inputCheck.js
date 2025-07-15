var isNonEmptyString = function (x) {
    return typeof x === "string" && x.trim() !== "";
    //trim() 制御文字や両端の半角スペースを削る
    //xがstring型であり、かつ中身があれば、trueが返る
};
var validateName = function (input) {
    if (isNonEmptyString(input)) {
        return input;
    }
    throw new Error("名前を入力してください");
};
try {
    // const raw:unknown = 'kotoori';
    var raw = 200;
    var name_1 = validateName(raw);
    console.log("\u540D\u524D\u306F".concat(name_1, "\u3067\u3059"));
}
catch (e) {
    //エラーがthrowされたらここが実行される
    console.error(e);
}
