import React from 'react';
import { GoogleMapLoader, GoogleMap } from "react-google-maps"

export default (props) => {
    return (
        <GoogleMapLoader
            containerElement={ <div style={{height: '100%'}} /> }
            googleMapElement={
                // 첫 번째 중괄호는 자바스크립트 변수
                // 두 번째 중괄호는 자바스크립트 오브젝트
                <GoogleMap defaultZoom={12} defaultCenter={{lat: props.lat, lng: props.lon}} />
            }
        />
    );
}