export const people = [
    {//nicolas의 배열
        id: "1",
        name: "Nicolas",
        age: 18,
        gender: "female",
    }, 
    {   id: "2",
        name: "b",
        age: 19,
        gender: "male",
    },
    {   id: "3",
        name: "c",
        age: 28,
        gender: "female",
    },
    {
        id: "4",
        name: "d",
        age: 22,
        gender: "male",
    },
    {
        id: "5",
        name: "e",
        age: 30,
        gender: "female",
    }
]; //데이터 소스 > 데이터베이스가 될 예정

export const getById = id => { //id를 부여해서 id가 people배열안에 있는 모든 object확인
    const filteredPeople = people.filter(person => person.id === String(id));
    return filteredPeople[0];
} //해당 id와 맞는 대상person 리턴