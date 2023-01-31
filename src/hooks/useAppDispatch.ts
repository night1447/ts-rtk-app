import {useDispatch} from "react-redux";
import {typeAppDispatch} from "../store";

export const useAppDispatch = useDispatch<typeAppDispatch>;