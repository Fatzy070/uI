import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import data from "../Data/dat";
import { useState } from "react";

const Show = () => {
        const [showAll , setShowAll] = useState(false)

           const toggleShow = () => {
        setShowAll(!showAll)
    }


    const visible = showAll ? data.res : data.res.slice(0 , 7 );
    return (
        <>
        <section className="sect5">
            <div className="news">
                <div>
                    <p className="text-[15px]">{data.top}</p>
                </div>
                <div className="phone">
                    <div>
                        <FontAwesomeIcon  icon={data.phone}/>
                    </div>
                    <div>
                        <p>{data.ne}</p>
                    </div>
                </div>
            </div>
            <div className="text">
                <input type="text" placeholder="Find a repository....   " />
            </div>
             <div className="index">
                    {visible.map((item , index) => (
                        <div className='expore' key={index}> 
                            <div className='profile'>
                                <img src={item.image} alt={item.name} />
                            </div>
                            <div>
                                <p>{item.name}</p>
                            </div>
                        </div>
                    ))}
                    

                    {data.res.length > 7 &&  (
                        <div className="show"> 
                            <p onClick={toggleShow}>
                                {showAll ? 'show less' : 'Show more'}
                            </p>
                        </div>
                    )}
                </div>
        </section>
        </>
    );
};

export default Show;