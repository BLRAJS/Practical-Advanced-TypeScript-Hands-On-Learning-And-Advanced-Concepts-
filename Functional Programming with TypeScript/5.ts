type User = {
    id: number;
    name: string;
    email: string;
};

type Post = {
    id: number;
    title: string;
    body: string;
    authorId: number;
};

type Comment = {
    id: number;
    body: string;
    authorId: number;
    postId: number;
};

const users: User[] = [
    { id: 1, name: 'Alice', email: 'alice@example.com' },
    { id: 2, name: 'Bob', email: 'bob@example.com' },
    { id: 3, name: 'Charlie', email: 'charlie@example.com' },
];

const posts: Post[] = [
    { id: 1, title: 'First post', body: 'This is the first post.', authorId: 1 },
    { id: 2, title: 'Second post', body: 'This is the second post.', authorId: 2 },
    { id: 3, title: 'Third post', body: 'This is the third post.', authorId: 3 },
];

const comments: Comment[] = [
    { id: 1, body: 'Great post!', authorId: 2, postId: 1 },
    { id: 2, body: 'Nice work!', authorId: 1, postId: 2 },
    { id: 3, body: 'Keep it up!', authorId: 3, postId: 3 },
];

function getAuthorName(comment: Comment): string {
    const author = users.find((user) => user.id === comment.authorId);
    return author ? author.name : 'Unknown';
}

const comment = comments[0];
const authorName = getAuthorName(comment);

console.log(authorName); // Result: "Bob"
