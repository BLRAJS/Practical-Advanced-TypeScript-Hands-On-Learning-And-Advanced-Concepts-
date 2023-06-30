import React from 'react';
import { EventEmitter } from './event-emitter';
import MyComponent from './MyComponent';

function App() {
    const onClick = new EventEmitter<{ buttonId: string }>();

    onClick.addEventListener('onButtonClick', (data) => {
        console.log(`Button clicked: ${data.buttonId}`);
    });

    return (
        <div>
            <MyComponent onClick={onClick} />
    </div>
);
}

export default App;
