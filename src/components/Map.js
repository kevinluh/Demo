import React, {Component} from 'react';
import ReactMapGL, {Marker} from 'react-map-gl';
import CityPin from './CityPin'
export default class Map extends Component {
    constructor(props) {
        super(props)
        this.state = {
            api_url: 'https://data.edmonton.ca/resource/87ck-293k.json',
            viewport: {
                width: 1000,
                height: 800,
                zoom: 10,
                latitude: 53.5444,
                longitude: -113.4989
            },
            coords: [
                {
                    latitude: 53.5235,
                    longitude: -113.6242
                }, {
                    latitude: 53.5225,
                    longitude: -113.6342
                }, {
                    latitude: 53.5245,
                    longitude: -113.7352
                }
            ],
            data: null
        }
    }
    componentDidMount() {
        const {api_url, data} = this.state;
        if (!data) {
            fetch(api_url, {method: 'GET'}).then(response => {
                return response.clone().json()
            }).then(response => {
                this.setState({data: response})
            })
        }
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
                            longitude={Number(coord.location.longitude)}><CityPin/></Marker>
                    ))
                }
            </ReactMapGL>

        )
    }
}
