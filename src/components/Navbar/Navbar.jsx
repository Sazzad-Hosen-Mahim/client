const Navbar = () => {
  return (
    <nav className="bg-linear-to-r from-[#45B5FD] to-[#05EEFD] h-[200px] grid grid-cols-3 text-white">
      <div></div>
      <div className="flex flex-col gap-4 items-center justify-center">
        <h1 className="text-4xl text-white font-bold">TaskMaster Pro</h1>
        <p>Organize, prioritize and accomplish your goals</p>
      </div>
      <div className="flex gap-2 justify-end p-5">
        <p>John Doe</p>
        <div className="bg-gray-300 w-12 h-12 p-2 rounded-full flex items-center justify-center">
          JD
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
