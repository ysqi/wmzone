import {Injectable} from 'angular2/core';

@Injectable()
export class HttpHelp {

    /*
        加载远程文件,默认按 JS 文件加载
     */
    static loadScript(url: string, type?: string, charset?: string) {
        if (type === undefined) type = 'text/javascript';
        if (url) {
            var script = document.querySelector("script[src*='" + url + "']");
            if (!script) {
                var heads = document.getElementsByTagName("head");
                if (heads && heads.length) {
                    var head = heads[0];
                    if (head) {
                        script = document.createElement('script');
                        script.setAttribute('src', url);
                        script.setAttribute('type', type);
                        if (charset) script.setAttribute('charset', charset);
                        head.appendChild(script);
                    }
                }
            }
            return script;
        }
    }
}