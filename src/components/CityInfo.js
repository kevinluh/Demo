import React, {PureComponent} from 'react';
import styled from 'styled-components';

const Popup = styled.div `
    max-width:400px;
    min-width:300px;
    font: 12px/20px 'Helvetica Neue', 'Arial', 'Helvetica', 'sans-serif'
`;

export default class CityInfo extends PureComponent {
    render() {
        const {details} = this.props;
        return (
            <Popup>
                <div >
                    <strong>{details.description}</strong><br/>
                    <em>{details.impact}</em><br/>
                    <em>{details.duration}</em><br/>
                    <p>{details.details}</p>
                </div>
            </Popup>
        );
    }
}
