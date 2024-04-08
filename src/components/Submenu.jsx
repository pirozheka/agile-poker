import MenuCard from "./MenuCard";

const Submenu = () => {
  return (
    <div className="flex justify-between mt-56 container">
        <div className='pr-32'>
            Ваши предыдущие оценки:
        </div>
        <MenuCard />
        <MenuCard />
    </div>
  );
};

export default Submenu;