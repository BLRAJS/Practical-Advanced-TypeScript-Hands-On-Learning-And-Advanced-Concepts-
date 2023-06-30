import { FC } from "react";

type Props = {
    label: string;
    value: number;
    onChange: (newValue: number) => void;
    className?: string;
};

const MyComponent: FC<Props> = ({ label, value, onChange, className }) => {
    // Component implementation
};

const props: Props = {
    label: "My Label",
    value: 10,
    onChange: (newValue) => {
        console.log(newValue);
    },
};

<MyComponent {...props} />;
