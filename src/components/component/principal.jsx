/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/euelpIwXUC3
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Prata } from 'next/font/google'
import { Yeseva_One } from 'next/font/google'

prata({
  subsets: ['latin'],
  display: 'swap',
})

yeseva_one({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from "@/components/ui/breadcrumb"
import Link from "next/link"

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

export function principal() {
  return (
    (<div className="flex flex-col min-h-screen bg-muted/40">
      
        <main className="grid flex-1 gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
          <section>
            <Card>
              <CardHeader>
                <CardTitle>Novedades</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  <div className="grid gap-2">
                    <img
                      src="/certificacion.jpg"
                      width="550"
                      height="310"
                      alt="Article Image"
                      className="aspect-video overflow-hidden rounded-xl object-cover object-center" />
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Certificación</h3>
                      <p className="text-muted-foreground">
                        Our team has developed a new technology that promises to revolutionize the renewable energy
                        industry.
                      </p>
                    </div>
                  </div>
                  <div className="grid gap-2">
                    <img
                      src="/Brigada.jpg"
                      width="550"
                      height="310"
                      alt="Article Image"
                      className="aspect-video overflow-hidden rounded-xl object-cover object-center" />
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Brigada de primeros Auxilios</h3>
                      <p className="text-muted-foreground">
                        We are excited to announce the opening of our new offices in Europe and Asia, further
                        strengthening our international presence.
                      </p>
                    </div>
                  </div>
                  <div className="grid gap-2">
                    <img
                      src="/estandar.jpg"
                      width="550"
                      height="310"
                      alt="Article Image"
                      className="aspect-video overflow-hidden rounded-xl object-cover object-center" />
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Estándar de trbajo</h3>
                      <p className="text-muted-foreground">
                        This year marks a significant milestone for our company as we celebrate 10 years of success and
                        growth.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>
          <section>
            <Card>
              <CardHeader>
                <CardTitle>What's New</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  <div className="flex items-start gap-4">
                    <img
                      src="/placeholder.svg"
                      width="100"
                      height="100"
                      alt="Product Image"
                      className="aspect-square overflow-hidden rounded-lg object-cover object-center" />
                    <div className="grid gap-1">
                      <h3 className="text-lg font-medium">Introducing Our Latest Product</h3>
                      <p className="text-muted-foreground">
                        We're excited to launch our newest product, designed to revolutionize the industry.
                      </p>
                      <Link href="#" className="text-primary" prefetch={false}>
                        Learn More
                      </Link>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <img
                      src="/placeholder.svg"
                      width="100"
                      height="100"
                      alt="Event Image"
                      className="aspect-square overflow-hidden rounded-lg object-cover object-center" />
                    <div className="grid gap-1">
                      <h3 className="text-lg font-medium">Upcoming Industry Event</h3>
                      <p className="text-muted-foreground">
                        Join us at the upcoming industry event to network and learn about the latest trends.
                      </p>
                      <Link href="#" className="text-primary" prefetch={false}>
                        Register Now
                      </Link>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <img
                      src="/placeholder.svg"
                      width="100"
                      height="100"
                      alt="Announcement Image"
                      className="aspect-square overflow-hidden rounded-lg object-cover object-center" />
                    <div className="grid gap-1">
                      <h3 className="text-lg font-medium">Exciting Company Announcement</h3>
                      <p className="text-muted-foreground">
                        We're thrilled to share a major announcement that will impact our business and industry.
                      </p>
                      <Link href="#" className="text-primary" prefetch={false}>
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>
          <section>
            <Card>
              <CardHeader>
                <CardTitle>Otros Departamentos</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  <div className="grid gap-2">
                    <div className="bg-muted/50 rounded-lg p-4">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-medium">Ingenieria de nuevo producto</h3>
                        <ActivityIcon className="w-6 h-6 text-muted-foreground" />
                      </div>
                      <p className="text-muted-foreground">
                        Our R&D team is constantly innovating and pushing the boundaries of what's possible.
                      </p>
                    </div>
                    <div className="bg-muted/50 rounded-lg p-4">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-medium">Marketing</h3>
                        <MegaphoneIcon className="w-6 h-6 text-muted-foreground" />
                      </div>
                      <p className="text-muted-foreground">
                        Our marketing experts are dedicated to promoting our products and services.
                      </p>
                    </div>
                  </div>
                  <div className="grid gap-2">
                    <div className="bg-muted/50 rounded-lg p-4">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-medium">Ventas</h3>
                        <BriefcaseIcon className="w-6 h-6 text-muted-foreground" />
                      </div>
                      <p className="text-muted-foreground">
                        Our sales team is dedicated to providing exceptional customer service and closing deals.
                      </p>
                    </div>
                    <div className="bg-muted/50 rounded-lg p-4">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-medium">Contabilidad</h3>
                        <DollarSignIcon className="w-6 h-6 text-muted-foreground" />
                      </div>
                      <p className="text-muted-foreground">
                        Our finance department ensures the company's financial stability and growth.
                      </p>
                    </div>
                  </div>
                  <div className="grid gap-2">
                    <div className="bg-muted/50 rounded-lg p-4">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-medium">Gente & Cultura</h3>
                        <UsersIcon className="w-6 h-6 text-muted-foreground" />
                      </div>
                      <p className="text-muted-foreground">
                        Our HR team is dedicated to supporting and developing our talented workforce.
                      </p>
                    </div>
                    <div className="bg-muted/50 rounded-lg p-4">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-medium">IT</h3>
                        <ServerIcon className="w-6 h-6 text-muted-foreground" />
                      </div>
                      <p className="text-muted-foreground">
                        Our IT department ensures the smooth operation of our technology infrastructure.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>
        </main>
      </div>
    )
  );
}

function ActivityIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path
        d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2" />
    </svg>)
  );
}


function BriefcaseIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      <rect width="20" height="14" x="2" y="6" rx="2" />
    </svg>)
  );
}


function DollarSignIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <line x1="12" x2="12" y1="2" y2="22" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>)
  );
}


function FileTextIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
      <path d="M10 9H8" />
      <path d="M16 13H8" />
      <path d="M16 17H8" />
    </svg>)
  );
}


function MegaphoneIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="m3 11 18-5v12L3 14v-3z" />
      <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" />
    </svg>)
  );
}


function ServerIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <rect width="20" height="8" x="2" y="2" rx="2" ry="2" />
      <rect width="20" height="8" x="2" y="14" rx="2" ry="2" />
      <line x1="6" x2="6.01" y1="6" y2="6" />
      <line x1="6" x2="6.01" y1="18" y2="18" />
    </svg>)
  );
}


function UserIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>)
  );
}


function UsersIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>)
  );
}


function XIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>)
  );
}
function PowerIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M12 2v10" />
      <path d="M18.4 6.6a9 9 0 1 1-12.77.04" />
    </svg>)
  );
}