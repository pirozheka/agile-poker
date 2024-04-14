import MenuCard from "./MenuCard";

const Submenu = () => {
  return (
    <div className="flex justify-between mt-36 container">
        <div className='pr-52 text-2xl text-mainText dark:text-darkThemeText'>
            Ваши предыдущие оценки:
        </div>
        <MenuCard />
        <MenuCard />
    </div>
  );
};

export default Submenu;