import React, { useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const MapComponent = () => {
  useEffect(() => {
    mapboxgl.accessToken = 'pk.eyJ1Ijoic2FzZGFpdiIsImEiOiJjbHFxa3ltNWYyNjU5MmpwOThyMXpiand1In0.561C2MfB9W-L3r8Xqvjpjg';

    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [0, 0],
      zoom: 2,
    });

    map.on('load', () => {
      map.addSource('points', {
        type: 'geojson',
        data: 'geojsonData/points.geojson',
      });

      map.addLayer({
        id: 'points',
        type: 'circle',
        source: 'points',
        paint: {
          'circle-radius': 8,
          'circle-color': '#FF0000',
        },
      });
    });

    map.on('load', () => {
      map.addSource('lines', {
        type: 'geojson',
        data: 'geojsonData/lines.geojson',
      });

      map.addLayer({
        id: 'lines',
        type: 'line',
        source: 'lines',
        paint: {
          'line-width': 2,
          'line-color': '#00FF00',
        },
      });
    });

    map.on('load', () => {
      map.addSource('polygons', {
        type: 'geojson',
        data: 'geojsonData/polygons.geojson',
      });

      map.addLayer({
        id: 'polygons',
        type: 'fill',
        source: 'polygons',
        paint: {
          'fill-color': '#0000FF',
          'fill-opacity': 0.5,
        },
      });
    });

    return () => map.remove();
  }, []);

  return <div id="map" style={{ width: '100%', height: '400px' }} />;
};

export default MapComponent;
