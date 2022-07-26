import { Lato_700Bold, Lato_400Regular} from "@expo-google-fonts/lato";
import Routes from "./src/routes";
import {useFonts} from 'expo-font'


export default function App() {

  const [fontsLoaded] = useFonts({
    Lato_700Bold,
    Lato_400Regular
  })

  if (!fontsLoaded) {
    return null;
  }

  return <Routes />;
}
