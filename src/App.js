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
  // return <Todolist />;
  return <Accordian />;
  // return <UseEffectLogic />;
}
