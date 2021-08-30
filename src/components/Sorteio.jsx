import React from 'react';
import { connect } from 'react-redux';

import './Intervalo.css';
import Card from './Card';

const Sorteio = (props) => {
    const {minimo, maximo} = props;
    const aleatorio = parseInt(Math.random() * (maximo - minimo)) + minimo;
    return (
        <Card title="Sorteio de um Número" blue>
            <div>
                <span>
                    <span>Resultado:</span>
                    <strong>{aleatorio}</strong>
                </span>
            </div>
        </Card>
    );
}

const mapStateToProps = (state) => {
    return {
        minimo: state.numeros.min,
        maximo: state.numeros.max
    };
};

export default connect(mapStateToProps)(Sorteio);
