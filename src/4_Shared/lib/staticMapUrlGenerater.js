const GOOGLE_MAP_API_KEY = process.env.REACT_APP_GOOGLE_MAP_API_KEY;

const staticMapUrlGenerater = (mapInfo) => {
  const {
    zoom = 15,
    center = { lat: 37.57, lng: 126.97 },
    line = [],
    color = "FF0000", // # 제거
    thickness = 2,
    background = 0,
    mapWidth = "300",
    mapHeight = "300",
  } = mapInfo;
  const baseUrl = "https://maps.googleapis.com/maps/api/staticmap";

  // 각 선마다 개별 path 생성
  const paths = line
    .map(
      (path) =>
        `color:0x${color.replace("#", "")}FF|weight:${thickness}|` +
        path.map((point) => `${point.lat},${point.lng}`).join("|")
    )
    .join("&path="); // 각 선은 개별 path로 구분됨

  const params = new URLSearchParams({
    center: `${center.lat},${center.lng}`,
    zoom: zoom,
    size: `${mapWidth}x${mapHeight}`,
    maptype: background === 0 ? "roadmap" : "satellite",
    key: GOOGLE_MAP_API_KEY,
  });

  return `${baseUrl}?${params.toString()}&path=${paths}`;
};

export default staticMapUrlGenerater;
