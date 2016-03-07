import {Page} from 'ionic-angular';


@Page({
    templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
    constructor() {
        this.info="我是你";
    }

    loadMap(){

        //this.info="wo";
        navigator.notification.alert(
            "click",  // message
            null,         // callback
            '定位',            // title
            'Done'                  // buttonName
        );


        let onSuccess = function(position) {

            //
            let msg = 'Latitude: '  + position.coords.latitude      + '<br />' +
                'Longitude: ' + position.coords.longitude     + '<br />' ;
            alert(JSON.stringify(position));

        }
        navigator.geolocation.getCurrentPosition(onSuccess,(err) => { console.log(err.message); });
        //var watchID = navigator.geolocation.watchPosition(onSuccess, this.onError, { timeout: 30000 });
        //navigator.geolocation.clearWatch(watchID);
    //console.log("======");

}

    onError(error){
        let msg ="code:"+error.code+"\nmessage:"+error.message;
        navigator.notification.alert(
            msg,  // message
            null,         // callback
            '错误信息',            // title
            'Done'                  // buttonName
        );
    }
}
