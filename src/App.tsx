import { Sum, RestSum } from './Function'

function App() {
  const sumResult = Sum(10, 20);
  const restSumResult = RestSum(1,2,3,4,5,6);

  return (
    <>
      <div>Sum: {sumResult}</div>
      <div>RestSum: {restSumResult}</div>
    </>
  );
}

export default App;

