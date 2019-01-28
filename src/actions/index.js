import * as actionTypes from "./actionTypes";

export const nextGeneration = () => {
    // console.log('next generation aciton')
    return {
        type: actionTypes.RUN_GENERATION
    }
}