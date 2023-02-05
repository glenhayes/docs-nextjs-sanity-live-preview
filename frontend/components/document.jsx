function Document({ document }) {
  console.log(document);
  if (!document) return <div>Sorry, no document</div>;
  return (
    <div>
      <h1 className="text-2xl">{document.title}</h1>
    </div>
  );
}
export default Document;
