
import './App.css';

const imgs = [
  "https://www.nwrfc.noaa.gov/weather/plots/2023/20230901/QPF_24_DAY1_20230902_12_20230901150114_chps_webplots.png",
  "https://www.nwrfc.noaa.gov/weather/plots/2023/20230901/QPF_24_DAY2_20230903_12_20230901150115_chps_webplots.png",
  "https://www.nwrfc.noaa.gov/weather/plots/2023/20230901/QPF_24_DAY3_20230904_12_20230901150116_chps_webplots.png",
  "https://www.nwrfc.noaa.gov/weather/plots/2023/20230901/QPF_24_DAY4_20230905_12_20230901150117_chps_webplots.png",
];

function App() {
  return (
    <div className="App">
      {imgs.map(img => {
        return <div style={{position: "relative", display: "inline-block", background: "black" }}>
          <div style={{ clipPath: "circle(100px at 25% 75%)", opacity: 0.6, background: "white", position: "absolute", left: 0, right: 0, top: 0, bottom: 0, zIndex: 9999 }}></div>
          <img src={img} style={{opacity: 0.6}} />
        </div>
      })}
    </div>
  );
}

export default App;
