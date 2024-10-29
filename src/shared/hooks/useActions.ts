import { bindActionCreators } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { counterActions } from "../../entites/Counter";

export const useActions = () => {
    const dispatch = useDispatch();

    return bindActionCreators(
        {
            ...counterActions,
        },
        dispatch
    );
};
