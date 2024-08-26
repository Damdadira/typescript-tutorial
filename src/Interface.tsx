interface PersonAge{
  name: string;
  age: number;
}
export function LogAge({ name, age }: PersonAge) {
  return <div>{name} is {age} years old</div>;
}