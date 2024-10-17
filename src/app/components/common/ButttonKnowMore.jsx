import SafeFormattedMessage from "../ui/SafeFormattedMessage";

const ButtonKnowMore = () => {
  return (
    <div className="flex items-end lg:justify-start justify-center z-50 lg:ml-[439px] mb-10 mt-5">
      <a 
        href="https://www.instagram.com/p/C9UbpbJov_P/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="absolute"
      >
        <button className="lg:text-[20px] ml-5 text-[13px] h-[65px] lg:w-auto bg-customWhite text-customBrown font-openSans font-extralight lg:px-10 px-9 py-1 rounded-full shadow-lg hover:from-customWhite hover:to-customOffWhite transition duration-300 border-text-stroke border-2">
          <SafeFormattedMessage id="button.knowMore" />
        </button>
      </a>
    </div>
  );
};

export default ButtonKnowMore;