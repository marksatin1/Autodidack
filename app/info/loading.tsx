import LoadingAnimation from "../ui/components/loading-animation";

export default function Loading() {
  return (
    <section className="w-full h-full flex items-center justify-center">
      <LoadingAnimation />
    </section>
  );
}