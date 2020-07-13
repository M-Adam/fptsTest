import {none, Option, some} from "fp-ts/lib/Option";

interface IA {
    name: string;
}

function getRandomValue() : Option<number> {
    const randomValue = Math.random();
    return randomValue % 2 === 0 ? some(randomValue) : none;
}



const c: IA = { name: 'asd '};

const b = c;
