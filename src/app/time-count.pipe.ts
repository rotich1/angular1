import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeCount'
})
export class TimeCountPipe implements PipeTransform {

  transform(value: any): any {
    let today: number = value.getTime(); //get current date and time
    let todayWithNoTime: any = new Date().getTime();


    var dateDifference = todayWithNoTime - today //returns value in miliseconds
    var dateDifferenceSeconds = dateDifference * 0.001; //converts miliseconds to seconds
    let sec = Math.round(dateDifferenceSeconds);
    let minutes = Math.round(sec * 0.0167)

    console.log(minutes);

    return sec;
  }

}