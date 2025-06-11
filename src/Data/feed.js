import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faOtter , faSquare , faChartLine , faStar, faCaretDown ,  faPencil , faGift , faBookmark , faMessage , faLaptop , } 
from '@fortawesome/free-solid-svg-icons'
import gitImage from '../assets/git-image.png'
import gitlogo from '../assets/logo-git.png'
import { Square, Triangle } from 'lucide-react'


const feed = {
   chart:faChartLine,
   trend:"Trending repositories",
   agent:"TauricResearch/TradingAgents",   
   agents:"TradingAgents: Multi-Agents LLM Financial Trading Framework" ,
   star:faStar,
   starnote:'Star',
   caret:faCaretDown , 
   otter:faOtter ,
   api:"alphacep/vosk-api",
   api1:"Offline speech recognition API for Android, iOS, Raspberry Pi and servers with Python, Java, C# and Node",
   Square: [
    {id: 1 , icon:faSquare , name: '🔮 Future ideas'},
    {id: 1 , icon:faSquare , name: '🚀 My stack'},
    {id: 1 , icon:faSquare , name: '✨ Inspiration'},
   ],
   // Day:[
   //    {id:1 , days:'3 days ago' , name:'You can now run model evaluation with Model CLI'} ,
   //    {id:2 , days:'4 days ago' , name:'Fluency and coherence evaluators added to GitHub Models'} ,
   //    {id:3 , days:'4 days ago' , name:'Control contrast for all GitHub themes'} ,
   //    {id:4 , days:'5 days ago' , name:'Enhanced metrics for CodeQL pull request alerts and Copilot autofixes'} ,
   // ]
};

export default feed;