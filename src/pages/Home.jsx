import { useDbData } from '../utils/firebase';
import { ContentCard } from '../components/ContentCard';
import { capitalize, fetchVids } from '../utils/helpers';
import { Autocomplete, Avatar, TextField } from '@mui/material';
import { CATEGORIES } from '../utils/constants';
import { useEffect, useState } from 'react';
import { NavBar } from '../NavBar.jsx';

// import { NavBar } from './NavBar.jsx';

const HARDCODED_CATEGORIES = ['barking', 'potty training', 'digging', 'crying', 'howling', 'Licking his body'];

const categories = CATEGORIES.map((category) => {
  return { label: capitalize(category) };
});

export const Home = () => {
  const [data] = useDbData('content', HARDCODED_CATEGORIES, 'video');

  const [selectedCategories, setSelectedCategories] = useState(HARDCODED_CATEGORIES.slice(0,3))
  // console.log({selectedCategories})

  const handleCategoryClick = (e) => {
    const id = e.target.id
    const selected = selectedCategories.includes(id)
    if (selected) {
      setSelectedCategories(selectedCategories.filter((category) => category !== id))
    } else {
      setSelectedCategories([id, ...selectedCategories])
    }
  }

  // useEffect(() => {
  //   fetchVids('barking')
  //     .then((response) => response.json())
  //     .then((data) => console.log(data));
  // }, []);


  return (
    <html lang="en">
    <header>
      <div className="header">  
        <div className="profilepic">
          <Avatar sx={{ width: '18vw', height: '18vw' }} />
        </div>
        <div className="right"> 
          <div className="petname"> Pubpub </div>
          <div className="petinfo"> Owner: Samuel Jackson </div>
          <div className="petinfo"> Corgi          Age: 2 </div>
        </div>
          {/* <div className="owner"> */}
      </div>
      <div className="categories"> 
        {HARDCODED_CATEGORIES.map((category) => {
          const className = selectedCategories.includes(category) ? 'categoryButton selectedCategoryButton' : 'categoryButton'
          return <button key={category} id={category} onClick={handleCategoryClick} className={className}>{capitalize(category)}</button>
        })}
      </div>
    </header>
    <body>
    <div className="wrapper">
      <div className="top-justified">
      
      
        {/* <Autocomplete
          options={categories}
          autoHighlight
          getOptionLabel={(option) => (option.label ? option.label : '')}
          style={{ width: 300, margin: 'auto' }}
          renderInput={(params) => (
            <TextField {...params} label="Search Categories" variant="filled" />
          )}
        /> */}
      </div>
      {selectedCategories.map((category) => {
        return (
          <div key={category} className="bottom-justified">
            <div className="welcome"> {capitalize(category)} </div>
            <div className="horizontal-scroll">
              {data
                .filter((content) => content.category == category)
                .map((content, index) => {
                  const { URL, category } = content;
                  const type = content['content type'];
                  return <ContentCard key={index} type={type} src={URL} category={category} />;
                })}
            </div>
          </div>
        );
      })}
    </div>
    </body>
    </html>
    
  );
};
