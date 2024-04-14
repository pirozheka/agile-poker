const MenuCard = ({ title = 'Очень длинное название задачи', taskDate = 'Вчера' }) => {
  return (
    <>
        <div className="border-solid border-[1.5px] overflow:hidden border-main text-mainText font-semibold p-5 h-32 min-w-96 rounded-xl transition-transform hover:-translate-y-6 dark:text-darkThemeText dark:bg-darkButtonText">
            <h3 className="text-lg">{title}</h3>
            <p className="mt-2 font-normal">{taskDate}</p>
        </div>        
    </>
  );
};

export default MenuCard;