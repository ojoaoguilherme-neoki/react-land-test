import { MapContainer, Rectangle } from "react-leaflet";
import { Lands } from "./mock";

export default function MapContainerWrapper() {
  return (
    <MapContainer
      center={[1, 0]}
      zoom={7}
      scrollWheelZoom={true}
      style={{
        width: "85vw",
        height: "85vh",
      }}
    >
      {Lands.map((land, i) => (
        <Rectangle bounds={land.bounds} color={"#000"} key={i} />
      ))}
    </MapContainer>
  );
}
