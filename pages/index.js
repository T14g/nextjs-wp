import Head from "next/head";
import PostList from "../components/post-list/post-list.component";

export default function Home({ posts }) {

  return (
    <div>
      <h1> NextJS Blog with Wordpress CMS</h1>
      <PostList posts={posts} />
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch('http://localhost/t14g/wp-json/wp/v2/posts');
  const posts = await res.json();
  console.log(posts);
  return {
    props: {
      posts
    }
  }
}