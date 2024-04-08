const MenuCard = ({ title = 'Очень длинное название задачи', taskDate = 'Вчера' }) => {
  return (
    <>
        <div className="border-solid border-2  border-main text-main font-semibold p-5 h-36 w-1/3 rounded-xl transition-transform hover:-translate-y-6">
            <h3>{title}</h3>
            <p className="mt-2">{taskDate}</p>
        </div>        
    </>
  );
};

export default MenuCard;