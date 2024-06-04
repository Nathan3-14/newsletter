import Link from "next/link";
import { NewsletterLink } from "@/app/ui/components"

export default function Page() {
  return <>
    <h1>Here is a list of newsletters!</h1>
    <ul>
      <NewsletterLink newsletter_name="example" />
    </ul>
  </>
}
