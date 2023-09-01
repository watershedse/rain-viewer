
import './App.css';
import { ReactComponent as Basin } from "./basin.svg"

const imgs = [
  "https://www.nwrfc.noaa.gov/weather/plots/2023/20230901/QPF_24_DAY1_20230902_12_20230901150114_chps_webplots.png",
  "https://www.nwrfc.noaa.gov/weather/plots/2023/20230901/QPF_24_DAY2_20230903_12_20230901150115_chps_webplots.png",
  "https://www.nwrfc.noaa.gov/weather/plots/2023/20230901/QPF_24_DAY3_20230904_12_20230901150116_chps_webplots.png",
  "https://www.nwrfc.noaa.gov/weather/plots/2023/20230901/QPF_24_DAY4_20230905_12_20230901150117_chps_webplots.png",
  "https://www.nwrfc.noaa.gov/weather/plots/2023/20230901/QPF_24_DAY5_20230906_12_20230901203025_chps_webplots.png",
  "https://www.nwrfc.noaa.gov/weather/plots/2023/20230901/QPF_24_DAY6_20230907_12_20230901203026_chps_webplots.png",
];

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
        return <div style={{position: "relative", display: "inline-block", background: "black" }} key={img}>
          <Basin style={{ position: "absolute", height: "75px", width: "250px", left: 80, top: 550 }} />
          <img alt="Rainfall" src={img} style={{opacity: 0.7}} />
        </div>
      })}
    </div>
  );
}

export default App;
