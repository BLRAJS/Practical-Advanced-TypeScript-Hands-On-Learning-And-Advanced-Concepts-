type Task = {
    id: number;
    priority: number;
};

function* taskGenerator(tasks: Task[]): IterableIterator<Task> {
    while (tasks.length > 0) {
        tasks.sort((a, b) => b.priority - a.priority);
        const nextTask = tasks.shift();
        if (nextTask) {
            yield nextTask;
        }
    }
}

async function executeTask(task: Task): Promise<void> {
    console.log(`Task ${task.id} started with priority ${task.priority}.`);
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log(`Task ${task.id} completed.`);
}

async function main() {
    const tasks: Task[] = [
        { id: 1, priority: 2 },
        { id: 2, priority: 1 },
        { id: 3, priority: 3 },
        { id: 4, priority: 1 }
    ];

    const taskIterator = taskGenerator(tasks);

    for (const task of taskIterator) {
        await executeTask(task);
    }
}

main();
