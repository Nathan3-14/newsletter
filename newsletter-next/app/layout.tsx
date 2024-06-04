import '@/app/ui/global.css';
import '@/app/ui/global-newsletters.css';
import { fredoka } from "@/app/ui/fonts";
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={fredoka.className}>
        <h1>Title</h1>
        {children}
      </body>
    </html>
  );
}