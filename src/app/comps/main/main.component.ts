import { Component, OnInit } from '@angular/core';
import { currentStatus } from '../../models/currentStatus';
import { MainService } from '../../services/main.service';

@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  currentStatus: currentStatus;

  constructor(private mainService: MainService) { }

  ngOnInit(): void {
    this.mainService.getJobStatus().subscribe((x) => this.currentStatus = x);
  }

  getAge() {
    let days = this.currentStatus.mainJobStatus.age.days;
    let hours = this.currentStatus.mainJobStatus.age.hours;
    let minutes = this.currentStatus.mainJobStatus.age.minutes;
    var result = '';
    if (days > 0) result += days + 'day(s), ';
    if (hours > 0) result += hours + 'hour(s), ';
    if (minutes > 0) result += minutes + 'minute(s)';
    console.log(result);
    return result;
  }

  sellAll() {
    this.mainService.sellAll();
  }

  makeNewOrders() {
    this.mainService.makeNewOrders();
  }

  resetProfile() {
    this.mainService.resetProfile();
  }

  setCoinNames() {
    this.mainService.setCoinNames();
  }

  showDetails() {

  }

  configure() {

  }
}
