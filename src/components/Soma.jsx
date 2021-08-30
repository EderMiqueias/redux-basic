import React from 'react';
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
}

export default Soma;
