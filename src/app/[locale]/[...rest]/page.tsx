import { notFound } from "next/navigation";

// Any path no other route matches renders [locale]/not-found.tsx inside the locale layout.
export default function CatchAll() {
  notFound();
}
