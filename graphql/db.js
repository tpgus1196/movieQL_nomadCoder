import fetch from "node-fetch"; //yarn add node-fetch 필요
const API_URL = "https://yts.mx/api/v2/list_movies.json?" 
//#0.13 강의 내용: 서버와 다른 url을 통합하고 싶을 때의 예시
//기존 url 끝에 ? 없으면 아래 getMovies함수에서 제대로 필터링이 안됨(playground자체 작동은 함)                

export const getMovies = (limit, rating) => { //limit, rating의 출처...? api사이트 url에 있던데 못찾겟음
    let REQUEST_URL = API_URL; //const > playground 작동 시 read only 오류메세지
    if(limit > 0){ //limit이 0보다 크면 (받으려는 영화정보 갯수)
        REQUEST_URL += `limit=${limit}`; //요청 url에 해당 string 추가할 것
    }
    if(rating > 0){ //rating이 0보다 크면
        REQUEST_URL += `minimum_rating=${rating}`; //요청 url에 minimum rating 추가
    }
    return fetch(REQUEST_URL)
    .then(res => res.json())
    .then(json => json.data.movies);
};