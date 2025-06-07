import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import data from "../Data/dat"
import '../css/home.css'
import SearchBox from "../components/SearchBox";
import { Slash, Search , Settings}
from "lucide-react";



let Home = () => {
    const [showAll , setShowAll] = useState(false)
    const [showMenu , setshowMenu] = useState(false)
    const [showConvo, setShowConvo] = useState(false);
    const [showChev , setShowchev] = useState(false)
    
    const toggleChev = () => {
        setShowchev(!showChev)
    } 

const toggleConvo = () => {
  setShowConvo(!showConvo);
};

    const toggleMenu = () => {
        setshowMenu(!showMenu)
    }

    const toggleShow = () => {
        setShowAll(!showAll)
    }

    const visible = showAll ? data.res : data.res.slice(0 , 4 );

    return <div className="dash">
        <section className="nav-top">
            <div className='bar' onClick={toggleMenu}>
                <i className="fa-solid fa-bars"></i>
             </div>
            <div className={`pull ${showMenu ? 'slide-in' : 'slide-out'}`}>
              <div className="mark" onClick={toggleMenu}>
                  <div className='logo'>
                    <img src={data.logo} alt={data.search} />
                </div>
                <div className="x-m">
                    <i className="fa-solid fa-xmark"></i>
                </div>
              </div>
              <div className="pro">
                <div >
                    {data.home.map((post) => (
                    <div  className='home' key={post}>
                        <FontAwesomeIcon icon={post.icon} className='icon' />
                        <p>{post.name}</p>
                    </div>
                ) )}
                </div>
                <div className='copilot'>
                    {data.explore.map((item) => (
                        <div className='home' key={item}>
                            <FontAwesomeIcon icon={item.icon} className='icon' />
                            <p>{item.name}</p>
                        </div>
                    ))}
                </div>
                <div className='search'>
                    <div>
                        <p>{data.search}</p>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={data.search1} className='icon'/>
                    </div>
                </div>
                <div>
                    {visible.map((item , index) => (
                        <div className='explore' key={index}> 
                            <div className='profile'>
                                <img src={item.image} alt={item.name} />
                            </div>
                            <div>
                                <p>{item.name}</p>
                            </div>
                        </div>
                    ))}
                    

                    {data.res.length > 4 &&  (
                        <div className="show"> 
                            <p onClick={toggleShow}>
                                {showAll ? 'show less' : 'show more'}
                            </p>
                        </div>
                    )}
                </div>
                <div className='copy'>
                    <p>&copy; 2025 Github, inc</p>
                </div>
                <div className="terms">
                    <p>{data.about}</p>
                    <p>{data.blog}</p>
                    <p>{data.term}</p>
                    <p>{data.privacy}</p>
                    <p>{data.sec}</p>
                    <p>{data.sta}</p>
                    <p>{data.share}</p>
                    <p>{data.cook}</p>
                </div>
                </div>
            </div>
            
            <div className="board">
                <div className='log'>
                    <img src={data.logo} alt={data.search} />
                </div>
                <div>
                    <p>dashboard</p>
                </div>
            </div>               
        </section>
        <section className="sect">
             <div>
                <SearchBox/>
            </div>
            <div className="chev">
                <div className="che">
                    <FontAwesomeIcon icon={data.virus} className="icon"/>
                </div>
                <div className="che" id="che" onClick={toggleConvo}>
                    <FontAwesomeIcon icon={data.caret} className="icon" />
                    {showConvo && (
                        <div className="convo">
                        <p className="verse">New conversation in</p>
                        <div className="new" id="ne">
                            <div className="ass">
                           <div>
                             <FontAwesomeIcon icon={data.message} className="icon" />
                           </div>
                            <div>
                                <p>assistive</p>
                            </div>
                        </div>
                        <div className="cc">
                            <p>C</p>
                        </div>
                        </div>
                        <div className="new" id="new">
                            <div className="ass">
                            <div>
                                <i class="fa-solid fa-download icon"></i>
                            </div>
                            <div>
                                <p>download for </p>
                            </div>
                        </div>
                        <div>
                            <i class="fa-solid fa-chevron-right icon"></i>
                        </div>
                        </div>
                        <div className="ass" id="set">
                            <div>
                                <Settings className="icon" size={15} />
                            </div>
                            <div>
                                <p>settings</p>
                            </div>
                        </div>
                    </div>
                    )}
                </div>
            </div> 
            <div className="chev">
                <div>
                    <i class="fa-solid fa-plus icon"></i>
                </div>
                <div className="chec" onClick={toggleChev}>
                      <FontAwesomeIcon icon={data.caret} className="icon" />
                    {showChev && (
                         <div  className="chevs">
                         <div className="code">
                        <div>
                            <FontAwesomeIcon  icon={data.code} className="icon" />
                        </div>
                        <div>
                            <p>New repository</p>
                        </div>
                      </div>
                      <div className="code" id="code">
                        <div>
                            <FontAwesomeIcon  icon={data.code} className="icon" />
                        </div>
                        <div>
                            <p>import  repository</p>
                        </div>
                      </div>
                      <div className="code" id="space">
                        <div>
                            <FontAwesomeIcon  icon={data.code} className="icon" />
                        </div>
                        <div>
                            <p>New code space</p>
                        </div>
                      </div>
                      <div className="code" id="code">
                        <div>
                            <FontAwesomeIcon  icon={data.code} className="icon" />
                        </div>
                        <div>
                            <p>New gist</p>
                        </div>
                      </div>
                      <div className="code">
                        <div>
                            <FontAwesomeIcon  icon={data.code} className="icon" />
                        </div>
                        <div>
                            <p>New organization</p>
                        </div>
                      </div>
                      <div className="code" >
                        <div>
                            <FontAwesomeIcon  icon={data.code} className="icon" />
                        </div>
                        <div>
                            <p>New project</p>
                        </div>
                      </div>
                     </div>
                    )}
                </div>
            </div>
            <div className="circle" id="circle">
                <FontAwesomeIcon icon={data.vi} /> 
            </div>
            <div className="circle" id="circle">
                <FontAwesomeIcon icon={data.issue} /> 
            </div>
            <div className="circle" id="circ">
                <FontAwesomeIcon icon={data.search1} /> 
            </div>
            <div className="circle">
                <FontAwesomeIcon icon={data.box} /> 
            </div>
            <div className="pro-image">
                <img src={data.image} alt={data.about} />
            </div>
        </section> 
    </div>
}

export default Home