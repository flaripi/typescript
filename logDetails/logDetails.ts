// type alias
type Uid = number | string | undefined

// Sem utilizar o type alias
function logDetails(uid: number | string, item: string){
    console.log(`A  product with ${uid} has title as ${item}.`)
}

// Usando type alias
function logInfo(uid: Uid, user: string){
    console.log(`A  product with ${uid} has title as ${user}.`)
}

type Plataform  = 'Windows' | 'Linux' | 'Mac Os' | 'ios'
function renderPlataform(platform: Plataform) {
    return platform
}
renderPlataform('Windows')

logDetails(123, "sapato")
logDetails("123", "sapato")

logInfo(123, "sapato")
logInfo("123", "sapato")