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