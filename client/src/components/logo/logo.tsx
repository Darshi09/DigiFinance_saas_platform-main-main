import { PROTECTED_ROUTES } from "@/routes/common/routePath"
import { Link } from "react-router-dom"

const Logo = (props: { url?: string }) => {
  return (
    <Link to={props.url || PROTECTED_ROUTES.OVERVIEW} className="flex items-center gap-2">
    <div className="h-20 w-20 flex items-center justify-center">
    <img src=".\src\assets\images\logo.png" alt="" />
    </div>
    <span className="font-semibold text-lg">DigiFinance</span>
  </Link>
  )
}

export default Logo