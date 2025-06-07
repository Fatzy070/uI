import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import fake from '../Data/fake';
import { Slash, Search , Settings , SendHorizonal}
from "lucide-react";
import Show from './Show';
import { useState } from "react";


const Down = () => {
    const [showDash , setShowDash] = useState(false);
    const [showdash , setshowdash] = useState(false)

    const toggleDash = () => {
        setShowDash(!showDash)
    }
    const toggledash = () => {
        setshowdash(!showdash)
    }


    return (
        <>
        <section className='sect2 '>
            <div className='set'>
                <div>
                    <FontAwesomeIcon icon={fake.Triangle} />
                </div>
                <div className='w-[200px] md:w-[350px]'>
                    <p>{fake.setup}</p>
                </div>
                <div className='set1'>
                    <p>{fake.setup1}</p>
                </div>
            </div>
            <div>
                <Show />
            </div>
            <div className='type'>
                <h1>Home</h1>
                <div className='relative'>
                    <input type="text" placeholder='Ask Copilot ' />
                        <div className='absolute top-3 right-3'>
                            <SendHorizonal size={15} className='text-gray-500' />
                        </div>
                </div>
            </div>
            <div className='flex gap-2'>
                {fake.pull.map((item , index) => (
                    <div key={index} className='open' > 
                        <div>
                            <FontAwesomeIcon icon={item.icon} className='icon' id='isue'/>
                        </div>
                        <div>
                            <p>{item.name}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div  className='dot'>
                <div className='flex items-center gap-1.5'>
                    <div>
                        <FontAwesomeIcon icon={fake.sun} className='icon'/>
                    </div>
                    <div className='icon'>
                        <p>{fake.learn}</p>
                    </div>
                </div>
                <div onClick={toggledash} className='relative'>
                    <FontAwesomeIcon icon={fake.dot} />
                   {showDash && (
                     <div className='remove'>
                        <p>{fake.remove}</p>
                    </div>
                   )}
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
                {fake.home.map((item , index) => (
                    <div key={index} className='intro'> 
                        <h3><a href="#">{item.intro}</a></h3>
                        <p><a href="#">{item.text}</a></p>
                    </div>
                ))}
            </div>
           <div  className='int'>
             <p><a href="#">See more tutorial projects</a></p>
           </div>
             <div  className='dot'>
                <div className='flex items-center gap-1.5'>
                    <div>
                        <FontAwesomeIcon icon={fake.code} className='icon'/>
                    </div>
                    <div className='icon'>
                        <p>{fake.start}</p>
                    </div>
                </div>
                <div onClick={toggledash} className='relative'>
                    <FontAwesomeIcon icon={fake.dot} />
                   {showdash && (
                     <div className='remove'>
                        <p>{fake.remove}</p>
                    </div>
                   )}
                </div>
            </div>
            <div>
                <h5>{fake.starts}</h5>
                <p>{fake.text}</p>
                <form action="">
                    <label htmlFor="">{fake.name}</label><br />
                    <input type="text" placeholder='name your new repository...' />
                </form>
                <div>
                    
                </div>
            </div>
        </section>
        </>
    );
};

export default Down;