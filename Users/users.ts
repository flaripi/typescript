// accountInfo
// charInfo

type AccountInfo = {
    id: number;
    name: string;
    email?: string;
}

const account: AccountInfo = {
    id: 1,
    name: "Piccolo"
}

type CharInfo = {
    nickName: string;
    level: number;
}

const char: CharInfo = {
    nickName: "Arthas",
    level: 100
}

// Intersection
type PlayserInfo = AccountInfo & CharInfo

const playser: PlayserInfo = {
    id: 1,
    name: "Piccolo",
    nickName:  "Arthas",
    level: 100,
}
