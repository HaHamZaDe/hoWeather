import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 2,
  },
  searchInput: {
    color: colors.darkgreen,
    fontWeight: 'bold',
    flex: 1,
  },
  input_icon: {
    right: 20,
    position: 'absolute',
  },
});

export default styles;
