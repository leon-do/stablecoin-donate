import Link from "next/link";

export default function Home() {
  return (
    <div className="container">
      <div className="foobar"> stuff</div>
      <Link href="/pay"> link to pay</Link>
      <style jsx>{`
        .foobar {
          border: 1px solid red;
        }
      `}</style>
    </div>
  );
}
