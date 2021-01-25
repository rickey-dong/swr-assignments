export const myMean = (array: number[]): number => {
    let sum = array.reduce((acc: number, curr: number) => acc + curr); //use .reduce to get sum
    return sum / array.length; //find average
  };

const isPrime = (num: number): boolean => { //helper isPrime function
    for (let i = 2; i < num; i++) {
        if (num % i === 0)
        {
            return false;
        }
    }
    return true;
}
export const getPrimes = (array: number[]): number[] => {
    return array.filter(n => isPrime(n)); //filter the array based off which number is prime
};

export const partition = (array: number[], belongToGroup1: (element: number) => boolean): { group1: number[]; group2: number[] } => {
    let groups = {group1: [], group2: []}; //create groups object
    array.map(n => belongToGroup1(n) ? groups.group1.push(n) : groups.group2.push(n)); //if it belongs in group1, append to group1, otherwise group2
    return groups;
  };

type Doggo = {name: string, age: number, breed: string}; //create object type

export const makeSentences = (array: Doggo[]): string[] => {
    let dogSentences:string[] = [];
    array.map(dogParts => {
        let {name, age, breed} = dogParts; //object destructuring
        dogSentences.push(`${name} is ${Math.floor(age)} years old, and is a ${breed}`);
    });
    return dogSentences;
};