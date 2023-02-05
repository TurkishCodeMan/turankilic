import { Layout } from "@/components/Layout";
import { Navbar } from "@/components/Navbar/Navbar";
import { Wrapper } from "@/components/Wrapper";
import { urlFor } from "@/utils/client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectCoverflow, FreeMode, Navigation } from "swiper";
import Zoom from "react-medium-image-zoom";

export default function GalleryPreview({ post }: any) {
  console.log(post);
  return (
    <article className="gallery-image">
      <figure>
    
          <Image
            className="img"
            width={100}
            height={100}
            src={urlFor(post.mainImage).url()}
            alt="Elephant at sunset"
          />
       
        <figcaption>{post.title}</figcaption>
      </figure>
    </article>
  );
}
