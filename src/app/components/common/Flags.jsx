import Flag from "react-country-flag";

const flags = [
  "BR","DE","AT","PT","IT","NL","HU","GB","US","CH","RU","FR","EE","PL","JP","TR","AE","ES",
];

const Flags = () => {
  return (
    <div className="flex flex-wrap justify-center items-center lg:gap-2 max-w-[500px] mx-0 px-0 lg:mx-auto lg:max-w-none lg:my-5 my-2">
      {flags.map((countryCode, index) => (
        <div
          key={index}
          className="lg:w-[30px] w-[20px] lg:h-[30px] h-[20px] rounded-full overflow-hidden flex items-center justify-center border"
        >
          <Flag
            countryCode={countryCode}
            svg
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default Flags;
