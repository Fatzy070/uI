import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from "react";
import feed from '../Data/feed';
import Sea from '../assets/sea.jpeg';
import gitImage from '../assets/git-image.png'
import logos from '../assets/logos.png'
import data from '../Data/dat';

const Feed = () => {
    const [showLess , setShowless] = useState(false);
    const [showList , setShowlist] = useState(false)
    const [showStar , setShowstar] = useState(false)

    const toggleShowLess = () => {
        setShowless(!showLess)
    }

    const toggleShowList = () => {
        setShowlist(!showList)
    }
    const toggleShowStar = () => {
        setShowstar(!showStar)
    }
    
    return (
        <>
            <section className='sect8'>
              <div className='flex  justify-between see'>
                  <div className='more'>
                    <div>
                        <FontAwesomeIcon icon={feed.chart} className='issues' />
                    </div>
                    <div>
                        <p>{feed.trend} . <span>See more</span></p>
                    </div>
                </div>
                <div>
                    <div onClick={toggleShowLess} className='relative'>
                        <i class="fa-solid fa-ellipsis"></i>
                    </div>
                 {showLess && (
                       <div className='based'>
                        <p>you're seeing this based on GitHub-wide trands</p>
                        <hr class="custom-hr" />
                        <h2>Show less activity like this</h2>
                    </div>
                 )}
                </div>
              </div>
              <section className='sect7'>
                <div className='otter'>
                    <div>
                        <FontAwesomeIcon icon={feed.otter} className='otter-icon' />
                    </div>
                    <div>
                        <p>{feed.agent}</p>
                    </div>
                </div>
                <div className='star'>
                   <div>
                        <i class="fa-regular fa-star icon"></i>
                   </div>
                   <div>
                         <p>{feed.starnote}</p>
                   </div>
                   <div>
                       <div onClick={toggleShowList} className='showlist'>
                         <FontAwesomeIcon icon={feed.caret} className='icon'/>
                       </div>
                        {showList && (
                            <div className='list'>
                           <div className='ideas' >
                                 <div>
                                    <h1>Lists</h1>
                                </div>
                                <div onClick={toggleShowList}>
                                    <i class="fa-solid fa-xmark icon"></i>
                                </div>
                           </div>
                           <hr className='custom-hr' />
                           <div>
                            {feed.Square.map((item , index) => (
                                <div key={index} className='future'> 
                                    <div>
                                        <FontAwesomeIcon icon={item.icon} className='icon' />
                                    </div>
                                    <div>
                                        <p>{item.name}</p>
                                    </div>

                                </div>
                            ))
                            }
                           </div>
                           <hr className='custom-hr' />
                           <div className='idea'>
                                <div>
                                    <i class="fa-solid fa-plus icon"></i>
                                </div>
                                <div>
                                    <p>Create list</p>
                                </div>
                           </div>
                        </div>
                        )}
                   </div>
                </div>
              </section>
              <div>
                <p className='agent'>{feed.agents}</p>
                <div className='flex  gap-4'>
                    <div className='python'>
                        <div className='empt'></div>
                        <div>
                            <p>Python</p>
                        </div>
                    </div>
                    <div className='python'>
                        <div>
                            <i class="fa-regular fa-star icon"></i>
                        </div>
                        <div>
                            <p>1.2k</p>
                        </div>
                    </div>
                </div>
              </div>
              <hr className='custom-hr2' />
              <section className='sect7'>
                <div className='otter'>
                    <div className='sea'>
                        <img src={Sea} alt="" />
                    </div>
                    <div>
                        <p>{feed.api}</p>
                    </div>
                </div>
                <div className='star'>
                   <div>
                        <i class="fa-regular fa-star icon"></i>
                   </div>
                   <div>
                         <p>{feed.starnote}</p>
                   </div>
                   <div>
                       <div onClick={toggleShowStar} className='showlist'>
                         <FontAwesomeIcon icon={feed.caret} className='icon'/>
                       </div>
                        {showStar && (
                            <div className='list'>
                           <div className='ideas' >
                                 <div>
                                    <h1>Lists</h1>
                                </div>
                                <div onClick={toggleShowList}>
                                    <i class="fa-solid fa-xmark icon"></i>
                                </div>
                           </div>
                           <hr className='custom-hr' />
                           <div>
                            {feed.Square.map((item , index) => (
                                <div key={index} className='future'> 
                                    <div>
                                        <FontAwesomeIcon icon={item.icon} className='icon' />
                                    </div>
                                    <div>
                                        <p>{item.name}</p>
                                    </div>

                                </div>
                            ))
                            }
                           </div>
                           <hr className='custom-hr' />
                           <div className='idea'>
                                <div>
                                    <i class="fa-solid fa-plus icon"></i>
                                </div>
                                <div>
                                    <p>Create list</p>
                                </div>
                           </div>
                        </div>
                        )}
                   </div>
                </div>
              </section>
              <div>
                <p className='agent'>{feed.api1}</p>
                <div className='flex  gap-4'>
                    <div className='python'>
                        <div className='empt' id='empt'></div>
                        <div>
                            <p>Jupyter Notebook</p>
                        </div>
                    </div>
                    <div className='python'>
                        <div>
                            <i class="fa-regular fa-star icon"></i>
                        </div>
                        <div>
                            <p>10.5k</p>
                        </div>
                    </div>
                </div>
              </div>
            </section>
        <section className='flex flex-wrap md:flex-nowrap sects'>
               <div className='inc'>
                <div className='hub'>
                    <img src={logos} alt="" />
                </div>
                <div>
                    <p>© 2025 GitHub, Inc.</p>
                </div>
            </div>
             <div className='shares'>
                    <p>{data.term}</p>
                    <p>{data.privacy}</p>
                    <p>{data.sec}</p>
                    <p>{data.sta}</p>
                    <p>{data.cook}</p>
                    <p>{data.share}</p>
                </div>
        </section>
        </>
    );
};

export default Feed;