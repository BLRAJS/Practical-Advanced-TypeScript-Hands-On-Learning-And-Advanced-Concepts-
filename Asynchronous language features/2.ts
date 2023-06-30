class TaskQueue {
    private pendingTasks: (() => Promise<void>)[] = [];
    private activeTasks: Promise<void>[] = [];
    private concurrency: number;

    constructor(concurrency: number) {
        this.concurrency = concurrency;
    }

    async addTask(task: () => Promise<void>) {
        this.pendingTasks.push(task);
        await this.runNextTask();
    }

    private async runNextTask() {
        if (this.activeTasks.length >= this.concurrency || this.pendingTasks.length === 0) {
            return;
        }

        const task = this.pendingTasks.shift();
        if (task) {
            const promise = task().finally(() => {
                this.activeTasks = this.activeTasks.filter(p => p !== promise);
                this.runNextTask();
            });

            this.activeTasks.push(promise);
        }

        if (this.activeTasks.length < this.concurrency) {
            this.runNextTask();
        }
    }
}

// Example usage:

async function exampleTask(name: string, duration: number) {
    console.log(`Task ${name} started.`);
    await new Promise(resolve => setTimeout(resolve, duration));
    console.log(`Task ${name} completed.`);
}

async function main() {
    const taskQueue = new TaskQueue(2); // Limit concurrency to 2 tasks

    taskQueue.addTask(() => exampleTask("A", 1000));
    taskQueue.addTask(() => exampleTask("B", 2000));
    taskQueue.addTask(() => exampleTask("C", 1500));
    taskQueue.addTask(() => exampleTask("D", 500));
}

main();
