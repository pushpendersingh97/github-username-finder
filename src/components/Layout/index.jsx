import Header from '../Header'
import SearchBar from '../SearchBar'
import Card from '../Card'

const Layout = () => {
  return (
    <div className='w-screen h-screen flex justify-center items-center flex-col bg-custom-primary text-white dark:bg-black dark:text-white'>
      <div className="flex flex-col w-1/2 h-1/2 rounded-lg p-8">
        <Header />
        <SearchBar />
        <Card />
      </div>
    </div>
  )
}

export default Layout