import ProductCategories from "@/components/category";
import HeroSection from "@/components/heroSection";
export default function Home() {
  
// data for testing

const offers = [
  'https://picsum.photos/id/1015/800/600',
  'https://picsum.photos/id/1025/800/600',
  'https://picsum.photos/id/1035/800/600',
  'https://picsum.photos/id/1045/800/600',
  'https://picsum.photos/id/1055/800/600',
];






  return (
    <div >
      <HeroSection  slides={offers}/>
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start h-3/4">
        <ProductCategories/>
      </main>
    </div>

  );
}
