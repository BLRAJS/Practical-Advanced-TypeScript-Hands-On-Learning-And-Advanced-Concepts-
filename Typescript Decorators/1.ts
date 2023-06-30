function logClass(target: any) {
    console.log(`Class ${target.name} is defined.`);
}

@logClass
class MyClass {
    // class implementation
}
