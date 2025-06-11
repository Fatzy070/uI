import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import fake from '../Data/fake';
import { Slash, Search , Settings , SendHorizonal}
from "lucide-react";
import Show from './Show';
import { useState } from "react";
import gitimage from '../assets/git-image.png'
import gitlogo from '../assets/logo-git.png'
import Feed from './Feed';


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
                <div onClick={toggleDash} className='relative'>
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
       <section className='grid grid-cols-1 gap-3 md:grid-cols-2'>
               <div className='starts'>
                <h5>{fake.starts}</h5>
                <p>{fake.text}</p>
                <form action="" className='respo'>
                    <label htmlFor="">{fake.name}</label><br />
                    <input type="text" placeholder='name your new repository...' />
                </form>
                <div className='radio'>
                    <div>
                        <input type="radio" name=''  className="custom-radio" />
                    </div>
                    <div>
                        <h3>public</h3>
                        <p>Anyone on the internet can see this repository</p>
                    </div>
                </div>
                <div className='radio'>
                    <div>
                        <input type="radio" name=''  className="custom-radio" />
                    </div>
                    <div>
                        <h3>private</h3>
                        <p>You choose who can see and commit to this repository</p>
                    </div>
                </div>
                <div className='create'>
                    <p>{fake.create}</p>
                </div>
            </div>
            <div className='starts'>
                <h5>{fake.introduce}</h5>
                <p>{fake.share}</p>
                <div className='allread'>
                    <div className='read'>
                    <div>
                        <h1>Fatzy070/README <span>.md</span></h1>
                    </div>
                    <div className='crea'>
                        <p>Create</p>
                    </div>
                </div>
                <div>
                    <ol className='order'>
                        {fake.fatzy.map((item , index) => (
                            <div key={index} className='flex  gap-1.5'>
                                <div className='text-[10px] text-gray-400'>{item.id}</div>
                                <div>
                                    <li className='mono'>- {item.name}</li>
                                </div>
                            </div>
                        ))}
                    </ol>
                </div>
                </div>
            </div>
       </section>
        <div  className='dot'>
                <div className='flex items-center gap-1.5'>
                    <div>
                        <FontAwesomeIcon icon={fake.sun} className='icon'/>
                    </div>
                    <div className='icon'>
                        <p>{fake.tools}</p>
                    </div>
                </div>
                <div onClick={toggleDash} className='relative'>
                    <FontAwesomeIcon icon={fake.dot} />
                   {showDash && (
                     <div className='remove'>
                        <p>{fake.remove}</p>
                    </div>
                   )}
                </div>
            </div>
            <div className='grid grid-cols-1 gap-2.5 md:grid-cols-2'>
                <div className='simply'>
                    <h1>Simplify your development workflow with a GUI</h1>
                    <div className='work'>
                        <div className='gitimage'>
                            <img src={gitimage} alt={fake.create} />
                        </div>
                        <div>
                            <p><span>Install GitHub Desktop </span>  to visualize, commit, and push changes without ever touching the command line.</p>
                        </div>
                    </div>
                </div>
                <div className='simply'>
                    <h1>Write code in your web browser</h1>
                    <div className='work'>
                        <div className='gitimage'>
                            <img src={gitimage} alt={fake.create} />
                        </div>
                        <div>
                            <p>Use <span> the github.dev web-based editor </span>  from your repository or pull request to create and commit changes.</p>
                        </div>
                    </div>
                </div>
            </div>
             <div  className='dot'>
                <div className='flex items-center gap-1.5'>
                    <div>
                        <FontAwesomeIcon icon={fake.sun} className='icon'/>
                    </div>
                    <div className='icon'>
                        <p>{fake.get}</p>
                    </div>
                </div>
                <div onClick={toggleDash} className='relative'>
                    <FontAwesomeIcon icon={fake.dot} />
                   {showDash && (
                     <div className='remove'>
                        <p>{fake.remove}</p>
                    </div>
                   )}
                </div>
            </div>
            <div className='grid grid-cols-1 gap-2.5 md:grid-cols-2'>
                <div className='imagess'>
                    <img src={gitimage} alt="" />
                </div>
                <div className='essen'>
                    <FontAwesomeIcon  icon={fake.issue} className='issues'/>
                    <h2>{fake.flow}</h2>
                    <p>{fake.own}</p>
                    <div className='try'>
                        <p>{fake.try}</p>
                    </div>
                </div>
            </div>
            <div className='feed'>
                <div>
                    <h1>Feed</h1>
                </div>
                <div className='chart'>
                    <div>
                        <i class="fa-solid fa-chart-line"></i>
                    </div>
                    <div>
                        <p>Filter</p>
                    </div>
                </div>
            </div>
            <Feed />
        </section>
        </>
    );
};

export default Down;