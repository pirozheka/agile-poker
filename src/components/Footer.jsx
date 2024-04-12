

const Footer = () => {
  return (
    <div className="bg-main relative">
        <div className="flex justify-between container h-28 items-center text-white text-lg z-10">
            <p>© 2020-2024 Agile poker</p>
            <p>Мегахакатон 2024</p>
        </div>
        <div className="absolute min-w-96 bg-secondary h-full right-0 bottom-0 z-0 skew-45"></div>
    </div>

  );
};

export default Footer;