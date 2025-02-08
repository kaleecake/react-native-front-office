import React,{useState} from 'react';
import { View, Button, Platform } from 'react-native';
// import DatePicker from 'react-native-datepicker';
import DateTimePicker from "@react-native-community/datetimepicker";


export default function ADatePicker({platform = Platform.OS, initialDate = new Date(), onDateSelect }) {
const [date, setDate] = useState(initialDate);
const [show, setShow] = useState(false);
const onChange = (event, selectedDate) => {
    if (selectedDate) {
      setDate(selectedDate);
      onDateSelect && onDateSelect(selectedDate); // Callback to parent
    }
    setShow(false);
  };

  return (
    <View>
    <Button title="Pick a Date" onPress={() => setShow(true)} />
    {show && (
      <DateTimePicker
        value={date}
        mode="date"
        display="default"
        onChange={onChange}
      />
    )}
    </View>
  );
}
