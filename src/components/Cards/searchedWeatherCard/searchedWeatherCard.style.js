import {StyleSheet} from 'react-native';
import colors from '../../../styles/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
  loc_time_container: {},
  location: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 30,
    color: 'white',
  },
  date_time: {
    textAlign: 'center',
    fontSize: 16,
    color: 'white',
    marginTop: 5,
  },
  icon_desc_container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginBottom: 10,
    marginLeft: -30,
  },
  weather_icon: {
    width: 100,
    height: 100,
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
  hum_vis_container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginHorizontal: 15,
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
  wind_container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 30,
    marginHorizontal: 15,
  },
  wind_speed: {
    textAlign: 'center',
    margin: 1,
    fontWeight: '600',
    fontSize: 16,
    color: colors.brown,
  },
  wind_deg: {
    textAlign: 'center',
    margin: 1,
    fontWeight: '600',
    fontSize: 16,
    color: colors.brown,
  },
  bottom_info_containers: {
    borderWidth: 1,
    borderColor: colors.darkgreen,
    padding: 10,
    width: 130,
    height: 110,
    borderRadius: 10,
    backgroundColor: colors.orange200,
  },
  icons: {
    alignSelf: 'center',
    marginBottom: 3,
  },
});
