import GalleryPreview from "@/components/GalleryPreview";

export default function GalleryContent({ posts }: any) {

  return (
    <div className="gallery-content">
      <h2>Fotoğraf Galerisi</h2>
      {posts.length == 0 ? (
        <h2 style={{ fontStyle: "italic" }}>Fotoğraf Bulunamadı</h2>
      ) : (
        <div className="list">
          {posts?.map((post: any) => (
            <GalleryPreview key={post._id} post={post} />
          ))}
        </div>
      )}
    </div>
  );
}
