import {StyleSheet} from 'react-native';
import colors from '../../../styles/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    paddingVertical: 2,
  },
  loc_time_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  weatherText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.brown,
  },
  app_icon: {
    width: 50,
    height: 50,
  },
  date_time: {
    textAlign: 'center',
    fontSize: 16,
    color: colors.brown,
  },
  icon_desc_container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginBottom: 5,
    marginLeft: -30,
  },
  weather_icon: {
    width: 80,
    height: 80,
  },
  description: {
    fontSize: 20,
    fontWeight: '500',
    color: 'white',
  },
  temp: {
    fontWeight: 'bold',
    fontSize: 30,
    color: 'white',
  },
  hum_vis_wind_container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center', // Center items vertically
    marginBottom: 10, // Optional spacing
  },
  humidity: {
    textAlign: 'center',
    margin: 1,
    fontWeight: '600',
    fontSize: 16,
    color: colors.brown,
  },
  visiblity: {
    textAlign: 'center',
    margin: 1,
    fontWeight: '600',
    fontSize: 16,
    color: colors.brown,
  },
  wind_speed: {
    textAlign: 'center',
    margin: 1,
    fontWeight: '600',
    fontSize: 16,
    color: colors.brown,
  },

  bottom_info_containers: {
    flexDirection: 'row', // Align items side by side
    justifyContent: 'space-around',
    borderWidth: 1,
    borderColor: colors.darkgreen,
    padding: 5,
    width: 110,
    height: 50,
    borderRadius: 10,
    backgroundColor: colors.orange200,
    alignItems: 'center', // Center items vertically
  },
  icons: {
    alignSelf: 'center',
    marginBottom: 3,
  },
});

export default styles;
