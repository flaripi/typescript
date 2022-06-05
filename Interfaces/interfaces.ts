interface Game {
    title: string;
    description: string;
    genre: string;
    plataform?: string[];
    getSimilars?: (title: string) => void;
}

const tlou: Game = {
    title: "The Last of Us",
    description: "Good GAME",
    genre: "Action",
    plataform: ["PS3", "PS4", "PS5"],
    getSimilars: (title: string) => {
        console.log(`Similar games to ${title}: Uncharted, A Plague Tale, Metro`);
    }
}

console.log(tlou.title);
if(tlou.getSimilars){
    tlou.getSimilars(tlou.title);
}


interface DLC extends Game {
    originalGame: Game;
    newContent: string[];
}

const leftbehind: DLC = {
    title: "The Last of Us - Left Behind",
    description: "You play as Ellie before the original game",
    genre: "Action",
    plataform: ["PS4", "PS5"],
    originalGame: tlou,
    newContent: ["3 hours story", "new characteres"]
}

class CreateGame implements Game{
    title: string;
    description: string;
    genre: string;

    constructor(t: string,  d: string, g: string) {
        this.title = t;
        this.description = d;
        this.genre = g;
    }
}