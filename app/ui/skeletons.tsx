// Loading animation
const shimmer =
  "before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent";

export function GallerySkeleton() {
  return (
    <div className="grid w-full h-screen justify-center">
      <div className="w-96 h-96 bg-gray-200 rounded-md shadow-3xl animate-pulse" />
      <div className="w-96 h-8 my-4 bg-gray-200 rounded-md shadow-3xl animate-pulse" />
    </div>
  );
}

export function GalleriesSkeleton() {
  return (
    <div className={`${shimmer} grid grid-cols-2 gap-8 p-4 h-[75vh] overflow-scroll`}>
      <GallerySkeleton />
      <GallerySkeleton />
      <GallerySkeleton />
      <GallerySkeleton />
      <GallerySkeleton />
      <GallerySkeleton />
    </div>
  );
}
