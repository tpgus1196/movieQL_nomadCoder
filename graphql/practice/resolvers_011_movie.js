import {getMovies, getById, addMovie, deleteMovie} from "./db";
 
//쿼리 해결
const resolvers = {
    Query: {
        movies: () => getMovies(), //people은 people을 리턴함
        movie: (_, {id}) => getById(id)
        //person: (_, args) => console.log(args) //graphql은 argument와 함께 resolver 요청
    
    },
    Mutation: {
        addMovie: (_, {name, score}) => addMovie(name, score),
           //movie 추가하기
        deleteMovie: (_, {id}) => deleteMovie(id)
    }
};


export default resolvers;