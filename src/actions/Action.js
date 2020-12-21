export const fetchUsers = (val) =>{
    return (dispatch)=>{
        dispatch({
            type : 'FETCHING_USERS'
        })
        let apiFetch = `https://randomuser.me/api/?results=${val}` 
            fetch(apiFetch)
            .then((res)=>{
                return res.json()
            })
            .then((res)=>{
                dispatch({
                    type : 'USERS_FETCHED',
                    payload : res.results
                })
                console.log(res);
            })
            .catch((err)=>{
                console.log(err);
            })
        }
    }
