import {getMovies} from "./db";
 
//쿼리 해결
const resolvers = {
    Query: {
        movies: (_, {rating, limit}) => getMovies(limit, rating) 
                //_는 변수 이름. parent, root... 뭐든 상관없는 부분
    }
};


export default resolvers;