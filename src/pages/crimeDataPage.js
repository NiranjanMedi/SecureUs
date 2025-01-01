import React, { Component, useState, useEffect } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow, Autocomplete } from 'google-maps-react';
import Maps from './Maps';
import axios from 'axios';
import Geocode from 'react-geocode';
import CrimeData from './CrimeData';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';
import './CrimeData.css';


function CrimeDataPage () {
    const [crimeData, setCrimeData] = useState(null);
    const [crimeScore, setCrimeScore] = useState(null);
    const [userLocation, setUserLocation] = useState({ lat: null, lng: null });
    const [error, setError] = useState(null);
    const [district, setDistrict] = useState("");
    const [mostPrevalentCrimes, setMostPrevalentCrimes] = useState([]);
    const [crimeNewsData, setCrimeNewsData] = useState([]);
    const [sublocality, setSublocality] = useState("");
    const [currentTime, setCurrentTime] = useState(null);
    const [searchAddress, setSearchAddress] = useState("");
    const [showError, setShowError] = useState(true);

    const unsafeSublocalities = [
      'Paharganj',
      'Mehrauli Gurgaon Road',
      'Chitorni Metro Station',
      'Sarita Vihar',
      'Jasola Vihar',
      'Kalyanpuri',
      'Bhogal',
      'Mehrauli Badarpur Road',
      'Aruna Asaf Ali Marg',
      'Seemapuri',
      'Gokulpuri',
      'Bhajanpura',
      'Jafrabad',
      'Seelampur',
      'Khajuri Khas',
      'Narela',
      'Alipur',
      'Bawana',
      'Khanjawla',
      'Shahbad Dairy',
      'Mangolpuri',
      'Sultanpuri',
      'Samaipur Badli',
      'Nand Nagri',
      'Nabi Karim',
      'Dindapur',
      'Najafargarh',
      'Sagar Pur',
      'New Usmanpur',
      'Nihal Vihar',
      'Prem Nagar',
      'Mayur Vihar',
      'Lakshmi Nagar',
      'Anand Parbat',
      'Shivajinagar',
      'Silk Board',
      'Dairy Circle',
      'Shivaji Nagar',
      'Veera Yodhara Udhyanavana',
      'Grape Garden',
      'Madiwala Market Street',
      'Tavarekere',
      'Chowk',
      'Naka Hindola',
      'Aminabad',
      'Thakurganj',
      'Majestic',
      'Majestic Area',
      'Chembur',
      'Jageshwari',
      'Goregaon',
      'Aarey Milk Colony',
      'Chowpatty',
      'Sonagachi',
      'Mambalam',
      'West Mambalam',
      'Tharamani',
      'Royapettah',
      'Okalipuram',
      'Padarayanapura',
      'Thakurganj'
    ];

    const mildlyUnsafeSublocalities = [
      'Karol Bagh',
      'Lajpat Nagar',
      'Lado Sarai',
      'Nizamuddin',
      'Vinod Nagar',
      'Connaught Place',
      'Koramangala',
      'Kapoorthala',
      'Hazratganj',
      'Alambagh',
      'Vibhuti Khand',
      'Chinhat',
      'Gomti Nagar',
      'Chickpet',
      'Rajiv Chowk',
      'Kurla',
      'BMC Colony',
      'Govandi',
      'Andheri',
      'Malad',
      'Vikhroli',
      'Bhandup West',
      'Vile Parle East',
      'Vile Parle West',
      'Ghatkopar West',
      'Govandi West',
      'Govandi East',
      'Jothi Nagar',

    ];

    const safeSublocalities = [
      'South Block',
      'Golf Links',
      'Greater Kailash',
      'Shanti Niketan',
      'Hauz Khas',
      'Saket',
      'Chanakyapuri',
      'Chandni Chowk',
      'Defense Colony',
      'Aerocity',
      'Palam Vihar',
      'DLF City Phase 2',
      'Sector 57',
      'Sushant Lok Phase I',
      'Electronic City',
      'Sarjapur',
      'HSR Layout',
      'Whitefield',
      'Yelahanka',
      'Rajaji Nagar',
      'JP Nagar',
      'Indira Nagar',
      'Mahanagar',
      'Aliganj',
      'Amar Shaheed Path',
      'Jankipuram',
      'Indiranagar',
      'Gomti Nagar Extension',
      'Atul Grove Road',
      'Juhu',
      'Worli',
      'Worli Sea Face',
      'Malabar Hill',
      'Colaba',
      'Badhwar Park',
      'Matunga East',
      'Nofra',
      'Cuffe Parade',
      'Borivali',
      'Borivali West',
      'Borivali East',
      'Aundh',
      'Churchgate',
      'Nerul',
      'Baner',
      'Mulund East',
      'Mulund West',
      'Viman Nagar',
      'Baner',
      'Aundh',
      'Pimple Saudagar',
      'Hadapsar',
      'Utkarsh Nagar',
      'Wanowrie',
      'Wanwadi Bazaar',
      'Pune Cantonment',
      'Bopal',
      'Greater Kailash I',
      'Greater Kailash II',
      'DLF Phase 5',
      'DLF Phase 1',
      'Shela',
      'Prahlad Nagar',
      'Garia',
      'Velachery',
      ''
    ]

    const handleLocationError = (errorMessage) => {
      setError(errorMessage);
    };
 
    const handleHideError = () => {
      setShowError(false);
    }

    const handleSearchChange = (address) => {
      setSearchAddress(address);
    };

    const handleSearchSelect = (address) => {
      setSearchAddress(address);
      geocodeByAddress(address)
        .then((result) => {
          if(result.length > 0) {
            const addressComponents = result[0].address_components;
            const districtComponent = addressComponents.find((component) => 
              component.types.includes('administrative_area_level_3')
            );
            const sublocalityComponent = addressComponents.find((component) =>
              component.types.includes('sublocality')
            );
            const districtName = districtComponent ? districtComponent.long_name : 'Unknown';
            const sublocalityName = sublocalityComponent ? sublocalityComponent.long_name : null ;
            
            setDistrict(districtName);
            setSublocality(sublocalityName);

            fetchCrimeData(districtName);
          }
        })
        .catch((error) => {
          console.error('Error geocoding address:', error);
        });
    };

    const fetchCrimeData = async (district) => {
      try {
        const response = await axios.get('crimeAgainstWomenData.json');
        const crimeData = response.data;

        const districtCrimeData = crimeData.find((data) => data.District === district);

        if (districtCrimeData) {
          const districtCrimeScore = districtCrimeData['Crime Score'];
          setCrimeScore(districtCrimeScore);

          const crimeCounts = Object.entries(districtCrimeData)
            .filter(([key]) => key.startsWith('Crime Type: '))
            .map(([key, value]) => ({crimeType: key, count: value }))
            .sort((a, b) => b.count - a.count);

          setMostPrevalentCrimes(crimeCounts.slice(0, 3));
        } else {
          setCrimeScore(null);
          setMostPrevalentCrimes([]);
        }
      } catch (error) {
        console.error('Error fetching crime data', error);
      }
    };

    const renderSuggestionItem = (suggestion) => {
      const { description } = suggestion;
      return (
        <div className="custom-suggestion-item py-5 h-9 hover:bg-slate-50 items-center justify-center">
          <span>{description}</span>
        </div>
      );
    };

    const fetchCrimeNews = async () => {
      const apiKey = '2b36278c42164fb6a97f9a119f3ca702'; //NewsAPI key
      const newsEndpoint = 'https://newsapi.org/v2/everything';
      const currentDate = new Date();
      const pastDate = new Date();
      pastDate.setDate(currentDate.getDate() - 30); // Fetch news from the past 30 days
  
      try {
        const response = await axios.get(newsEndpoint, {
          params: {
            q: `(${district}) AND (Rape OR Murder OR Assault OR Kidnapping)`, // Searching for news articles containing "crime" and the user's district
            from: pastDate.toISOString().split('T')[0], // Converting date to yyyy-MM-dd format
            to: currentDate.toISOString().split('T')[0],
            apiKey: apiKey,
          },
        });
  
        const crimeNews = response.data.articles;
        console.log('Crime News:', crimeNews); // Display fetched crime news articles
        setCrimeNewsData(crimeNews);
      } catch (error) {
        console.error('Error fetching crime news:', error);
      }
    };

    const getCurrentTime = () => {
      const currentDate = new Date();
      const currentTime = currentDate.getHours() * 3600 + currentDate.getMinutes() * 60 + currentDate.getSeconds();
      setCurrentTime(currentTime);
    }

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
              handleLocationError('Error retrieving your location. Browser cannot access your location. Please enable Geolocation in settings.');
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
              const districtComponent = addressComponents.find(component =>
                component.types.includes('administrative_area_level_3')
              );
              const sublocalityComponent = addressComponents.find(component =>
                component.types.includes('sublocality')
              );
              const districtName = districtComponent ? districtComponent.long_name : 'Unknown';
              const sublocalityName = sublocalityComponent ? sublocalityComponent.long_name : 'Unknown';
              console.log('Sublocality:', sublocalityName);
              setSublocality(sublocalityName);
              console.log('District:', districtName);
              console.log('Address:', address);
              setDistrict(districtName);
            })
            .catch(error => {
              console.error('Error geocoding coordinates:', error);
              handleLocationError('Error retrieving your location. Browser cannot access your location. Please enable Geolocation in settings.');
            });
          fetchCrimeNews();
          getCurrentTime();

        }
    }, [userLocation]);

    useEffect(() => {
        const fetchCrimeData = async () => {
            try {
                const response = await axios.get('crimeAgainstWomenData.json');
                setCrimeData(response.data);
            } catch(error) {
                console.error('Error fetching crime data', error);
            }
        };
        fetchCrimeData();
    }, []);

    useEffect(() => {
        if(crimeData) {
            console.log("User District: ", district );
            const districtCrimeData = crimeData.find((data) => data.District === district);
            if (districtCrimeData) {
                const districtCrimeScore = districtCrimeData['Crime Score'];
                setCrimeScore(districtCrimeScore);
                console.log("Crime Score", crimeScore);

                const crimeCounts = Object.entries(districtCrimeData)
                .filter(([key]) => key.startsWith('Crime Type: '))
                .map(([key, value]) => ({ crimeType: key, count: value }))
                .sort((a, b) => b.count - a.count);
      
                setMostPrevalentCrimes(crimeCounts.slice(0, 3));
            }
        }
    }, [crimeData, district, crimeScore]);

    const isSafeSublocality = safeSublocalities.includes(sublocality);
    const isUnsafeSublocality = unsafeSublocalities.includes(sublocality);
    const isMildlyUnsafeSublocalities = mildlyUnsafeSublocalities.includes(sublocality);
    const isNight = currentTime >= 68400 || currentTime < 21600;
    let safetyRating;
    console.log(currentTime);

    if (isSafeSublocality) {
      safetyRating = isNight ? 'Safe at night' : 'Very Safe during the day';
    } else if (isUnsafeSublocality) {
      safetyRating = isNight ? 'Very Unsafe at night' : 'Mildly Unsafe during the day';
    } else if(isMildlyUnsafeSublocalities) {
      safetyRating = isNight ? 'Unsafe at night' : 'Safe during the day'
    }
    else {
        safetyRating =
          isNight
            ? crimeScore > 2000
              ? 'Very Unsafe at night'
              : crimeScore > 700
              ? 'Unsafe at night'
              : crimeScore > 375
              ? 'Mildly Unsafe at night'
              : crimeScore > 275
              ? 'Moderately Safe at night'
              : 'Safe at night'
            : crimeScore > 2300
            ? 'Unsafe during the day'
            : crimeScore > 1900
            ? 'Mildy Unsafe during the day'
            : crimeScore > 900
            ? 'Moderately Safe during the day'
            : 'Safe during the day';
    }
    return (
        <div className="py-5 mt-14 w-full">
          {showError && (
            <div className='error items-center justify-center'>
              <div className='error_icon'>
                <svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m13 13h-2v-6h2zm0 4h-2v-2h2zm-1-15c-1.3132 0-2.61358.25866-3.82683.7612-1.21326.50255-2.31565 1.23915-3.24424 2.16773-1.87536 1.87537-2.92893 4.41891-2.92893 7.07107 0 2.6522 1.05357 5.1957 2.92893 7.0711.92859.9286 2.03098 1.6651 3.24424 2.1677 1.21325.5025 2.51363.7612 3.82683.7612 2.6522 0 5.1957-1.0536 7.0711-2.9289 1.8753-1.8754 2.9289-4.4189 2.9289-7.0711 0-1.3132-.2587-2.61358-.7612-3.82683-.5026-1.21326-1.2391-2.31565-2.1677-3.24424-.9286-.92858-2.031-1.66518-3.2443-2.16773-1.2132-.50254-2.5136-.7612-3.8268-.7612z" fill="#393a37"></path></svg>
              </div>
              <div className='error_title mx-3'>
                Disclaimer: The safety rating provided is based on past data from the National Crime Records Bureau and various surveys. It is not a guarantee for current safety or future crimes. Data is only available for India. 
              </div>
              <div className='error_close mx-2 flex right-96' onClick={handleHideError}>
                <svg height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m15.8333 5.34166-1.175-1.175-4.6583 4.65834-4.65833-4.65834-1.175 1.175 4.65833 4.65834-4.65833 4.6583 1.175 1.175 4.65833-4.6583 4.6583 4.6583 1.175-1.175-4.6583-4.6583z" fill="#393a37"></path></svg>
              </div>
            </div>
          )}
          <div className='items-center justify-center flex my-5'>
            {error && ( // Check if there's an error related to geolocation
              <div class="card h-72 w-80 justify-center"> 
                <button class="dismiss" type="button">×</button> 
                <div class="header"> 
                  <div class="image">
                    <svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m13 13h-2v-6h2zm0 4h-2v-2h2zm-1-15c-1.3132 0-2.61358.25866-3.82683.7612-1.21326.50255-2.31565 1.23915-3.24424 2.16773-1.87536 1.87537-2.92893 4.41891-2.92893 7.07107 0 2.6522 1.05357 5.1957 2.92893 7.0711.92859.9286 2.03098 1.6651 3.24424 2.1677 1.21325.5025 2.51363.7612 3.82683.7612 2.6522 0 5.1957-1.0536 7.0711-2.9289 1.8753-1.8754 2.9289-4.4189 2.9289-7.0711 0-1.3132-.2587-2.61358-.7612-3.82683-.5026-1.21326-1.2391-2.31565-2.1677-3.24424-.9286-.92858-2.031-1.66518-3.2443-2.16773-1.2132-.50254-2.5136-.7612-3.8268-.7612z" fill="#393a37"></path></svg>
                  </div>  
                  <div class="content">
                    <span class="title text-xl">Browser cannot access location</span> 
                    <p class="message text-lg">Please allow the browser to access your location in Settings. Your location will not be stored or disclosed.</p> 
                  </div> 
                </div> 
              </div>
            )}
          </div>
          <div className='mt-12 mx-2'>
            <PlacesAutocomplete value={searchAddress} onChange={handleSearchChange} onSelect={handleSearchSelect}>
            {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
            <div className="search-bar-container">
              <input
                {...getInputProps({
                  placeholder: 'Manually type location...',
                  className: 'search-bar',
                })}
              />
              <div className="autocomplete-dropdown-container">
                {loading && <div>Loading...</div>}
                {suggestions.map((suggestion) => {
                  return (
                    <div
                      {...getSuggestionItemProps(suggestion, {
                        className: 'custom-suggestion-item', // Apply custom CSS class to the suggestion item
                      })}
                    >
                      {renderSuggestionItem(suggestion)}
                    </div>
                  );
                })}
              </div>
              </div>
          )}
            </PlacesAutocomplete>
          </div>
            <div>
                <CrimeData 
                    score={crimeScore}
                    district={district}
                    sublocality={sublocality}
                    mostPrevalentCrimes={mostPrevalentCrimes}
                    crimeNewsHeadlines={crimeNewsData}
                    safetyRating = {safetyRating}
                />
            </div>
            <div>
                <Maps />
            </div>
        </div>
    )
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyDO3bn_pfrgRiYZzJT9SabI5IPfLYwFH8M'
})(CrimeDataPage);