import Link from "next/link";

const TouchButton = () => {
  return (
    <Link
      href="/contact"
      className="inline-flex whitespace-nowrap text-white bg-secondary  font-medium px-6 py-[10px] rounded-3xl hover:opacity-90 active:opacity-90"
    >
      Get in Touch
    </Link>
  );
};

export default TouchButton;
