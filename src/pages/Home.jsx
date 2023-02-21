import { useDbData } from '../utils/firebase';
import { ContentCard } from '../components/ContentCard';
import { capitalize, fetchVids } from '../utils/helpers';
import { Autocomplete, Avatar, TextField } from '@mui/material';
import { CATEGORIES } from '../utils/constants';
import { useEffect } from 'react';

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
    <div className="wrapper">
      <div className="top-justified">
        <div className="header">
          <div className="avatar">
            <Avatar sx={{ width: '12vw', height: '12vw' }} />
          </div>
          <div className="owner">
            <h2> Sam </h2>
          </div>
        </div>
        <Autocomplete
          options={categories}
          autoHighlight
          getOptionLabel={(option) => (option.label ? option.label : '')}
          style={{ width: 300, margin: 'auto' }}
          renderInput={(params) => (
            <TextField {...params} label="Search Categories" variant="filled" />
          )}
        />
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
  );
};
