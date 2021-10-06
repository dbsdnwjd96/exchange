// eslint-disable-next-line
import React, { useEffect } from "react";

const { kakao } = window;

const CreateMap = () => {
  useEffect(() => {
    const container = document.getElementById("kakaomap");

    // center옵션은 지도를 생성하는데 반드시 필요하며 파라미터는 위경도좌표(위도,경도 순서)
    // level옵션은 지도의 확대, 축소
    const options = {
      center: new kakao.maps.LatLng(37.56166009492348, 126.98422437430435),
      level: 3,
    };
    
    // 지도 생성 및 객체 리턴
    const map = new kakao.maps.Map(container, options);

    
  }, []);


  return (
    <div id="kakaomap" style={{ width: "100%", height: "440px"}}></div>
  );
};

export default CreateMap;
