import {Text, TouchableOpacity} from 'react-native';
import {showLocation} from 'react-native-map-link';

export default function BtnNavigateMap({lat, log}) {
  const handleNavigateMap = () => {
    showLocation({
      latitude: lat,
      longitude: log,
      googleForceLatLon: false, // optionally force GoogleMaps to use the latlon for the query instead of the title
      alwaysIncludeGoogle: true, // optional, true will always add Google Maps to iOS and open in Safari, even if app is not installed (default: false)
      appsWhiteList: ['google-maps'], // optionally you can set which apps to show (default: will show all supported apps installed on device)
    });
  };

  return (
    <>
      <TouchableOpacity
        onPress={() => handleNavigateMap()}
        className="bg-blue-500 m-4 p-3 flex-row rounded-lg justify-center">
        <Text className="text-white font-kanitRegular text-lg">
          นำทางไปจุดที่แจ้ง
        </Text>
      </TouchableOpacity>
    </>
  );
}
