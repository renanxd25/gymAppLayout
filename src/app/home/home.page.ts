import { Component, OnInit } from '@angular/core';
import { register } from 'swiper/element/bundle';
import { IonicSlides } from '@ionic/angular';
import { DataService } from '../service/data.service';
register();

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  swiperModules = [IonicSlides];

  public dataList: any;
  public userName: any;
  public statusUser: any;
  public myBody: any;
  public goals: any;
  public personalOn: any;
  public yoga: any;
  public programas: any;
  public keepTraining: any;
  public levatamento: any;
  public contents: any;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
      this.dataList = this.dataService.listData();
      this.userName = this.dataList.user;
      this.statusUser = this.dataList.statusUser;
      this.myBody = this.dataList.myBody;
      this.goals = this.dataList.goals.toUpperCase();
      this.personalOn = this.dataList.personalOn.toUpperCase();
      this.yoga = this.dataList.yoga.toUpperCase();
      this.programas = this.dataList.programas.toUpperCase();
      this.keepTraining = this.dataList.keepTraining;
      this.levatamento = this.dataList.levatamento.toUpperCase();
      this.contents = this.dataList.contents.toUpperCase();
  }
}
