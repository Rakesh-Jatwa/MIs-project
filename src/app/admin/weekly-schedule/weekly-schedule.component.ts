import { Component, OnInit } from '@angular/core';
declare var $ : any
@Component({
  selector: 'app-weekly-schedule',
  templateUrl: './weekly-schedule.component.html',
  styleUrls: ['./weekly-schedule.component.scss']
})
export class WeeklyScheduleComponent implements OnInit {
  lastSunday:any
  result:any
  addRow = ['s']
  removeRow = false
  constructor() { }
  
  ngOnInit() {
    debugger
    var now = new Date();
    this.lastSunday = new Date(now.setDate(now.getDate()-now.getDay()))
    ,this.result = [new Date(this.lastSunday)];
 while (this.lastSunday.setDate(this.lastSunday.getDate()+1) && this.lastSunday.getDay()!==0) {
  this.result.push(new Date(this.lastSunday));
 }
 return this.lastSunday;
  }

  addRowInTable(){
    debugger
    this.addRow.push('s');
    this.removeRow = true
    var table = document.getElementById("tableId");
    var addIcon = document.getElementById("addIcon");
    
    addIcon.parentNode.removeChild(addIcon);
  }

  nextButton(){
    debugger
    var now = this.result[6];
    var nextSunday = now.setDate(now.getDate()+1)
    this.result =[];
    this.result = [new Date(nextSunday)];
 while (now.setDate(now.getDate()+1) && now.getDay()!==0) {
  this.result.push(new Date(now));
 }
 return now;
  }

  prevButton(){
    debugger
    var now = this.result[0];
    var previousSunday = new Date(now.setDate(now.getDate()-7));
    this.result =[];
    this.result = [new Date(previousSunday)];
 while (now.setDate(now.getDate()+1) && now.getDay()!==0) {
  this.result.push(new Date(now));
 }
 return now;
  }

}
