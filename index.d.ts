
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
            gameCards: Array<any>;
            backs: Array<any>;
            difficulty: number;
            checkVictory: number;
            clearTimer: Function;
            cards: any;
            timer: number;
        }
    }
    
}

