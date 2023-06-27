import { Component, OnInit } from '@angular/core';
import VnptMap from '@vnpt/maps';
import { mapConst } from './map.constants';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  vmap = undefined;
  longitude: number = 106.64891554698961;
  latitude: number = 10.880397281923479;
  zoomInState: boolean = false;
  zoomOutState: boolean = false;
  point = undefined;
  popup = undefined;
  pointFlag: boolean = false;

  constructor() {

  }

  ngOnInit(): void {
    this.vmap = this.createMap();
    this.vmap.locate();
  }

  ngAfterViewInit() {
    this.onClickMap();
    this.onRightClickMap();
    this.onLoad();
    this.vmap.on('load', (e) => {
      //add point
      // const point = [106.67586504781544, 10.765718980746014];
      // this.vmap.flyTo(point, 13);
      // const pointLayer = VnptMap.initPoint(point, {
      //   iconUrl: "https://maps.vnpt.vn/v2/assets/images/markers/start-marker.png",
      //   id: "Point",
      //   iconWidth: 30,
      //   iconHeight: 30
      // });
      // pointLayer.addLayerTo(this.vmap);
      // pointLayer.addPopup('Hello from VNPT Maps - Point');

      // add polyline
      // const polylineList = [
      //   [106.68644539894099, 10.778488662090284],
      //   [106.6875611978183, 10.78793195312886],
      //   [106.67254082831613, 10.786414301348596],
      //   [106.67863480679988, 10.792316237463902],
      // ]

      // const polylineLayer = VnptMap.initPolyline(polylineList, {
      //   id: "PolylineLayer",
      //   color: "#367281",
      //   opacity: 0.9,
      //   weight: 4,
      //   lineCap: "round",
      // });
      // polylineLayer.addLayerTo(this.vmap);
      // polylineLayer.addPopup("Hello Vnpt Maps - Polyline");

      // add polygon
      // const arrCoordPolygon = {
      //   "type": "Feature",
      //   "geometry": {
      //     "type": "Polygon",
      //     "coordinates": [
      //       [
      //         [
      //           106.685864842,
      //           10.796891513
      //         ],
      //         [
      //           106.686076195,
      //           10.796783238
      //         ],
      //         [
      //           106.686220869,
      //           10.796627326
      //         ],
      //         [
      //           106.686359218,
      //           10.796381736
      //         ],
      //         [
      //           106.694770786,
      //           10.75947401
      //         ],
      //         [
      //           106.69456174,
      //           10.759316738
      //         ],
      //         [
      //           106.689902464,
      //           10.756092228
      //         ],
      //         [
      //           106.687813877,
      //           10.754119684
      //         ],
      //         [
      //           106.685108581,
      //           10.796816065
      //         ],
      //         [
      //           106.685387222,
      //           10.796952757
      //         ],
      //         [
      //           106.685641319,
      //           10.796975908
      //         ],
      //         [
      //           106.685864842,
      //           10.796891513
      //         ]
      //       ]

      //     ]
      //   }
      // }

      // const polygonLayer = VnptMap.initPolygon(arrCoordPolygon, {
      //   id: "PolygonLayer",
      //   color: "#367281",
      //   opacity: 0.9,
      //   weight: 1,
      //   fillColor: "red",
      //   fillOpacity: 0.1,
      // });
      // polygonLayer.addLayerTo(this.vmap);
      // polygonLayer.addPopup("Hello Vnpt Maps - Polygon");

      // add circle 
      // const circleCenter = [this.longitude, this.latitude];
      // const radiusValue = 400;
      // const circleLayer = VnptMap.initCircle(circleCenter, radiusValue, {
      //   id: "circleLayer",
      //   fillColor: 'red',
      //   fillOpacity: 0.1
      // });
      // circleLayer.addLayerTo(this.vmap);

    })
  }

  createMap() {
    return VnptMap.initMap('map', {
      minZoom: mapConst.MIN_ZOOM,
      maxZoom: mapConst.MAX_ZOOM,
      zoom: mapConst.FIRST_ZOOM,
      center: [this.longitude, this.latitude],
      // pitch: 60
    });
  }

  onLoad() {
    this.vmap.on('load', (event) => {
      console.log(this.vmap);

      // add point (điểm)
      const pointLayer = VnptMap.initPoint([this.longitude, this.latitude], {
        iconUrl: "https://maps.vnpt.vn/v2/assets/images/markers/start-marker.png",
        id: "Point",
        iconWidth: 32,
        iconHeight: 32,
      });
      pointLayer.addLayerTo(this.vmap);
      pointLayer.addPopup("Draw Point");

      // add polyline (đường)
      const polylineList = [
        [106.63810088024206, 10.891607340518462],
        [106.63528992519616, 10.889205220617015],
        [106.63546158657277, 10.886845224303443],
        [106.63468911037631, 10.883136620895598],
        [106.63666321621076, 10.879596547316126],
        [106.64247824534812, 10.884443065989288],
      ];
      const polylineLayer = VnptMap.initPolyline(polylineList, {
        id: "PolylineLayer",
        color: "#FF6C37",
        opacity: 0.6,
        weight: 6,
        dashArray: [1, 2],
        lineCap: "round",
      });
      polylineLayer.addLayerTo(this.vmap);
      polylineLayer.addPopup("Draw Polyline");

      // add polygon
      // VnptMap.initPolygon(coordinates<
      //   [
      //     [
      //       number
      //       [
      //         number
      //         [

      //         ],
      //         ...
      //       ],
      //       ...
      //     ],
      //     ...
      //   ]/object>, options?<object>)
      // const arrCoordPolygon = {
      //   "type": "Feature",
      //   "geometry": {
      //     "type": "Polygon",
      //     "coordinates": [
      //       [
      //         [106.65456594411182, 10.879016693909577],
      //         [106.66210787463223, 10.879617211102016],
      //         [106.66201143022732, 10.878392094649357],
      //         [106.66343828194908, 10.877019476503705],
      //         [106.66367123733141, 10.876104394228747],
      //         [106.6630888488732, 10.874703169054499],
      //         [106.66075929497725, 10.872787197417168],
      //         [106.65845886057173, 10.87267281066228],
      //         [106.65511012694549, 10.873273340631243],
      //       ]
      //     ]
      //   }
      // }
      // hoặc 
      const arrCoordPolygon = [
        [
          [106.65456594411182, 10.879016693909577],
          [106.66210787463223, 10.879617211102016],
          [106.66201143022732, 10.878392094649357],
          [106.66343828194908, 10.877019476503705],
          [106.66367123733141, 10.876104394228747],
          [106.6630888488732, 10.874703169054499],
          [106.66075929497725, 10.872787197417168],
          [106.65845886057173, 10.87267281066228],
          [106.65511012694549, 10.873273340631243],
          [106.65456594411182, 10.879016693909577],

        ]
      ]
      const polygonLayer = VnptMap.initPolygon(arrCoordPolygon, {
        id: "PolygonLayer",
        color: "#367281",
        opacity: 0.6,
        weight: 1,
        fillColor: 'green',
        fillOpacity: 0.4
      });
      polygonLayer.addLayerTo(this.vmap);
      polygonLayer.addPopup("Draw Polygon");

      // add circle
      const circleCenter = [this.longitude, this.latitude];
      const radiusVal = 400;
      const circleLayer = VnptMap.initCircle(circleCenter, radiusVal, {
        id: "circleLayer",
        fillColor: 'grey',
        fillOpacity: 0.5,
        color: '#f5f5f5'
      });
      circleLayer.addLayerTo(this.vmap);


      // add multipoint
      const pointList = [
        [106.65003134594224, 10.89253446932996],
        [106.65494515285695, 10.893840873213634],
        [106.65370060787336, 10.890469496664196],
        [106.65700508937982, 10.889205220617015],
        [106.65713383541237, 10.8877302251119946],
      ];
      const multiPoint = VnptMap.initMultiPoint(pointList, {
        id: 'MultiPoint',
        iconUrl: "https://maps.vnpt.vn/v2/assets/images/markers/start-marker.png",
        iconWidth: 32,
        iconHeight: 32,
      });
      multiPoint.addLayerTo(this.vmap);
      multiPoint.addPopup('Draw MultiPoint');

      // add multipolyline
      const polyline1 = [
        [106.6215140996959, 10.873527751950348],
        [106.62936760769117, 10.883136620895598],
        [106.63563324794933, 10.879765123201551],
        [106.63357331142663, 10.87626715404059],
        [106.63245751247695, 10.876899320179703],
      ]
      const polyline2 = [
        [106.6321689690617, 10.875276725826154],
        [106.63418433120808, 10.874073700516362],
        [106.63378916216038, 10.873413974899705],
        [106.63428312347156, 10.873064707805753],
        [106.63374964525565, 10.872172134484899],
        [106.63335447620636, 10.871434789292834],
      ]
      const multiPolyline = VnptMap.initMultiPolyline([polyline1, polyline2], {
        id: 'RouteLayerNum',
        color: '#2ECC71',
        opacity: 0.9,
        weight: 6,
        lineCap: "round",
      });
      multiPolyline.addLayerTo(this.vmap);


      // add multiPolygon
      // const polygonList = [
      //   [
      //     [
      //       [106.66550232753912, 10.896706513265272],
      //       [106.6696651159304, 10.893925157139307],
      //       [106.66515900478589, 10.892070905285635],
      //       [106.66550232753912, 10.896706513265272],

      //     ]
      //   ],
      //   [
      //     [
      //       [106.66644646511219, 10.887688082276043],
      //       [106.67273356304509, 10.887814510766034],
      //       [106.67307688579825, 10.884274492759133],
      //       [106.6666824995076, 10.884485209293615],
      //       [106.66644646511219, 10.887688082276043],

      //     ]
      //   ]
      // ];

      // const polygonList = {
      //   "type": "Feature",
      //   "geometry": {
      //     "type": "MultiPolygon",
      //     "coordinates": [
      //       [
      //         [
      //           [105.628729, 9.845335],
      //           [105.815663, 9.794429],
      //           [105.851944, 9.812254],
      //           [105.628729, 9.845335]
      //         ]
      //       ],
      //       [
      //         [
      //           [105.5943083, 9.9167791],
      //           [105.7438983, 9.845707],
      //           [105.8816973, 9.961926],
      //           [105.821132, 10.040620],
      //         ]
      //       ]
      //     ]
      //   }
      // };

      // const multiPolygon = VnptMap.initMultiPolygon(polygonList, {
      //   id: 'PolygonLayer',
      //   color: '#2ECC71',
      //   opacity: 0.9,
      //   weight: 6,
      // });

      // multiPolygon.addLayerTo(this.vmap);


      // add cluster point
      // const points = [
      //   [106.65003134594224, 10.89253446932996],
      //   [106.65494515285695, 10.893840873213634],
      //   [106.65370060787336, 10.890469496664196],
      //   [106.65700508937982, 10.889205220617015],
      //   [106.65713383541237, 10.8877302251119946],
      // ]
      // const clusterPointLayer = VnptMap.initClusterPoint(points, {
      //   id: "clusterPointLayer",
      //   clickToZoom: true,
      //   clusterRadiuses: [60, 1],
      //   clusterColors: ["orange", "red"],
      // });
      // console.log(clusterPointLayer);

      // clusterPointLayer.addLayerTo(this.vmap);

      // add image layer
      const imgLayerBound = [
        [106.66769101009601, 10.887519510872636],
        [106.67502953396138, 10.889542361421206],
        [106.67545868740291, 10.883979489359689],
        [106.66805579052203, 10.88229375004829],
      ];
      const imgLayer = VnptMap.initImageLayer(imgLayerBound, {
        url: "https://bizweb.dktcdn.net/100/438/408/files/jerry-meme-yodyvn17.jpg?v=1687492437387",
        opacity: 0.8
      });
      imgLayer.addLayerTo(this.vmap);

    });
  }

  onClickMap() {
    this.vmap.on('click', (event) => {
      if (this.point) {
        this.point.remove();
        // this.point.setVisible(false);
      }

      this.vmap.panTo([event.lngLat.lng, event.lngLat.lat], {
        duration: 1000,
        animate: 'easy-out'
      });

      this.point = VnptMap.initPoint([event.lngLat.lng, event.lngLat.lat], {
        iconUrl: "https://maps.vnpt.vn/v2/assets/images/markers/click-marker.gif",
        id: "ClickPointLayer",
        iconWidth: 42,
        iconHeight: 42,
      });

      this.point.addLayerTo(this.vmap);
      this.point.addPopup('Hello from VNPT Maps - Point');

    });
  }

  onRightClickMap() {
    this.vmap.on('contextmenu', (event) => {
      if (this.popup) {
        this.popup.remove();
      }

      const content = `
        <div>
          <h3>Kinh Độ: ${event.lngLat.lng}</h3>
          <h3>Vĩ Độ: ${event.lngLat.lat}</h3>
        </div>
      `;

      this.popup = VnptMap.initPopup([event.lngLat.lng, event.lngLat.lat], content);
      this.popup.addLayerTo(this.vmap);

    });
  }


  handleZoomIn() {
    const currentZoom = Math.ceil(this.vmap.getZoom());
    const maxZoom = this.vmap.getMaxZoom();

    if (this.zoomOutState) {
      this.zoomOutState = false;
    }

    if (currentZoom < maxZoom) {
      this.zoomInState = (currentZoom + 1) === maxZoom ? true : false;
      this.vmap.zoomIn();
    }

  }

  handleZoomOut() {
    const currentZoom = Math.floor(this.vmap.getZoom());
    const minZoom = this.vmap.getMinZoom();

    if (this.zoomInState) {
      this.zoomInState = false;
    }

    if (currentZoom > minZoom) {
      this.zoomOutState = (currentZoom - 1) === minZoom ? true : false;
      this.vmap.zoomOut();
    }
  }

}
