import { useEffect, useState } from 'react';
import PetsIcon from '@mui/icons-material/Pets';
import { useContentDb } from '../utils/firebase';
import { ContentCard } from '../components/ContentCard';
import { capitalize, fetchVids } from '../utils/helpers';
import { Autocomplete, Avatar, Chip, Paper, TextField } from '@mui/material';
import { CATEGORIES } from '../utils/constants';
import { NavBar } from '../NavBar.jsx';

// import { NavBar } from './NavBar.jsx';

const HARDCODED_CATEGORIES = [
  'barking',
  'potty training',
  'digging',
  'crying',
  'howling',
  'Licking his body'
];

export const Home = () => {
  const [data] = useContentDb('video', HARDCODED_CATEGORIES);

  const [selectedCategories, setSelectedCategories] = useState(HARDCODED_CATEGORIES.slice(0, 3));
  // console.log({selectedCategories})

  const handleCategoryClick = (id) => {
    const selected = selectedCategories.includes(id);
    if (selected) {
      setSelectedCategories(selectedCategories.filter((category) => category !== id));
    } else {
      setSelectedCategories([id, ...selectedCategories]);
    }
  };

  return (
    <>
      <div style={{ position: 'sticky', top: 0, zIndex: 3 }}>
        <div className="header">
          <div className="profilepic">
            <Avatar
              sx={{ width: '4rem', height: '4rem' }}
              // src="https://i.ibb.co/xSYxBwV/wto1dmblpwy51.png"
              src="https://www.scotsman.com/webimg/b25lY21zOmZkOGMxMmRmLWRlOGUtNGM2ZC04NjA1LWU5NzAyOGMyOGJmYzoxNjI3MGQzYS0wMDJkLTQ0MjQtOWRmZi1hYWJiZGYyOTg3MTM=.jpg?crop=61:45,smart&width=800"
            />
          </div>
          <div className="right">
            <div className="petname"> Pubpub </div>
            <div className="petinfo"> Owner: Samuel Jackson </div>
            <div className="petinfo"> Corgi Age: 2 </div>
          </div>
        </div>
        <div className="categories">
          {HARDCODED_CATEGORIES.map((category) => {
            const selected = selectedCategories.includes(category);
            return (
              <button
                key={`${category}-button`}
                onClick={() => handleCategoryClick(category)}
                className={selected ? 'categoryButton selectedCategoryButton' : 'categoryButton'}>
                <PetsIcon style={{ marginRight: 5, fontSize: '1.3rem' }} fontSize="inherit" />
                <h5 style={{ margin: 0 }}>{capitalize(category)}</h5>
              </button>
            );
          })}
        </div>
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
    </>
  );
};
