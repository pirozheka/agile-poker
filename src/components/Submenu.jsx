import MenuCard from "./MenuCard";

const Submenu = () => {
  return (
    <div className="justify-between laptop:mt-32 container hidden tablet:flex tablet:mt-12">
      <div className='laptop:ml-4 mt-4 tablet:text-base laptop:text-2xl tracking-wide text-mainText dark:text-darkThemeText'>
        Ваши предыдущие комнаты:
      </div>
      <div className="flex tablet:gap-4 laptop:gap-6">
        <MenuCard />
      </div>
    </div>
  );
};

export default Submenu;