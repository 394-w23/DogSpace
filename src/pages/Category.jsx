import { useState, useEffect } from 'react';
import PetsIcon from '@mui/icons-material/Pets';
import { capitalize } from '../utils/helpers';
import { useExpertContentDb, useExpertDb } from '../utils/firebase';
import { ContentCard } from '../components/ContentCard';
import { useParams } from 'react-router-dom';
import { ErrorPage } from './ErrorPage';
import { Avatar, Paper } from '@mui/material';
import EmailForm from './contact/EmailForm';
import WhatsAppForm from './contact/WhatsAppForm';
import { useAuthValue } from '../components/AuthContext';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';


export const Category = () => {
  const { trainerid } = useParams();
  const expert = trainerid.replace('%20', ' ');

  const [data] = useExpertContentDb(expert);
  const [experts, error, loading] = useExpertDb();

  const [expertData, setExpertData] = useState(undefined);
  const [selectedCategories, setSelectedCategories] = useState([]);

  const { profile, dogProfile } = useAuthValue();

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

  const { name, bio, rating, experience, categories, pfp, location, email, whatsapp} = expertData;
  const expertiseBreeds = expertData['expertise breeds'];

  let expertiseBreedsString = '';
  expertiseBreeds.forEach((breed) => (expertiseBreedsString += breed + ', '));
  expertiseBreedsString = expertiseBreedsString.slice(0, -2);

  return (
    <div style={{ position: 'relative' }}>
      <img
        className="trainer-page-photo"
        src="https://humaneheroes.org/wp-content/uploads/2019/09/txhh_best-practices-when-taking-dog-park.png"
      />
      <div className="trainer-page-header">
        <Avatar
          src={pfp}
          component={Paper}
          elevation={3}
          sx={{ border: '1px solid white', width: '9rem', height: '9rem' }}
        />
        <div className="trainer-page-name">{name}</div>
      </div>
      <div className="trainer-page">
        {/* <button className="trainer-contact-button">Contact</button> */}
        <div className="trainer-contact-button">
          <EmailForm userName={profile.name} userEmail={profile.email} toName={name} toEmail={email} />
          <WhatsAppForm toName={name} toWhatsApp={whatsapp} />
          {/* <WhatsAppIcon
            sx={{color:'#118b6d'}}
          /> */}
          
        </div>
        <div className="trainer-instagram-button">
        
        </div>
        
        <div className="trainer-page-attr">
          <div className="green">Location:</div>
          {location}
        </div>
        <div className="trainer-page-attr">
          <div className="green">Experience:</div>
          <span>{experience} Years</span>
        </div>
        <div className="trainer-page-attr">
          <div className="green">Expertise Breed:</div>
          {expertiseBreedsString}
        </div>
        <div style={{ fontWeight: 'normal' }} className="trainer-page-attr">
          {bio}
        </div>
        <div className="trainer-page-attr">
          <div className="green">Training Specialization</div>
        </div>
      </div>
      <div className="categories">
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
      </div>
      {selectedCategories.map((category) => {
        return (
          <div key={category} className="bottom-justified">
            <div className="welcome"> {capitalize(category)} </div>
            <div className="horizontal-scroll">
              {data
                .filter((content) => content.category == category)
                .map((content, index) => {
                  const { url, category, rating, numOfRatings } = content;
                  return <ContentCard key={index} src={url} category={category} rating={rating} numOfRatings={numOfRatings} />;
                })}
            </div>
          </div>
        );
      })}
    </div>
  );
};
