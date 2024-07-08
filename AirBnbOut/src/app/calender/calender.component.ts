import { Component } from '@angular/core';

@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.css']
})
export class CalenderComponent {
curentMonth:number;
currentYear:number;
daysInMonth:number[];
nextMonth:number;
daysInNextMonth:number[];
weekDays:string[] = ['Dim','Lun','Mar','Mer','Jeu','Ven','Sam'];

MonthYear:Map<number,string> = new Map([
  [0,'Janvier'],
  [1,'Fevrier'],
  [2,'Mars'],
  [3,'Avril'],
  [4,'Mai'],
  [5,'Juin'],
  [6,'Juillet'],
  [7,'Aout'],
  [8,'Septembre'],
  [9,'Octobre'],
  [10,'Novembre'],
  [11,'Decembre'],
]);

constructor(){
  this.curentMonth = new Date().getMonth();
  this.currentYear = new Date().getFullYear();
  this.daysInMonth =this.getDaysInMonth(this.curentMonth,this.currentYear);

  this.nextMonth = new Date().getMonth()+1;
  this.daysInNextMonth = this.getDaysInMonth(this.nextMonth,this.currentYear);
  
}
getDaysInMonth(month:number,year:number):number[]{
  let date = new Date(year,month,1);
  let days = [];
  while(date.getMonth() === month){
    days.push(date.getDate());
    date.setDate(date.getDate()+1);
  }
  return days;
}

getFirstDayOfMonth(month: number, year: number): number {
  return new Date(year, month, 1).getDay();
}

//les informations du prochain mois
next(){   
  this.curentMonth = this.nextMonth;
  this.currentYear = this.currentYear;
  this.daysInMonth = this.getDaysInMonth(this.curentMonth,this.currentYear);
  this.nextMonth = this.curentMonth+1;
  this.daysInNextMonth = this.getDaysInMonth(this.nextMonth,this.currentYear);
  if(this.nextMonth>11){
    this.nextMonth = 0;
    this.currentYear = this.currentYear+1;
  }
}
//les informations du mois precedent
precedent(){
  this.curentMonth = this.curentMonth-1;
  this.currentYear = this.currentYear;
  this.daysInMonth = this.getDaysInMonth(this.curentMonth,this.currentYear);
  this.nextMonth = this.curentMonth+1;
  this.daysInNextMonth = this.getDaysInMonth(this.nextMonth,this.currentYear);
  if(this.curentMonth<0){
    this.curentMonth = 11;
    this.currentYear = this.currentYear-1;
  }
}

}