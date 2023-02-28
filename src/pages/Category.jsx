import { useState, useEffect } from 'react'
import PetsIcon from '@mui/icons-material/Pets';
import { capitalize } from '../utils/helpers';
import { useContentDb, useExpertContentDb, useExpertDb } from '../utils/firebase';
import { ContentCard } from '../components/ContentCard';
import { useParams } from 'react-router-dom'
import { ErrorPage } from './ErrorPage';
import { Autocomplete, Avatar, Chip, Paper, TextField } from '@mui/material';

export const Category = () => {
  const { trainerid } = useParams();
  const expert = trainerid.replace('%20', ' ');

  const [selectedCategories, setSelectedCategories] = useState([]);

  const handleCategoryClick = (id) => {
    const selected = selectedCategories.includes(id);
    if (selected) {
      setSelectedCategories(selectedCategories.filter((category) => category !== id));
    } else {
      setSelectedCategories([id, ...selectedCategories]);
    }
  };

  

  
  //const [data] = useContentDb('video', HARDCODED_CATEGORIES);
  const [data] = useExpertContentDb(expert);
  const [experts, error, loading] = useExpertDb();
  const expertData = experts.filter(e => e.name === expert)
  console.log(expertData)
  

  // useEffect(() => {
  //   if (expertData.length > 0) {
  //     setSelectedCategories(expertData.)
  //   }
  // }, [expertData])

  if (expertData.length === 0 && !loading) return <ErrorPage />;
  if (expertData.length === 0) return <div />;

  const { name, bio, rating, experience, categories, pfp, location } = expertData[0];
  const expertiseBreeds = expertData[0]['expertise breeds'];
  
  let expertiseBreedsString = '';
  expertiseBreeds.forEach((breed) => expertiseBreedsString += breed + ', ');
  expertiseBreedsString = expertiseBreedsString.slice(0,-2);
  console.log(expertData[0])



  // const categoriesSet = new Set();
  // data.forEach((data) => {categoriesSet.add(data.category)});
  // const categories = [...categoriesSet];

  return (
    <>
    <div className='trainer-page-pfp'>
    {/* <Avatar  src={pfp} /> */}
    <img style={{width: '100%', padding: "0px", height: '100%', overflow: 'hidden'}} className="trainingImage" src={pfp}/>

    </div>
    <div className='trainer-page-name'>
      {name}
    </div>
    <div className='trainer-page'>
      <div className='trainer-page-location'>
        <div className='green'>
        Location: 
        </div>
        {location}
        
      </div>
      <div className='trainer-page-experience'>
        <div className='green'>
          Experience:
        </div>
        {experience} Years
      </div>
      <div className='trainer-page-breed'>
        <div className='green'>
          Expertise Breed: 
        </div>
        {expertiseBreedsString}
      </div>
      <div className='trainer-page-bio'>
        {bio}
      </div>
      <div className='green'>
        Training Specialization
      </div>
      
    </div>
    
    {categories.map((category) => {
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
    {selectedCategories.map((category) => {
          return (
            <div key={category} className="bottom-justified">
              <div className="welcome"> {capitalize(category)} </div>
              <div className="horizontal-scroll">
                {data
                  .filter((content) => content.category == category)
                  .map((content, index) => {
                    const { url, category } = content;
                    return <ContentCard key={index} src={url} category={category} />;
                  })}
              </div>
            </div>
          );
        })}
    </>
  );
};
