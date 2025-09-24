var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_UsambaraEcologicalZone_1 = new ol.format.GeoJSON();
var features_UsambaraEcologicalZone_1 = format_UsambaraEcologicalZone_1.readFeatures(json_UsambaraEcologicalZone_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UsambaraEcologicalZone_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UsambaraEcologicalZone_1.addFeatures(features_UsambaraEcologicalZone_1);
var lyr_UsambaraEcologicalZone_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UsambaraEcologicalZone_1, 
                style: style_UsambaraEcologicalZone_1,
                popuplayertitle: 'Usambara Ecological Zone',
                interactive: true,
    title: 'Usambara Ecological Zone<br />\
    <img src="styles/legend/UsambaraEcologicalZone_1_0.png" /> Buffer Zone<br />\
    <img src="styles/legend/UsambaraEcologicalZone_1_1.png" /> Forest Reserve<br />\
    <img src="styles/legend/UsambaraEcologicalZone_1_2.png" /> Settlement<br />\
    <img src="styles/legend/UsambaraEcologicalZone_1_3.png" /> Transition Area<br />\
    <img src="styles/legend/UsambaraEcologicalZone_1_4.png" /> Water<br />\
    <img src="styles/legend/UsambaraEcologicalZone_1_5.png" /> <br />' });
var format_AreaofInterestcopy_2 = new ol.format.GeoJSON();
var features_AreaofInterestcopy_2 = format_AreaofInterestcopy_2.readFeatures(json_AreaofInterestcopy_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AreaofInterestcopy_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AreaofInterestcopy_2.addFeatures(features_AreaofInterestcopy_2);
var lyr_AreaofInterestcopy_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AreaofInterestcopy_2, 
                style: style_AreaofInterestcopy_2,
                popuplayertitle: 'Area of Interest copy',
                interactive: true,
    title: 'Area of Interest copy<br />\
    <img src="styles/legend/AreaofInterestcopy_2_0.png" /> Sensitive Area<br />\
    <img src="styles/legend/AreaofInterestcopy_2_1.png" /> <br />' });
var format_AreaofInterest_3 = new ol.format.GeoJSON();
var features_AreaofInterest_3 = format_AreaofInterest_3.readFeatures(json_AreaofInterest_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AreaofInterest_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AreaofInterest_3.addFeatures(features_AreaofInterest_3);
var lyr_AreaofInterest_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AreaofInterest_3, 
                style: style_AreaofInterest_3,
                popuplayertitle: 'Area of Interest',
                interactive: true,
                title: '<img src="styles/legend/AreaofInterest_3.png" /> Area of Interest'
            });
var format_Tanzania_Forest_Reserves_4 = new ol.format.GeoJSON();
var features_Tanzania_Forest_Reserves_4 = format_Tanzania_Forest_Reserves_4.readFeatures(json_Tanzania_Forest_Reserves_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tanzania_Forest_Reserves_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tanzania_Forest_Reserves_4.addFeatures(features_Tanzania_Forest_Reserves_4);
var lyr_Tanzania_Forest_Reserves_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Tanzania_Forest_Reserves_4, 
                style: style_Tanzania_Forest_Reserves_4,
                popuplayertitle: 'Tanzania_Forest_Reserves',
                interactive: true,
                title: '<img src="styles/legend/Tanzania_Forest_Reserves_4.png" /> Tanzania_Forest_Reserves'
            });
var format_ZigiCatchment_5 = new ol.format.GeoJSON();
var features_ZigiCatchment_5 = format_ZigiCatchment_5.readFeatures(json_ZigiCatchment_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZigiCatchment_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZigiCatchment_5.addFeatures(features_ZigiCatchment_5);
var lyr_ZigiCatchment_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZigiCatchment_5, 
                style: style_ZigiCatchment_5,
                popuplayertitle: 'Zigi Catchment',
                interactive: true,
                title: '<img src="styles/legend/ZigiCatchment_5.png" /> Zigi Catchment'
            });
var format_LuengeraCatchment_6 = new ol.format.GeoJSON();
var features_LuengeraCatchment_6 = format_LuengeraCatchment_6.readFeatures(json_LuengeraCatchment_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LuengeraCatchment_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LuengeraCatchment_6.addFeatures(features_LuengeraCatchment_6);
var lyr_LuengeraCatchment_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LuengeraCatchment_6, 
                style: style_LuengeraCatchment_6,
                popuplayertitle: 'Luengera Catchment',
                interactive: true,
                title: '<img src="styles/legend/LuengeraCatchment_6.png" /> Luengera Catchment'
            });
var format_ExistingLicense_7 = new ol.format.GeoJSON();
var features_ExistingLicense_7 = format_ExistingLicense_7.readFeatures(json_ExistingLicense_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ExistingLicense_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ExistingLicense_7.addFeatures(features_ExistingLicense_7);
var lyr_ExistingLicense_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ExistingLicense_7, 
                style: style_ExistingLicense_7,
                popuplayertitle: 'Existing License',
                interactive: true,
                title: '<img src="styles/legend/ExistingLicense_7.png" /> Existing License'
            });

lyr_OSMStandard_0.setVisible(true);lyr_UsambaraEcologicalZone_1.setVisible(true);lyr_AreaofInterestcopy_2.setVisible(true);lyr_AreaofInterest_3.setVisible(true);lyr_Tanzania_Forest_Reserves_4.setVisible(true);lyr_ZigiCatchment_5.setVisible(true);lyr_LuengeraCatchment_6.setVisible(true);lyr_ExistingLicense_7.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_UsambaraEcologicalZone_1,lyr_AreaofInterestcopy_2,lyr_AreaofInterest_3,lyr_Tanzania_Forest_Reserves_4,lyr_ZigiCatchment_5,lyr_LuengeraCatchment_6,lyr_ExistingLicense_7];
lyr_UsambaraEcologicalZone_1.set('fieldAliases', {'Id': 'Id', 'Code': 'Code', 'Name': 'Name', 'AreaHa': 'AreaHa', 'AreaKm2': 'AreaKm2', 'Feature': 'Feature', });
lyr_AreaofInterestcopy_2.set('fieldAliases', {'id': 'id', 'Descriptio': 'Descriptio', });
lyr_AreaofInterest_3.set('fieldAliases', {'id': 'id', 'Descriptio': 'Descriptio', });
lyr_Tanzania_Forest_Reserves_4.set('fieldAliases', {'FID': 'FID', 'OBJECTID': 'OBJECTID', 'WDPAID': 'WDPAID', 'WDPA_PID': 'WDPA_PID', 'PA_DEF': 'PA_DEF', 'NAME': 'NAME', 'ORIG_NAME': 'ORIG_NAME', 'DESIG': 'DESIG', 'DESIG_ENG': 'DESIG_ENG', 'DESIG_TYPE': 'DESIG_TYPE', 'IUCN_CAT': 'IUCN_CAT', 'INT_CRIT': 'INT_CRIT', 'MARINE': 'MARINE', 'REP_M_AREA': 'REP_M_AREA', 'GIS_M_AREA': 'GIS_M_AREA', 'REP_AREA': 'REP_AREA', 'GIS_AREA': 'GIS_AREA', 'NO_TAKE': 'NO_TAKE', 'NO_TK_AREA': 'NO_TK_AREA', 'STATUS': 'STATUS', 'STATUS_YR': 'STATUS_YR', 'GOV_TYPE': 'GOV_TYPE', 'OWN_TYPE': 'OWN_TYPE', 'MANG_AUTH': 'MANG_AUTH', 'VERIF': 'VERIF', 'METADATAID': 'METADATAID', 'SUB_LOC': 'SUB_LOC', 'PARENT_ISO': 'PARENT_ISO', 'ISO3': 'ISO3', 'SUPP_INFO': 'SUPP_INFO', 'CONS_OBJ': 'CONS_OBJ', 'Shape__Are': 'Shape__Are', 'Shape__Len': 'Shape__Len', });
lyr_ZigiCatchment_5.set('fieldAliases', {'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'CAT4CC_': 'CAT4CC_', 'CAT4CC_ID': 'CAT4CC_ID', 'AREA_1': 'AREA_1', 'Name': 'Name', });
lyr_LuengeraCatchment_6.set('fieldAliases', {'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'CAT5CC_': 'CAT5CC_', 'CAT5CC_ID': 'CAT5CC_ID', 'Name': 'Name', });
lyr_ExistingLicense_7.set('fieldAliases', {'Name': 'Name', 'Code': 'Code', 'Spatial Re': 'Spatial Re', 'Part Name': 'Part Name', 'Order': 'Order', 'Latitude D': 'Latitude D', 'Latitude M': 'Latitude M', 'Latitude S': 'Latitude S', 'Longitude': 'Longitude', 'Longitud_1': 'Longitud_1', 'Longitud_2': 'Longitud_2', 'Latitude': 'Latitude', 'Longitud_3': 'Longitud_3', });
lyr_UsambaraEcologicalZone_1.set('fieldImages', {'Id': 'Range', 'Code': 'Range', 'Name': 'TextEdit', 'AreaHa': 'TextEdit', 'AreaKm2': 'TextEdit', 'Feature': 'TextEdit', });
lyr_AreaofInterestcopy_2.set('fieldImages', {'id': 'TextEdit', 'Descriptio': 'TextEdit', });
lyr_AreaofInterest_3.set('fieldImages', {'id': 'TextEdit', 'Descriptio': 'TextEdit', });
lyr_Tanzania_Forest_Reserves_4.set('fieldImages', {'FID': 'Range', 'OBJECTID': 'Range', 'WDPAID': 'Range', 'WDPA_PID': 'TextEdit', 'PA_DEF': 'TextEdit', 'NAME': 'TextEdit', 'ORIG_NAME': 'TextEdit', 'DESIG': 'TextEdit', 'DESIG_ENG': 'TextEdit', 'DESIG_TYPE': 'TextEdit', 'IUCN_CAT': 'TextEdit', 'INT_CRIT': 'TextEdit', 'MARINE': 'TextEdit', 'REP_M_AREA': 'TextEdit', 'GIS_M_AREA': 'TextEdit', 'REP_AREA': 'TextEdit', 'GIS_AREA': 'TextEdit', 'NO_TAKE': 'TextEdit', 'NO_TK_AREA': 'TextEdit', 'STATUS': 'TextEdit', 'STATUS_YR': 'Range', 'GOV_TYPE': 'TextEdit', 'OWN_TYPE': 'TextEdit', 'MANG_AUTH': 'TextEdit', 'VERIF': 'TextEdit', 'METADATAID': 'Range', 'SUB_LOC': 'TextEdit', 'PARENT_ISO': 'TextEdit', 'ISO3': 'TextEdit', 'SUPP_INFO': 'TextEdit', 'CONS_OBJ': 'TextEdit', 'Shape__Are': 'TextEdit', 'Shape__Len': 'TextEdit', });
lyr_ZigiCatchment_5.set('fieldImages', {'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'CAT4CC_': 'TextEdit', 'CAT4CC_ID': 'TextEdit', 'AREA_1': 'TextEdit', 'Name': 'TextEdit', });
lyr_LuengeraCatchment_6.set('fieldImages', {'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'CAT5CC_': 'TextEdit', 'CAT5CC_ID': 'TextEdit', 'Name': 'TextEdit', });
lyr_ExistingLicense_7.set('fieldImages', {'Name': 'TextEdit', 'Code': 'TextEdit', 'Spatial Re': 'TextEdit', 'Part Name': 'TextEdit', 'Order': 'TextEdit', 'Latitude D': 'TextEdit', 'Latitude M': 'TextEdit', 'Latitude S': 'TextEdit', 'Longitude': 'TextEdit', 'Longitud_1': 'TextEdit', 'Longitud_2': 'TextEdit', 'Latitude': 'TextEdit', 'Longitud_3': 'TextEdit', });
lyr_UsambaraEcologicalZone_1.set('fieldLabels', {'Id': 'no label', 'Code': 'no label', 'Name': 'no label', 'AreaHa': 'no label', 'AreaKm2': 'no label', 'Feature': 'no label', });
lyr_AreaofInterestcopy_2.set('fieldLabels', {'id': 'no label', 'Descriptio': 'no label', });
lyr_AreaofInterest_3.set('fieldLabels', {'id': 'no label', 'Descriptio': 'no label', });
lyr_Tanzania_Forest_Reserves_4.set('fieldLabels', {'FID': 'no label', 'OBJECTID': 'no label', 'WDPAID': 'no label', 'WDPA_PID': 'no label', 'PA_DEF': 'no label', 'NAME': 'no label', 'ORIG_NAME': 'no label', 'DESIG': 'no label', 'DESIG_ENG': 'no label', 'DESIG_TYPE': 'no label', 'IUCN_CAT': 'no label', 'INT_CRIT': 'no label', 'MARINE': 'no label', 'REP_M_AREA': 'no label', 'GIS_M_AREA': 'no label', 'REP_AREA': 'no label', 'GIS_AREA': 'no label', 'NO_TAKE': 'no label', 'NO_TK_AREA': 'no label', 'STATUS': 'no label', 'STATUS_YR': 'no label', 'GOV_TYPE': 'no label', 'OWN_TYPE': 'no label', 'MANG_AUTH': 'no label', 'VERIF': 'no label', 'METADATAID': 'no label', 'SUB_LOC': 'no label', 'PARENT_ISO': 'no label', 'ISO3': 'no label', 'SUPP_INFO': 'no label', 'CONS_OBJ': 'no label', 'Shape__Are': 'no label', 'Shape__Len': 'no label', });
lyr_ZigiCatchment_5.set('fieldLabels', {'AREA': 'no label', 'PERIMETER': 'no label', 'CAT4CC_': 'no label', 'CAT4CC_ID': 'no label', 'AREA_1': 'no label', 'Name': 'no label', });
lyr_LuengeraCatchment_6.set('fieldLabels', {'AREA': 'no label', 'PERIMETER': 'no label', 'CAT5CC_': 'no label', 'CAT5CC_ID': 'no label', 'Name': 'no label', });
lyr_ExistingLicense_7.set('fieldLabels', {'Name': 'no label', 'Code': 'no label', 'Spatial Re': 'no label', 'Part Name': 'no label', 'Order': 'no label', 'Latitude D': 'no label', 'Latitude M': 'no label', 'Latitude S': 'no label', 'Longitude': 'no label', 'Longitud_1': 'no label', 'Longitud_2': 'no label', 'Latitude': 'no label', 'Longitud_3': 'no label', });
lyr_ExistingLicense_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});