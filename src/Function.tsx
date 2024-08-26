export function Sum(a: number, b: number): number {
  return a + b;
}

export function RestSum(...nums: number[]): number {
  console.log(nums)
  let totalOfNumbs = 0;
  for(let key in nums){
    totalOfNumbs += nums[key];
  }
  return totalOfNumbs;
}