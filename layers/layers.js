var wms_layers = [];


var vectorTileUrl_caba_manzanas_0 = 'layers/caba_manzanas_0-pbf/{z}/{x}/{y}.pbf';
var vectorTileSource_caba_manzanas_0 = new ol.source.VectorTile({
    format: new ol.format.MVT({
            featureClass: ol.Feature,
            layerName: '_mvtLayer_'
        }),
    tileSize: 256,
    cacheSize: 512,
    minZoom: 8,
    maxZoom: 17,
    url: vectorTileUrl_caba_manzanas_0,
    attributions: ' '
});
var lyr_caba_manzanas_0 = new ol.layer.VectorTile({
    declutter: false,
    source: vectorTileSource_caba_manzanas_0,
    sourceType: 'pbf',
    popuplayertitle: 'caba_manzanas',
    extent: ol.proj.transformExtent([-6515756.340074535, -4123890.6828402397, -6493668.405672419, -4099649.200396934], 'EPSG:3857', 'EPSG:3857'),
    interactive: false,
    style: style_caba_manzanas_0,
    title: '<img src="styles/legend/caba_manzanas_0.png" /> caba_manzanas'
});


var vectorTileUrl_espaciosverdescatastralesespaciosverdescatastro_espacios_verdes_08042020shp_1 = 'layers/espaciosverdescatastralesespaciosverdescatastro_espacios_verdes_08042020shp_1-pbf/{z}/{x}/{y}.pbf';
var vectorTileSource_espaciosverdescatastralesespaciosverdescatastro_espacios_verdes_08042020shp_1 = new ol.source.VectorTile({
    format: new ol.format.MVT({
            featureClass: ol.Feature,
            layerName: '_mvtLayer_'
        }),
    tileSize: 256,
    cacheSize: 512,
    minZoom: 8,
    maxZoom: 17,
    url: vectorTileUrl_espaciosverdescatastralesespaciosverdescatastro_espacios_verdes_08042020shp_1,
    attributions: ' '
});
var lyr_espaciosverdescatastralesespaciosverdescatastro_espacios_verdes_08042020shp_1 = new ol.layer.VectorTile({
    declutter: false,
    source: vectorTileSource_espaciosverdescatastralesespaciosverdescatastro_espacios_verdes_08042020shp_1,
    sourceType: 'pbf',
    popuplayertitle: 'espacios-verdes-catastrales — espacios verdes/catastro_espacios_verdes_08042020.shp',
    extent: ol.proj.transformExtent([93723.44180034101, 91622.2653622916, 111323.73819096386, 111396.35154532734], 'EPSG:3857', 'EPSG:3857'),
    interactive: false,
    style: style_espaciosverdescatastralesespaciosverdescatastro_espacios_verdes_08042020shp_1,
    title: '<img src="styles/legend/espaciosverdescatastralesespaciosverdescatastro_espacios_verdes_08042020shp_1.png" /> espacios-verdes-catastrales — espacios verdes/catastro_espacios_verdes_08042020.shp'
});


var vectorTileUrl_espacioverdeprivadoespacio_verde_privado_wgs84shp_2 = 'layers/espacioverdeprivadoespacio_verde_privado_wgs84shp_2-pbf/{z}/{x}/{y}.pbf';
var vectorTileSource_espacioverdeprivadoespacio_verde_privado_wgs84shp_2 = new ol.source.VectorTile({
    format: new ol.format.MVT({
            featureClass: ol.Feature,
            layerName: '_mvtLayer_'
        }),
    tileSize: 256,
    cacheSize: 512,
    minZoom: 8,
    maxZoom: 17,
    url: vectorTileUrl_espacioverdeprivadoespacio_verde_privado_wgs84shp_2,
    attributions: ' '
});
var lyr_espacioverdeprivadoespacio_verde_privado_wgs84shp_2 = new ol.layer.VectorTile({
    declutter: false,
    source: vectorTileSource_espacioverdeprivadoespacio_verde_privado_wgs84shp_2,
    sourceType: 'pbf',
    popuplayertitle: 'espacio-verde-privado — espacio_verde_privado_wgs84.shp',
    extent: ol.proj.transformExtent([-6514890.53930515, -4123703.4018661673, -6494051.612921144, -4100251.8823960517], 'EPSG:3857', 'EPSG:3857'),
    interactive: false,
    style: style_espacioverdeprivadoespacio_verde_privado_wgs84shp_2,
    title: '<img src="styles/legend/espacioverdeprivadoespacio_verde_privado_wgs84shp_2.png" /> espacio-verde-privado — espacio_verde_privado_wgs84.shp'
});


var vectorTileUrl_callejeroetiqueta_3 = 'layers/callejeroetiqueta_3-pbf/{z}/{x}/{y}.pbf';
var vectorTileSource_callejeroetiqueta_3 = new ol.source.VectorTile({
    format: new ol.format.MVT({
            featureClass: ol.Feature,
            layerName: '_mvtLayer_'
        }),
    tileSize: 256,
    cacheSize: 512,
    minZoom: 8,
    maxZoom: 17,
    url: vectorTileUrl_callejeroetiqueta_3,
    attributions: ' '
});
var lyr_callejeroetiqueta_3 = new ol.layer.VectorTile({
    declutter: false,
    source: vectorTileSource_callejeroetiqueta_3,
    sourceType: 'pbf',
    popuplayertitle: 'callejero etiqueta',
    extent: ol.proj.transformExtent([-6516004.401336309, -4124082.2194137587, -6494412.811036345, -4099923.20947248], 'EPSG:3857', 'EPSG:3857'),
    interactive: false,
    style: style_callejeroetiqueta_3,
    title: 'callejero etiqueta'
});

var format_RPZ1_4 = new ol.format.GeoJSON();
var features_RPZ1_4 = format_RPZ1_4.readFeatures(json_RPZ1_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RPZ1_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RPZ1_4.addFeatures(features_RPZ1_4);
var lyr_RPZ1_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RPZ1_4, 
                style: style_RPZ1_4,
                popuplayertitle: 'RP Z1',
                interactive: true,
                title: '<img src="styles/legend/RPZ1_4.png" /> RP Z1'
            });
var group_CatastroZona1 = new ol.layer.Group({
                                layers: [lyr_RPZ1_4,],
                                fold: 'open',
                                title: 'Catastro Zona 1'});
var group_BASE = new ol.layer.Group({
                                layers: [lyr_caba_manzanas_0,lyr_espaciosverdescatastralesespaciosverdescatastro_espacios_verdes_08042020shp_1,lyr_espacioverdeprivadoespacio_verde_privado_wgs84shp_2,lyr_callejeroetiqueta_3,],
                                fold: 'close',
                                title: 'BASE'});

lyr_caba_manzanas_0.setVisible(true);lyr_espaciosverdescatastralesespaciosverdescatastro_espacios_verdes_08042020shp_1.setVisible(true);lyr_espacioverdeprivadoespacio_verde_privado_wgs84shp_2.setVisible(true);lyr_callejeroetiqueta_3.setVisible(true);lyr_RPZ1_4.setVisible(true);
var layersList = [group_BASE,group_CatastroZona1];
lyr_caba_manzanas_0.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'ZONA': 'ZONA', });
lyr_espaciosverdescatastralesespaciosverdescatastro_espacios_verdes_08042020shp_1.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'SECCION': 'SECCION', 'MANZANA': 'MANZANA', 'PARCELA': 'PARCELA', 'SMP': 'SMP', 'TIPO_EV': 'TIPO_EV', 'NOMBRE_EV': 'NOMBRE_EV', 'UBICACION': 'UBICACION', 'OBS': 'OBS', 'BARRIO': 'BARRIO', 'COMUNA': 'COMUNA', 'SUPERFICIE': 'SUPERFICIE', 'LEY': 'LEY', 'FECHA_LEY': 'FECHA_LEY', 'ORDENANZA': 'ORDENANZA', 'FECHA_ORD': 'FECHA_ORD', 'DECRETO': 'DECRETO', 'FECHA_DEC': 'FECHA_DEC', 'BOLETIN_OF': 'BOLETIN_OF', 'FECHA_BO': 'FECHA_BO', 'FUENTE1': 'FUENTE1', 'FUENTE2': 'FUENTE2', 'FUENTE3': 'FUENTE3', 'FUENTE4': 'FUENTE4', 'NIVEL': 'NIVEL', });
lyr_espacioverdeprivadoespacio_verde_privado_wgs84shp_2.set('fieldAliases', {'fid': 'fid', 'id_ev_priv': 'id_ev_priv', 'nombre': 'nombre', 'fuente': 'fuente', 'ubicacion': 'ubicacion', 'Decreto': 'Decreto', 'Ordenaza': 'Ordenaza', 'Boletin': 'Boletin', 'fecha_decr': 'fecha_decr', 'fecha_orde': 'fecha_orde', 'fecha_bole': 'fecha_bole', 'Nombre_ori': 'Nombre_ori', 'Observacio': 'Observacio', 'BARRIO': 'BARRIO', 'COMUNA': 'COMUNA', 'area': 'area', 'perimeter': 'perimeter', 'TIPO_ESPAC': 'TIPO_ESPAC', 'nom_mapa': 'nom_mapa', });
lyr_callejeroetiqueta_3.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'codigo': 'codigo', 'nomoficial': 'nomoficial', 'alt_izqini': 'alt_izqini', 'alt_izqfin': 'alt_izqfin', 'alt_derini': 'alt_derini', 'alt_derfin': 'alt_derfin', 'nomanter': 'nomanter', 'nom_mapa': 'nom_mapa', 'tipo_c': 'tipo_c', 'long': 'long', 'sentido': 'sentido', 'cod_sent': 'cod_sent', 'observa': 'observa', 'bicisenda': 'bicisenda', 'lado_ciclo': 'lado_ciclo', 'recorrid_x': 'recorrid_x', 'ciclo_obse': 'ciclo_obse', 'tooltip_bi': 'tooltip_bi', 'red_jerarq': 'red_jerarq', 'red_tp': 'red_tp', 'ffcc': 'ffcc', 'tipo_ffcc': 'tipo_ffcc', 'COMUNA': 'COMUNA', 'COM_PAR': 'COM_PAR', 'COM_IMPAR': 'COM_IMPAR', 'BARRIO': 'BARRIO', 'BARRIO_PAR': 'BARRIO_PAR', 'BARRIO_IMP': 'BARRIO_IMP', });
lyr_RPZ1_4.set('fieldAliases', {'fid': 'fid', 'text': 'text', });
lyr_caba_manzanas_0.set('fieldImages', {'fid': '', 'ID': 'Range', 'ZONA': 'TextEdit', });
lyr_espaciosverdescatastralesespaciosverdescatastro_espacios_verdes_08042020shp_1.set('fieldImages', {'fid': '', 'OBJECTID': 'TextEdit', 'SECCION': 'TextEdit', 'MANZANA': 'TextEdit', 'PARCELA': 'TextEdit', 'SMP': 'TextEdit', 'TIPO_EV': 'TextEdit', 'NOMBRE_EV': 'TextEdit', 'UBICACION': 'TextEdit', 'OBS': 'TextEdit', 'BARRIO': 'TextEdit', 'COMUNA': 'TextEdit', 'SUPERFICIE': 'TextEdit', 'LEY': 'TextEdit', 'FECHA_LEY': 'TextEdit', 'ORDENANZA': 'TextEdit', 'FECHA_ORD': 'TextEdit', 'DECRETO': 'TextEdit', 'FECHA_DEC': 'TextEdit', 'BOLETIN_OF': 'TextEdit', 'FECHA_BO': 'DateTime', 'FUENTE1': 'TextEdit', 'FUENTE2': 'TextEdit', 'FUENTE3': 'TextEdit', 'FUENTE4': 'TextEdit', 'NIVEL': 'TextEdit', });
lyr_espacioverdeprivadoespacio_verde_privado_wgs84shp_2.set('fieldImages', {'fid': '', 'id_ev_priv': 'TextEdit', 'nombre': 'TextEdit', 'fuente': 'TextEdit', 'ubicacion': 'TextEdit', 'Decreto': 'TextEdit', 'Ordenaza': 'TextEdit', 'Boletin': 'TextEdit', 'fecha_decr': 'TextEdit', 'fecha_orde': 'TextEdit', 'fecha_bole': 'TextEdit', 'Nombre_ori': 'TextEdit', 'Observacio': 'TextEdit', 'BARRIO': 'TextEdit', 'COMUNA': 'Range', 'area': 'TextEdit', 'perimeter': 'TextEdit', 'TIPO_ESPAC': 'TextEdit', 'nom_mapa': 'TextEdit', });
lyr_callejeroetiqueta_3.set('fieldImages', {'fid': '', 'id': 'Range', 'codigo': 'Range', 'nomoficial': 'TextEdit', 'alt_izqini': 'Range', 'alt_izqfin': 'Range', 'alt_derini': 'Range', 'alt_derfin': 'Range', 'nomanter': 'TextEdit', 'nom_mapa': 'TextEdit', 'tipo_c': 'TextEdit', 'long': 'TextEdit', 'sentido': 'TextEdit', 'cod_sent': 'Range', 'observa': 'TextEdit', 'bicisenda': 'TextEdit', 'lado_ciclo': 'TextEdit', 'recorrid_x': 'TextEdit', 'ciclo_obse': 'TextEdit', 'tooltip_bi': 'TextEdit', 'red_jerarq': 'TextEdit', 'red_tp': 'TextEdit', 'ffcc': 'TextEdit', 'tipo_ffcc': 'TextEdit', 'COMUNA': 'Range', 'COM_PAR': 'Range', 'COM_IMPAR': 'Range', 'BARRIO': 'TextEdit', 'BARRIO_PAR': 'TextEdit', 'BARRIO_IMP': 'TextEdit', });
lyr_RPZ1_4.set('fieldImages', {'fid': 'TextEdit', 'text': 'TextEdit', });
lyr_caba_manzanas_0.set('fieldLabels', {'fid': 'no label', 'ID': 'no label', 'ZONA': 'no label', });
lyr_espaciosverdescatastralesespaciosverdescatastro_espacios_verdes_08042020shp_1.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'SECCION': 'no label', 'MANZANA': 'no label', 'PARCELA': 'no label', 'SMP': 'no label', 'TIPO_EV': 'no label', 'NOMBRE_EV': 'no label', 'UBICACION': 'no label', 'OBS': 'no label', 'BARRIO': 'no label', 'COMUNA': 'no label', 'SUPERFICIE': 'no label', 'LEY': 'no label', 'FECHA_LEY': 'no label', 'ORDENANZA': 'no label', 'FECHA_ORD': 'no label', 'DECRETO': 'no label', 'FECHA_DEC': 'no label', 'BOLETIN_OF': 'no label', 'FECHA_BO': 'no label', 'FUENTE1': 'no label', 'FUENTE2': 'no label', 'FUENTE3': 'no label', 'FUENTE4': 'no label', 'NIVEL': 'no label', });
lyr_espacioverdeprivadoespacio_verde_privado_wgs84shp_2.set('fieldLabels', {'fid': 'no label', 'id_ev_priv': 'no label', 'nombre': 'no label', 'fuente': 'no label', 'ubicacion': 'no label', 'Decreto': 'no label', 'Ordenaza': 'no label', 'Boletin': 'no label', 'fecha_decr': 'no label', 'fecha_orde': 'no label', 'fecha_bole': 'no label', 'Nombre_ori': 'no label', 'Observacio': 'no label', 'BARRIO': 'no label', 'COMUNA': 'no label', 'area': 'no label', 'perimeter': 'no label', 'TIPO_ESPAC': 'no label', 'nom_mapa': 'no label', });
lyr_callejeroetiqueta_3.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'codigo': 'no label', 'nomoficial': 'no label', 'alt_izqini': 'no label', 'alt_izqfin': 'no label', 'alt_derini': 'no label', 'alt_derfin': 'no label', 'nomanter': 'no label', 'nom_mapa': 'no label', 'tipo_c': 'no label', 'long': 'no label', 'sentido': 'no label', 'cod_sent': 'no label', 'observa': 'no label', 'bicisenda': 'no label', 'lado_ciclo': 'no label', 'recorrid_x': 'no label', 'ciclo_obse': 'no label', 'tooltip_bi': 'no label', 'red_jerarq': 'no label', 'red_tp': 'no label', 'ffcc': 'no label', 'tipo_ffcc': 'no label', 'COMUNA': 'no label', 'COM_PAR': 'no label', 'COM_IMPAR': 'no label', 'BARRIO': 'no label', 'BARRIO_PAR': 'no label', 'BARRIO_IMP': 'no label', });
lyr_RPZ1_4.set('fieldLabels', {'fid': 'hidden field', 'text': 'no label', });
lyr_RPZ1_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});