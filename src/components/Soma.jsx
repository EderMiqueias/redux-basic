import React from 'react';
import { connect } from 'react-redux';

import './Intervalo.css';
import Card from './Card';

const Soma = (props) => {
    const {minimo, maximo} = props;
    return (
        <Card title="Soma dos Números" purple>
            <div>
                <span>
                    <span>Resultado:</span>
                    <strong>{maximo + minimo}</strong>
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

export default connect(mapStateToProps)(Soma);
