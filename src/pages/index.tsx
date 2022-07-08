import { observable } from "mobx";
import { observer } from "mobx-react-lite";
import useHomeViewModel from "./home.viewmodel";

function HomePage() {
  const homeViewModel = useHomeViewModel();

  return (
    <>
      <p>count: {homeViewModel.count}</p>
      <div style={{ display: "flex", gap: "5px" }}>
        <button onClick={homeViewModel.handleAddCount}> + </button>
        <button onClick={homeViewModel.handleMinusCount}> - </button>
      </div>
    </>
  );
}
export default observer(HomePage);
