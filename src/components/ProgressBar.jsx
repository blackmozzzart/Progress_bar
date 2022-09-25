import React from "react";
import './progress_bar.css';

function ProgressBar(props) {
    const total = props.items.reduce((acc, item) => acc + item.value, 0)

    return (
        <div className="progress-bar">
            <div className="progress-bar__row">
                {props.items.map((element) => {
                    const barElement = Math.round(element.value / total * 100)

                    return (
                        new Array(barElement).fill(null).map(() => (
                            <div style={{
                                borderRadius: 4,
                                width: props.width,
                                height: props.height,
                                backgroundColor: element.color,
                                margin: '0 1px'
                            }} key={element.color + Math.random()} />
                        ))
                    )
                }
                )}
            </div>

            <div className="progress-bar__row">
                {props.items.map((element) =>
                    <div className="progress-bar__cell" key={element.color}>
                        <div className="progress-bar__circle" style={{ background: element.color }} />
                        {element.name}: {element.value} ({(element.value / total * 100).toFixed(1)}%)
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProgressBar;