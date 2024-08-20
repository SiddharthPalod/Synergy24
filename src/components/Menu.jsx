import ToggleDrawer from "./ToggleDrawer.jsx";

const Menu = ({ openNavigation,flag,click }) => {
  return (
    <div>
    <svg
      className=" overflow-visible absolute top-0 right-8 px-4 py-6 md:p-8 z-50 lg:hidden"
      width="20"
      height="12"
      viewBox="0 0 20 12"
    >
      <rect
        className="transition-all origin-center"
        y={openNavigation ? "5" : "0"}
        width="20"
        height="2"
        rx="1"
        fill="white"
        transform={`rotate(${openNavigation ? "45" : "0"})`}
      />
      <rect
        className="transition-all origin-center"
        y={openNavigation ? "5" : "10"}
        width="20"
        height="2"
        rx="1"
        fill="white"
        transform={`rotate(${openNavigation ? "-45" : "0"})`}
      />
    </svg>
    {openNavigation?<ToggleDrawer x={flag} click={click}/>:''}
    </div>
  );
};

export default Menu;
