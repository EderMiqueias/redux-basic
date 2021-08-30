import React from 'react';
import { connect } from 'react-redux';

import './Intervalo.css';
import Card from './Card';

const Media = (props) => {
    const {minimo, maximo} = props;
    return (
        <Card title="Média dos Números" red>
            <div>
                <span>
                    <span>Resultado:</span>
                    <strong>{(maximo + minimo) / 2}</strong>
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

export default connect(mapStateToProps)(Media);
