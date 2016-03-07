import {Page} from 'ionic-angular';
import {SettingIndexPage} from '../setting-index/setting-index';
import {HomePage} from '../home/home';
import {LocationPage} from '../location/location';


@Page({
  templateUrl: 'build/pages/tabs/tabs.html'
})
export class TabsPage {
  constructor() {

    this.tabChat=HomePage;
    this.tabLocate=LocationPage;
    this.tabTodo=HomePage;
    this.tabMe=SettingIndexPage;
  }
}
