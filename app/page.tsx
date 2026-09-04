import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1 className="font-bold text-3xl">Your Local Repair Experts</h1>
      <p className="font-bold">One call. One team. QuickFix</p>
      <p>From HVAC and electrical work to plumbing, mechanical repairs, and everyday maintenance, QuickFix helps keep your home or business running smoothly.</p>
      <p className="font-bold">Fast service. Quality repairs. Reliable results.</p>
      <Link href="/contact">[Request a Service]</Link>
      <Link href="/about">[Learn More]</Link>
    </div>
  );
}
