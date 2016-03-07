import {Page} from 'ionic-angular';


@Page({
    templateUrl: 'build/pages/setting-index/setting-index.html'
})
export class SettingIndexPage {
    constructor() {

        this.userInfo={
            name :"鱼鱼",
            touxiang:"https://avatars2.githubusercontent.com/u/2821085?v=3&s=460",
            ta:{
                id:"001",
                name:"黎黎",
                desc:"她，我的那个她",
            }
        };

    }
}
