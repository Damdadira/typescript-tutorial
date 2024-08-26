import { PiButterflyLight } from "react-icons/pi";
import { Sum, RestSum } from './Function'

function App() {
  const sumResult = Sum(10, 20);
  const restSumResult = RestSum(1,2,3,4,5,6);

  return (
    <>
      <div>
        <h2 style={{display: 'flex', alignItems: 'center'}}>
          <PiButterflyLight></PiButterflyLight>
          <span style={{padding: '0px 8px'}}>Function</span>
          <PiButterflyLight></PiButterflyLight>
        </h2>
        <div>Sum: {sumResult}</div>
        <div>RestSum: {restSumResult}</div>
      </div>
      
    </>
  );
}

export default App;

