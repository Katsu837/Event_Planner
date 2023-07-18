import {configureStore, combineReducers} from "redux"
import { customerReducer } from "./customerReducer"

const rootReducer = combineReducers({
    customerReducer
})

const store = configureStore(rootReducer)