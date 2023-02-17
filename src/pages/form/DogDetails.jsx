import React from 'react';
import '../../Form.css';
import { Autocomplete, Avatar, Button, ButtonGroup, FormControl, TextField } from '@mui/material';

const DogDetails = ({ nextStep, handleChange, values }) => {
  const Continue = (e) => {
    e.preventDefault();
    nextStep();
  };

  const dogBreeds = [
    { value: 'affenpinscher', label: 'Affenpinscher' },
    { value: 'afghan hound', label: 'Afghan Hound' },
    { value: 'airedale terrier', label: 'Airedale Terrier' },
    { value: 'akita', label: 'Akita' },
    { value: 'alaskan malamute', label: 'Alaskan Malamute' },
    { value: 'american bulldog', label: 'American Bulldog' },
    { value: 'american english coonhound', label: 'American English Coonhound' },
    { value: 'american eskimo dog', label: 'American Eskimo Dog' },
    { value: 'american foxhound', label: 'American Foxhound' },
    { value: 'american hairless terrier', label: 'American Hairless Terrier' },
    { value: 'american leopard hound', label: 'American Leopard Hound' },
    { value: 'american staffordshire terrier', label: 'American Staffordshire Terrier' },
    { value: 'american water spaniel', label: 'American Water Spaniel' },
    { value: 'anatolian shepherd dog', label: 'Anatolian Shepherd Dog' },
    { value: 'appenzeller sennenhund', label: 'Appenzeller Sennenhund' },
    { value: 'australian cattle dog', label: 'Australian Cattle Dog' },
    { value: 'australian kelpie', label: 'Australian Kelpie' },
    { value: 'australian shepherd', label: 'Australian Shepherd' },
    { value: 'australian terrier', label: 'Australian Terrier' },
    { value: 'azawakh', label: 'Azawakh' },
    { value: 'barbet', label: 'Barbet' },
    { value: 'basenji', label: 'Basenji' },
    { value: 'basset hound', label: 'Basset Hound' },
    { value: 'beagle', label: 'Beagle' },
    { value: 'bearded collie', label: 'Bearded Collie' },
    { value: 'beauceron', label: 'Beauceron' },
    { value: 'bedlington terrier', label: 'Bedlington Terrier' },
    { value: 'belgian malinois', label: 'Belgian Malinois' },
    { value: 'belgian sheepdog', label: 'Belgian Sheepdog' },
    { value: 'belgian tervuren', label: 'Belgian Tervuren' },
    { value: 'berger picard', label: 'Berger Picard' },
    { value: 'bernese mountain dog', label: 'Bernese Mountain Dog' },
    { value: 'bichon frise', label: 'Bichon Frise' },
    { value: 'black and tan coonhound', label: 'Black and Tan Coonhound' },
    { value: 'black russian terrier', label: 'Black Russian Terrier' },
    { value: 'bloodhound', label: 'Bloodhound' },
    { value: 'bluetick coonhound', label: 'Bluetick Coonhound' },
    { value: 'boerboel', label: 'Boerboel' },
    { value: 'border collie', label: 'Border Collie' },
    { value: 'border terrier', label: 'Border Terrier' },
    { value: 'borzoi', label: 'Borzoi' },
    { value: 'boston terrier', label: 'Boston Terrier' },
    { value: 'bouvier des flandres', label: 'Bouvier des Flandres' },
    { value: 'boxer', label: 'Boxer' },
    { value: 'boykin spaniel', label: 'Boykin Spaniel' },
    { value: 'briard', label: 'Briard' },
    { value: 'brittany', label: 'Brittany' },
    { value: 'brussels griffon', label: 'Brussels Griffon' },
    { value: 'bull terrier', label: 'Bull Terrier' },
    { value: 'bullmastiff', label: 'Bullmastiff' },
    { value: 'cairn terrier', label: 'Cairn Terrier' },
    { value: 'canaan dog', label: 'Canaan Dog' },
    { value: 'cane corso', label: 'Cane Corso' },
    { value: 'cardigan welsh corgi', label: 'Cardigan Welsh Corgi' },
    { value: 'cavalier king charles spaniel', label: 'Cavalier King Charles Spaniel' },
    { value: 'chesapeake bay retriever', label: 'Chesapeake Bay Retriever' },
    { value: 'chihuahua', label: 'Chihuahua' },
    { value: 'chinese crested', label: 'Chinese Crested' },
    { value: 'chinese shar-pei', label: 'Chinese Shar-Pei' },
    { value: 'chow chow', label: 'Chow Chow' },
    { value: 'clumber spaniel', label: 'Clumber Spaniel' },
    { value: 'cocker spaniel', label: 'Cocker Spaniel' },
    { value: 'collie', label: 'Collie' },
    { value: 'curly-coated retriever', label: 'Curly-Coated Retriever' },
    { value: 'dachshund', label: 'Dachshund' },
    { value: 'dalmatian', label: 'Dalmatian' },
    { value: 'dandie dinmont terrier', label: 'Dandie Dinmont Terrier' },
    { value: 'doberman pinscher', label: 'Doberman Pinscher' },
    { value: 'dogo argentino', label: 'Dogo Argentino' },
    { value: 'dogue de bordeaux', label: 'Dogue de Bordeaux' },
    { value: 'dutch shepherd', label: 'Dutch Shepherd' },
    { value: 'english cocker spaniel', label: 'English Cocker Spaniel' },
    { value: 'english setter', label: 'English Setter' },
    { value: 'english springer spaniel', label: 'English Springer Spaniel' },
    { value: 'english toy spaniel', label: 'English Toy Spaniel' },
    { value: 'entlebucher mountain dog', label: 'Entlebucher Mountain Dog' },
    { value: 'eskimo dog', label: 'Eskimo Dog' },
    { value: 'field spaniel', label: 'Field Spaniel' },
    { value: 'finnish spitz', label: 'Finnish Spitz' },
    { value: 'flat-coated retriever', label: 'Flat-Coated Retriever' },
    { value: 'french bulldog', label: 'French Bulldog' },
    { value: 'german pinscher', label: 'German Pinscher' },
    { value: 'german shepherd dog', label: 'German Shepherd Dog' },
    { value: 'german shorthaired pointer', label: 'German Shorthaired Pointer' },
    { value: 'german wirehaired pointer', label: 'German Wirehaired Pointer' },
    { value: 'giant schnauzer', label: 'Giant Schnauzer' },
    { value: 'glen of imaal terrier', label: 'Glen of Imaal Terrier' },
    { value: 'golden retriever', label: 'Golden Retriever' },
    { value: 'gordon setter', label: 'Gordon Setter' },
    { value: 'great dane', label: 'Great Dane' },
    { value: 'great pyrenees', label: 'Great Pyrenees' },
    { value: 'greater swiss mountain dog', label: 'Greater Swiss Mountain Dog' },
    { value: 'greyhound', label: 'Greyhound' },
    { value: 'havanese', label: 'Havanese' },
    { value: 'ibizan hound', label: 'Ibizan Hound' },
    { value: 'icelandic sheepdog', label: 'Icelandic Sheepdog' },
    { value: 'irish red and white setter', label: 'Irish Red and White Setter' },
    { value: 'irish setter', label: 'Irish Setter' },
    { value: 'irish terrier', label: 'Irish Terrier' },
    { value: 'irish water spaniel', label: 'Irish Water Spaniel' },
    { value: 'irish wolfhound', label: 'Irish Wolfhound' },
    { value: 'italian greyhound', label: 'Italian Greyhound' },
    { value: 'japanese chin', label: 'Japanese Chin' },
    { value: 'keeshond', label: 'Keeshond' },
    { value: 'kerry blue terrier', label: 'Kerry Blue Terrier' },
    { value: 'komondor', label: 'Komondor' },
    { value: 'kuvasz', label: 'Kuvasz' },
    { value: 'labrador retriever', label: 'Labrador Retriever' },
    { value: 'lakeland terrier', label: 'Lakeland Terrier' },
    { value: 'leonberger', label: 'Leonberger' },
    { value: 'lhasa apso', label: 'Lhasa Apso' },
    { value: 'lowchen', label: 'Lowchen' },
    { value: 'maltese', label: 'Maltese' },
    { value: 'maltipoo', label: 'Maltipoo' },
    { value: 'manchester terrier', label: 'Manchester Terrier' },
    { value: 'mastiff', label: 'Mastiff' },
    { value: 'miniature schnauzer', label: 'Miniature Schnauzer' },
    { value: 'neapolitan mastiff', label: 'Neapolitan Mastiff' },
    { value: 'newfoundland', label: 'Newfoundland' },
    { value: 'norfolk terrier', label: 'Norfolk Terrier' },
    { value: 'norwegian buhund', label: 'Norwegian Buhund' },
    { value: 'norwegian elkhound', label: 'Norwegian Elkhound' },
    { value: 'norwegian lundehund', label: 'Norwegian Lundehund' },
    { value: 'other', label: 'Other' },
    { value: 'papillon', label: 'Papillon' },
    { value: 'pekinese', label: 'Pekinese' },
    { value: 'pembroke welsh corgi', label: 'Pembroke Welsh Corgi' },
    { value: 'petit basset griffon vendeen', label: 'Petit Basset Griffon Vendeen' },
    { value: 'pharaoh hound', label: 'Pharaoh Hound' },
    { value: 'plott', label: 'Plott' },
    { value: 'pointer', label: 'Pointer' },
    { value: 'pomeranian', label: 'Pomeranian' },
    { value: 'poodle', label: 'Poodle' },
    { value: 'portuguese water dog', label: 'Portuguese Water Dog' },
    { value: 'pug', label: 'Pug' },
    { value: 'puli', label: 'Puli' },
    { value: 'pyrenean shepherd', label: 'Pyrenean Shepherd' },
    { value: 'rhodesian ridgeback', label: 'Rhodesian Ridgeback' },
    { value: 'rottweiler', label: 'Rottweiler' },
    { value: 'saint bernard', label: 'Saint Bernard' },
    { value: 'saluki', label: 'Saluki' },
    { value: 'samoyed', label: 'Samoyed' },
    { value: 'schipperke', label: 'Schipperke' },
    { value: 'schnauzer', label: 'Schnauzer' },
    { value: 'scottish deerhound', label: 'Scottish Deerhound' },
    { value: 'scottish terrier', label: 'Scottish Terrier' },
    { value: 'sealyham terrier', label: 'Sealyham Terrier' },
    { value: 'shetland sheepdog', label: 'Shetland Sheepdog' },
    { value: 'shiba inu', label: 'Shiba Inu' },
    { value: 'shih tzu', label: 'Shih Tzu' },
    { value: 'siberian husky', label: 'Siberian Husky' },
    { value: 'silky terrier', label: 'Silky Terrier' },
    { value: 'skye terrier', label: 'Skye Terrier' },
    { value: 'soft coated wheaten terrier', label: 'Soft Coated Wheaten Terrier' },
    { value: 'staffordshire bull terrier', label: 'Staffordshire Bull Terrier' },
    { value: 'standard schnauzer', label: 'Standard Schnauzer' },
    { value: 'sussex spaniel', label: 'Sussex Spaniel' },
    { value: 'tibetan mastiff', label: 'Tibetan Mastiff' },
    { value: 'tibetan spaniel', label: 'Tibetan Spaniel' },
    { value: 'tibetan terrier', label: 'Tibetan Terrier' },
    { value: 'toy poodle', label: 'Toy Poodle' },
    { value: 'vizsla', label: 'Vizsla' },
    { value: 'weimaraner', label: 'Weimaraner' },
    { value: 'welsh springer spaniel', label: 'Welsh Springer Spaniel' },
    { value: 'west highland white terrier', label: 'West Highland White Terrier' },
    { value: 'whippet', label: 'Whippet' },
    { value: 'wirehaired pointing griffon', label: 'Wirehaired Pointing Griffon' },
    { value: 'xoloitzcuintli', label: 'Xoloitzcuintli' },
    { value: 'yorkshire terrier', label: 'Yorkshire Terrier' }
  ];

  return (
    <div>
      <FormControl variant="standard" sx={{ width: '100%', textAlign: 'center' }}>
        <h1 className="dogProfileH1">
          Set up <br></br>your dog profile
        </h1>
        <div className="avatar">
          <Avatar sx={{ width: '45vw', height: '45vw' }} />
        </div>
        <br></br>
        <TextField
          type="text"
          variant="filled"
          placeholder="Dog Name"
          value={values.dogName}
          onChange={handleChange('dogName')}
          hiddenLabel
          InputProps={{
            style: {
              background: '#d9d9d9',
              fontSize: '0.8rem',
              width: '90%',
              marginLeft: '5%',
              display: 'flex',
              alignText: 'center',
              borderRadius: '0'
            },
            disableUnderline: true
          }}
        />
        <h2>Breed</h2>
        <Autocomplete
          value={values.dogBreed}
          onChange={handleChange('dogBreed')}
          options={dogBreeds}
          getOptionLabel={(option) => (option.label ? option.label : '')}
          style={{ fontSize: '1rem', width: '90%', marginLeft: '5%', background: '#d9d9d9' }}
          renderInput={(params) => (
            <TextField
              {...params}
              variant="filled"
              hiddenLabel
              sx={{
                background: '#d9d9d9',
                fontSize: '0.8rem',
                display: 'flex',
                alignText: 'center',
                borderRadius: '0',
                outline: 'none'
              }}
            />
          )}
        />
        <h2>Birthday</h2>
        <TextField
          type="date"
          variant="filled"
          value={values.dogBirthday}
          hiddenLabel
          onChange={handleChange('dogBirthday')}
          InputProps={{
            style: {
              background: '#d9d9d9',
              fontSize: '0.8rem',
              width: '90%',
              marginLeft: '5%',
              display: 'flex',
              alignText: 'center',
              borderRadius: '0'
            },
            disableUnderline: true
          }}
        />
        <h2>Sex</h2>
        <ButtonGroup variant="containerPrimary" style={{ justifyContent: 'center' }}>
          <Button
            value={values.dogGender}
            onClick={handleChange('dogGender')}
            style={{
              background: '#d9d9d9',
              marginRight: '2%',
              width: '43%',
              borderRadius: '0',
              paddingTop: '4%',
              paddingBottom: '4%',
              fontSize: '0.8rem'
            }}>
            Female
          </Button>
          <Button
            value={values.dogGender}
            onClick={handleChange('dogGender')}
            style={{
              background: '#d9d9d9',
              marginLeft: '2%',
              width: '43%',
              borderRadius: '0',
              paddingTop: '4%',
              paddingBottom: '4%',
              fontSize: '0.8rem'
            }}>
            Male
          </Button>
        </ButtonGroup>
        <button onClick={Continue} className="nextButton">
          Next
        </button>
      </FormControl>
    </div>
  );
};

export default DogDetails;
