import { useQuery } from '@apollo/client';
import Login from '../components/Login';import AddSetModal from "../components/AddSetModal"
import AddSongModal from "../components/AddSongModal"
import Songs from "../components/Songs"
import Sets from "../components/Sets"
import { GET_USERS } from "../queries/setQueries"
import { AUTH_TOKEN } from '../constants';


export default function Home() {
  const { data } = useQuery(GET_USERS);
  const token = localStorage.getItem(AUTH_TOKEN);
    if(!token) {
    return <Login />
  }
    return (
      
      <>
      
        <div className="d-flex">
          <AddSetModal props={data} />
          <AddSongModal />
        </div>
        <Songs />
        <hr />
        <Sets />
      </>
    )
}