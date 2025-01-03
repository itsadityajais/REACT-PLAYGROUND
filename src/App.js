import ScientistsList from "./Aniket/React-Topics/ScientistsList/ScientistsList";
import { WindowSize } from "./Aniket/React-Topics/useEffect";
import { Counter } from "./Aniket/React-Topics/useState/counter";
import {
  CounterUseEffect,
  MouseLocation,
} from "./Aniket/React-Topics/useEffect/useEffect";
function App() {
  // return <Zomato />; ///
  // return <PackingList />;
  // return <ScientistsList />;
  // return <Counter />;
  // return <MyComponent />;
  return (
    <>
      <CounterUseEffect />
      <WindowSize />
      <MouseLocation />
    </>
  );
}
