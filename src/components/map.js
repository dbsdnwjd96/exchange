// eslint-disable-next-line
import React, { useEffect } from "react";

const { kakao } = window;

const CreateMap = () => {
  useEffect(() => {
    // 지도를 담을 영역의 DOM 레퍼런스
    const container = document.getElementById("kakaomap");

    // center옵션은 지도를 생성하는데 반드시 필요하며 파라미터는 위경도좌표이다. (위도,경도 순서)
    // level옵션은 지도의 확대, 축소 정도이다.
    const options = {
      center: new kakao.maps.LatLng(33.450701, 126.570667),
      level: 3,
    };

    // 지도 생성 및 객체 리턴
    const map = new kakao.maps.Map(container, options);}, []);

  return (
    // 지도를 담을 영역
    <div
      id="kakaomap"
      style={{
        width: "100%",
        height: "440px",
      }}
    ></div>
  );
};

export default CreateMap;
