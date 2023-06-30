function safelyParseJSON(jsonString: string): unknown {
    try {
        return JSON.parse(jsonString);
    } catch (error) {
        return undefined;
    }
}

const parsedData = safelyParseJSON('{"name": "John"}');
if (typeof parsedData === 'object' && parsedData !== null && 'name' in parsedData) {
    console.log(`Hello, ${parsedData.name}!`);
}
