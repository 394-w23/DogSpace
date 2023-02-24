import { capitalize, fetchVids } from '../utils/helpers';
import { useDbData } from '../utils/firebase';
import { ContentCard } from '../components/ContentCard';

export const Category = () => {
  // const { categoryId } = useParams();

  const HARDCODED_CATEGORIES = [
    'barking',
    'potty training',
    'digging',
    'crying',
    'howling',
    'Licking his body'
  ];
  const [data] = useDbData('content', HARDCODED_CATEGORIES, 'video');

  return (
    <>
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
      ;
    </>
  );
};
