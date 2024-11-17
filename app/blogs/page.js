import { DataBlog } from "@/components/blogs/blogs-data/DataBlog";
import Navbar from "@/components/navbar/Navbar";

export default async function BlogsPage({searchParams}) {
    const {pageNo} = await searchParams;
    return <>
        <Navbar />
        <DataBlog pageNo={pageNo} />
    </>
};
