type Rule<T> = {
    validate: (value: T) => string | undefined;
};

type FormValues = {
    name: string;
    email: string;
    password: string;
};

const nameRule: Rule<string> = {
    validate: (value) => {
        if (!value) {
            return "Name is required";
        }
    },
};

const emailRule: Rule<string> = {
    validate: (value) => {
        if (!value) {
            return "Email is required";
        } else if (!value.includes("@")) {
            return "Email is invalid";
        }
    },
};

const passwordRule: Rule<string> = {
    validate: (value) => {
        if (!value) {
            return "Password is required";
        } else if (value.length < 8) {
            return "Password must be at least 8 characters long";
        }
    },
};

type FormRules<T> = {
    [P in keyof T]?: Rule<T[P]>;
};

const rules: FormRules<FormValues> = {
    name: nameRule,
    email: emailRule,
    password: passwordRule,
};

function validateForm<T>(values: T, rules: FormRules<T>): Record<keyof T, string | undefined> {
    const errors: Record<keyof T, string | undefined> = {} as any;

    for (const key in values) {
        const value = values[key];
        const rule = rules[key];

        if (rule) {
            const error = rule.validate(value);
            if (error) {
                errors[key] = error;
            }
        }
    }

    return errors;
}

const values = {
    name: "John",
    email: "john@example.com",
    password: "password",
};

const errors = validateForm(values, rules);

console.log(errors); // Outputs: {}
