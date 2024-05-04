import PostCard from "./PostCard";


const PostsList = ({posts}) => {
      console.log('Login user posts',posts)
      return (
           !!posts && posts.map(post => (
            <PostCard
             key={post.id}
             post={post}
            ></PostCard>
           ))
      );
};

export default PostsList;