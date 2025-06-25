import EditBlog from "@/components/blogs/blog-panel/EditBlog";

export default function EditBlogPage({ params }) {
  return <EditBlog blogId={params.id} />;
}
