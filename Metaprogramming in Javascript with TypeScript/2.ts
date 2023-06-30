interface Animal {
    speak: () => string;
}

interface Dog extends Animal {
    bark: () => string;
}

function isDog(animal: Animal): animal is Dog {
    return "bark" in animal;
}

const myAnimal: Animal = { speak: () => "Hello", bark: () => "Woof" };

if (isDog(myAnimal)) {
    console.log(myAnimal.bark()); // TypeScript knows that myAnimal is of type Dog here
}
