type PipelineFunction<Input, Output> = (input: Input) => Output;

function pipe<Input, Middle, Output>(
    fn1: PipelineFunction<Input, Middle>,
    fn2: PipelineFunction<Middle, Output>
): PipelineFunction<Input, Output> {
    return (input: Input) => fn2(fn1(input));
}

function add(num: number): PipelineFunction<number, number> {
    return (input: number) => input + num;
}

function double(): PipelineFunction<number, number> {
    return (input: number) => input * 2;
}

const pipeline = pipe(add(2), double());
const result = pipeline(5); // Result: 14
