import React from 'react';
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
}

export default Media;
