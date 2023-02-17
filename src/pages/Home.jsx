import { Link } from 'react-router-dom';
import { useDbData } from '../utils/firebase';
import { getEmbedURL } from '../utils/helpers';

export const Home = () => {
  const [data] = useDbData('content', ['barking'], 'video')

  console.log(data)
  return (
    <div className="wrapper">
      <div className="top-justified">
        <div className="header">
          <div className="top">
            <h2> DogSpace </h2>
          </div>
        </div>

        <section className="cards">
          <div>
            
          </div>

          {/* <div className="middle">
         <div className="middleleft">
          <div className="featureditems">
            <div className="featuredlabel">
              <h1>Preview:</h1>
            </div>
            <div className="featureditemslist">
              featured items
            </div>
          </div>
        </div>
        <div className="middleright">
          <div className="waitlabel" style={{ backgroundColor: color }}>
            <div className="waittime"></div>
            min
          </div>
          <div className="more">
            <button className="morebutton">
              Full Menu <i className="fas fa-arrow-right"></i>
            </button>
          </div>
        </div> 
      </div> */}
        </section>
      </div>
      <div className="bottom-justified">
        <div className="welcome"> Barking </div>
        <div className="horizontal-scroll">
          {
            data.map((content, index) => {
              return (
                <div key={index} className="content-card">
                  {/* <div className="videos"> */}
                  <div className="video-responsive">
                    <iframe
                      width="426.5"
                      height="240"
                      src={getEmbedURL(content['URL'])}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      title="Embedded youtube"
                    />
                  </div>
                  {/* <div className="description">What to feed your dog today!</div> */}
                </div>
              )
            })
          }
        </div>
        
      </div>
      <div className="bottom-justified">
        <div className="welcome"> Barking </div>
        <div className="horizontal-scroll">
          {
            data.map((content, index) => {
              return (
                <div key={index} className="content-card">
                  {/* <div className="videos"> */}
                  <div className="video-responsive">
                    <iframe
                      width="426.5"
                      height="240"
                      src={getEmbedURL(content['URL'])}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      title="Embedded youtube"
                    />
                  </div>
                  {/* <div className="description">What to feed your dog today!</div> */}
                </div>
              )
            })
          }
        </div>
        
      </div>
      <div className="bottom-justified">
      <div className="welcome"> Barking </div>
        <div className="horizontal-scroll">
        
          {
            data.map((content, index) => {
              return (
                <div key={index} className="content-card">
                  {/* <div className="videos"> */}
                  <div className="video-responsive">
                    <iframe
                      // width="426.5"
                      // height="240"
                      width="284.33"
                      height="160"
                      src={getEmbedURL(content['URL'])}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      title="Embedded youtube"
                    />
                  </div>
                  {/* <div className="description">What to feed your dog today!</div> */}
                </div>
              )
            })
          }
        </div>
        
      </div>
    </div>
  );
};
