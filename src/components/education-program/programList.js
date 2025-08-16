import {ReactComponent as FlagIcon} from '../../assets/icons/education-program/flag.svg';
import {ReactComponent as BookIcon} from '../../assets/icons/education-program/book.svg';

export const programList = [
    {
        id: 1,
        module: 'Модуль 1',
        icon: <FlagIcon className="EducationProgram__icon" />,
        title: <h3>Старт <br/> в криптовалюте</h3>,
        list: [
            {id: 101, descr: <span>Поймете, что такое <span className='span-bold'>блокчейн и криптовалюта</span></span> },
            {id: 102, descr: <span>Разберетесь с <span className='span-bold'>криптосетями</span> и <span className='span-bold'>видами блокчейнов</span></span> },
            {id: 102, descr: <span><span className='span-bold'>Зарегистрируетесь</span> на бирже и <span className='span-bold'>заведете кошелек</span></span> },
        ]
    },
    {
        id: 2,
        module: 'Модуль 2',
        icon: <BookIcon className="EducationProgram__icon" />,
        title: <h3>Что такое <br/> ретродроп?</h3>,
        list: [
            {id: 101, descr: <span>Познакомитесь <span className='span-bold'>с понятием ретродропов</span> и <span className='span-bold'>их видами</span></span> },
            {id: 102, descr: <span>Узнаете о <span className='span-bold'>трендах</span> (L2, Restaking, Social) и будущем ретродропов</span> },
            {id: 102, descr: <span>Изучите <span className='span-bold'>правила безопасности</span> при работе с ретродропами</span> },
        ]
    },
    {
        id: 3,
        module: 'Модуль 3',
        icon: <BookIcon className="EducationProgram__icon" />,
        title: <h3>Как выбрать проект, <br/> который принесет <br/> 8X за год?</h3>,
        list: [
            {id: 101, descr: <span>Узнаете, <span className='span-bold'>где</span> и <span className='span-bold'>как</span> искать <span className='span-bold'>хороший проект</span></span> },
            {id: 102, descr: <span>Получите <span className='span-bold'>пошаговый план анализа</span> и <span className='span-bold'>выбора проектов</span></span> },
            {id: 102, descr: <span>Самостоятельно проведете анализ проектов, который будет <span className='span-bold'>проверен ментором</span></span> },
        ]
    },
]