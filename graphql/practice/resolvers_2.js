//query를 해결(resolves)하는 것
//query는 database에게 문제 같은 것. > 어떤 방식으로 해결해야 함
const resolvers = {
    Query: { //어떤 사용자가 name query를 보내면
        name:() => "nicolas" //nicolas를 반환하는 함수로 답할 것
    }
};

export default resolvers;