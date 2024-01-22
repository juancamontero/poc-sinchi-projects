import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface Props {
  item: {
    path: string
    text: string
  }
}

export const TopMenuItem = ({ item }: Props) => {
  const pathName = usePathname()
  return (
    <Link
      key={item.path}
      href={item.path}
      className={
        pathName.includes(item.path)
          ? 'inline-block pt-1 pb-1 lg:px-2 px-1 border lg:pb-2 border-gray-600 rounded-md bg-gray-700 text-sky-400 text-xs sm:text-xs lg:text-sm font-medium  cursor-pointer hover:text-sky-600 h-7'
          : 'inline-block pt-1 pb-1 lg:px-2 px-1 border lg:pb-2 border-gray-600 rounded-md bg-gray-700 text-gray-200 text-xs sm:text-xs lg:text-sm font-medium  cursor-pointer hover:text-sky-600 h-7'
      }
    >
      {item.text}
    </Link>
  )
}
