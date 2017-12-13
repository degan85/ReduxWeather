import { FETCH_WEATHER } from "../actions/index";

// 여러 도시를 갖고오기 때문에 배열을 사용해야 함(state)
export default function (state = [], action) {
    // console.log('Action received', action);
    switch (action.type) {
        case FETCH_WEATHER:
            // redux내에서 state를 변화 시키면 오류가 발생함
            // react에서도 =을 사용하지 않고 stateSet을 사용했음
            // push를 사용해서 변화시키지 않고 concat을 사용해서 새로 만들어 리턴하는 것이 안전함
            // 결론은 새로운 인스턴스를 반환
            // return state.concat( [action.payload.data] );

            // 위오 완전히 동일함 ES6
            // [city], [city, city]] 새로운 배열을 만드는 명료한 방식
            return [ action.payload.data, ...state];
    }

    return state;
}