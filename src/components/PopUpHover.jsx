const PopUpHover = ({popupText}) => {
  return (
    <div className="absolute -top-4 right-0 font-urbanist font-semibold text-[14px] bg-[#A284F6] text-white px-3 py-1 rounded-[4px]">
      {popupText}
    </div>
  )
}
export default PopUpHover