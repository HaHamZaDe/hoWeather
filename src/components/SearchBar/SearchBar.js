import React from 'react';
import {View, TextInput} from 'react-native';
import styles from './SearchBar.styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../../styles/colors';

const SearchBar = ({searchText, onSearchTextChange, onSearchButtonPress}) => {
  return (
    <View style={styles.searchContainer}>
      <TextInput
        style={styles.searchInput}
        placeholder="Enter city name..."
        placeholderTextColor={colors.darkgreen}
        value={searchText}
        onChangeText={onSearchTextChange}
      />
      <Icon
        style={styles.input_icon}
        name="magnify"
        size={30}
        color={colors.darkgreen}
        onPress={onSearchButtonPress}
      />
    </View>
  );
};

export default SearchBar;
