import { useSelector } from "react-redux"
import { RootType } from "../redux/store"
import { Navigate } from "react-router"

const ProtectedRoute = (props: any) => {
    const { authUser } = useSelector((state: RootType) => state.user)
    return authUser ? props.children : <Navigate to={"/login"} />
}
export default ProtectedRoute