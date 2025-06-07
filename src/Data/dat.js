import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser ,faCode ,faSun  , faMobileScreen, faCircleNotch, faInbox , faHouse, faMagnifyingGlass, faChevronDown , faO , faCodePullRequest , faCaretDown , faVirus , faPencil , faGift , faBookmark , faMessage , faLaptop , } from '@fortawesome/free-solid-svg-icons'
import gitImage from '../assets/git-image.png'
import gitlogo from '../assets/logo-git.png'
let data = {
    home : [
        {id:1 , icon:faHouse , name:'home'},
        {id:2 , icon:faO , name:'issues'},
        {id:3 , icon:faCodePullRequest , name:'pull request'},
        {id:4 , icon:faMessage , name:'project'},
        {id:4 , icon:faMessage , name:'discussion'},
        {id:5 , icon:faLaptop , name:'codespaces'},
        {id:6 , icon:faVirus , name:'copilot'},
    ],
    virus: faVirus ,
    vi:faCircleNotch,
    issue: faCodePullRequest,
    chev:faChevronDown ,
    message : faMessage ,
    code:faCode , 
    box:faInbox ,
    explore: [
        {id: 1 , icon:faPencil , name:'explore'},
        {id: 2 , icon:faGift , name:'marketplace'},
    ],
    res: [
        {id: 1 , image:gitImage , name:'Fatzy070/Project'},
        {id: 2 , image:gitImage , name:'Fatzy070/Gallery'},
        {id: 3 , image:gitImage , name:'Fatzy070/login-page'},
        {id: 4 , image:gitImage , name:'Fatzy070/Commerce'},
        {id: 5 , image:gitImage , name:'Fatzy070/impulserr'},
        {id: 5 , image:gitImage , name:'Fatzy070/kopee'},
        {id: 5 , image:gitImage , name:'Fatzy070/TO-DO-app'},
        {id: 5 , image:gitImage , name:'Fatzy070/liveweather'},
        {id: 5 , image:gitImage , name:'Fatzy070/fetch'},
        {id: 5 , image:gitImage , name:'Fatzy070/joyvinco-project'},
        {id: 5 , image:gitImage , name:'Fatzy070/fartzy-pro'},
        {id: 5 , image:gitImage , name:'Fatzy070/calculator'},
        {id: 5 , image:gitImage , name:'Fatzy070/kitchen'},
        {id: 5 , image:gitImage , name:'Fatzy070/list'},
        {id: 5 , image:gitImage , name:'Fatzy070/restaurant'},
        {id: 5 , image:gitImage , name:'Fatzy070/ice-cream'},
        {id: 5 , image:gitImage , name:'Fatzy070/jumia-project'},
        {id: 5 , image:gitImage , name:'Fatzy070/payment-cards'},
        {id: 5 , image:gitImage , name:'Fatzy070/virtual-website'},
        {id: 5 , image:gitImage , name:'Fatzy070/private-'},
    ],
    about: 'about' ,
     blog:'blog',
    term:'terms',
    privacy: 'privacy',
    sec : 'security',
    sta: 'status',
    share: 'do not share my personal infomation',
    cook:'manage cookies',
    logo: gitlogo ,
    search:'repositories' ,
    search1:faMagnifyingGlass , 
    image:gitImage , 
    top: 'Top repositories',
    ne:'new',
    phone:faMobileScreen , 
    caret:faCaretDown , 
    


}

export default data