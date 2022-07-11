import { MicroCMSListResponse } from "microcms-js-sdk";
import type { GetStaticProps, NextPage } from "next";
import Link from "next/link";
import { Layout } from "../components/Layout";
import { client } from "../libs/client";
import { Blog } from "../types";

type Props = MicroCMSListResponse<Blog>;

const Home: NextPage<Props> = (props) => {
  return (
    <Layout label="Home">
      <h1 className="font-bold text-3xl text-center">ブログ一覧</h1>
      <ul className="mt-8 space-y-4">
        {props.contents.map((content) => (
          <li key={content.id} className="text-center mx-auto">
            <Link href={`/blog/${content.id}`}>
              <a>{content.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const data = await client.getList<Blog>({
    endpoint: "blog",
  });
  return {
    props: data,
  };
};
