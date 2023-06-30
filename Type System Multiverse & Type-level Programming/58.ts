type LoadingState = {
    isLoading: boolean;
};

type WithLoadingProps<T> = T extends { data: infer U } ? { loading: boolean } & U : {};

function withLoading<T>(Component: React.ComponentType<T>): React.FC<T & WithLoadingProps<T>> {
    return (props: T & WithLoadingProps<T>) => {
        const { data, ...rest } = props;
        const isLoading = !data;
        return <Component loading={isLoading} {...rest as T} />;
    };
}

// example usage
type User = {
    name: string;
    age: number;
};

type UserListProps = {
    data: User[];
};

const UserList: React.FC<UserListProps> = ({ data }) => {
    return (
        <ul>
            {data.map(user => (
                    <li key={user.name}>{user.name}, {user.age}</li>
                ))}
        </ul>
    );
};

const UserListWithLoading = withLoading(UserList);

const users: User[] = [
    { name: 'Alice', age: 30 },
    { name: 'Bob', age: 40 }
];

const App: React.FC = () => {
    return <UserListWithLoading data={users} />;
};
