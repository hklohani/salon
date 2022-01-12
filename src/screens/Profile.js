import * as React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  KeyboardAvoidingView,
  Dimensions,
} from 'react-native';
import {Icon} from 'react-native-elements';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {
  Avatar,
  Button,
  Card,
  Title,
  Paragraph,
  TextInput,
} from 'react-native-paper';
import {useState} from 'react';

export default function Profile() {
  const {width, height} = Dimensions.get('window');
  const [editable, setEditable] = useState(false);
  return (
    <KeyboardAwareScrollView keyboardShouldPersistTaps="handled">
      <Card mode={'outlined'} style={[styles.card1, styles.container]}>
        <TextInput.Icon
          name="square-edit-outline"
          size={35}
          onPress={() => setEditable(true)}
        />
        <Avatar.Image
          style={styles.avatar}
          size={130}
          source={{uri: 'https://bootdey.com/img/Content/avatar/avatar6.png'}}
        />
        <Card.Content>
          <Title style={styles.userInfo}>Himanshu Kumar</Title>
          <Paragraph style={styles.userInfo}>+918404968268</Paragraph>
          <Paragraph style={styles.userInfo}>hklohani@outlook.com</Paragraph>
        </Card.Content>
      </Card>

      <Card mode={'outlined'} style={styles.card2}>
        <TextInput
          activeOutlineColor="#22215d"
          dense={true}
          label="Salon"
          mode={'outlined'}
          disabled={!editable}
        />
        <TextInput
          activeOutlineColor="#22215d"
          dense={true}
          label="Full Name"
          mode={'outlined'}
          disabled={!editable}
        />
        <TextInput
          activeOutlineColor="#22215d"
          dense={true}
          label="Expertise"
          mode={'outlined'}
          disabled={!editable}
        />
        <TextInput
          activeOutlineColor="#22215d"
          dense={true}
          label="Role"
          value="Administrator"
          mode={'outlined'}
          disabled={true}
        />
        <Card.Content style={styles.avatar}>
          <Title style={{opacity:0.9, marginTop:10}}>Contact Info</Title>
          <View
            style={{
              borderBottomColor: 'black',
              borderBottomWidth: 1,
              opacity:0.5
            }}
          />
        </Card.Content>

        <TextInput
          activeOutlineColor="#22215d"
          dense={true}
          label="Contact Number"
          mode={'outlined'}
          right={<TextInput.Icon name="phone-outline" />}
          disabled={!editable}
        />
        <TextInput
          activeOutlineColor="#22215d"
          dense={true}
          label="WhatsApp Number"
          mode={'outlined'}
          right={<TextInput.Icon name="whatsapp" />}
          disabled={!editable}
        />

        <TextInput
          activeOutlineColor="#22215d"
          dense={true}
          label="Email Address"
          mode={'outlined'}
          right={<TextInput.Icon name="email-outline" />}
          disabled={!editable}
        />
        <TextInput
          activeOutlineColor="#22215d"
          dense={true}
          label="Address"
          mode={'outlined'}
          multiline={true}
          numberOfLines={5}
          disabled={!editable}
        />
        <Button
          mode="contained"
          onPress={() => {
            setEditable(false);
            console.log('hello');
          }}
          style={{margin: 20}}>
          Submit
        </Button>
      </Card>

      {/* <View style={styles.body}>
        <View style={styles.bodyContent}>
          <Text style={styles.userInfo}>
            Salon : Shivangi Beauty Collection
          </Text>
          <Text style={styles.userInfo}>Branch: Main Branch</Text>
          <TextInput defaultValue={'Hello'} style={styles.input} />
        </View>
      </View> */}
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card1: {
    height: 250,
    width: 340,
    marginTop: 10,
    alignSelf: 'center',
    padding: 20,
  },
  card2: {
    height: 590,
    width: 340,
    marginTop: 10,
    alignSelf: 'center',
    padding: 20,
    marginBottom: 10,
  },
  avatar: {
    alignSelf: 'center',
    marginBottom: 5,
  },
  headerContent: {
    alignItems: 'center',
  },

  name: {
    fontSize: 22,
    color: '#000000',
    fontWeight: '600',
  },
  userInfo: {
    alignSelf: 'center',
  },

  bodyContent: {
    padding: 20,
    alignItems: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: 100,
  },
});
