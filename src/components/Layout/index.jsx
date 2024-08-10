import Header from '../Header'
import SearchBar from '../SearchBar'
import Card from '../Card'

const Layout = () => {
  return (
    <div className='bg-black h-full w-full text-white'>
        <Header />
        <SearchBar />
        <Card />
    </div>
  )
}

export default Layout