import "./App.css";
// import CollectionCard from "./components/CollectionCard";
import Header from "./components/Header";
import { useState, useEffect } from "react";
import axios from "axios";
import PunkList from "./components/PunkList";
import Main from "./components/Main";

function App() {
  const [punkListData, setPunkListData] = useState([]);
  const [selectedPunk, setSelectedPunk] = useState(0);

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
      {punkListData.length > 0 && (
        <>
          <Main punkListData={punkListData} selectedPunk={selectedPunk} />
          <PunkList
            punkListData={punkListData}
            setSelectedPunk={setSelectedPunk}
          />
        </>
      )}

      {/* <CollectionCard
        id={0}
        name={"VeganPunk"}
        traits={[{ value: 7 }]}
        image="https://ipfs.thirdweb.com/ipfs/bafybeieuonnl7bixecbwolovlrrwdtdpnawdevvktmfxzmyssibgmfzloi"
      /> */}
    </div>
  );
}

export default App;
