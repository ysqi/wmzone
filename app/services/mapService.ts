import {Injectable} from 'angular2/core';

declare var AMap;

@Injectable()
export class MapService {

    constructor(){

    }

    loadJs(){
        if (typeof AMap === 'undefined') {
            //jquery版本
            // $$.getJSON('http://webapi.amap.com/maps?v=1.3&key=tokenkey' +  '&callback=theFunctionName', {},    callback);

            // javascript版本(兼容angular.js)
            //window.onloadAMap = function () {
            //     alert("load map success!");
            //};
            //var url = 'http://webapi.amap.com/maps?v=1.3&key=88c48787a03c0ada10f9c375004616fd';
            var url="http://webapi.amap.com/maps?v=1.3&key=e8496e8ac4b0f01100b98da5bde96597";
            var script = document.createElement('script');
            script.type = 'text/javascript';
            script.src = url;
            document.querySelector('head').appendChild(script);
        }
    }



}