const MenuCard = ({ title = 'Очень длинное название задачи', taskDate = 'Вчера' }) => {

  const data = [
    {
      title:'Отрисовать UI-kit',
      taskDate: '02.04.2024'
    },
    {
      title:'Настроить отправку формы',
      taskDate: '15.04.2024'
    }
  ]
  
  return (
    <>
      {data.map((item, index) => (
        <div key={index} className="border-solid border-[1.5px] overflow:hidden border-main text-mainText p-3 laptop:p-5 h-28 laptop:h-32 w-72 laptop:min-w-96 rounded-2xl laptop:rounded-3xl rounded-b-none transition-transform hover:-translate-y-6 z-0 dark:text-darkThemeText dark:bg-darkButtonText">
          <h3 className="font-semibold text-base laptop:text-lg">{item.title}</h3>
          <p className="laptop:mt-2 text-sm laptop:text-lg">{item.taskDate}</p>
        </div>
      ))}
    </>
  );
};

export default MenuCard;