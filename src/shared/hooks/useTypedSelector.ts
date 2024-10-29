import { useSelector, TypedUseSelectorHook } from "react-redux";
import { AppStore } from "../../app";

export const useTypedSelector: TypedUseSelectorHook<AppStore> = useSelector;
