import { useDbData } from '../utils/firebase';
import { ContentCard } from '../components/ContentCard';
import { capitalize, fetchVids } from '../utils/helpers';
import { Autocomplete, Avatar, TextField } from '@mui/material';
import { CATEGORIES } from '../utils/constants';
import { useEffect } from 'react';
import { NavBar } from '../NavBar.jsx';

// import { NavBar } from './NavBar.jsx';

const HARDCODED_CATEGORIES = ['barking', 'potty training', 'digging'];

const categories = CATEGORIES.map((category) => {
  return { label: capitalize(category) };
});

export const Home = () => {
  const [data] = useDbData('content', HARDCODED_CATEGORIES, 'video');

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
        <button className="categoryButton"> Pooping</button>
        <button className="categoryButton"> Aggression </button>
        <button className="categoryButton"> Barking </button>
       
      </div>
      <div className="categories"> 
        
        <button className="categoryButton"> Crying </button>
        <button className="categoryButton"> Howling </button>
        <button className="categoryButton"> Licking his body </button>
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
      {HARDCODED_CATEGORIES.map((category) => {
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
    <footer>
    <NavBar />,
    </footer>
    </html>
    
  );
};
