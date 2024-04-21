import PokerCard from "./poker-cards/PokerCard";
const PCMobile = () => {

    return (
        <div className="flex flex-col tablet:hidden tracking-wide container place-content-center align-center mt-4">
            <div className='ml-0 block dark:hidden'>
                <PokerCard
                    key='1'
                    img='/img/block_02_mob_light.svg'
                    title='Начни игру'
                    descr={`либо зарегистрируйся,\n чтобы сохранить оценки`}
                    width={108}
                    height={88}
                /></div>
            <div className='ml-0 hidden dark:block'>
                <PokerCard
                    key='1'
                    img='/img/Блок2_1_mob_dark.svg'
                    title='Начни игру'
                    descr={`либо зарегистрируйся,\n чтобы сохранить оценки`}
                    width={108}
                    height={88}
                />
            </div>
            <div className='ml-0 block dark:hidden'>
                <PokerCard
                    key='2'
                    img='/img/block_01_mob_light.svg'
                    title='Пригласи команду'
                    descr={`удобным способом \n в одно нажатие`}
                    width={108}
                    height={88}
                /></div>
            <div className='ml-0 hidden dark:block'>
                <PokerCard
                    key='2'
                    img='/img/Блок2_2_mob_dark.svg'
                    title='Пригласи команду'
                    descr={`удобным способом \n в одно нажатие`}
                    width={108}
                    height={88}
                />
            </div>
            <div className='ml-0 block dark:hidden'>
                <PokerCard
                    key='3'
                    img='/img/block_03_mob_light.svg'
                    title='Голосуй'
                    descr={`будь продуктивным,\n обсуждай`}
                    width={108}
                    height={88}
                /></div>
            <div className='ml-0 hidden dark:block'>
                <PokerCard
                    key='3'
                    img='/img/Блок2_3_mob_dark.svg'
                    title='Голосуй'
                    descr={`будь продуктивным,\n обсуждай`}
                    width={108}
                    height={88}
                />
            </div>
        </div>
    );
};

export default PCMobile;