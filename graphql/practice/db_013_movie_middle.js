import fetch from "node-fetch"; //yarn add node-fetch 필요
const API_URL = "https://yts.mx/api/v2/list_movies.json" //서버와 다른 url을 통합하고 싶을 때의 예시

export const getMovies = (limit, rating) => {
    return fetch(`${API_URL}`)
        .then(res => res.json())
        .then(json => json.data.movies); //json.data.movies는 api에서 확인가능 (json viewr 설치하면 확인 용이)
};//return 안해주면 뜨는 오류메세지(playground)
    //"message": "Cannot return null for non-nullable field Query.movies."
    
    //retrun 없는 예시
    // export const getMovies = (limit, rating) => 
    //   fetch(`${API_URL}`)
    //     .then(res => res.json())
    //     .then(json => json.data.movies); 
    