import { useRouter } from "next/router";

export default function Title() {
  const router = useRouter();
  console.log(router.query);
  return <h1>{router.query.title}タイトルppdcdcdcd</h1>;
}
