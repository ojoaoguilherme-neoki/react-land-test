import dynamic from "next/dynamic";
import { useMapEvents } from "react-leaflet";

const MapWithNoSSR = dynamic(() => import("../Map/MapContainerWrapper"), {
  ssr: false,
});

export default function Home() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
      }}
    >
      <MapWithNoSSR />
    </div>
  );
}
