export class Color{
    constructor(){
        console.log('I am a Color constructor');
    }
    static getRandomColor(){
        return `#${Math.floor(Math.random() * 256 * 256 * 256).toString(16)}`;
    }
}
