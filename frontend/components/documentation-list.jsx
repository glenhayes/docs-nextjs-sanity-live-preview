import Link from 'next/link';

function DocumentationList({ documents }) {
  console.log({ documents });

  return (
    <div className="container grid grid-cols-1 mx-auto divide-y divide-blue-100">
      <h1 className="text-2xl">Document List</h1>

      {documents?.map((document) => (
        <Link
          key={document._id}
          href={document.slug.current}
          className="p-4 hover:bg-blue-50"
        >
          <h2>{document.title}</h2>
        </Link>
      ))}
    </div>
  );
}
export default DocumentationList;
