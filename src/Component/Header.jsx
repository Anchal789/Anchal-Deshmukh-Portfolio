import React from 'react'
import {Link} from "react-router-dom"
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import Button from '@mui/material/Button';

const Header = () => {
  return (
    <header className="bg-gray-950 text-gray-50 py-4 px-6 md:px-10 flex items-center justify-between">
        <Link href="#" className="flex items-center gap-2" prefetch={false}>
          <SentimentSatisfiedAltIcon className="h-6 w-6" />
          <span className="text-lg font-semibold">John Doe</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="#" className="hover:underline underline-offset-4" prefetch={false}>
            Home
          </Link>
          <Link href="#" className="hover:underline underline-offset-4" prefetch={false}>
            About
          </Link>
          <Link href="#" className="hover:underline underline-offset-4" prefetch={false}>
            Skills
          </Link>
          <Link href="#" className="hover:underline underline-offset-4" prefetch={false}>
            Experience
          </Link>
          <Link href="#" className="hover:underline underline-offset-4" prefetch={false}>
            Projects
          </Link>
          <Link href="#" className="hover:underline underline-offset-4" prefetch={false}>
            Certifications
          </Link>
          <Link href="#" className="hover:underline underline-offset-4" prefetch={false}>
            Contact
          </Link>
        </nav>
        <Button size="sm" className="hidden md:inline-flex">
          Resume
        </Button>
      </header>
  )
}

export default Header