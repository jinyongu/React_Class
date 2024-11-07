import "./styles.css";

import { useEffect, useState, useMemo } from "react";

const { kakao } = window;

function KakaoMap() {
  const [location, setLocation] = useState({
    latitude: 33.450701,
    longitude: 126.570667,
  });

  // geolocation - https 사용시에만 가능
  // useMemo(() => {
  //   navigator.geolocation.getCurrentPosition(
  //     (pos) => {
  //       setLocation({
  //         latitude: pos.coords.latitude,
  //         longitude: pos.coords.longitude,
  //       });
  //     },
  //     (err) => {
  //       console.error("Error Code = " + err.code + " - " + err.message);
  //     },
  //     { enableHighAccuracy: true }
  //   );
  // }, []);

  // useEffect(() => {
  //   // 현재 위치를 지속적으로 추적
  //   const watchId = navigator.geolocation.watchPosition(
  //     (pos) => {
  //       setLocation({
  //         latitude: pos.coords.latitude,
  //         longitude: pos.coords.longitude,
  //       });
  //     },
  //     (err) => {
  //       console.error("Error retrieving location:", err);
  //     },
  //     { enableHighAccuracy: true }
  //   );

  //   // 언마운트 시 추적 중지
  //   return () => {
  //     navigator.geolocation.clearWatch(watchId);
  //   };
  // }, []);

  // https 아닌 경우 ipinfo 사용
  useEffect(() => {
    fetch("https://ipinfo.io/json?token=df8c685e5c13b9")
      .then((response) => response.json())
      .then((data) => {
        const [lat, lon] = data.loc.split(",");
        setLocation({
          latitude: parseFloat(lat),
          longitude: parseFloat(lon),
        });
      })
      .catch((error) => {
        console.error("Error retrieving location:", error);
      });
  }, []);

  // useEffect(() => {
  //   fetch("https://ipapi.co/json/")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setLocation({
  //         latitude: data.latitude,
  //         longitude: data.longitude,
  //       });
  //     })
  //     .catch((error) => {
  //       console.error("Error retrieving location:", error);
  //     });
  // }, []); // ipapi 사용

  // useEffect(() => {
  //   fetch("http://api.ipstack.com/check?access_key=YOUR_ACCESS_KEY")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setLocation({
  //         latitude: data.latitude,
  //         longitude: data.longitude,
  //       });
  //     })
  //     .catch((error) => {
  //       console.error("Error retrieving location:", error);
  //     });
  // }, []); // ipstack 사용

  useEffect(() => {
    const container = document.getElementById("map");
    const options = {
      center: new kakao.maps.LatLng(location.latitude, location.longitude),
      level: 3,
    };
    const map = new kakao.maps.Map(container, options);

    // 현재 위치에 마커 추가
    const marker = new kakao.maps.Marker({
      position: new kakao.maps.LatLng(location.latitude, location.longitude),
    });

    marker.setMap(map); // 지도에 표시

    // 마커의 위치가 변경될 때마다 업데이트
    marker.setPosition(
      new kakao.maps.LatLng(location.latitude, location.longitude)
    );

    // 언마운트 시 마커 제거
    return () => {
      marker.setMap(null);
    };
  }, [location]);

  return <div id="map"></div>;
}

export default KakaoMap;
