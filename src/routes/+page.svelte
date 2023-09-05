<script lang="ts">
  import { Map, Geocoder, Marker, controls } from "@beyonk/svelte-mapbox";
  import { onMount } from "svelte";

  let mapComponent: Map;

  onMount(() => {
    mapComponent.setCenter([-121.789, 41.874]);
    mapComponent.setZoom(5);
  });

  const addLayers = () => {
    const map = mapComponent.getMap();
    map.addSource("radar", {
      type: "image",
      url: "/test.png",
      coordinates: [
        [-128, 54.9],
        [-104.6, 54.9],
        [-106.5, 40.31],
        [-126, 40.31],
      ],
    });
    map.addLayer({
      id: "radar-layer",
      type: "raster",
      source: "radar",
      paint: {
        "raster-fade-duration": 0,
        "raster-opacity": 0.75,
      },
    });

    map.addSource("earthquakes", {
      type: "geojson",
      // Use a URL for the value for the `data` property.
      data: "/basin.geojson",
    });

    map.addLayer({
      id: "earthquakes-layer",
      type: "line",
      source: "earthquakes",
      paint: {
        "line-color": "#000",
        "line-width": 2,
      },
    });
  };

  const { GeolocateControl, NavigationControl, ScaleControl } = controls;
</script>

<Map
  accessToken="pk.eyJ1Ijoia3lsZWthcnBhY2siLCJhIjoiY2pvZXZmNTh4MDZ2dzN3bm1pbmk1dDlmZiJ9.Gapqs5j98RUsHOBl2rqOGQ"
  bind:this={mapComponent}
  on:recentre={(e) => console.log(e.detail.center.lat, e.detail.center.lng)}
  on:ready={addLayers}
  options={{}}
>
  <NavigationControl />

  <ScaleControl />
</Map>

<style>
  :global(.mapboxgl-map) {
    height: 200px;
  }
  :global(body) {
    height: 100vh;
    padding: 0;
    margin: 0;
  }
</style>
