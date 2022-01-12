import React from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
  createDrawerNavigator,
  DrawerItem,
  ScrollView,
} from '@react-navigation/drawer';
import {Icon} from 'react-native-elements';
import {StyleSheet, Image, View} from 'react-native';
import DrawerItems from '../constants/DrawerItems';
import Appointments from '../screens/Appointments';
import BranchManagement from '../screens/BranchManagement';
import Clients from '../screens/Clients';
import Dashboard from '../screens/Dashboard';
import DayBook from '../screens/DayBook';
import Discounts from '../screens/Discounts';
// import Email from '../screens/Email';
import Employees from '../screens/Employees';
import Holiday from '../screens/Holiday';
import Inquiry from '../screens/Inquiry';
import Inventry from '../screens/Inventry';
import Orders from '../screens/Orders';
import Logs from '../screens/Logs';
import Products from '../screens/Products';
import Profile from '../screens/Profile';
import Reports from '../screens/Reports';
// import SMS from '../screens/SMS';
// import Vendor from '../screens/Vendor';
import Commission from '../screens/Commission';
import {Text} from 'react-native-paper';
const Drawer = createDrawerNavigator();

const DrawerScreen = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Profile"
      screenOptions={{
        drawerType: 'back',
      }}
      drawerContent={props => (
        <>
          <View style={styles.elevation}>
            <Image
              source={require('../assets/images/logo.png')}
              style={styles.sideMenuProfileIcon}
            />
          </View>

          <DrawerContentScrollView {...props}>
            <DrawerItemList {...props} />
          </DrawerContentScrollView>
        </>
      )}>
      {DrawerItems.map(drawer => {
        return (
          <Drawer.Screen
            key={drawer.name}
            name={drawer.name}
            options={
              ({
                drawerIcon: ({focused}) => (
                  <Icon
                    name={drawer.iconName}
                    type={drawer.iconType}
                    color={focused ? '#f38321' : '#22215d'}
                  />
                ),
              },
              {
                headerTitle: drawer.name
              },
              {
                headerRight: () => <Text>Logout</Text>
              }
              )
            }
            component={
              drawer.name === 'Appointments'
                ? Appointments
                : drawer.name === 'Branch Management'
                ? BranchManagement
                : drawer.name === 'Clients'
                ? Clients
                : drawer.name === 'Commission'
                ? Commission
                : drawer.name === 'Dashboard'
                ? Dashboard
                : drawer.name === 'Day Book'
                ? DayBook
                : drawer.name === 'Deals & Discounts'
                ? Discounts
                : drawer.name === 'Employees'
                ? Employees
                : drawer.name === 'Holiday'
                ? Holiday
                : drawer.name === 'Inquiry'
                ? Inquiry
                : drawer.name === 'Inventry'
                ? Inventry
                : drawer.name === 'Logs'
                ? Logs
                : drawer.name === 'Orders'
                ? Orders
                : drawer.name === 'Products & Services'
                ? Products
                : Profile
            }
          />
        );
      })}
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  sideMenuProfileIcon: {
    resizeMode: 'center',
    height: 90,
    alignSelf: 'center',
  },
  elevation: {
    shadowColor: '#000',
    elevation: 1,
  },
});
export default DrawerScreen;
