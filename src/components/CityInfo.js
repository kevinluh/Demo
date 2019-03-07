import React, {PureComponent} from 'react';
import './CityInfo.css'

export default class CityInfo extends PureComponent {
    render() {
        const {details} = this.props;
        return (
            <div className="Popup">
                <div >
                    <strong>{details.description}</strong><br/>
                    <em>{details.impact}</em><br/>
                    <em>{details.duration}</em><br/>
                    <p>{details.details}</p>
                </div>
            </div>
        );
    }
}
