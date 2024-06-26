import { useEffect } from "react";
import useAxios from "../hooks/useAxios";
import { useAuth } from "../hooks/useAuth";
import { useProfile } from "../hooks/useProfile";
import { actions } from "../actions";
import ProfileInfo from "../components/Profile/ProfileInfo";
import MyPosts from "../components/Profile/MyPosts";



const ProfilePage = () => {

    const {state, dispatch} = useProfile();

    const {api} = useAxios();
    const {auth} =useAuth();

 


    useEffect(()=>{
        // dispatch({type:actions.type.profile.DATA_FETCHING})
        const fetchProfile = async()=>{
            try{
                const response = await api.get(`${import.meta.env.VITE_SERVER_BASE_URL}/profile/${auth?.user?.id}`);
                
                if(response.status === 200){
                    dispatch({type: actions.profile.DATA_FETCHED, data: response.data})
                }

            }catch(error){
                console.log(error.message);
               dispatch({type: actions.profile.DATA_FETCHED_ERROR, error: error.message})
            }
        };

        fetchProfile();
    }, [api, auth.user.id, dispatch]);


    if(state?.loading){
        return <div>Fetching your Profile data</div>
    }


    return (
        <>
        <ProfileInfo/>
        <MyPosts/>
        </>
    );
};

export default ProfilePage;