/* eslint-disable @next/next/no-img-element */
import { NextPage } from "next";
import { useContext } from "react";
import { NFTContext } from "../context/NFTProvider";

const Home: NextPage = () => {
  const NFTData = useContext(NFTContext);

  return (
    <div className="bg-white h-screen">
      <div className="mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="lg:grid lg:grid-rows-1 lg:grid-cols-7 lg:gap-x-8 lg:gap-y-10 xl:gap-x-16">
          <div className="lg:row-end-1 lg:col-span-4">
            <div className="aspect-w-1 aspect-h-1 rounded-lg bg-gray-100">
              <img
                src={NFTData.metadata.imageUrl}
                alt="NFT Image"
                className="object-center object-cover"
              />
            </div>
          </div>

          <div className="max-w-2xl mx-auto mt-14 sm:mt-16 lg:max-w-none lg:mt-0 lg:row-end-2 lg:row-span-2 lg:col-span-3">
            <div className="flex flex-col-reverse">
              <div className="mt-4">
                <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
                  {NFTData.metadata.name}
                </h1>
                <p className="text-sm font-bold text-indigo-500 mt-2">
                  {NFTData.name}
                </p>
              </div>
            </div>

            <p className="text-gray-500 mt-6">{NFTData.metadata.description}</p>

            <div className="border-t border-gray-200 mt-10 pt-10">
              <h3 className="text-lg font-medium text-gray-900">Attributes</h3>
              <div className="mt-4 prose prose-md text-gray-800">
                <ul role="list">
                  {NFTData.metadata.attributes.map((attrs) => (
                    <li key={attrs.value}>{attrs.value}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="border-t border-gray-200 mt-10 pt-10">
              <h3 className="text-lg font-medium text-gray-900">
                Currently Owned By
              </h3>
              <p className="mt-4 text-sm text-gray-500">
                <img
                  className="inline-block h-14 w-14 rounded-full mr-2"
                  src={`https://media.hyy.pe/metadata/700xAUTO/${NFTData.ownerDetails.verifiedProfileImage}.png`}
                  alt=""
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
