type TaskResult = {
    id: number;
    success: boolean;
    error?: Error;
};

async function executeTask(taskId: number): Promise<TaskResult> {
    const delay = Math.floor(Math.random() * 1000) + 500; // Random delay between 500ms and 1500ms
    await new Promise(resolve => setTimeout(resolve, delay));

    if (delay < 1000) {
        return { id: taskId, success: true };
    } else {
        return { id: taskId, success: false, error: new Error("Task timed out.") };
    }
}

async function executeTasksInParallel(taskIds: number[]): Promise<TaskResult[]> {
    const promises = taskIds.map(executeTask);
    const results = await Promise.allSettled(promises);
    return results.map((result, index) => {
        if (result.status === "fulfilled") {
            return result.value;
        } else {
            return { id: taskIds[index], success: false, error: result.reason };
        }
    });
}

// Example usage:

async function main() {
    const taskIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    const results = await executeTasksInParallel(taskIds);

    console.log("Task results:");
    for (const result of results) {
        if (result.success) {
            console.log(`Task ${result.id} completed successfully.`);
        } else {
            console.log(`Task ${result.id} failed with error: ${result.error?.message}`);
        }
    }
}

main();
