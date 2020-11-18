import React, { useState, useEffect } from 'react'
import axios from 'axios';
import styled, { createGlobalStyle, css } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital@0;1&display=swap');

    html {
        background:linear-gradient(to left, rgb(35, 37, 38), rgb(65, 67, 69));
    }
    body {
        font-family: 'Open Sans', sans-serif;
        letter-spacing:2.5px;
        color:white;
        text-align:center;
        align-items:center;
        border-bottom: 1px;
        border-color: white;
        margin-top:30px;
    }
    h2 {
        border-bottom: 2px solid  white; 
        font-size:25px;
        border-top: 2px solid white;
        letter-spacing:5px;
        border-width:100%;
        display:table-cell;
        padding: 12px 12px 12px 12px;
        margin-bottom: 20px;
        margin:30px;
    }
`
const Heading = styled.div`
    margin-top:20px;
    margin-bottom:50px;
    width:800px;
    align-items:left;
`


const CenterDiv = styled.div`
    display:flex;
    flex-wrap:wrap;
    flex-direction:column;
    align-items:center;
    padding:0 20px;
    color:rgba(29, 36, 42, 0.9);
`

const Card = styled.div`
    text-align:center;
    border-radius:10px;
    display:flex;
    justify-content:left;
    align-items:center;
    flex-direction:row;
    width:70%;
    margin:10px;
    padding:2px;
    /* box-shadow:0px 0px 20px 0px rgba(0, 0, 0, 0.2); */
    box-shadow:0px 0px 20px 0px black;
    background:white;
`

const Portrait = styled.img`
    max-width:100%;
    height:auto;
    width:30%;
    border-radius:50%;
    margin-left:15px;
    margin:20px;
`

const DevInfo = styled.div`
    display:flex;
    flex-direction:column;
    margin:10px;
    margin-left:20px;
    text-align:left;
    margin-right:5px;
`

const Name = styled.div`
    font-size:1.4rem;
`

const GitID = styled.div`
    font-size:1.1rem;
    margin-top:-35px;
`


const team = [
    {name: 'Rod Hentringer',
        gitID:'rodhent'},
    {name: 'April Ashby',
        gitID: 'aprilissy'},
    {name: 'Benaiah Varner',
        gitID: 'benaiah-varner'},
    {name: 'Juan Ruiz', 
        gitID: 'ruizaj13'},
    {name: 'Emily Ryan',
        gitID: 'emilyr027'},
]



const Developers = () => {

    const [users, setUsers ] = useState(team);

        useEffect(() => {
            const devInfo = async function(){
                const teammates = [...users]
                for(let i = 0; i < users.length; i++){
                    const {data} = await axios.get(`https://api.github.com/users/${users[i].gitID}`)
                    teammates[i].image = data.avatar_url
                    teammates[i].url = data.html_url
                }
                setUsers(teammates);
            }
            devInfo()
        }, [])



    return (
        <>
        <GlobalStyles/>
            <Heading>
            <h2>MEET THE DEVELOPERS</h2>  
            </Heading>
       {
          users.map((developer, index) => {
            return(    
                
                <CenterDiv>
                    <Card>
                    <Portrait src={developer.image}/>
                    <DevInfo>
                        <Name><h3>{developer.name}</h3></Name>
                        <GitID><h4>{developer.gitID}</h4></GitID>
                    </DevInfo>
                    </Card>
                </CenterDiv>

            )
          })
        }
        </>  
    )
}

export default Developers

      


