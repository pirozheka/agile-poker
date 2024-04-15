const MenuCard = ({ title = 'Очень длинное название задачи', taskDate = 'Вчера' }) => {
  return (
    <>
        <div className=" border-solid border-[1.5px] text-lg  overflow:hidden border-main text-mainText p-5 h-32 min-w-96 rounded-3xl rounded-b-none transition-transform hover:-translate-y-6 z-0 dark:text-darkThemeText dark:bg-darkButtonText">
            <h3 className="font-semibold">{title}</h3>
            <p className="mt-2">{taskDate}</p>
        </div>        
    </>
  );
};

export default MenuCard;