import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'date'
})
export class DatePipe implements PipeTransform {

  transform(value: string): string {
    const date = new Date(value);
    let day = date.getDay();
    let dayOfWeek = "";
    switch(day){
      case 0: dayOfWeek = "Sun"; break;
      case 1: dayOfWeek = "Mon"; break;
      case 2: dayOfWeek = "Tue"; break;
      case 3: dayOfWeek = "Wed"; break;
      case 4: dayOfWeek = "Thu"; break;
      case 5: dayOfWeek = "Fri"; break;
      case 6: dayOfWeek = "Sat"; break;
    }
    return dayOfWeek;
  }

}
