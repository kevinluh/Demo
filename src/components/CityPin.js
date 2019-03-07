import React, {PureComponent} from 'react';

// import {ReactComponent as PIN} from './MapPin.svg';

const PIN = "M8 2.1c1.1 0 2.2 0.5 3 1.3 0.8 0.9 1.3 1.9 1.3 3.1s-0.5 2.5-1.3 3.3l-3 3.1-3-3.1c-0.8" +
        "-0.8-1.3-2-1.3-3.3 0-1.2 0.4-2.2 1.3-3.1 0.8-0.8 1.9-1.3 3-1.3z";
const pinStyle = {
    cursor: 'pointer',
    fill: 'red',
    stroke: 'none'
}
export default class CityPin extends PureComponent {

    render() {
        const {
            size = 40,
            onClick
        } = this.props
        return (
            <svg
                height={size}
                viewBox='0 0 24 24'
                style={{
                    ...pinStyle,
                    // transform: `translate(${ - size / 2}px,${ - size}px)`
                }}
                onClick={onClick}>
                <path d={PIN}/>
            </svg>
        )
    }
}
