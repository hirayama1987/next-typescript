import { useRouter } from "next/router";
import Link from "next/link";

export default function Title() {
  const router = useRouter();
  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
        <div className="flex justify-between items-end gap-4 mb-6">
          <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold">{router.query.title}</h2>
        </div>
      </div>
    </div>
  );
}
