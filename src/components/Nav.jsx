const Nav = () => {
  return (
    <div className="w-100 border-2 h-20  bg-neutral flex justify-end items-center px-4 gap-2">
      <button className="bg-pink-500 hover:bg-transparent text-white hover:text-pink-900   px-4 rounded-full h-10">
        English
      </button>
      <button className="bg-pink-500 hover:bg-transparent text-white hover:text-pink-900   px-4 rounded-full h-10">
        Hindi
      </button>
    </div>
  );
};

export default Nav;
