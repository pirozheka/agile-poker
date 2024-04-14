import MenuCard from "./MenuCard";

const Submenu = () => {
  return (
    <div className="flex justify-between mt-32 container">
        <div className='ml-4 mt-4 text-2xl tracking-wide text-mainText dark:text-darkThemeText'>
            Ваши предыдущие оценки:
        </div>
        <div className="flex gap-6">
          <MenuCard />
          <MenuCard />
        </div>
    </div>
  );
};

export default Submenu;