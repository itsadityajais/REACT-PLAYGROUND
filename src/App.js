import ScientistsList from "./Aniket/React-Topics/ScientistsList/ScientistsList";
import { WindowSize } from "./Aniket/React-Topics/use-Effect";
import { Counter } from "./Aniket/React-Topics/use-State/counter";
import {
  CounterUseEffect,
  MouseLocation,
  UseEffectLogic,
} from "./Aniket/React-Topics/use-Effect/useEffect";
import { CounterInsideDiv, ScoreBoard } from "./Aniket/React-Topics/use-State";
import { Todolist } from "./Aniket/ToDoList";
import { Messenger } from "./Aniket/React-Topics/messenger";
import { Accordian } from "./Aniket/accordian";
import { RandomColor } from "./Aniket/randomColor";
import { PreserveState } from "./Aanya/React-Topics/Managing State/PreserveState";
import { StarRating } from "./Aniket/starRating";

export function App() {
  // return <Zomato />; ///
  // return <PackingList />;
  // return <ScientistsList />;
  // return <Counter />;
  // return <MyComponent />;
  // return (
  //   <>
  //     <CounterUseEffect />
  //     <WindowSize />
  //     <MouseLocation />
  //   </>
  // );
  // return (
  //   <div>
  //     <CounterInsideDiv />
  //     <ScoreBoard />
  //   </div>
  // );
  // return <UseEffectLogic />;
  // return <Todolist />;
  // return <Accordian />;
  // return <RandomColor />;
  // return <StarRating noOfStars={5} />;
  return <StarRating />;
}
