let movies = [
    {
      id: 0,
      name: "Star Wars - The new one",
      score: 1
    },
    {
      id: 1,
      name: "Avengers - The new one",
      score: 8
    },
    {
      id: 2,
      name: "The Godfather I",
      score: 99
    },
    {
      id: 3,
      name: "Logan",
      score: 2
    }
  ];
export const getMovies = () => movies;

export const getById = id => { //id를 부여해서 id가 movies배열안에 있는 모든 object확인
    const filteredMovies = movies.filter(movie => movie.id === id);
    return filteredMovies[0];
} //해당 id와 맞는 대상person 리턴

export const deleteMovie = id => {
    const cleanedMovies = movies.filter(movie => movie.id !== id);
    //같은 id를 가지지 않는 movie 배열 가져오기(재필터링)
    //movie를 id로 filter > 내가 찾는 것과 다른 id의 movie를 선택
    if(movies.length > cleanedMovies.length){ 
        //현재 movie배열의 길이(현재 4)가 cleanedMovie의 길이(현재3)보다 길다면
        movies = cleanedMovies; //movie를 cleanedMovie로 지정한다
        return true;
    } else{
        return false;
    } //true / false 만 전달하는 boolean형 > 스키마에 서술
};

export const addMovie = (name, score) => {
    const newMovie ={
        id: `${movies.length +1}`, //id는 movies배열에 1 더한 값
        name,
        score 
    };
    movies.push(newMovie);
    return newMovie;
}