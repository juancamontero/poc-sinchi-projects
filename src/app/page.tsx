import { redirect } from "next/navigation"


export default function Home() {
redirect('/programs')

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className='my-8 text-5xl'>
        Projectos sinchi
      </h1>
    </main>
  )
}