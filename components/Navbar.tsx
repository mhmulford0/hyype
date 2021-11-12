/* eslint-disable @next/next/no-img-element */
const Navbar = () => {
  return (
    <div className="bg-white w-full h-20 filter drop-shadow flex flex-row flex-nowrap items-center px-3 justify-between fixed top-0 z-50">
      <div>
        <img src="/logo.svg" alt="logo" />
      </div>
      <div>
        <a
          href="https://hyy.pe/leaderboard"
          className="mr-16 hidden md:inline font-semibold"
        >
          🥇 Leaderboard
        </a>
        <button className=" bg-yellow-500 text-white px-8 py-1.5 rounded-2xl">
          Sign In
        </button>
      </div>
    </div>
  );
};

export default Navbar;
