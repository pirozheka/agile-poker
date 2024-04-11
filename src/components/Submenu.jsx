import MenuCard from "./MenuCard";

const Submenu = () => {
  return (
    <div className="flex justify-between mt-36 container">
        <div className='pr-52 text-base text-mainText'>
            Ваши предыдущие оценки:
        </div>
        <MenuCard />
        <MenuCard />
    </div>
  );
};

export default Submenu;