
//전역변수
declare const pi = 3.14;

//전역함수
declare namespace MyLib{
  function greet(person: string): string;
  let name: string;
}
MyLib.greet('캡틴');
MyLib.name = '타노스';

/**
 * 유틸리티 타입(Partial, Pick, Omit)
*/

//1. Partial - 특정 타입의 부분 집합을 만족하는 타입을 정의할 수 있음
interface Address{
  email: string;
  address: string;
}
type MayHaveEmail = Partial<Address>;
const me: MayHaveEmail = {}; //가능
const you: MayHaveEmail = { email: 'test@abc.com' }; //가능
const all: MayHaveEmail = { email: 'capt@hero.com', address: 'Pangyo' }; //가능

//2. Pick - 특정 타입에서 몇 개의 속성을 선택하여 타입을 정의할 수 있음
interface Hero{
  name: string;
  skill: string;
}
const human: Pick<Hero, 'name'> = {
  name: '스킬이 없는 사람',
}

//3. Omit - 특정 타입에서 지정된 속성만 제거한 타입을 정의
interface AddressBook{
  name: string;
  phone: number;
  address: string;
  company: string;
}
const phoneBook: Omit<AddressBook, 'address'> = {
  name: '재택근무',
  phone: 12341234,
  company: '내 방'
}