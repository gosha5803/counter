import { useActions, useTypedSelector } from "../../../shared";

export const Counter = () => {
    const counter = useTypedSelector((state) => state.counterReducer.value);
    const { decrement, increment } = useActions();

    const onIncrement = () => increment();
    const onDecrement = () => decrement();

    return (
        <>
            <div>{counter}</div>
            <div style={{ display: "flex" }}>
                <button onClick={onIncrement}>increment</button>
                <button onClick={onDecrement}>decrement</button>
            </div>
        </>
    );
};
