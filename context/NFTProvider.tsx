import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const NFTContext = createContext({
  _id: "",
  type: "",
  name: "",
  metadata: {
    attributes: [
      {
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
    metadata: {
      attributes: [
        {
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
        "https://api.hyy.pe/api/v1/token/0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb/7756"
      );

      setNFTData(data);
    };
    fetchNFT();
  }, []);

  return <NFTContext.Provider value={NFTData}>{children}</NFTContext.Provider>;
};

export default NFTProvider;
