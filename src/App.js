import "./App.css";
// import CollectionCard from "./components/CollectionCard";
import Header from "./components/Header";
import { useState, useEffect } from "react";
import axios from "axios";
import PunkList from "./components/PunkList";

function App() {
  const [punkListData, setPunkListData] = useState([]);

  useEffect(() => {
    const getMyNfts = async () => {
      const openseaData = await axios.get(
        "https://testnets-api.opensea.io/assets?asset_contract_address=0xb4E553d06F4be77FB378D1C1E20C138711221312&order_direction=asc"
      );
      console.log(openseaData.data.assets);
      setPunkListData(openseaData.data.assets);
    };
    return getMyNfts();
  }, []);

  return (
    <div className="app">
      <Header />
      {/* <CollectionCard
        id={0}
        name={"VeganPunk"}
        traits={[{ value: 7 }]}
        image="https://ipfs.thirdweb.com/ipfs/bafybeieuonnl7bixecbwolovlrrwdtdpnawdevvktmfxzmyssibgmfzloi"
      /> */}
      <PunkList punkListData={punkListData} />
    </div>
  );
}

export default App;
