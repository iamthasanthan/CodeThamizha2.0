import React, { useEffect, useState } from 'react'
import APIService from '../ApiService'
import './peoples.css'
import {useCookies} from 'react-cookie'
import { Link } from 'react-router-dom'
import Loadingscreen from './Loadingscreen'
import {useHistory} from 'react-router-dom'

function Peoples() {
    const [peoples, setPeoples] = useState([])
    const [token,setToken,removeToken]=useCookies(['mytoken'])
    const [searchTerm, setSearchTerm] = useState('');
    const [user, setUser] = useState('');
    const [username, setUsername] = useState('');
    const [following, setFollowing] = useState([]);
    const [currentuser,setCurrentuser]=useState([])
    const [Loading,setLoading]=useState(true)
    const [page, setPage] = useState(1);

    let history =useHistory()
    useEffect(() => {
      if (token['mytoken']==undefined) {
      history.push('/signin')
    }
   },[])

    {/*
      
      const scrollToEnd= (event) => {
      const target = event.target;
      if(target.scrollHeight - target.scrollTop === target.clientHeight){
        console.log('scroll to end')
        setPage(page+1)
      }
    } 
    useEffect(() => {
      APIService.PeopleView(page).then(res => {
        setPeoples([...peoples,res])
    })
    },[page])
  
  */}
   

    useEffect(() => 
    {
      APIService.ProfileView(token)
      .then(resp=>{setCurrentuser(resp) } )
      .catch(error=>console.log(error))


        APIService.PeopleView().then(res => {
            setPeoples(res)
        })
        .catch(error => console.log(error))
        .finally(() => setLoading(false))


        APIService.ProfileView(token).then(res => {
            setUser(res)
            setUsername(res.username)
        })
        APIService.FollowingView(token,username).then(res => {
            setFollowing(res)
        })
    }, [username])
    
    return (
        <div > 
          {Loading ? <Loadingscreen/> :(<>
             <center>
       <br/>
     <div class="Card">
  <div class="CardInner">
  <div class="container">
    <div class="Icon">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#657789" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="feather feather-search"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
    </div>
    <div class="InputContainer">
       <input
     type="text"
     placeholder="Search..."
     onChange={(e)=>setSearchTerm(e.target.value)}
     />
    </div>
  </div>
 </div>
</div></center>
            <center>
        <div className="peoples" >
           
            {peoples.filter((p)=>{
       if(searchTerm==""){
         return p
       } else if(p.username.toLowerCase().includes(searchTerm.toLowerCase())){
         return p
       }
       else if(p.full_name.toLowerCase().includes(searchTerm.toLowerCase())){
        return p
      }
     }).map(people => {
                return(
                  <>
                  {
                    people.username === currentuser.username? <></> :(

                 
                    <div class="profile-card">
                            <img src={`https://codethamizha.com${people.profile_pic}`} alt="image1" class="profile-icon" />
                            <div class="profile-name">{people.full_name}</div>
                            <div class="profile-position">{people.user_type}</div>
                            <Link style={{textDecoration:'none'}}class="button" to={`/users/${people.username}`}>
                            View</Link>
                            
                                    
                            
                           
                    </div>
                    )}
                    </>
                )
            })}
             
        </div>
        </center>
        </>)}
        </div>
    )
}

export default Peoples
