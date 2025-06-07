import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser ,faCode ,faSun , faPaperPlane,faEllipsis ,  faTriangleExclamation , faMobileScreen, faCircleNotch, faInbox , faHouse, faMagnifyingGlass, faChevronDown , faO , faCodePullRequest , faVirus , faPencil , faGift , faBookmark , faMessage , faLaptop , } 
from '@fortawesome/free-solid-svg-icons'
import gitImage from '../assets/git-image.png'
import gitlogo from '../assets/logo-git.png'
import { Triangle } from 'lucide-react'


const  fake =  {
    home: [
        {id:1 , intro : 'Introduction to Github' , text: 'Get started using GitHub in less than hour.'},
        {id:2 , intro : 'GitHub Pages' , text: 'create a site or blog from your GitHub repositories with Github Pages'},
        {id:3 , intro : 'Code with Copilot' , text: 'Develop with AI-powered code suggestion using GitHub Copilot, Codespaces , and VS code.'},
        {id:4 , intro : 'Hello GitHub Actions' , text: 'Create a GitHub Action and use it in a workflow.'},
    ],
    fatzy: [
        {id:1 , name: '👋 Hi , i\'m @fatzy070'},
        {id:1 , name: ' 👀 I’m interested in ...'},
        {id:1 , name: '🌱 I’m currently learning ...'},
        {id:1 , name: ' 💞️ I’m looking to collaborate on '},
        {id:1 , name: ' 📫 How to reach me ...'},
        {id:1 , name: ' 😄 Pronouns: ...'},
        {id:1 , name: '⚡ Fun fact: ...'},
    ],
    starts:'Start a new repository for Fatzy070',
    text:"A repository contains all of your project's files, revision history, and collaborator discussion.",
    name : 'Repository name',
    public:[
        {id:1 , name:'Public' , text:'Anyone on the internet can see this repository'},
        {id:2 , name:'Private' , text:'You choose who can see and commit to this repository'},
    ],
    code:[
        {id: 1 , icon:faCode , name:'Get code feedback'},
        {id: 1 , icon:faPaperPlane , name:'Create a profile README for me '},
    ],
    GUI: [
        {id:1 , head:'Simplify your development workflow with a GUI' , image:gitImage , link:'Install GitHub Desktop' , text:'to visualize, commit, and push changes without ever touching the command line.'},
        {id:1 , head:'Simplify your development workflow with a GUI' , image:gitImage , link:'the github.dev web-based editor' , text:'from your repository or pull request to create and commit changes.'},
    ],
    issue: faCodePullRequest , 
    flow:'Follow this exercise to try the GitHub flow',
    world:"GitHub's “Hello World” tutorial teaches you essentials, where you create your own repository and learn GitHub's pull request workflow for creating and reviewing code.",
    try:'try the github flow',
    Triangle: faTriangleExclamation,
    setup:"Your GitHub Copilot setup is incomplete. Please go to your settings page and complete your setup.",
    setup1:'GitHub Copilot Setup',
    pull: [
        {id:1 , name : 'My open pull request' , icon: faCodePullRequest},
        {id:1 , name : 'Summarize a pull request' , icon: faCodePullRequest},
    ],
    sun:faSun,
    learn:'Learn with a tutorial project',
    remove:'Remove from dashboard',
    dot:faEllipsis,
    code:faCode , 
    start:'Start writing code'

}
export default fake;