import Link from "next/link";

export const Payments = () => {
  return (
    <div>
      কীভাবে পেমেন্ট করবেন তা বিস্তারিত জানতে এই{" "}
      <Link href="/payment-methods" className="text-accent">
        ভিডিওটি দেখুন
      </Link>
      ।
    </div>
  );
};
