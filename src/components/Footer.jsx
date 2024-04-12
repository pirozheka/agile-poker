

const Footer = () => {
  return (
    <div className="bg-main relative">
        <div className="flex justify-between container h-28 items-center text-white text-lg z-10 relative">
            <p>© 2020-2024 Agile poker</p>
            <div className="absolute w-2/12 bg-secondary h-full right-0 bottom-0 z-0 flex items-center"><p>Мегахакатон 2024</p></div>
           
        </div>
        <div className="absolute w-4/12 bg-secondary h-full right-0 bottom-0 z-0 -skew-x-45"></div>
        <div className="absolute w-1/5 bg-secondary h-full right-0 bottom-0 z-0"></div>
    </div>

  );
};

export default Footer;