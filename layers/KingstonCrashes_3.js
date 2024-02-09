document.getElementById('dateFilterCheckbox').addEventListener('change', function () {
    let applyFilter = this.checked;
    var source = lyr_KingstonCrashes_3.getSource(); // Updated to use the correct variable name
    var features = source.getFeatures();

    if (applyFilter) {
        // Apply filter logic
        var currentDate = new Date();
        var pastDate = new Date(currentDate.setFullYear(currentDate.getFullYear() - 5));
        var formattedPastDate = pastDate.toISOString().split('T')[0].replace(/-/g, '');

        var filteredFeatures = features.filter(function (feature) {
            var accidentDate = feature.get('ACCIDENT_D');
            return accidentDate >= formattedPastDate;
        });

        source.clear();
        source.addFeatures(filteredFeatures);
    } else {
        // Remove filter logic
        source.clear();
        source.addFeatures(new ol.format.GeoJSON().readFeatures(json_KingstonCrashes_3, {
            dataProjection: 'EPSG:4326',
            featureProjection: 'EPSG:3857'
        }));
    }
});

// options to  not show vicroads road crash, option to show crash number, options to show crash by subburb.

// FILTERING BY LOCAL ROADS, i.e., whether or not the 'RMA' field is "Local Road"
document.getElementById('localRoadFilterCheckbox').addEventListener('change', function () {
    let applyFilter = this.checked;
    var source = lyr_KingstonCrashes_3.getSource(); // Updated to use the correct variable name
    var features = source.getFeatures();

    if (applyFilter) {
        // Apply filter logic
        var filteredFeatures = features.filter(function (feature) {
            var roadType = feature.get('RMA');
            return roadType === "Local Road";
        });

        source.clear();
        source.addFeatures(filteredFeatures);
    } else {
        // Remove filter logic
        source.clear();
        source.addFeatures(new ol.format.GeoJSON().readFeatures(json_KingstonCrashes_3, {
            dataProjection: 'EPSG:4326',
            featureProjection: 'EPSG:3857'
        }));
    }
});

var json_KingstonCrashes_3;

fetch('https://vicroadsopendatastorehouse.vicroads.vic.gov.au/opendata/Road_Safety/VICTORIAN_ROAD_CRASH_DATA.geojson')
.then(response => {
    if (!response.ok) {
    throw new Error('Network response was not ok');
    }
    return response.json(); // Parses the response body as JSON
})
.then(data => {
    json_KingstonCrashes_3 = data;
    // Now 'json_KingstonCrashes_3' contains your GeoJSON data
})
.catch(error => {
    console.error('There was a problem with your fetch operation:', error);
});
  