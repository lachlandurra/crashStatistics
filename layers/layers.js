var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_KingstonSuburb_1 = new ol.format.GeoJSON();
var features_KingstonSuburb_1 = format_KingstonSuburb_1.readFeatures(json_KingstonSuburb_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KingstonSuburb_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KingstonSuburb_1.addFeatures(features_KingstonSuburb_1);
var lyr_KingstonSuburb_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_KingstonSuburb_1, 
                style: style_KingstonSuburb_1,
                interactive: true,
                title: '<img src="styles/legend/KingstonSuburb_1.png" /> Kingston Suburb'
            });
var format_KingstonLGA_2 = new ol.format.GeoJSON();
var features_KingstonLGA_2 = format_KingstonLGA_2.readFeatures(json_KingstonLGA_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KingstonLGA_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KingstonLGA_2.addFeatures(features_KingstonLGA_2);
var lyr_KingstonLGA_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_KingstonLGA_2, 
                style: style_KingstonLGA_2,
                interactive: true,
                title: '<img src="styles/legend/KingstonLGA_2.png" /> Kingston LGA'
            });
var format_KingstonCrashes_3 = new ol.format.GeoJSON();
var features_KingstonCrashes_3 = format_KingstonCrashes_3.readFeatures(json_KingstonCrashes_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KingstonCrashes_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KingstonCrashes_3.addFeatures(features_KingstonCrashes_3);
var lyr_KingstonCrashes_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_KingstonCrashes_3, 
                style: style_KingstonCrashes_3,
                interactive: true,
                title: '<img src="styles/legend/KingstonCrashes_3.png" /> KingstonCrashes'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_KingstonSuburb_1.setVisible(true);lyr_KingstonLGA_2.setVisible(true);lyr_KingstonCrashes_3.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_KingstonSuburb_1,lyr_KingstonLGA_2,lyr_KingstonCrashes_3];
lyr_KingstonSuburb_1.set('fieldAliases', {'PFI': 'PFI', 'LOCALITY_NAME': 'LOCALITY_NAME', 'GAZETTED_LOCALITY_NAME': 'GAZETTED_LOCALITY_NAME', 'VICNAMES_ID': 'VICNAMES_ID', 'PFI_CREATED': 'PFI_CREATED', 'UFI': 'UFI', 'UFI_CREATED': 'UFI_CREATED', 'UFI_OLD': 'UFI_OLD', 'GIX': 'GIX', });
lyr_KingstonLGA_2.set('fieldAliases', {'PFI': 'PFI', 'LGA_CODE': 'LGA_CODE', 'LGA_NAME': 'LGA_NAME', 'LGA_OFFICIAL_NAME': 'LGA_OFFICIAL_NAME', 'GAZETTAL_REGISTRATION': 'GAZETTAL_REGISTRATION', 'ABS_LGA_CODE': 'ABS_LGA_CODE', 'PFI_CREATED': 'PFI_CREATED', 'UFI': 'UFI', 'UFI_CREATED': 'UFI_CREATED', 'UFI_OLD': 'UFI_OLD', 'GIX': 'GIX', });
lyr_KingstonCrashes_3.set('fieldAliases', {'ACCIDENT_N': 'ACCIDENT_N', 'ACCIDENT_D': 'ACCIDENT_D', 'ACCIDENT_T': 'ACCIDENT_T', 'ACCIDENT_1': 'ACCIDENT_1', 'DAY_OF_WEE': 'DAY_OF_WEE', 'DCA_CODE': 'DCA_CODE', 'LIGHT_COND': 'LIGHT_COND', 'POLICE_ATT': 'POLICE_ATT', 'ROAD_GEOME': 'ROAD_GEOME', 'SEVERITY': 'SEVERITY', 'SPEED_ZONE': 'SPEED_ZONE', 'RUN_OFFROA': 'RUN_OFFROA', 'NODE_ID': 'NODE_ID', 'NODE_TYPE': 'NODE_TYPE', 'LGA_NAME': 'LGA_NAME', 'LATITUDE': 'LATITUDE', 'LONGITUDE': 'LONGITUDE', 'VICGRID_X': 'VICGRID_X', 'VICGRID_Y': 'VICGRID_Y', 'TOTAL_PERS': 'TOTAL_PERS', 'INJ_OR_FAT': 'INJ_OR_FAT', 'FATALITY': 'FATALITY', 'SERIOUSINJ': 'SERIOUSINJ', 'OTHERINJUR': 'OTHERINJUR', 'NONINJURED': 'NONINJURED', 'MALES': 'MALES', 'FEMALES': 'FEMALES', 'BICYCLIST': 'BICYCLIST', 'PASSENGER': 'PASSENGER', 'DRIVER': 'DRIVER', 'PEDESTRIAN': 'PEDESTRIAN', 'PILLION': 'PILLION', 'MOTORCYCLI': 'MOTORCYCLI', 'UNKNOWN': 'UNKNOWN', 'PED_CYCLIS': 'PED_CYCLIS', 'PED_CYCL_1': 'PED_CYCL_1', 'OLD_PED_65': 'OLD_PED_65', 'OLD_DRIVER': 'OLD_DRIVER', 'YOUNG_DRIV': 'YOUNG_DRIV', 'NO_OF_VEHI': 'NO_OF_VEHI', 'HEAVYVEHIC': 'HEAVYVEHIC', 'PASSENGERV': 'PASSENGERV', 'MOTORCYCLE': 'MOTORCYCLE', 'PT_VEHICLE': 'PT_VEHICLE', 'DEG_URBAN_': 'DEG_URBAN_', 'SRNS': 'SRNS', 'RMA': 'RMA', 'DIVIDED': 'DIVIDED', 'STAT_DIV_N': 'STAT_DIV_N', });
lyr_KingstonSuburb_1.set('fieldImages', {'PFI': 'TextEdit', 'LOCALITY_NAME': 'TextEdit', 'GAZETTED_LOCALITY_NAME': 'TextEdit', 'VICNAMES_ID': 'Range', 'PFI_CREATED': 'DateTime', 'UFI': 'TextEdit', 'UFI_CREATED': 'DateTime', 'UFI_OLD': 'TextEdit', 'GIX': 'TextEdit', });
lyr_KingstonLGA_2.set('fieldImages', {'PFI': 'TextEdit', 'LGA_CODE': 'TextEdit', 'LGA_NAME': 'TextEdit', 'LGA_OFFICIAL_NAME': 'TextEdit', 'GAZETTAL_REGISTRATION': 'TextEdit', 'ABS_LGA_CODE': 'TextEdit', 'PFI_CREATED': 'DateTime', 'UFI': 'TextEdit', 'UFI_CREATED': 'DateTime', 'UFI_OLD': 'TextEdit', 'GIX': 'TextEdit', });
lyr_KingstonCrashes_3.set('fieldImages', {'ACCIDENT_N': '', 'ACCIDENT_D': '', 'ACCIDENT_T': '', 'ACCIDENT_1': '', 'DAY_OF_WEE': '', 'DCA_CODE': '', 'LIGHT_COND': '', 'POLICE_ATT': '', 'ROAD_GEOME': '', 'SEVERITY': '', 'SPEED_ZONE': '', 'RUN_OFFROA': '', 'NODE_ID': '', 'NODE_TYPE': '', 'LGA_NAME': '', 'LATITUDE': '', 'LONGITUDE': '', 'VICGRID_X': '', 'VICGRID_Y': '', 'TOTAL_PERS': '', 'INJ_OR_FAT': '', 'FATALITY': '', 'SERIOUSINJ': '', 'OTHERINJUR': '', 'NONINJURED': '', 'MALES': '', 'FEMALES': '', 'BICYCLIST': '', 'PASSENGER': '', 'DRIVER': '', 'PEDESTRIAN': '', 'PILLION': '', 'MOTORCYCLI': '', 'UNKNOWN': '', 'PED_CYCLIS': '', 'PED_CYCL_1': '', 'OLD_PED_65': '', 'OLD_DRIVER': '', 'YOUNG_DRIV': '', 'NO_OF_VEHI': '', 'HEAVYVEHIC': '', 'PASSENGERV': '', 'MOTORCYCLE': '', 'PT_VEHICLE': '', 'DEG_URBAN_': '', 'SRNS': '', 'RMA': '', 'DIVIDED': '', 'STAT_DIV_N': '', });
lyr_KingstonSuburb_1.set('fieldLabels', {'PFI': 'no label', 'LOCALITY_NAME': 'no label', 'GAZETTED_LOCALITY_NAME': 'no label', 'VICNAMES_ID': 'no label', 'PFI_CREATED': 'no label', 'UFI': 'no label', 'UFI_CREATED': 'no label', 'UFI_OLD': 'no label', 'GIX': 'no label', });
lyr_KingstonLGA_2.set('fieldLabels', {'PFI': 'no label', 'LGA_CODE': 'no label', 'LGA_NAME': 'no label', 'LGA_OFFICIAL_NAME': 'no label', 'GAZETTAL_REGISTRATION': 'no label', 'ABS_LGA_CODE': 'no label', 'PFI_CREATED': 'no label', 'UFI': 'no label', 'UFI_CREATED': 'no label', 'UFI_OLD': 'no label', 'GIX': 'no label', });
lyr_KingstonCrashes_3.set('fieldLabels', {'ACCIDENT_N': 'inline label - always visible', 'ACCIDENT_D': 'inline label - always visible', 'ACCIDENT_T': 'inline label - always visible', 'ACCIDENT_1': 'inline label - always visible', 'DAY_OF_WEE': 'inline label - always visible', 'DCA_CODE': 'inline label - always visible', 'LIGHT_COND': 'inline label - always visible', 'POLICE_ATT': 'inline label - always visible', 'ROAD_GEOME': 'inline label - always visible', 'SEVERITY': 'inline label - always visible', 'SPEED_ZONE': 'inline label - always visible', 'RUN_OFFROA': 'inline label - always visible', 'NODE_ID': 'inline label - always visible', 'NODE_TYPE': 'inline label - always visible', 'LGA_NAME': 'inline label - always visible', 'LATITUDE': 'inline label - always visible', 'LONGITUDE': 'inline label - always visible', 'VICGRID_X': 'inline label - always visible', 'VICGRID_Y': 'inline label - always visible', 'TOTAL_PERS': 'inline label - always visible', 'INJ_OR_FAT': 'inline label - always visible', 'FATALITY': 'inline label - always visible', 'SERIOUSINJ': 'inline label - always visible', 'OTHERINJUR': 'inline label - always visible', 'NONINJURED': 'inline label - always visible', 'MALES': 'inline label - always visible', 'FEMALES': 'inline label - always visible', 'BICYCLIST': 'inline label - always visible', 'PASSENGER': 'inline label - always visible', 'DRIVER': 'inline label - always visible', 'PEDESTRIAN': 'inline label - always visible', 'PILLION': 'inline label - always visible', 'MOTORCYCLI': 'inline label - always visible', 'UNKNOWN': 'inline label - always visible', 'PED_CYCLIS': 'inline label - always visible', 'PED_CYCL_1': 'inline label - always visible', 'OLD_PED_65': 'inline label - always visible', 'OLD_DRIVER': 'inline label - always visible', 'YOUNG_DRIV': 'inline label - always visible', 'NO_OF_VEHI': 'inline label - always visible', 'HEAVYVEHIC': 'inline label - always visible', 'PASSENGERV': 'inline label - always visible', 'MOTORCYCLE': 'inline label - always visible', 'PT_VEHICLE': 'inline label - always visible', 'DEG_URBAN_': 'inline label - always visible', 'SRNS': 'inline label - always visible', 'RMA': 'inline label - always visible', 'DIVIDED': 'inline label - always visible', 'STAT_DIV_N': 'inline label - always visible', });
lyr_KingstonCrashes_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});