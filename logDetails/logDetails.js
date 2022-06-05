// Sem utilizar o type alias
function logDetails(uid, item) {
    console.log("A  product with ".concat(uid, " has title as ").concat(item, "."));
}
// Usando type alias
function logInfo(uid, user) {
    console.log("A  product with ".concat(uid, " has title as ").concat(user, "."));
}
function renderPlataform(platform) {
    return platform;
}
renderPlataform('Windows');
logDetails(123, "sapato");
logDetails("123", "sapato");
logInfo(123, "sapato");
logInfo("123", "sapato");
