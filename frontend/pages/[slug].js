import Document from '@/components/document';
import { client } from '@/lib/sanity.client';
const { groq } = require('next-sanity');

const query = groq`*[_type == 'documentation' && slug.current == $slug][0]{
  title
}`;

export const getStaticPaths = async () => {
  const paths =
    await client.fetch(groq`*[_type == 'documentation' && defined(slug.current) ][]{
    "params": {"slug" : slug.current}
  }`);

  return { paths, fallback: true };
};

export const getStaticProps = async ({ params }) => {
  const queryParams = { slug: params?.slug ?? '' };

  const document = await client.fetch(query, queryParams);

  return {
    props: {
      data: document,
    },
  };
};

export default function Page({ data }) {
  return (
    <div>
      <Document document={data} />
    </div>
  );
}
