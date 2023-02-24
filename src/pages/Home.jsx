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
      <div className="top" style={{ position: 'sticky', top: 0, zIndex: 3 }}>
        <div className="header">
          <div className="profilepic">
            <Avatar
              sx={{ width: '4rem', height: '4rem' }}
              src="https://i.ibb.co/xSYxBwV/wto1dmblpwy51.png"
              // src="https://www.scotsman.com/webimg/b25lY21zOmZkOGMxMmRmLWRlOGUtNGM2ZC04NjA1LWU5NzAyOGMyOGJmYzoxNjI3MGQzYS0wMDJkLTQ0MjQtOWRmZi1hYWJiZGYyOTg3MTM=.jpg?crop=61:45,smart&width=800"
            />
          </div>
          <div className="right">
            <div className="petname"> Pubpub </div>
            <div className="petinfo"> Owner: Samuel Jackson </div>
            <div className="petinfo2"> Corgi Age: 2 </div>
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
      <div className="welcome"> Paw-some Training Tips </div>
      <div className="trainingTips">
        <div className="trainingTopic"> Say Goodbye to Electric Collars </div>
        <div className="trainingImage">
          {/* <img className="trainingImage" src= "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTBx4P8w3a_LjSCFWd7bVXa9QD4248PK3ZXNoqi8pfa6W65yKu4"  /> */}
          <svg
            width="249"
            height="159"
            viewBox="0 0 249 159"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M195.45 44.5849C195.33 44.8319 195.132 45.0753 195.105 45.3293C194.656 50.1482 193.267 54.7448 191.265 59.2039C190.781 60.2798 190.259 61.3417 189.833 62.2554C188.772 62.8127 188.188 62.4 187.603 61.8744C186.047 60.4739 184.472 59.0839 182.896 57.7011C182.439 57.3024 181.959 56.9249 181.41 56.4769C177.415 61.5851 172.181 65.0035 165.55 66.9155C168.837 69.2015 171.012 72.0836 172.766 75.248C174.883 79.0685 176.358 83.1148 177.678 87.2141C179.571 93.1018 180.852 99.1201 182.207 105.121C182.335 105.692 182.331 106.288 182.385 106.871C182.625 109.548 179.776 112.088 176.029 110.963C175.375 110.765 174.767 110.448 173.943 110.102C174.759 112.878 175.518 115.506 176.3 118.128C180.07 130.799 183.848 143.471 187.596 156.149C187.781 156.781 188.196 157.49 187.557 158.15C187.514 158.178 187.464 158.22 187.41 158.248C187.356 158.277 187.297 158.305 187.236 158.315C187.046 158.351 186.856 158.4 186.667 158.4C130.456 158.404 74.2452 158.407 18.0384 158.404C17.7171 158.404 17.3997 158.361 17.0552 158.34C10.0177 154.174 5.48869 148.314 3.08093 141.044C1.94673 137.622 1.21898 134.126 1.0835 130.538C1.00995 128.605 0.723497 126.668 0.831884 124.749C1.02543 121.306 1.31576 117.856 1.78802 114.434C3.87835 99.3424 8.89516 84.9281 14.2023 70.5879C14.8178 68.9263 15.4139 67.2612 16.0333 65.5644C13.3662 62.6117 10.9816 59.5037 9.09258 56.0818C7.52096 53.2349 6.33256 50.2717 5.89127 47.1249C5.36868 43.3961 6.19321 40.0836 9.66161 37.5295C12.2087 35.6527 14.4771 33.4655 16.8733 31.4195C23.4501 25.8033 30.1817 20.353 37.4708 15.5059C45.6115 10.0908 54.267 5.57177 63.991 2.93302C67.6219 1.94879 71.311 1.27499 75.0775 0.844607C79.5756 0.333086 84.0891 0.322503 88.564 0.671748C95.5473 1.21502 102.341 2.72842 108.91 4.98616C111.128 5.74815 113.296 6.63361 115.471 7.49438C117.782 8.40806 120.171 9.08539 122.675 9.28294C125.927 9.54046 128.938 8.72556 131.613 7.07458C136.568 4.01604 141.949 1.88529 147.798 0.798746C151.317 0.146116 154.851 -0.178435 158.501 0.100256C166.893 0.735247 174.097 3.69501 180.353 8.72909C187.267 14.2923 191.606 21.2772 193.874 29.3593C194.459 31.4441 194.699 33.6066 195.117 35.7303C195.167 35.9914 195.341 36.2313 195.458 36.4817V44.5814L195.45 44.5849ZM27.9172 41.6005C27.6695 42.0697 27.503 42.3166 27.3985 42.5882C23.5469 52.4941 19.5752 62.3647 15.8862 72.32C11.1094 85.2068 6.70805 98.1994 4.40868 111.697C3.739 115.633 3.23577 119.585 3.09641 123.557C3.00351 126.125 3.2319 128.707 3.38287 131.279C3.63835 135.696 4.71449 139.961 6.6345 144.014C9.03451 149.073 12.6578 153.25 17.9339 156.382H66.1084C67.409 154.1 68.5897 151.828 69.9678 149.655C73.5252 144.049 77.9691 139.026 82.6917 134.225C87.3717 129.466 92.2376 124.858 96.9795 120.145C100.851 116.3 104.722 112.455 108.465 108.507C111.031 105.802 113.315 102.881 114.879 99.5682C115.351 98.5663 115.707 97.4727 115.854 96.3897C116.218 93.6522 115.08 91.3697 113.044 89.3801C108.565 85.0092 104.129 80.5996 99.6699 76.2111C98.9886 75.5373 98.2802 74.8846 97.4131 74.0591C97.506 75.6713 97.6299 77.0083 97.6454 78.3453C97.6763 81.2769 97.9589 84.1837 98.4002 87.0906C99.0118 91.1298 100.32 94.9468 102.376 98.5592C102.635 99.0178 102.871 99.4906 103.119 99.9597C102.728 100.461 102.411 100.902 102.054 101.311C97.4092 106.613 91.9666 111.164 86.133 115.341C79.7536 119.909 72.9717 123.917 65.8529 127.473C55.5754 132.605 44.8063 136.631 33.5108 139.474C32.9301 139.622 32.2953 139.594 31.8811 139.629C30.8979 138.811 31.3508 138.162 31.6643 137.53C37.5134 125.698 43.3663 113.866 49.2193 102.034C54.2283 91.9059 59.2374 81.7813 64.2464 71.6532C65.0052 70.1222 65.7484 68.5841 66.4955 67.0531C62.4619 63.2149 58.0877 59.9553 53.5432 56.872C47.5044 52.7763 41.1405 49.1287 34.7689 45.488C32.543 44.2145 30.3095 42.9516 27.9133 41.5864L27.9172 41.6005ZM69.0194 155.984C69.2323 156.157 69.2749 156.224 69.3291 156.231C69.6426 156.269 69.9562 156.322 70.2697 156.322C101.176 156.312 132.082 156.298 162.988 156.284C163.042 156.284 163.108 156.252 163.154 156.22C163.201 156.185 163.232 156.128 163.386 155.938C163.386 155.793 163.386 155.511 163.386 155.225C163.386 134.094 163.41 112.966 163.344 91.8354C163.336 89.814 162.976 87.7362 162.38 85.7853C159.837 77.414 153.922 71.7485 145.119 68.5806C141.066 67.1236 136.978 65.7337 132.84 64.4884C124.092 61.8532 115.688 58.5689 107.907 54.0216C106.142 52.9915 104.272 52.1061 102.383 51.1183C99.0002 55.9337 94.0531 57.6799 88.1034 57.7081C89.9692 62.3153 92.6363 66.2875 96.1589 69.7694C100.258 73.8228 104.423 77.8268 108.55 81.8625C110.787 84.0497 113.021 86.2439 115.216 88.4664C118.58 91.8707 119.125 95.7582 117.221 99.8892C116.358 101.762 115.185 103.544 113.958 105.248C110.942 109.425 107.288 113.143 103.576 116.805C98.857 121.458 93.9602 125.963 89.2956 130.662C85.3279 134.659 81.4878 138.772 77.7562 142.956C74.7523 146.321 72.1859 149.983 70.0529 153.874C69.662 154.583 69.3407 155.324 69.0194 155.987V155.984ZM14.8062 35.9984C15.3133 35.9984 15.4952 36.0126 15.6771 35.9949C15.8668 35.9773 16.0565 35.8891 16.2423 35.8961C20.1404 36.069 23.8798 36.8169 27.2282 38.7289C33.5456 42.3343 39.8786 45.9149 46.1186 49.6225C53.6167 54.0781 60.8322 58.8793 67.1497 64.7107C67.2232 64.7777 67.3587 64.7918 67.6413 64.8906C73.2813 53.4572 78.9252 42.0132 84.635 30.4493C85.2504 30.5234 85.773 30.5834 86.1214 30.6257C86.7679 31.49 86.3305 32.0686 86.0479 32.64C83.493 37.8117 80.9227 42.9763 78.3678 48.1444C69.8013 65.4656 61.2426 82.7903 52.6683 100.111C46.8928 111.785 41.1018 123.447 35.3185 135.117C35.0669 135.622 34.854 136.144 34.5095 136.913C35.1792 136.789 35.5353 136.75 35.876 136.655C51.2477 132.457 65.5045 126.164 78.6736 117.807C85.3975 113.538 91.6608 108.776 97.2312 103.283C98.3963 102.133 99.4725 100.905 100.533 99.7763C99.7899 98.1959 99.0931 96.8165 98.4892 95.4019C96.2673 90.202 95.7911 84.7235 95.4428 79.2308C95.2802 76.6626 95.1989 74.0874 95.0866 71.6038C91.6414 68.3336 89.0363 64.7389 87.0621 60.749C85.4208 57.4329 84.5692 54.0075 84.9292 50.3493C85.2466 47.1531 88.5021 44.7508 91.955 45.3752C93.8944 45.7244 95.7757 46.3347 97.6763 46.8427C98.1873 46.9803 98.6828 47.1672 99.3602 47.3895C99.2596 46.8145 99.2325 46.4688 99.1357 46.1442C97.7034 41.4276 97.0066 36.6299 97.3318 31.7405C97.4518 29.9378 97.6957 28.1316 98.0518 26.3572C99.1937 20.6599 101.989 15.6329 105.743 11.0186C106.754 9.77682 107.811 8.56328 108.836 7.34622C108.635 7.17688 108.558 7.06047 108.445 7.02519C100.521 4.32295 92.3537 2.69667 83.8917 2.39328C79.3162 2.22748 74.7717 2.66844 70.2968 3.47277C63.9755 4.61222 57.9716 6.6442 52.2541 9.35702C44.8683 12.8636 38.1173 17.245 31.7572 22.1168C27.8669 25.0978 24.0772 28.1845 20.2875 31.2678C18.4797 32.7388 16.7649 34.3051 14.8139 35.9984H14.8062ZM179.54 55.1928C177.93 53.6336 176.49 52.2119 175.019 50.8184C170.811 46.8321 169.441 42.1261 170.683 36.7534C171.33 33.9559 171.999 31.1619 172.634 28.3609C172.855 27.3908 173.068 26.4101 173.168 25.4223C173.401 23.087 171.674 21.3654 169.104 21.2631C166.773 21.1714 164.641 21.6723 162.783 22.9776C162.074 23.475 161.416 24.043 160.777 24.6145C158.718 26.4595 156.31 27.7048 153.515 28.4103C146.784 30.1107 140.16 32.1285 133.688 34.5309C131.981 35.1659 130.293 35.8468 128.211 36.6546C129.012 37.2508 129.62 37.6106 130.1 38.0763C131.989 39.9178 133.746 41.858 135.178 44.0311C138.941 49.7354 139.336 55.5774 136.135 61.5886C135.868 62.086 135.604 62.587 135.318 63.1232C139.131 64.4073 142.789 65.642 146.354 66.8449C147.821 66.4146 149.153 65.9912 150.504 65.6349C154.251 64.6507 158.013 64.1603 161.857 65.2892C162.484 65.4726 163.282 65.4056 163.94 65.2433C170.521 63.6171 175.746 60.2375 179.54 55.1893V55.1928ZM111.43 8.07998C108.387 11.1068 105.922 14.1618 103.897 17.5061C101.605 21.2878 100.131 25.3412 99.6776 29.6203C99.0234 35.8644 99.9099 41.9956 101.992 47.9751C102.136 48.3914 102.476 48.7477 102.856 49.3368C103.131 48.7336 103.343 48.3843 103.448 48.0104C105.19 41.7945 108.256 36.1889 112.75 31.2466C115.669 28.0364 119.327 25.8104 123.782 24.8896C132.643 23.0552 141.535 21.3548 150.411 19.591C152.269 19.2206 154.119 18.8219 156.012 18.4303C155.857 17.1674 155.842 16.0421 155.551 14.9767C155.281 13.9713 154.812 12.9835 154.27 12.0698C153.477 10.7328 152.141 10.1261 150.48 10.0061C147.763 9.80857 145.437 10.5247 143.435 12.2286C141.744 13.6679 139.967 15.0226 138.237 16.4231C135.198 18.889 131.071 19.1712 127.417 16.9769C122.911 14.2747 118.293 11.7312 113.71 9.1383C113.017 8.74673 112.254 8.45745 111.422 8.07646L111.43 8.07998ZM185.354 156.245C180.512 140.077 175.708 124.047 170.927 108.088C169.185 106.44 167.501 104.846 165.744 103.184V156.245H185.354ZM100.324 50.2399C99.5576 49.873 99.0312 49.5414 98.4505 49.3615C96.2789 48.6912 94.1189 47.9575 91.8931 47.4706C89.4582 46.9379 87.7047 48.1973 87.1627 50.4339C86.7485 52.1484 87.1472 53.7712 87.4182 55.5597C92.6402 55.729 97.0763 54.5755 100.324 50.2434V50.2399Z"
              fill="#1B9C3F"
            />
            <path
              d="M159.097 90.3714C159.96 90.7665 160.038 91.2922 159.771 92.0471C157.088 92.9643 156.957 95.3526 156.442 97.4727C155.64 100.775 155.068 104.126 153.74 107.308C151.572 112.522 147.736 116.082 141.709 117.517C139.022 118.156 136.44 117.002 135.616 114.561C134.958 112.614 134.404 110.614 134.106 108.599C133.765 106.285 133.704 103.932 133.63 101.593C133.464 96.2345 134.408 90.9782 135.747 85.7924C136.584 82.561 137.664 79.379 138.658 76.1794C138.829 75.6361 139.127 75.1281 139.305 74.7471C140.4 74.3414 140.865 74.7577 141.252 75.4421C140.474 77.9856 139.661 80.5573 138.902 83.1396C137.625 87.4893 136.549 91.8778 136.274 96.3862C136.107 99.0743 135.906 101.77 135.987 104.458C136.08 107.495 136.711 110.494 137.609 113.429C137.981 114.642 138.701 115.545 140.342 115.715C146.133 114.674 149.807 111.337 151.82 106.285C152.938 103.473 153.457 100.531 154.142 97.6209C154.479 96.1992 154.855 94.767 155.404 93.4053C156.024 91.8742 157.069 90.6325 159.093 90.3714H159.097Z"
              fill="#1B9C3F"
            />
            <path
              d="M127.765 81.1958C124.982 81.3405 121.626 79.1427 121.541 75.7137C121.456 72.1825 124.885 69.9106 127.684 69.9529C130.986 70.0059 133.835 72.5494 133.87 75.5515C133.905 78.5324 131.048 81.1747 127.762 81.1958H127.765Z"
              fill="#1B9C3F"
            />
            <path
              d="M143.4 52.0673V50.8926C144.484 50.1518 145.742 50.1377 146.907 49.8978C151.27 49.0017 155.652 48.1833 160.015 47.2837C162.678 46.7334 163.588 45.6151 163.804 43.1245C163.994 40.9162 164.315 38.7184 164.598 36.3513C165.148 36.2349 165.659 36.1255 166.367 35.9774C166.53 36.563 166.766 36.9898 166.746 37.4061C166.696 38.4538 166.545 39.498 166.413 40.5422C166.239 41.9322 166.123 43.3327 165.837 44.705C165.33 47.1391 163.646 48.6102 161.021 49.157C156.972 50.0001 152.915 50.7974 148.858 51.6193C147.984 51.7957 147.12 52.018 146.246 52.1732C145.378 52.3284 144.5 52.6036 143.396 52.0603L143.4 52.0673Z"
              fill="#1B9C3F"
            />
            <path
              d="M156.275 41.5335C156.368 41.8334 156.484 42.0486 156.496 42.2708C156.508 42.4931 156.411 42.7188 156.38 42.867C155.683 43.5761 154.936 43.315 154.169 43.2268C153.02 43.0928 152.118 42.5777 151.336 41.8616C149.776 40.4364 149.393 38.1469 150.376 36.3407C151.406 34.4498 153.411 33.5397 156.008 33.8148C156.697 34.3828 156.682 34.9684 156.047 35.5611C153.194 36.0408 152.199 36.7922 152.164 38.4679C152.129 40.2 153.233 41.0502 156.279 41.5335H156.275Z"
              fill="#1B9C3F"
            />
            <path
              d="M158.079 53.2033C158.188 53.5666 158.308 53.9864 158.435 54.4168C158.203 54.5897 158.075 54.7308 157.909 54.8013C157.622 54.9248 157.32 55.02 157.019 55.1012C155.408 55.528 154.506 56.4805 154.495 57.7858C154.483 59.0875 155.366 60.04 156.972 60.5021C157.386 60.6221 157.781 60.8055 158.304 61.0101C158.277 61.4687 158.25 61.8956 158.23 62.2519C157.355 62.7493 156.597 62.6047 155.873 62.3824C153.991 61.8109 152.892 60.3857 152.28 57.814C153.082 54.3709 154.92 52.8575 158.083 53.1997L158.079 53.2033Z"
              fill="#1B9C3F"
            />
            <path
              d="M164.571 51.9403C165.163 51.8098 165.632 51.7075 166.22 51.5805C167.807 54.3639 168.593 57.3237 169.913 60.1988C169.588 60.5268 169.266 60.8514 169.03 61.0913C168.159 61.1371 167.784 60.7914 167.555 60.2481C166.564 57.9057 165.554 55.5704 164.59 53.2174C164.466 52.914 164.575 52.5365 164.575 51.9403H164.571Z"
              fill="#1B9C3F"
            />
            <path
              d="M201.821 111.09C198.252 111.09 195.256 110.116 193.077 108.194C189.566 105.1 188.679 99.9916 190.576 93.811C192.407 87.8562 196.626 81.5486 202.464 76.0524C208.301 70.5562 215.076 66.5028 221.548 64.6402C228.264 62.707 233.892 63.3455 237.403 66.4393C240.914 69.5331 241.801 74.6413 239.904 80.8219C238.073 86.7767 233.854 93.0843 228.016 98.5805C222.179 104.077 215.405 108.13 208.932 109.993C206.389 110.726 203.997 111.09 201.821 111.09ZM228.655 65.6597C226.72 65.6597 224.567 65.9913 222.249 66.658C216.14 68.4184 209.707 72.2777 204.136 77.527C198.562 82.7762 194.544 88.7628 192.817 94.3825C191.161 99.7799 191.826 104.144 194.695 106.673C197.563 109.202 202.371 109.665 208.236 107.978C214.344 106.218 220.778 102.359 226.348 97.1094C231.922 91.8601 235.94 85.8736 237.667 80.2539C239.323 74.8565 238.658 70.4927 235.789 67.9633C234.055 66.4358 231.612 65.6597 228.655 65.6597Z"
              fill="#1B9C3F"
            />
            <path
              d="M208.956 117.38C205.387 117.38 202.39 116.406 200.211 114.484C196.7 111.39 195.814 106.282 197.71 100.101C199.541 94.1461 203.761 87.8385 209.598 82.3423C215.436 76.8461 222.21 72.7928 228.682 70.9301C235.394 68.9969 241.027 69.6354 244.538 72.7293C248.049 75.8231 248.935 80.9312 247.038 87.1118C245.207 93.0666 240.988 99.3742 235.151 104.87C229.313 110.367 222.539 114.42 216.067 116.283C213.523 117.016 211.131 117.38 208.956 117.38ZM235.789 71.9496C233.854 71.9496 231.702 72.2812 229.383 72.948C223.274 74.7083 216.841 78.5677 211.27 83.8169C205.696 89.0662 201.678 95.0527 199.952 100.672C198.295 106.07 198.961 110.434 201.829 112.963C204.697 115.492 209.505 115.955 215.37 114.268C221.478 112.508 227.912 108.649 233.482 103.399C239.056 98.1501 243.074 92.1635 244.801 86.5439C246.458 81.1464 245.792 76.7826 242.924 74.2532C241.189 72.7257 238.747 71.9496 235.789 71.9496Z"
              fill="#1B9C3F"
            />
            <path
              d="M237.436 66.4704L235.772 67.9468L244.512 76.1292L246.177 74.6528L237.436 66.4704Z"
              fill="#1B9C3F"
            />
            <path
              d="M194.692 106.661L193.078 108.183L200.211 114.472L201.826 112.95L194.692 106.661Z"
              fill="#1B9C3F"
            />
            <path
              d="M120.163 88.6605C113.745 88.6605 108.143 84.3143 108.066 84.2543L109.587 82.6528C109.611 82.6704 112.038 84.5648 115.359 85.7042C119.617 87.1647 123.31 86.759 126.333 84.4942L127.808 86.1311C125.323 87.9902 122.679 88.6605 120.163 88.6605Z"
              fill="#1B9C3F"
            />
            <path
              d="M157.979 130.863C157.007 130.863 156.074 130.842 155.184 130.799C144.949 130.341 138.043 127.631 137.756 127.518L138.686 125.578C138.794 125.621 145.587 128.266 155.389 128.69C164.42 129.081 177.949 127.607 191.106 118.371L192.523 120.047C180.07 128.788 167.292 130.863 157.975 130.863H157.979Z"
              fill="#1B9C3F"
            />
            <path
              d="M190.65 124.636L191.273 119.592L185.737 119.024L188.354 117.126L193.886 117.694L193.263 122.735L190.65 124.636Z"
              fill="#1B9C3F"
            />
          </svg>
        </div>
        <div className="trainingContent">
          Certainly, it is generally advised against using electric collors in dog training as they
          can cause physical and psycholoical harm to the dog. Therefore, positive reinforcement
          techniques are often suggested as a more humane and effective approach.
        </div>
        <div className="trainingBottom">
          <button className="trainingButton">View more</button>
        </div>
      </div>
      <div className="welcome"> Experts Solution </div>
      {selectedCategories.map((category) => {
        return (
          <div key={category} className="bottom-justified">
            <div className="trainer"> {capitalize(category)} </div>
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
