

import PostsList from '../Posts/PostsList';
import { useProfile } from './../../hooks/useProfile';

const MyPosts = () => {
  const {state} = useProfile();
  const posts = state?.posts;

  

  return (
  <>
   <h4 className="mt-6 text-xl lg:mt-8 lg:text-2xl">Your Posts</h4>
   <PostsList posts={posts} />
  </>
  )
}

export default MyPosts