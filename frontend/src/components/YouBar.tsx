import { useSelector } from 'react-redux'
import { RootType } from '../redux/store'
import Loading from './Loading'
import { User } from './Sidebar'
import ThemeSwitcher from './ThemeSwitcher'

const YouBar = () => {
    const { authUser }: { authUser: User } = useSelector((state: RootType) => state.user)
    if (!authUser) {
        return <li
            className=" cursor-pointer flex items-center justify-end p-4 bg-base-100 hover:bg-base-200 rounded-lg shadow relative"
        >
            <Loading />
        </li>
    }
    return (
        <li
            className=" cursor-pointer flex items-center justify-between py-4 ps-6 pe-4 border-b bg-base-200 border-base-300 relative"
        >
            <div className=' flex items-center'>
                <img
                    src={authUser.profilePhoto}
                    alt={authUser.fullName}
                    className="w-10 h-10 rounded-full mr-3"
                />

                <div>
                    <div className="font-bold">{authUser.userName}</div>
                    {/* <div className="text-sm text-gray-600">{lastMessage}</div> */}
                </div>
            </div>
            <ThemeSwitcher />
        </li>
    )
}

export default YouBar