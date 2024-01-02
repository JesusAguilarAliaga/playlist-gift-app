const PopUpHover2 = ({ popupText }) => {
  return (
    <div className="absolute whitespace-nowrap -top-9 left-1/2 transform -translate-x-1/2 font-urbanist font-semibold text-[14px] bg-[#A284F6] text-white px-3 py-1 rounded-[4px]">
      {popupText}
    </div>
  );
};
export default PopUpHover2;
