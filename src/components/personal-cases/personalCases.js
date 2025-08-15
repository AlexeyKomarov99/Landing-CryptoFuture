import { ReactComponent as StarknetIcon } from '../../assets/icons/personal-cases/starknet.svg';
import { ReactComponent as PolyhedraIcon } from '../../assets/icons/personal-cases/polyhedra.svg';
import { ReactComponent as SuiIcon } from '../../assets/icons/personal-cases/sui.svg';
import { ReactComponent as ZkSyncIcon } from '../../assets/icons/personal-cases/zk-sync.svg';
import { ReactComponent as GraphIcon } from '../../assets/icons/personal-cases/graph.svg';
import { ReactComponent as ArrowDownIcon } from '../../assets/icons/personal-cases/arrow-down.svg';
import { ReactComponent as BagMoneyIcon } from '../../assets/icons/personal-cases/bag-money.svg';

export const personalCases = [
  {
    id: 1, 
    icon: <StarknetIcon />, 
    listCases: [
      {id: 101, innerIcon: <GraphIcon />, case: <span><span className="span-bold">25 аккаунтов из 40</span> получили по 4500-5000 монет</span> },
      {id: 102, innerIcon: <ArrowDownIcon />, case: <span><span className="span-bold">Затраты:</span> 3200$</span> },
      {id: 103, innerIcon: <BagMoneyIcon />, case: <span><span className="span-bold">Прибыль:</span> 24.800$ или почти Х8</span> }
    ]
  },
  {
    id: 2, 
    icon: <PolyhedraIcon />, 
    listCases: [
      {id: 201, innerIcon: <GraphIcon />, case: <span>Получила <span className="span-bold">500-600 монет на 25 аккаунтов</span></span> },
      {id: 202, innerIcon: <ArrowDownIcon />, case: <span><span className="span-bold">Затраты:</span> ~3000$</span> },
      {id: 203, innerIcon: <BagMoneyIcon />, case: <span><span className="span-bold">Прибыль:</span> 22.000$ или Х7</span> }
    ]
  },
  {
    id: 3, 
    icon: <SuiIcon />, 
    listCases: [
      {id: 301, innerIcon: <GraphIcon />, case: <span>Дроп, который был в 2023 году на медвежьем рынке</span> },
      {id: 302, innerIcon: <ArrowDownIcon />, case: <span><span className="span-bold">Затраты:</span> всего 150$</span> },
      {id: 303, innerIcon: <BagMoneyIcon />, case: <span><span className="span-bold">Прибыль:</span> 7.000$. Это Х46!</span> }
    ]
  },
  {
    id: 4, 
    icon: <ZkSyncIcon />, 
    listCases: [
      {id: 401, innerIcon: <GraphIcon />, case: <span><span className="span-bold">29 кошельков</span> получили дроп</span> },
      {id: 402, innerIcon: <ArrowDownIcon />, case: <span><span className="span-bold">Затраты:</span> 4000$</span> },
      {id: 403, innerIcon: <BagMoneyIcon />, case: <span><span className="span-bold">Прибыль:</span> 30.000$ или Х7,5</span> }
    ]
  },

]