import { withUrqlClient } from "next-urql";
import React from "react";
import { NavBar } from "../components/navbar";
import { createUrlqClient } from "../utils/createUrqlClient";
import { usePostsQuery } from "../generated/graphql";
const Index = () => {
  const [{ data }] = usePostsQuery();
  return (
    <>
      <NavBar />
      <div>Hello World</div>
      <br />
      {!data ? (
        <div>loading...</div>
      ) : (
        data.posts.map((p) => <div key={p.id}>{p.title}</div>)
      )}
    </>
  );
};

export default withUrqlClient(createUrlqClient, { ssr: true })(Index);
