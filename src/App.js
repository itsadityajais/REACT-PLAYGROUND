import ScientistsList from "./Aniket/reactWebsite/ScientistsList/ScientistsList";
import { WindowSize } from "./Aniket/reactWebsite/use-Effect";
import { Counter } from "./Aniket/reactWebsite/use-State/counter";
import {
  CounterUseEffect,
  MouseLocation,
  UseEffectLogic,
} from "./Aniket/reactWebsite/use-Effect/useEffect";
import { CounterInsideDiv, ScoreBoard } from "./Aniket/reactWebsite/use-State";
import { Todolist } from "./Aniket/ToDoList";
import { Messenger } from "./Aniket/reactWebsite/messenger";
import { Accordian } from "./Aniket/accordian";
import { RandomColor } from "./Aniket/randomColor";
import { PreserveState } from "./Aanya/React-Topics/Managing State/PreserveState";
import { StarRating } from "./Aniket/starRating";
import { ImageSlider } from "./Aniket/slider";
import { LoadMore } from "./Aniket/loadMoreData";
import { TreeView } from "./Aniket/menuList";
import menus, { menuData } from "./Aniket/menuList/data";
import { QRCodeGenerator } from "./Aniket/qrCodeGenerator";
import { Card } from "./Aniket/cardComponent";

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
  // return <StarRating />;
  // return <ImageSlider />;
  // return <LoadMore />;
  // return <TreeView menus={menuData} />;
  // return <QRCodeGenerator />;
  return <Card />;
  // return <DarkMod
}
