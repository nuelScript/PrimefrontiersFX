import { ModeToggle } from "./mode-toggle";

const Navbar = () => {
  return (
    <div className="w-full flex justify-between p-4">
      <div className="flex items-center space-x-8"></div>
      <div className="flex items-center space-x-8">
        <ModeToggle />
      </div>
    </div>
  );
};

export default Navbar;
