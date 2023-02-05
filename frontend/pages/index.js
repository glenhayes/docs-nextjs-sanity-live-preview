import DocumentationList from '@/components/documentation-list';
import { client } from '@/lib/sanity.client';
import { groq } from 'next-sanity';
import Head from 'next/head';

const query = groq`*[_type == "documentation" && defined(slug.current)]{
  _id,
  title,
  slug
}`;

export const getStaticProps = async () => {
  const data = await client.fetch(query);

  console.log(data);
  return { props: { data } };
};

export default function Home({ data }) {
  console.log(data);
  return (
    <>
      <div>
        <DocumentationList documents={data} />
      </div>
    </>
  );
}
