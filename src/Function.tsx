export function Sum(a: number, b: number): number {
  return a + b;
}

export function RestSum(...nums: number[]): number {
  let totalOfNumbs = 0;
  for(let key in nums){
    totalOfNumbs += nums[key];
  }
  return totalOfNumbs;
}

interface User{
  name: string;
}
const Sam: User = { name:'Sam' }
export function ShowName(this: User){
  // console.log(this.name)
}
const a = ShowName.bind(Sam);
a();