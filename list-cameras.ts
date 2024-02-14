import { cameraBrowser, watchCameras } from "./napi-canon-cameras/camera-api";

cameraBrowser.setEventHandler((eventName, ...args) => {
  console.log("Emitted:", eventName, ...args);
});

process.on("SIGINT", () => process.exit());

try {
  console.log(cameraBrowser.getCameras());
  watchCameras();
} catch (e) {
  console.log(e);
}
