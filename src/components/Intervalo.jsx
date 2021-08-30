import React from 'react';
import './Intervalo.css';
import Card from './Card';

const Intervalo = (props) => {
    const {minimo, maximo} = props;
    return (
        <Card title="Intervalo de Números" green>
            <div className="Intervalo">
                <span>
                    <strong>Mínimo:</strong>
                    <input
                        type="number"
                        value={minimo}
                        onChange={e => props.onMinChanged(+e.target.value)}
                    />
                </span>
                <span>
                    <strong>Máximo:</strong>
                    <input
                        type="number"
                        value={maximo}
                        onChange={e => props.onMaxChanged(+e.target.value)}
                    />
                </span>
            </div>
        </Card>
    );
}

export default Intervalo;
