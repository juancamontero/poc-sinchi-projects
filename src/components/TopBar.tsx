import { TopBrandWidget } from './TopBrandWidget'
export const TopBar = () => {
  return (
    <div className='top-0 h-18 w-screen border-b bg-gray-800 border-gray-700 z-50 px-4 lg:hidden pt-1 py-1'>
      <TopBrandWidget />
    </div>
  )
}
