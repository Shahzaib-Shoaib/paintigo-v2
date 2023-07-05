export default function BlogPageContent({ blog }: any) {
  return (
    <div>
      <div className="pt-16 space-y-8 md:space-x-4 lg:space-x-8 max-w-3xl w-11/12 mx-auto">
        <h2 className="text-black text-4xl font-bold">{blog.title}</h2>
        <div
          className="font-poppins text-black"
          dangerouslySetInnerHTML={{ __html: blog.contentHtml }}
        />
      </div>
    </div>
  );
}
