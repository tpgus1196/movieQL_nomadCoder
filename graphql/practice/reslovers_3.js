const nicolas = {
    name: "Nicolas",
    age: 18,
    gender: "female",
}; //데이터 소스 > 데이터베이스가 될 예정
 
//쿼리 해결
const resolvers = {
    Query: {
        person:() => nicolas //shortcut
        // person: function () {
        //     return nicolas
        // }
    }
};

//nicolas형식의 person영역

export default resolvers;