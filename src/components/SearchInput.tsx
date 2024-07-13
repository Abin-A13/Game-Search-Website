import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { useRef } from 'react'
import { BsSearch } from 'react-icons/bs'

interface Props{
  onSearch:(searchText:string)=>void
}


const SearchBar = ({onSearch}:Props) => {
  const searchref = useRef<HTMLInputElement>(null)
  return (
    <form onSubmit={(event)=>{
      event.preventDefault()
      if(searchref.current) onSearch(searchref.current.value)
    }}>
      <InputGroup>
      <InputLeftElement children={<BsSearch/>}  />
      <Input ref={searchref} borderRadius={20} placeholder='Search games.....' variant="filled"/>
      </InputGroup>
    </form>
  )
}

export default SearchBar