import { FiFlag as FlagIcon } from "react-icons/fi";
import { LuBookMinus as BookIcon } from "react-icons/lu";
import { IoSearch as SearchIcon } from "react-icons/io5";

export const data = [
    {
        id: 1,
        module: 'Модуль 1',
        icon: <FlagIcon className="EducationProgram__icon" />,
        title: <h3 className="EducationProgram__header-title">Старт <br/> в криптовалюте</h3>,
        list: [
            {id: 111, descr: <span>Поймете, что такое <span className='span-bold'>блокчейн и криптовалюта</span></span> },
            {id: 112, descr: <span>Разберетесь с <span className='span-bold'>криптосетями</span> и <span className='span-bold'>видами блокчейнов</span></span> },
            {id: 113, descr: <span><span className='span-bold'>Зарегистрируетесь</span> на бирже и <span className='span-bold'>заведете кошелек</span></span> },
        ]
    },
    {
        id: 2,
        module: 'Модуль 2',
        icon: <BookIcon className="EducationProgram__icon" />,
        title: <h3 className="EducationProgram__header-title">Что такое <br/> ретродроп?</h3>,
        list: [
            {id: 221, descr: <span>Познакомитесь <span className='span-bold'>с понятием ретродропов</span> и <span className='span-bold'>их видами</span></span> },
            {id: 222, descr: <span>Узнаете о <span className='span-bold'>трендах</span> (L2, Restaking, Social) и будущем ретродропов</span> },
            {id: 223, descr: <span>Изучите <span className='span-bold'>правила безопасности</span> при работе с ретродропами</span> },
        ]
    },
    {
        id: 3,
        module: 'Модуль 3',
        icon: <SearchIcon className="EducationProgram__icon" />,
        title: <h3 className="EducationProgram__header-title">Как выбрать проект, <br/> который принесет <br/> 8X за год?</h3>,
        list: [
            {id: 331, descr: <span>Узнаете, <span className='span-bold'>где</span> и <span className='span-bold'>как</span> искать <span className='span-bold'>хороший проект</span></span> },
            {id: 332, descr: <span>Получите <span className='span-bold'>пошаговый план анализа</span> и <span className='span-bold'>выбора проектов</span></span> },
            {id: 333, descr: <span>Самостоятельно проведете анализ проектов, который будет <span className='span-bold'>проверен ментором</span></span> },
        ]
    },
]