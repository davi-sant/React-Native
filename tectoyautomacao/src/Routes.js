import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import App from './App';
import Lampada from './pages/lampada';
import QrCode from './pages/QrCode';

const Routes = createStackNavigator(
    {
        Home: {
            screen: App,
            navigationOptions: {
                headerShown: false,
            }
        },
        Qr_CODE: {
            screen: QrCode,
            navigationOptions: {
                headerShown: false,
            }
        },
        Lampada_K2: {
            screen: Lampada,
            navigationOptions: {
                headerShown: false,
            }
        },
    },  
);

export default createAppContainer(Routes);