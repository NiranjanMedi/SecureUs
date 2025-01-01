import React, { useState, useEffect } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow, Polygon } from 'google-maps-react';
import Geocode from 'react-geocode';

const Maps = ({ google }) => {
  const [userLocation, setUserLocation] = useState({ lat: null, lng: null });
  const [error, setError] = useState(null);
  const [district, setDistrict] = useState("");


  useEffect(() => {
    if (navigator.geolocation) {
      const watchId = navigator.geolocation.watchPosition(
        position => {
          setUserLocation(prevUserLocation => ({
            ...prevUserLocation,
            lat: position.coords.latitude,
            lng: position.coords.longitude
          }));
          setError(null);
        },
        error => {
          console.error('Error getting user location:', error);
          setError('Error retrieving user location. Browser cannot access your location. Please enable Geolocation in settings');
        }
      );

      return () => {
        navigator.geolocation.clearWatch(watchId);
      };
    } else {
      console.error('Geolocation is not supported by this browser.');
      setError('Geolocation is not supported.');
    }
  }, []);

  useEffect(() => {
    if (userLocation.lat !== null && userLocation.lng !== null) {
      Geocode.setApiKey("AIzaSyDO3bn_pfrgRiYZzJT9SabI5IPfLYwFH8M");
      Geocode.fromLatLng(userLocation.lat, userLocation.lng)
        .then(response => {
          const address = response.results[0].formatted_address;
                const addressComponents = response.results[0].address_components;
                const district = addressComponents.find(component =>
                    component.types.includes('administrative_area_level_3')
                );
                const districtName = district ? district.long_name : 'Unknown';
                console.log('District: ', districtName);
                console.log('Address:', address);
                setDistrict(districtName);
        })
        .catch(error => {
          console.error('Error geocoding coordinates:', error);
        });
    }
  }, [userLocation]);

  const renderPolygon = () => {
    if (district) {
      return (
        <Polygon
          paths={[district]}
          strokeColor="#FF0000"
          strokeOpacity={0.8}
          strokeWeight={2}
          fillColor="#FF0000"
          fillOpacity={0.4}
        />
      );
    }
    return null;
  };

  if (error) {
    return <div>{error}</div>;
  }

  if (userLocation.lat === null || userLocation.lng === null) {
    // User location not yet retrieved
    return <div>Loading...</div>;
  }

  return (
    <div className='sm:max-w-[600px] lg:w-full'>
      <Map
        google={google}
        zoom={17}
        initialCenter={userLocation}
        center={userLocation}
        style={{ maxWidth: '100%', height: '400px' }}
        containerStyle={{ maxWidth: '100%', height: '250px', padding: '20px 20px 20px 20px' }}
      >

        <Marker
          position={userLocation}
          onClick={() => {}}
          name={'Your Location'}
        />
        {/* Additional Marker components if needed */}
      </Map>
    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDO3bn_pfrgRiYZzJT9SabI5IPfLYwFH8M'
})(Maps);


/**
 * 
 * class Maps extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showingInfoWindow: false,
      activeMarker: null,
      selectedPlace: null,
      userLocation: { lat: null, lng: null },
      error: null,
      district: ""
    };
  }

  componentDidMount() {
    if (navigator.geolocation) {
      this.watchId = navigator.geolocation.watchPosition(
        position => {
          this.setState(prevState => ({
            userLocation: {
              ...prevState.userLocation,
              lat: position.coords.latitude,
              lng: position.coords.longitude
            },
            error: null,
          }),
          () => {
            Geocode.setApiKey("AIzaSyDO3bn_pfrgRiYZzJT9SabI5IPfLYwFH8M");
            Geocode.fromLatLng(
                this.state.userLocation.lat,
                this.state.userLocation.lng
            )
            .then((response) => {
                const address = response.results[0].formatted_address;
                const addressComponents = response.results[0].address_components;
                const district = addressComponents.find(component =>
                    component.types.includes('administrative_area_level_3')
                );
                const districtName = district ? district.long_name : 'Unknown';
                console.log('District: ', districtName);
                console.log('Address:', address);
                this.setState(
                  {district : districtName },
                  () => {
                    console.log("The user's district is: ", this.state.district);
                  }
                );
            },
            (error) => {
                console.error('Error geocoding coordinates:', error);
            });
          }
          );
        },
        error => {
          console.error('Error getting user location:', error);
          this.setState({ error: 'Error retrieving user location. Broswer cannot access your location. Please enable Geolocation in settings' });
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
      this.setState({ error: 'Geolocation is not supported.' });
    }
  }

  componentWillUnmount() {
    if (navigator.geolocation) {
      navigator.geolocation.clearWatch(this.watchId);
    }
  }

  onMarkerClick = (props, marker) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  };

  onInfoWindowClose = () => {
    this.setState({
      selectedPlace: null,
      activeMarker: null,
      showingInfoWindow: false
    });
  };

  render() {
    const { google } = this.props;
    const { userLocation, showingInfoWindow, activeMarker, selectedPlace, error } = this.state;
    const style = {
      maxWidth: "400px",
      height: "300px",
      overflowX: "hidden",
      overflowY: "hidden"
    };
    const containerStyle = {
      maxWidth: "400px",
      height: "250px"
    }

    if (error) {
      return <div>{error}</div>;
    }

    if (userLocation.lat === null || userLocation.lng === null) {
      // User location not yet retrieved
      return <div>Loading...</div>;
    }

    return (
      <div className='lg:w-1/2 md:max-w-[600px]'>
        <Map
          google={google}
          zoom={17}
          initialCenter={userLocation}
          center={userLocation}
          style = {style}
          containerStyle={containerStyle}
        >
        {this.state.userLocation > 0 && (
            <Polygon
              paths={this.state.district}
              strokeColor="#FF0000"
              strokeOpacity={0.8}
              strokeWeight={2}
              fillColor="#FF0000"
              fillOpacity={0.35}
            />
        )}
        
          <Marker
            position={userLocation}
            onClick={this.onMarkerClick}
            name={'Your Location'}
          />
          <InfoWindow
            marker={activeMarker}
            visible={showingInfoWindow}
            onClose={this.onInfoWindowClose}
          >
            <div>
              <h4>{selectedPlace && selectedPlace.name}</h4>
            </div>
          </InfoWindow>
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyDO3bn_pfrgRiYZzJT9SabI5IPfLYwFH8M'
})(Maps);
 */