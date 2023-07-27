import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';
import colors from './styles/colors';
const deviceSize = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  currentContainer: {
    flex: 2.5,
    backgroundColor: colors.cyan600,
    width: deviceSize.width / 1,
    height: (deviceSize.height * 2.5) / 9,
  },

  searchContainer: {
    flex: 0.5,
    backgroundColor: colors.orange200,
    width: deviceSize.width / 1,
    height: (deviceSize.height * 0.5) / 9,
  },
  resultContainer: {
    flex: 6,
    width: deviceSize.width / 1,
    height: (deviceSize.height * 6) / 9,
  },

  backgroundImage: {
    flex: 1,
    width: deviceSize.width / 1,
    height: (deviceSize.height * 6) / 9,
  },
});

export default styles;
