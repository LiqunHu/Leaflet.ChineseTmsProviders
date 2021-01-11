L.TileLayer.ChinaProvider = L.TileLayer.extend({
  initialize: function(type, options) {
    // (type, Object)
    var providers = L.TileLayer.ChinaProvider.providers

    var parts = type.split('.')

    var providerName = parts[0]
    var mapName = parts[1]
    var mapType = parts[2]

    var url = providers[providerName][mapName][mapType]
    options.subdomains = providers[providerName].Subdomains
    options.key = options.key || providers[providerName].key
    L.TileLayer.prototype.initialize.call(this, url, options)
  }
})

L.TileLayer.ChinaProvider.providers = {
  TianDiTu: {
    Normal: {
      Map:
        'http://t{s}.tianditu.gov.cn/DataServer?T=vec_w&X={x}&Y={y}&L={z}&tk={key}',
      Annotion:
        'http://t{s}.tianditu.gov.cn/DataServer?T=cva_w&X={x}&Y={y}&L={z}&tk={key}'
    },
    Satellite: {
      Map:
        'http://t{s}.tianditu.gov.cn/DataServer?T=img_w&X={x}&Y={y}&L={z}&tk={key}',
      Annotion:
        'http://t{s}.tianditu.gov.cn/DataServer?T=cia_w&X={x}&Y={y}&L={z}&tk={key}'
    },
    Terrain: {
      Map:
        'http://t{s}.tianditu.gov.cn/DataServer?T=ter_w&X={x}&Y={y}&L={z}&tk={key}',
      Annotion:
        'http://t{s}.tianditu.gov.cn/DataServer?T=cta_w&X={x}&Y={y}&L={z}&tk={key}'
    },
    Subdomains: ['0', '1', '2', '3', '4', '5', '6', '7'],
    key: '174705aebfe31b79b3587279e211cb9a'
  },

  GaoDe: {
    Normal: {
      Map:
        'http://webrd0{s}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}'
    },
    Satellite: {
      Map:
        'http://webst0{s}.is.autonavi.com/appmaptile?style=6&x={x}&y={y}&z={z}',
      Annotion:
        'http://webst0{s}.is.autonavi.com/appmaptile?style=8&x={x}&y={y}&z={z}'
    },
    Subdomains: ['1', '2', '3', '4']
  },

  Google: {
    Normal: {
      // Map: 'http://mt3.google.cn/vt/lyrs=t@131,r@216000000&hl=zh-CN&gl=CN&src=app&x={x}&y={y}&z={z}&s=Gal'
      Map: 'http://mt2.google.cn/vt?lyrs=m@180000000&hl=zh-CN&gl=cn&src=app&x={x}&y={y}&z={z}&s=Gal'
    },
    Satellite: {
      // Map: 'http://mt1.google.cn/vt?lyrs=y&hl=zh-CN&gl=CN&x={x}&y={y}&z={z}&s=Gal'
      Map: 'https://mt1.google.cn/vt/lyrs=y&hl=zh-CN&gl=CN&src=app&x={x}&y={y}&z={z}&s=G'
    },
    Light: {
      Map: 'http://mt3.google.cn/vt/lyrs=t@131,r@216000000&hl=zh-CN&gl=CN&src=app&x={x}&y={y}&z={z}&s=Gal'
    },
    placeName: {
      Map: "https://ditu.google.cn/maps/vt?pb=!1m5!1m4!1i{z}!2i{x}!3i{y}!4i256!2m3!1e0!2sm!3i413113259!3m12!2szh-CN!3sCN!5e18!12m4!1e68!2m2!1sset!2sRoadmapSatellite!12m3!1e37!2m1!1ssmartmaps!4e0!23i1301875&token=59227"
    },
    Subdomains: []
  },

  Geoq: {
    Normal: {
      Map:
        'http://map.geoq.cn/ArcGIS/rest/services/ChinaOnlineCommunity/MapServer/tile/{z}/{y}/{x}',
      PurplishBlue:
        'http://map.geoq.cn/ArcGIS/rest/services/ChinaOnlineStreetPurplishBlue/MapServer/tile/{z}/{y}/{x}',
      Gray:
        'http://map.geoq.cn/ArcGIS/rest/services/ChinaOnlineStreetGray/MapServer/tile/{z}/{y}/{x}',
      Warm:
        'http://map.geoq.cn/ArcGIS/rest/services/ChinaOnlineStreetWarm/MapServer/tile/{z}/{y}/{x}'
    },
    Theme: {
      Hydro:
        'http://thematic.geoq.cn/arcgis/rest/services/ThematicMaps/WorldHydroMap/MapServer/tile/{z}/{y}/{x}'
    },
    Subdomains: []
  },

  OSM: {
    Normal: {
      Map: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png'
    },
    Subdomains: ['a', 'b', 'c']
  },

  SHIPXY: {
    Normal: {
      Map: 'http://m12.shipxy.com/tile.c?l=Na&m=o&x={x}&y={y}&z={z}'
    },
    Subdomains: []
  },

  SF: {
    Normal: {
      Map: 'http://map.shipformula.com/styles/klokantech-basic/{z}/{x}/{y}.png',
      Bright: 'http://map.shipformula.com/styles/osm-bright/{z}/{x}/{y}.png',
      Dark: 'http://map.shipformula.com/styles/dark-matter/{z}/{x}/{y}.png',
      Positron: 'http://map.shipformula.com/styles/positron/{z}/{x}/{y}.png'
    },
    Satellite: {
      Map: 'http://map.shipformula.com/styles/satellite/{z}/{x}/{y}.png',
      Hybrid: 'http://map.shipformula.com/styles/hybrid/{z}/{x}/{y}.png'
    },
    Subdomains: []
  },

  Local: {
    Normal: {
      Map: 'http://127.0.0.1:8083/styles/klokantech-basic/{z}/{x}/{y}.png',
      Bright: 'http://127.0.0.1:8083/styles/osm-bright/{z}/{x}/{y}.png',
      Dark: 'http://127.0.0.1:8083/styles/dark-matter/{z}/{x}/{y}.png',
      Positron: 'http://127.0.0.1:8083/styles/positron/{z}/{x}/{y}.png'
    },
    Satellite: {
      Map: 'http://127.0.0.1:8083/styles/satellite/{z}/{x}/{y}.png',
      Hybrid: 'http://127.0.0.1:8083/styles/hybrid/{z}/{x}/{y}.png'
    },
    Subdomains: []
  }
}

L.tileLayer.chinaProvider = function(type, options) {
  return new L.TileLayer.ChinaProvider(type, options)
}
