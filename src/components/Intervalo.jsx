import React from 'react';
import { connect } from 'react-redux';

import './Intervalo.css';
import Card from './Card';
import {alterarNumeroMinimo, alterarNumeroMaximo} from '../store/actions/numeros';

const Intervalo = (props) => {
    const {minimo, maximo} = props;
    // props.alterarMinimo(10000)
    return (
        <Card title="Intervalo de Números" green>
            <div className="Intervalo">
                <span>
                    <strong>Mínimo:</strong>
                    <input
                        type="number"
                        value={minimo}
                        onChange={e => props.alterarMinimo(+e.target.value)}
                    />
                </span>
                <span>
                    <strong>Máximo:</strong>
                    <input
                        type="number"
                        value={maximo}
                        onChange={e => props.alterarMaximo(+e.target.value)}
                    />
                </span>
            </div>
        </Card>
    );
};

const mapStateToProps = (state) => {
    return {
        minimo: state.numeros.min,
        maximo: state.numeros.max
    };
};

const mapDispatchToProp = (dispatch) => {
    return {
        alterarMinimo(novoNumero) {
            // Action Creator => action
            const action = alterarNumeroMinimo(novoNumero);
            dispatch(action);
        },
        alterarMaximo(novoNumero) {
            // Action Creator => action
            const action = alterarNumeroMaximo(novoNumero);
            dispatch(action);
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProp
)(Intervalo);
