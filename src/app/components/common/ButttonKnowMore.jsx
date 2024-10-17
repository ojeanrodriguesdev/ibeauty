import SafeFormattedMessage from '../ui/SafeFormattedMessage'

const ButtonKnowMore = () => {
  return (
    <div className="flex justify-center z-50 mt-10 xl:mt-0">
      <a href="https://www.instagram.com/p/C9UbpbJov_P/" target="_blank" rel="noopener noreferrer">
        <button className="lg:text-[16px] md:text-[18px] text-[10px] lg:w-auto bg-customWhite text-customBrown font-openSans font-normal lg:px-10 px-6 py-3 rounded-full shadow-lg hover:from-customWhite hover:to-customOffWhite transition duration-300 border-text-stroke border-2">
          <SafeFormattedMessage id="button.knowMore" />
        </button>
      </a>
    </div>
  )
}

export default ButtonKnowMore
