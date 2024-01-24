import { Divider, Input } from "antd";
import { useState } from 'react';

function Search(props) {
    const [word, setWord] = useState('');

    const handleSearch = e => {
        setWord(e.target.value);
        props.setFoods(e.target.value);
    }
    

  return (
    <>
      <Divider>Search</Divider>

      <label>Search</label>
      <Input name="search" value={word} type="text" onChange={handleSearch} />
    </>
  );
}

export default Search;
