var wms_layers = [];


        var lyr_StamenTonerLite_0 = new ol.layer.Tile({
            'title': 'Stamen Toner Lite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="http://maps.stamen.com/">Map tiles by Stamen Design, under CC BY 3.0. Data by OpenStreetMap, under ODbL</a>',
                url: 'http://tile.stamen.com/toner-lite/{z}/{x}/{y}.png'
            })
        });
var lyr_image20215_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "image2021 (5)",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/image20215_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [11018910.000000, 1682065.672969, 11143800.000000, 1781066.073348]
                            })
                        });

lyr_StamenTonerLite_0.setVisible(true);lyr_image20215_1.setVisible(true);
var layersList = [lyr_StamenTonerLite_0,lyr_image20215_1];
