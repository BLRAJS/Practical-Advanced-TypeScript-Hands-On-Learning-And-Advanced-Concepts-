type UploadResult = {
    filename: string;
    success: boolean;
    error?: Error;
};

async function uploadFile(filename: string): Promise<UploadResult> {
    const delay = Math.floor(Math.random() * 1000) + 500; // Random delay between 500ms and 1500ms
    await new Promise(resolve => setTimeout(resolve, delay));

    if (delay < 1000) {
        return { filename, success: true };
    } else {
        return { filename, success: false, error: new Error("Upload timed out.") };
    }
}

async function uploadFilesInParallel(filenames: string[]): Promise<UploadResult[]> {
    const promises = filenames.map(uploadFile);
    const results = await Promise.all(promises);
    return results;
}

// Example usage:

async function main() {
    const filenames = ["file1.png", "file2.jpg", "file3.pdf", "file4.docx"];

    const results = await uploadFilesInParallel(filenames);

    console.log("Upload results:");
    for (const result of results) {
        if (result.success) {
            console.log(`File ${result.filename} uploaded successfully.`);
        } else {
            console.log(`File ${result.filename} upload failed with error: ${result.error?.message}`);
        }
    }
}

main();
