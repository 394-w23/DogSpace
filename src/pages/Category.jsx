import { useState, useEffect } from 'react';
import PetsIcon from '@mui/icons-material/Pets';
import { capitalize } from '../utils/helpers';
import { useExpertContentDb, useExpertDb } from '../utils/firebase';
import { ContentCard } from '../components/ContentCard';
import { useParams } from 'react-router-dom';
import { ErrorPage } from './ErrorPage';

export const Category = () => {
  const { trainerid } = useParams();
  const expert = trainerid.replace('%20', ' ');

  const [data] = useExpertContentDb(expert);
  const [experts, error, loading] = useExpertDb();

  const [expertData, setExpertData] = useState(undefined);
  const [selectedCategories, setSelectedCategories] = useState([]);

  const handleCategoryClick = (id) => {
    const selected = selectedCategories.includes(id);
    if (selected) {
      setSelectedCategories(selectedCategories.filter((category) => category !== id));
    } else {
      setSelectedCategories([id, ...selectedCategories]);
    }
  };

  useEffect(() => {
    if (experts.length > 0) {
      const data = experts.filter((e) => e.name === expert);
      if (data.length > 0) setExpertData(data[0]);
    }
  }, [experts]);

  useEffect(() => {
    if (expertData) {
      setSelectedCategories(expertData.categories);
    }
  }, [expertData]);

  if (!expertData && !loading) return <ErrorPage />;
  if (!expertData) return <div />;

  const { name, bio, rating, experience, categories, pfp, location } = expertData;
  const expertiseBreeds = expertData['expertise breeds'];

  let expertiseBreedsString = '';
  expertiseBreeds.forEach((breed) => (expertiseBreedsString += breed + ', '));
  expertiseBreedsString = expertiseBreedsString.slice(0, -2);

  return (
    <>
      <div className="trainer-page-pfp">
        {/* <Avatar  src={pfp} /> */}
        <img
          style={{ width: '100%', padding: '0px', height: '100%', overflow: 'hidden' }}
          className="trainingImage"
          src={pfp}
        />
      </div>
      <div className="trainer-page-name">{name}</div>
      <div className="trainer-page">
        <div className="trainer-page-location">
          <div className="green">Location:</div>
          {location}
        </div>
        <div className="trainer-page-experience">
          <div className="green">Experience:</div>
          <span>{experience} Years</span>
        </div>
        <div className="trainer-page-breed">
          <div className="green">Expertise Breed:</div>
          {expertiseBreedsString}
        </div>
        <div className="trainer-page-bio">{bio}</div>
        <div className="green">Training Specialization</div>
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
