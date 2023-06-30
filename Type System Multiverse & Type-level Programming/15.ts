interface TreeNode<T> {
    value: T;
    children?: TreeNode<T>[];
}

const tree: TreeNode<number> = {
    value: 1,
    children: [
        {
            value: 2,
            children: [
                { value: 3 },
                { value: 4 },
            ],
        },
        {
            value: 5,
            children: [
                { value: 6 },
                { value: 7 },
            ],
        },
    ],
};
