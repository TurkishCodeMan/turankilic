import GalleryContent from "@/components/GalleryContent/GalleryContent";
import GalleryPreview from "@/components/GalleryPreview";
import { Layout } from "@/components/Layout";
import { Navbar } from "@/components/Navbar/Navbar";
import { Wrapper } from "@/components/Wrapper";
import { client } from "@/utils/client";

export default function Gallery({ posts }: any) {
  console.log(posts);
  return (
    <Wrapper>
      <Layout>
        <Navbar />
        <GalleryContent posts={posts}/>
      </Layout>
    </Wrapper>
  );
}
export async function getServerSideProps() {
  const posts = await client.fetch(`*[_type == "gallery"]`);

  return {
    props: {
      posts,
    },
  };
}
