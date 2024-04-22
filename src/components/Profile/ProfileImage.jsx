import { useRef } from "react";
import useAxios from "../../hooks/useAxios";
import { useProfile } from "../../hooks/useProfile";
import EditIcon from '../../assets/icons/edit.svg';


const ProfileImage = () => {

      const {state, dispatch} = useProfile();
      const {api} = useAxios();

      const fileUploadRef = useRef();



  return (
      <div
      className="relative mb-12 max-h-[180px] max-w-[180px] rounded-full lg:mb-11 lg:max-h-[218px] lg:max-w-[218px] "
    >
      <img
        className="max-w-full"
        src={`${import.meta.env.VITE_SERVER_BASE_URL}/${state?.user?.avatar}`}
        alt={state?.user?.firstName}
      />

      <form>
            <button className="flex-center absolute bottom-4 right-4 h-7 w-7 rounded-full bg-black/50 hover:bg-black/80" type="submit">
            <img src={EditIcon} alt="Edit" />
            </button>
            <input id="file" type="file" hidden></input>
      </form>
    </div>
  )
}

export default ProfileImage