import {TypedUseSelectorHook, useSelector} from "react-redux";
import {typeRootReducer} from "../store/reducers";

export const useTypedSelector: TypedUseSelectorHook<typeRootReducer> = useSelector;