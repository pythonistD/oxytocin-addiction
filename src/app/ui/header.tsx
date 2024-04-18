'use client'

import Router, {useRouter} from "next/navigation";

export default function Header(){
    return (
      <header className="text-center p-6 bg-[#F4F7F5]">
        <nav className="flex justify-center items-center gap-6 mb-4">
          <NavBTN btnName="Home" href="/"/>
          <NavBTN btnName="Abour us" href="#"/>
          <div className="relative group">
            <button id="dropdownHoverButton" data-dropdown-toggle="dropdownHower" data-dropdown-trigger="{hover| click}" className="text-[#334E68] font-roboto hover:bg-gray-200 p-2 rounded inline-flex items-center">
              Tests
              <i className="fas fa-chevron-down ml-2"></i>
            </button>
            <div id="dropdownHover" className="absolute hidden group-hover:block bg-white shadow-lg rounded mt-2">
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 font-roboto hover:bg-gray-100"
              >
                Personality Test
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 font-roboto hover:bg-gray-100"
              >
                IQ Test
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 font-roboto hover:bg-gray-100"
              >
                Career Test
              </a>
            </div>
          </div>
        </nav>
        <h1 className="font-bold text-[#334E68] text-3xl font-roboto">
          Psychological Tests
        </h1>
        <p className="text-[#486581] mt-2 font-crimson-text">
          Discover more about yourself with our comprehensive tests
        </p>
      </header>
    );
}

interface TestBTNProps {
  btnName: string,
  href: string
}

function NavBTN({btnName, href}: TestBTNProps){
  const router = useRouter()

  const handleClick = (href: string) => {
    router.push(href)
  }


  return (
    <button className="text-[#334E68] font-roboto hover:bg-gray-200 p-2 rounded"
    onClick={() => handleClick(href)}>
      {btnName}
    </button>
  )
}