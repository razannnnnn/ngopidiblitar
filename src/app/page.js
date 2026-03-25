import { getCafes } from "@/lib/google-sheets";
import { Hero } from "@/components/hero";
import { CafeList } from "@/components/cafe-list";

export const revalidate = 3600;

export default async function Home() {
  const cafes = await getCafes();

  return (
    <>
      <Hero />
      <CafeList cafes={cafes} />
    </>
  );
}
