// boolean (true /  false)
var isopen;
isopen = true;
// string ('foo', "foo", `foo`)
var message = "foo";
// number (int, float, hex, binary)
var total;
total = 0xff0;
//array (type[])
var items = ["foo", "bar"];
var values;
values = [1, 2, 3];
// title
var title;
title = [1, "foo", "bar"];
// enum
var Colors;
(function (Colors) {
    Colors["white"] = "#fff";
    Colors["black"] = "#000";
})(Colors || (Colors = {}));
// any (qualquer coisa) Nao utilizar JAMAIS kkkkkkkkkkkkk
var coisa;
coisa = [1];
// void (vazio)
function logger() {
    console.log('foo');
}
// never
function error() {
    throw new Error("error");
}
// object
var cart;
cart = {
    key: "fi"
};
