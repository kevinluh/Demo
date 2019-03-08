import React, {Component} from 'react';
import ReactMapGL, {Marker, Popup} from 'react-map-gl';
import CityPin from './CityPin'
import CityInfo from './CityInfo'
export default class Map extends Component {
    constructor(props) {
        super(props)
        this.state = {
            api_url: 'https://data.edmonton.ca/resource/87ck-293k.json',
            viewport: {
                width: "100vw",
                height: "93vh",
                zoom: 11,
                latitude: 53.5444,
                longitude: -113.4989
            },
            data: null,
            popupInfo: null
        }
    }
    componentDidMount() {
        const {api_url, data} = this.state;
        if (!data) {
            fetch(api_url, {method: 'GET'}).then(response => {
                return response.clone().json()
            }).then(response => {
                this.setState({data: response})
                this.props.trafficLength(response.length)
            })
        }
    }
    renderPopup() {
        const {popupInfo} = this.state;
        return popupInfo && (
            <Popup
                tipSize={5}
                anchor="top"
                longitude={Number(popupInfo.location.longitude)}
                latitude={Number(popupInfo.location.latitude)}
                closeOnClick={false}
                onClose={() => this.setState({popupInfo: null})}>
                <CityInfo details={popupInfo}/>
            </Popup>
        );
    }
    render() {
        let {viewport, data} = this.state;
        return (
            <ReactMapGL
                mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
                {...viewport}
                onViewportChange={(viewport) => this.setState({viewport})}>
                {
                    data && data.map((coord, i) => (
                        <Marker
                            key={i}
                            latitude={Number(coord.location.latitude)}
                            longitude={Number(coord.location.longitude)}><CityPin onClick={() => this.setState({popupInfo: coord})}/></Marker>
                    ))
                }
                {this.renderPopup()}

            </ReactMapGL>

        )
    }
}
