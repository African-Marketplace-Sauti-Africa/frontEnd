import React, {useEffect, useState} from 'react';
import axios from 'axios';
import '../styles/DevPage.css'

const devTeam = [
    {name:'Rod Hentringer',
        gitId:'rodhent'},
    {name:'April Ashby',
        gitId:'aprilissy'},
    {name:'Benaiah Varner',
        gitId:'benaiah-varner'},
    {name:'Emily Ryan',
        gitId:'emilyr027'},
    {name:'Juan Ruiz',
        gitId:'ruizaj13'}
]



export default function DevPage() {
    
    const [devs, setDevs] = useState(devTeam);

    useEffect(() => {
        const devLoop = async() => {
            const developers = [...devs]
            for(let i = 0; i < devs.length; i++){
                const {data} = await axios.get(`https://api.github.com/users/${devs[i].gitId}`)
                developers[i].avatar = data.avatar_url
                developers[i].profilePage = data.html_url
            }
            setDevs(developers);
        }
        devLoop()
    },[]) 


    
    return (
        <div>
            <h1>Meet The Team</h1>
        <div className='devCard'>
           {devs.map((dev, index) => {
               return (
                <a href={dev.profilePage} target='_blank' rel='noreferrer'>
                <div className='imgWrap'>
                    <img src={dev.avatar} alt='avatar'/>
                    <p className='imgDesc'>{dev.name}</p>
                </div>
                </a>
               )
           })}
        </div>
        </div>
    );
}



