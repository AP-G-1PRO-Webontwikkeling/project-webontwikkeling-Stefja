import * as rls from 'readline-sync';
import { character} from './interfaces';

let userChoice: number = 0;
let userChoiceID: number = 0;
console.log("Welcome to the Baldurs Gate 3 JSON data viewer!");

async function requestData(choice: number) {
    const response = await fetch("https://raw.githubusercontent.com/AP-G-1PRO-Webontwikkeling/project-webontwikkeling-Stefja/main/bg3.json");
    const character: character[] = await response.json();
    return character;

}

async function filterByID(choice: number) {
    const response = await fetch("https://raw.githubusercontent.com/AP-G-1PRO-Webontwikkeling/project-webontwikkeling-SidneyWackenier/main/DC.json");
    const characters: character[] = await response.json();

    const id: string = rls.question("Enter the ID: "); 
    const filteredCharacter = characters.filter(characters => characters.id === id)
    console.log(filteredCharacter);
    
}

async function main() {
    console.log("Welcome to Baldurs Gate 3 json viewer!");
    console.log("Please select one of the following: \n1. View all data \n2. Filter by ID \n3. Exit");
    
    const selection: number = rls.questionInt("Your selection: ");

    if (selection === 1) {
        const characters = await requestData(selection);
        console.log(characters);
    }
    else if (selection ===2) {
        await filterByID(selection);
    }
    else if (selection === 3) {
        console.log("closing")
    }
}

main();