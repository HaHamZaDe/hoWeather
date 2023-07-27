import React, {useState, useEffect} from 'react';
import {
  View,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  RefreshControl,
} from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import axios from 'axios';
import Config from 'react-native-config';
import FlashMessage from 'react-native-flash-message';
import {showMessage} from 'react-native-flash-message';
import styles from './App.styles';
import Loading from './components/Loading/Loading';
import SearchBar from './components/SearchBar/SearchBar';
import CurrentWeatherCard from './components/Cards/currentWeatherCard/currentWeatherCard';
import SearchedWeatherCard from './components/Cards/searchedWeatherCard/searchedWeatherCard';

const App = () => {
  // State variables declaration using 'useState' hook
  const [loading, setLoading] = useState(true);
  const [weatherData, setWeatherData] = useState(null);
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [searchText, setSearchText] = useState('');
  const [searchResult, setSearchResult] = useState(null);
  const [refreshing, setRefreshing] = useState(false);
  const [loadingSearch, setLoadingSearch] = useState(false);

  // An array of city names for random city selection
  const cityNames = [
    'Istanbul',
    'London',
    'New York',
    'Tokyo',
    'Berlin',
    'Paris',
    'Moscow',
    'Rome',
    'Sydney',
    'Cairo',
    'Singapore',
    'Toronto',
    'Dubai',
    'Seoul',
    'Mumbai',
    'Barcelona',
    'Amsterdam',
    'Vienna',
    'Hong Kong',
    'Prague',
  ];

  // useEffect hook to fetch weather data for the user's current location when the component mounts
  useEffect(() => {
    updateWeatherData();
  }, []);

  // useEffect hook to select a random city and fetch its weather data when 'refreshing' state changes
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * cityNames.length);
    const randomCityName = cityNames[randomIndex];
    setSearchResult(null);
    setSearchText(randomCityName);
    searchWeatherData(randomCityName);
  }, [refreshing]);

  // Function to update weather data based on user's current location using Geolocation API
  const updateWeatherData = () => {
    Geolocation.getCurrentPosition(
      position => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        setLatitude(lat);
        setLongitude(lon);
        fetchWeatherData(lat, lon);
      },
      error => {
        showMessage({
          message: 'Failed to get current location.',
          type: 'danger',
        });
        // Using default latitude and longitude if geolocation fails
        const defaultLat = 41.0351; // Replace with your default latitude
        const defaultLon = 28.9833; // Replace with your default longitude
        setLatitude(defaultLat);
        setLongitude(defaultLon);
        fetchWeatherData(defaultLat, defaultLon);
      },
      {enableHighAccuracy: true, timeout: 40000, maximumAge: 1000},
    );
  };

  // Function to fetch weather data from the API based on latitude and longitude
  const fetchWeatherData = (lat, lon) => {
    const url = `${Config.API_URL}lat=${lat}&lon=${lon}&appid=${Config.API_KEY}&units=metric`;
    axios
      .get(url)
      .then(response => {
        setWeatherData(response.data);
        setLoading(false);
        setRefreshing(false);
      })
      .catch(error => {
        showMessage({
          message:
            'Failed to get weather data for your location. Loading weather data for Istanbul.',
          type: 'danger',
        });
        setRefreshing(false);
      });
  };

  // Function to search weather data for a given city name
  const searchWeatherData = city => {
    if (city === '') {
      showMessage({
        message: 'Enter city name or pull down the screen.',
        type: 'danger',
      });
      return;
    }

    const url = `${Config.API_URL}q=${city}&appid=${Config.API_KEY}&units=metric`;
    axios
      .get(url)
      .then(response => {
        setSearchResult(response.data);
        setSearchText('');
        setRefreshing(false);
      })
      .catch(error => {
        showMessage({
          message: 'Failed to get weather data for the city.',
          type: 'danger',
        });
        setRefreshing(false);
      });
  };

  // Function to handle the refresh action (triggered by pull-to-refresh)
  const handleRefresh = () => {
    setLoadingSearch(true); // Set loading state to true when refresh is triggered

    const randomIndex = Math.floor(Math.random() * cityNames.length);
    const randomCityName = cityNames[randomIndex];

    setSearchText(randomCityName); // Set the searchText to trigger a search for the random city
    searchWeatherData(randomCityName);

    setTimeout(() => {
      setLoadingSearch(false); // Set loading state to false after two seconds
    }, 2000);
  };

  // Function to get the background image based on weather description
  const defaultBackground = require('./assets/images/default.jpg');

  const getBackgroundImage = description => {
    const images = {
      Rain: require('./assets/images/rainy.jpg'),
      Clouds: require('./assets/images/clouds.jpg'),
      Clear: require('./assets/images/sunny.jpg'),
      Snow: require('./assets/images/snow.jpg'),
    };
    const selectedImage = images[description] || defaultBackground;
    return selectedImage;
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
        }>
        <View style={styles.currentContainer}>
          {loading ? (
            <Loading />
          ) : (
            weatherData && <CurrentWeatherCard weatherData={weatherData} />
          )}
        </View>

        <View style={styles.searchContainer}>
          <SearchBar
            searchText={searchText}
            onSearchTextChange={text => setSearchText(text)}
            onSearchButtonPress={() => searchWeatherData(searchText)}
          />
        </View>

        <View style={styles.resultContainer}>
          {loadingSearch ? (
            <Loading />
          ) : (
            searchResult && (
              <ImageBackground
                source={getBackgroundImage(searchResult.weather[0].main)}
                style={styles.backgroundImage}>
                <SearchedWeatherCard searchResult={searchResult} />
              </ImageBackground>
            )
          )}
        </View>
        <FlashMessage position="top" />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
