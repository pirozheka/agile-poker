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
    <div>
      <Image src={img} alt={title} width={width} height={height} />
      <h2 className="text-center text-3xl mt-11">{title}</h2>
      <p className="text-center text-xl mt-4">{renderDescription(descr)}</p>
    </div>
  );
};

export default PokerCard;