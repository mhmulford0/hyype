import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const NFTContext = createContext({
  _id: "",
  type: "",
  name: "",
  tokenId: "",
  metadata: {
    attributes: [
      {
        trait_type: "",
        value: "",
      },
    ],
    description: "",
    imageUrl: "",
    name: "",
  },
  owner: "",
  ownerDetails: {
    verifiedProfileImage: "",
    userName: "",
  },
});

const NFTProvider: React.FC = ({ children }) => {
  const [NFTData, setNFTData] = useState({
    _id: "",
    type: "",
    name: "",
    tokenId: "",
    metadata: {
      attributes: [
        {
          trait_type: "",
          value: "",
        },
      ],
      description: "",
      imageUrl: "",
      name: "",
    },
    owner: "",
    ownerDetails: {
      verifiedProfileImage: "",
      userName: "",
    },
  });

  useEffect(() => {
    const fetchNFT = async () => {
      const { data } = await axios.get(
        "https://api.hyy.pe/api/v1/token/0xa6794dec66df7d8b69752956df1b28ca93f77cd7/1482"
      );

      setNFTData(data);
    };
    fetchNFT();
  }, []);

  return <NFTContext.Provider value={NFTData}>{children}</NFTContext.Provider>;
};

export default NFTProvider;
