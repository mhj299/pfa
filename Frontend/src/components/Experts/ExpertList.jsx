
import {Experts} from'./../../assets/data/Experts';
import ExpertCard from './ExpertCard';
const ExpertList =() => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-
    [55px] '>
         {Experts.map(expert=>(
         <ExpertCard key={expert.id} expert={expert} />
        ))} 
        </div>
  )
}

export default ExpertList

