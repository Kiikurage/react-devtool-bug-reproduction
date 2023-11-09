import {createRoot} from "react-dom/client";
import {useState, useSyncExternalStore} from "react";


function unsubscribe() {
    console.log('unsubscribe');
}

function subscribe(callback: () => void): () => void {
    console.log('subscribe');
    return unsubscribe
}

function getState() {
    console.log('getState');
}

window.addEventListener('DOMContentLoaded', () => {
    createRoot(document.getElementById("root")!)
        .render(
            <TestComponent/>
        );
})

function TestComponent() {
    useSyncExternalStore(subscribe, getState)

    const [x, setX] = useState(0);

    return (
        <div>
            <h1>{x}</h1>
            <button onClick={() => setX(oldState => oldState + 1)}>Increment</button>
        </div>
    );
}
