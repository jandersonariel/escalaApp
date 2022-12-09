import React, { useEffect, useState } from 'react';
import { Calendar, CalendarList, Agenda, LocaleConfig, DateData } from 'react-native-calendars';

LocaleConfig.locales['pt'] = {
  monthNames: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
  monthNamesShort: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],
  today: "Hoje",
  dayNames: ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sabado"],
  dayNamesShort: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab",],
}
LocaleConfig.defaultLocale = "pt"

const Calendarlibb = () => {
  const [changeDate, setChangeDate] = useState({})

const changeObject = (day: any) => {
  setChangeDate ( {
    [day.dateString]: {
      customStyles: {
        container: {
          backgroundColor: 'green'
        },
        text: {
          color: 'black',
          fontWeight: 'bold'
        }
      }
    },
    [day.dateString]: {
      customStyles: {
        container: {
          backgroundColor: 'white',
          elevation: 2
        },
        text: {
          color: 'aqua'
        }
      }
    }
  })
}
  return (
    <>
      <Calendar
        style={{ height: "80%" }}
        onDayLongPress={(e) => {
          console.log(e)
        }}
        onDayPress={day => {
          changeObject(day)

          console.log('selected day', day);
        }}
        markingType={'custom'}
        markedDates={changeDate}
        
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