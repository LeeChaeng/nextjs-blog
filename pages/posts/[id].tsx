import { FC } from "react";
import Head from "next/head";
import Layout from "../../components/layout";
import Date from "../../components/date";
import { GetStaticPaths, GetStaticProps } from "next";
import { getAllPostIds, getPostData } from "../../lib/posts";
import utilStyles from "../../styles/utils.module.css";

export type PropTypes = {
  id: string;
  contentHtml: string;
  title: string;
  date: string;
};

const Post: FC<{ postData: PropTypes }> = ({ postData }) => {
  return (
    <Layout home={false}>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData: PropTypes = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
};

export default Post;
