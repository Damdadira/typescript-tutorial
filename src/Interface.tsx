interface PersonAge{
  name: string;
  age: number;
}
interface Developer extends PersonAge{
  phone: string;
}
export function LogAge({ name, age, phone }: Developer) {
  return( 
    <div>
      Name: {name}, Age: {age}, Phone: {phone}
    </div>
  );
}

//Union Type > 두가지 이상 타입이 올 경우에 | 연산자를 사용하여 여러개의 타입을 연결
function unionText(text: string | number){
  //...
}

//Intersection Type > 여러 타입을 모두 만족하는 하나의 타입을 의미(교집합)
interface Person{
  name: string;
  age: string;
}
interface Company{
  name: string;
  skill: string;
}
function Introduce(someone: Person | Company){
  someone.name; //정상 동작
  // someone.age; //타입오류
  // someone.skill; //타입오류
}

//get & set
class Developer2{
  private _name: string = '';
  get name(): string{
    return this._name;
  }
  set name(newValue: string){
    if(newValue && newValue.length > 5){
      throw new Error('이름이 너무 깁니다.')
    }
    this._name = newValue;
  }
}
const josh = new Developer2();
josh.name = 'JOSH CARROT' //error, 이름이 너무 깁니다.