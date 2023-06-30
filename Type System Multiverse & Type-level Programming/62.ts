type TreeNode<T> = {
    value: T;
    left?: TreeNode<T>;
    right?: TreeNode<T>;
};

const tree: TreeNode<number> = {
    value: 10,
    left: { value: 5 },
    right: {
        value: 20,
        left: { value: 15 },
    },
};
