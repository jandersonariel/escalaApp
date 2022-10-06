import React from 'react';
import { View, Text } from 'react-native';
import { Calendar, CalendarList, Agenda, LocaleConfig } from 'react-native-calendars';

LocaleConfig.locales['pt'] = {
  monthNames: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
  monthNamesShort: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],
  today: "Hoje",
  dayNames: ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sabado"],
  dayNamesShort: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab",],
}
LocaleConfig.defaultLocale = "pt"


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



