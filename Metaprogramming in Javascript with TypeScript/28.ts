import { EventEmitter } from './event-emitter';

type MyComponentProps = {
    onClick: EventEmitter<{ buttonId: string }>;
}

function MyComponent(props: MyComponentProps) {
    const handleClick = () => {
        props.onClick.emit('onButtonClick', { buttonId: 'myButton' });
    };

    return <button onClick={handleClick}>Click me</button>;
}
