import React from 'react';
import {Button, SafeAreaView, Text, View} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import {Input} from '../Components';
import OpacityButton from '../Components/OpacityButton';
import commonStyles from '../Styles/common';
import auth from '@react-native-firebase/auth';
// import DateTimePickerModal from 'react-native-modal-datetime-picker';

export const CreateClass = (props) => {
  const [inputData, setInputData] = React.useState({});
  const [isDatePickerVisible, setDatePickerVisibility] = React.useState(false);

  const createInputDataHandler = (field) => {
    return (text) => {
      setInputData((prevState) => ({
        ...prevState,
        [field]: text,
      }));
    };
  };

  // const showDatePicker = () => {
  //   setDatePickerVisibility(true);
  // };

  // const hideDatePicker = () => {
  //   setDatePickerVisibility(false);
  // };

  // const handleConfirm = (date) => {
  //   console.warn('A date has been picked: ', date);
  //   hideDatePicker();
  // };

  const onSubmit = async () => {
    const userId = auth().currentUser.uid;
    await firestore()
      .collection('classes')
      .add({teacherId: userId, ...inputData});

    props.navigation.navigate('Home');
  };

  return (
    <SafeAreaView style={commonStyles.androidSafeArea}>
      <View style={commonStyles.container}>
        <View>
          <Input
            onChangeText={createInputDataHandler('title')}
            placeholder="Title"
          />
          <Input
            onChangeText={createInputDataHandler('description')}
            placeholder="Description"
          />
          <Input
            onChangeText={createInputDataHandler('group')}
            placeholder="Group"
          />
        </View>
        {/* <DateTimePickerModal
          isVisible={isDatePickerVisible}
          isVisible={true}
          is24Hour={true}
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
        /> */}
        <Button title={'Choose time'} onPress={showDatePicker} />
        <View>
          <OpacityButton onPress={onSubmit} title="Create a class" />
        </View>
      </View>
    </SafeAreaView>
  );
};
