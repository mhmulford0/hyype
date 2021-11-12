/* eslint-disable @next/next/no-img-element */
import { NextPage } from "next";
import { useContext, useState } from "react";
import { NFTContext } from "../context/NFTProvider";
import Navbar from "../components/Navbar";

const Home: NextPage = () => {
  const [showContent, setShowContent] = useState(2);

  const NFTData = useContext(NFTContext);

  const content = () => {
    if (showContent === 2) {
      setShowContent(NFTData.metadata.attributes.length);
      return;
    }
    setShowContent(2);
  };

  return (
    <div className="bg-white content-area">
      <Navbar />
      <div className="mx-auto lg:max-w-full mt-20 content-area h-full">
        <div className=" flex flex-col w-full lg:flex-row h-full flex-shrink-0">
          <div className="lg:w-full h-full bg-black">
            <img
              src={NFTData.metadata.imageUrl}
              alt="NFT Image"
              className=" bg-contain object-contain object-center h-full overflow-y-hidden mx-auto"
            />
          </div>

          <div className="mx-auto mt-14 sm:mt-16 lg:mt-0 px-4 lg:overflow-y-scroll">
            <div className="flex flex-col-reverse">
              <div className="mt-4">
                <p className="text-sm font-bold text-gray-400 mt-4 mb-4">
                  {NFTData.name}
                </p>
                <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl mb-4">
                  {NFTData.metadata.name}
                </h1>
                <p className="bg-gray-200 mb-16 text-sm w-64 p-1 rounded-md text-gray-500">
                  Lore not enabled yet for this collection
                </p>
              </div>
            </div>

            <span className=" border-b-4 px-4 mb-2 border-yellow-500 cursor-pointer text-yellow-600 py-4">
              Details
            </span>
            <div className="border-t border-gray-200 mt-4 pt-2">
              <p className="text-gray-500 mt-6 mb-10 text-over break-all">
                {NFTData.metadata.description}
              </p>
              <h3 className="text-lg font-medium text-gray-900">Properties</h3>

              <div className="flex flex-row flex-wrap px-4 py-4 mt-4 prose prose-md text-gray-800 bg-gray-100 w-full lg:w-2/3">
                <div className="flex flex-row w-full pl-4 mb-1">
                  <span className="font-semibold w-2/5 mb-2">Chain Info</span>
                  <span className="ml-4">0xa6...7cd7</span>
                </div>
                <div className="flex flex-row w-full pl-4  mb-1">
                  <span className="font-semibold w-2/5 mb-2">Token Id</span>
                  <span className="ml-4">{NFTData.tokenId}</span>
                </div>

                <div className="flex flex-row w-full pl-4 mb-2 border-b-2 border-gray-200 ">
                  <span className="font-semibold w-2/5 mb-2">Blockchain</span>
                  <span className="ml-4">Ethereum</span>
                </div>
                {NFTData.metadata.attributes
                  .slice(0, showContent)
                  .map((attrs) => (
                    <div
                      className="flex flex-row w-full  ml-4"
                      key={attrs.value}
                    >
                      <span className="font-semibold w-2/5  mb-2">
                        {attrs.trait_type}
                      </span>
                      <span className="ml-4">{attrs.value}</span>
                    </div>
                  ))}
                <span
                  className="ml-4 text-yellow-600 cursor-pointer font-semibold"
                  onClick={content}
                >
                  {showContent === 2 ? "Show More" : "Show Less"}
                </span>
              </div>
            </div>
            <div className="mt-4 pt-10">
              <h3 className="text-lg font-medium text-gray-900">
                Currently Owned By
              </h3>
              <p className="mt-4 text-sm text-gray-500 mb-12">
                <img
                  className="inline-block h-14 w-14 rounded-full mr-2"
                  src={`https://media.hyy.pe/metadata/700xAUTO/${NFTData.ownerDetails.verifiedProfileImage}.png`}
                  alt="owner profile"
                />

                <a
                  href={`https://hyy.pe/${NFTData.ownerDetails.userName}`}
                  className=" text-xl font-medium text-indigo-600 hover:text-indigo-500"
                >
                  {NFTData.ownerDetails.userName}
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
