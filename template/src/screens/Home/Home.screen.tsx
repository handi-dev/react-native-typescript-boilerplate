import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import styles from './Home.style';
import Icon from 'react-native-vector-icons/Ionicons';
import { fetchUser, selectAll } from '../../stores/user.reducer';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';

const Home = ({ navigation }: any) => {
  const dispatch = useAppDispatch();
  const users = useAppSelector(selectAll);

  function ListUser() {
    return (
      <>
        {users.map((data: any) => {
          return (
            <View key={data?.id} style={styleUser as any}>
              <Text style={{ fontSize: 15 }}>
                {data?.id}. {data?.name}
              </Text>
            </View>
          );
        })}
      </>
    );
  }

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={'#f9f9f9'} />
      <SafeAreaView style={styles.SafeAreaView1} />
      <SafeAreaView style={styles.SafeAreaView2}>
        <View style={styles.outerWrapper}>
          <Icon name={'ios-person'} size={100} color={'purple'} />
          <Icon name={'ios-home'} size={100} color={'purple'} />

          <View>
            <TouchableOpacity
              style={styles.buttonStyle}
              onPress={() => dispatch(fetchUser())}>
              <Text style={styles.text}>Click here to show User data:</Text>
            </TouchableOpacity>
            <ListUser />
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

const styleUser = StyleSheet.create<any>({
  borderBottomWidth: 1,
  borderColor: '#eee',
  padding: 1,
  marginTop: 10,
});

export default Home;
