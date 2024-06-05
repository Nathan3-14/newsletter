import Link from "next/link";

export function NewsletterLink({newsletter_name}) {
    return <li>
        <Link href={`articles/${newsletter_name}`}> {newsletter_name}</Link>
    </li>
}
