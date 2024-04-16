import Image from "next/image";

const PokerCard = ({ img, title, descr, width, height }) => {
  // Функция для создания массива элементов с переносами строки
  const renderDescription = (text) => {
    return text.split('\n').map((line, index, array) => (
      <span key={index}>
        {line}
        {index !== array.length - 1 && <br />} {/* Добавляем <br /> после каждой строки, кроме последней */}
      </span>
    ));
  };

  return (
    <div className="flex flex-row tablet:flex-col h-[120px] justify-around content-center gap-8 tablet:gap-0 items-center tablet:mt-10 laptop:mt-20">
      <Image src={img} alt={title} width={width} height={height} className="max-w-36 tablet:w-40 laptop:w-auto" />
      <div className="min-w-44">
        <h2 className="text-left tablet:text-center text-base tablet:text-xl laptop:text-3xl  laptop:mt-11">{title}</h2>
        <p className="text-left tablet:text-center text-sm tablet:text-base laptop:text-xl mt-1 laptop:mt-4">{renderDescription(descr)}</p>
      </div>
    </div>
  );
};

export default PokerCard;