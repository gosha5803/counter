import { Button, Space, Typography } from "antd";
import { useActions, useTypedSelector } from "../../../shared";

export const Counter = () => {
    const counter = useTypedSelector((state) => state.counterReducer.value);
    const { decrement, increment } = useActions();

    const onIncrement = () => increment();
    const onDecrement = () => decrement();

    return (
        <>
            <Typography.Title>{counter}</Typography.Title>
            <Space>
                <Button onClick={onIncrement}>increment</Button>
                <Button onClick={onDecrement}>decrement</Button>
            </Space>
        </>
    );
};
