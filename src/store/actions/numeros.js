import { NUM_MIN_ALTERADO, NUM_MAX_ALTERADO } from './actionTypes';

// Action Creator
const alterarNumeroMinimo = (novoNumero) => {
    return {
        type: NUM_MIN_ALTERADO,
        payload: novoNumero
    }
};

// Action Creator
const alterarNumeroMaximo = (novoNumero) => {
    return {
        type: NUM_MAX_ALTERADO,
        payload: novoNumero
    }
};

export { alterarNumeroMinimo, alterarNumeroMaximo };
