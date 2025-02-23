import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <header className="bg-green-800/90 backdrop-blur-md text-white py-4 sticky top-0 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          Sanjaya Krishi Sayog
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Button variant="ghost">Home</Button>
            </li>
            <li>
              <Button variant="ghost">About</Button>
            </li>
            <li>
              <Button variant="ghost">Services</Button>
            </li>
            <li>
              <Button variant="ghost">Contact</Button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

