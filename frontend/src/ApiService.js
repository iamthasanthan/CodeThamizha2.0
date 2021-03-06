const BASE_URL="https://www.codethamizha.com"

export default class APIService {
    static LoginUser(body){
        return fetch(`${BASE_URL}/auth/`,{

            method:'POST',
            headers:{
                'Content-Type':'application/json',
              },
            body:JSON.stringify(body)
        }).then(resp=>resp.json())
    }

    static RegisterUser(body){
        return fetch(`${BASE_URL}/data/users/create/`,{
            method:'POST',
            headers:{
                'Content-Type':'application/json',
              },
            body:JSON.stringify(body)
        }).then(resp=>resp.json())
    }
    static UpdateUser(token,body,username){
        return fetch(`${BASE_URL}/data/users/${username}/edit/`,{
            method:'PUT',
            headers:{
                'Content-Type':'application/json',
                'Authorization':`Token ${token['mytoken']}`
              },
            body:JSON.stringify(body)
        }).then(resp=>resp.json())
    }
    
    static PeopleView(){
        return fetch(`${BASE_URL}/data/users/`,{
            'method':'GET',
            headers:{
                'Content-Type':'application/json',
            }
            }).then(resp=>resp.json())
    }
    static PeopledetailView(username){
        return fetch(`${BASE_URL}/data/users/${username}`,{
            'method':'GET',
            headers:{
                'Content-Type':'application/json',
            }
            }).then(resp=>resp.json())
    }

    static ProfileView(token){
        return fetch(`${BASE_URL}/data/users/profile/`,{
            'method':'GET',
            headers:{
                'Content-Type':'application/json',
                'Authorization':`Token ${token['mytoken']}`
            }
            })
            .then(resp=>resp.json())
    }
    static FollowUser(token,body){
        return fetch(`${BASE_URL}/data/users/follow/create/`,{
            method:'POST',
            headers:{
                'Content-Type':'application/json',
                'Authorization':`Token ${token['mytoken']}`
              },
            body:JSON.stringify(body)
        }).then(resp=>resp.json())
    }

    static UnFollowUser(token,username){
        return fetch(`${BASE_URL}/data/users/follow/edit/${username}`,{
            method:'DELETE',
            headers:{
                'Content-Type':'application/json',
                'Authorization':`Token ${token['mytoken']}`
              },
        }).then(resp=>resp.json())
    }

    static FollowersView(token,username){
        
        return fetch(`${BASE_URL}/data/users/${username}/followers/`,{
            'method':'GET',
            headers:{
                'Content-Type':'application/json',
                'Authorization':`Token ${token['mytoken']}`
            }
            })
            .then(resp=>resp.json())
    }
    static FollowingView(token,username){
        return fetch(`${BASE_URL}/data/users/${username}/following/`,{
            'method':'GET',
            headers:{
                'Content-Type':'application/json',
                'Authorization':`Token ${token['mytoken']}`
            }
            })
            .then(resp=>resp.json())
    }
    

    static AllEventsView(){
        return fetch(`${BASE_URL}/data/events/`,{
            'method':'GET',
            headers:{
                'Content-Type':'application/json',
            }
            })
            .then(resp=>resp.json())
    }

    static AllPostsView(page){
        return fetch(`${BASE_URL}/data/posts?page=${page}`,{
            'method':'GET',
            headers:{
                'Content-Type':'application/json',
            }
            })
            .then(resp=>resp.json())
    }
    static PostView(id){
        return fetch(`${BASE_URL}/data/posts/${id}`,{
            'method':'GET',
            headers:{
                'Content-Type':'application/json',
            }
            })
            .then(resp=>resp.json())
    }
    static EventView(id){
        return fetch(`${BASE_URL}/data/events/${id}/`,{
            'method':'GET',
            headers:{
                'Content-Type':'application/json',
            }
            })
            .then(resp=>resp.json())
    }
    static CreateCustomerQuery(body){
        return fetch(`${BASE_URL}/data/events/customerquery/`,{
            method:'POST',
            headers:{
                'Content-Type':'application/json',
              },

            body:JSON.stringify(body)
        }).then(resp=>resp.json())
    }

}