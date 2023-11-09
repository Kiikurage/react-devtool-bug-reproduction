import {createRoot} from "react-dom/client";
import {useState} from "react";
import {Provider, useSelector} from "react-redux";
import {configureStore, createSlice} from "@reduxjs/toolkit";

window.addEventListener('DOMContentLoaded', () => {
    createRoot(document.getElementById("root")!)
        .render(
            <Provider store={configureStore({
                reducer: createSlice({
                    name: "SampleReducer",
                    initialState: {},
                    reducers: {}
                }).reducer
            })}>
                <TestComponent/>
            </Provider>
        );
})

function TestComponent() {
    useSelector(state => 0);

    const [x, setX] = useState(0);

    return (
        <div>
            <h1>{x}</h1>
            <button onClick={() => setX(oldState => oldState + 1)}>Increment</button>
        </div>
    );
}
