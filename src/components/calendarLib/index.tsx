import React from 'react';
import { View, Text } from 'react-native';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';



const Calendarlibb = () => {
  return (
    <>
      <Calendar
        style={{ height: "80%" }}
        onDayLongPress={(e) => {
          console.log(e)
        }}
      //dayComponent={(e) => {
      //console.log(e)
      //return (
      //<View style={{ height: 40, width: 40, backgroundColor: "aqua" }} >
      // <Text>{e.date.day}</Text>
      // </View>
      // )
      // }}
      />


    </>

  )
};

export default Calendarlibb;



