type Animal = { type: 'dog', barkVolume: number } | { type: 'cat', sleepHours: number };

function describeAnimal(animal: Animal): string {
    switch (animal.type) {
        case 'dog':
            return `Dog barks at ${animal.barkVolume} dB`;
        case 'cat':
            return `Cat sleeps ${animal.sleepHours} hours`;
    }
}

const dog = { type: 'dog', barkVolume: 90 };
console.log(describeAnimal(dog));
