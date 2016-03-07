//定位信息
export class LocationInfo{
    constructor(
        public coords: Coords
    ){}
}

export  class Coords {
    constructor(
        //维度
        public latitude:number,
        public longitude:number,
        public accuracy:number,
        public altitude:number,
        public  altitudeAccuracy:number,
        public  heading:number,
        public speed:number) {
    }
}