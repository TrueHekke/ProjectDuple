
export{}

declare global {
    interface Window {
        application : {
            blocks: string;
            screens: string;
            renderBlock: Function;
            renderScreen: Function;
            timers: Array<number>;
            realTime: string;
            levels: {
                value:string;
            }
        gameCards: Array<Record<string, string>>;
            backs: Array<Record<string, number>>;
            difficulty: number;
            checkVictory: number;
            clearTimer: Function;
            timer: number;
            cards:AllCardsType;
        }
    }
    
}

type CardType = {
    img: string,
    id: string
}

type CardsType = {
    [key in string | number]: CardType
}

type AllCardsType = {
   diamonds: CardsType,
   spades: CardsType,
   hearts: CardsType,
   clubs: CardsType,
   back: {
    img: string
   }
}
