import Link from "next/link"
import { HiChevronLeft } from "react-icons/hi2"

function BreadCrumb() {
 
  return (
    <div>
        <ol className="flex gap-x-4 items-center">
            <li><Link href="/">خانه </Link></li>
            <HiChevronLeft/>
            <li>دوره ها </li>
        </ol>
    </div>
  )
}

export default BreadCrumb