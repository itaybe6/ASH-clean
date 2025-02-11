import PropTypes from "prop-types";
import "./Component2.css";
import newImage from '../imges/126.jpg';
import newImage2 from '../imges/127.jpg';

const Component2 = ({ className = "" }) => {
  return (
    <div className={`component-1 ${className}`}>
      <div className="div362">
        <p className="p61">{`מה הלקוחות שלנו `}</p>
        <p className="p61">אומרים עלינו</p>
      </div>
      <div className="frame-parent11">
        <div className="rectangle-parent119">
          <div className="frame-child41" />
          <div className="parent80">
            <div className="div363">
              <p className="p61">{`מה הלקוחות שלנו `}</p>
              <p className="p61">אומרים עלינו</p>
            </div>
            <div className="div364">
              <p className="p61">
                לקוחותינו מעידים על שירות מקצועי, איכותי ואמין שעושה הבדל אמיתי.
                חלונות ושלטים נוצצים, עמידה בלוחות זמנים ותוצאות מבריקות הם רק
                חלק מהדברים שהופכים אותנו לבחירה המובילה.
              </p>
              <p className="p61">
                <b>הצטרפו גם אתם לעסקים המרוצים ותנו לנו לדאוג לניקיון שלכם!</b>
              </p>
            </div>
          </div>
          <div className="ellipse-wrapper">
            <div className="frame-child42" />
          </div>
        </div>
        <div className="div365">“</div>
      </div>
      <div className="component-1-inner">
        <div className="frame-wrapper13">
          <div className="group-wrapper15">
            <div className="mask-group-parent1">
              <img
                className="mask-group-icon6"
                alt=""
                src={newImage}
              />
              <div className="group-child229" />
              <div className="div366">
                <p className="p61">
                  <b>{`ריקי בי פארם`}</b>
                </p>
                <p className="p68">בעל עסק בקניון</p>
              </div>
              <div className="div367">
              שירות ברמה הגבוהה ביותר! צוות הניקיון עשה עבודה יסודית על חלונות הסניפים והחזיר להם ברק אמיתי. מאז, הלקוחות מגיבים בצורה חיובית יותר, והצוות שלנו נהנה מסביבה נעימה ונקייה. בהחלט שווה כל שקל!
              </div>
              <img className="group-child230" alt="" src="/group-365.svg" />
            </div>
          </div>
        </div>
      </div>
      <div className="component-1-child">
        <div className="frame-wrapper14">
          <div className="frame-wrapper13">
            <div className="mask-group-parent1">
              <img
                className="mask-group-icon6"
                alt=""
                src={newImage2}
              />
              <div className="group-child229" />
              <div className="div366">
                <p className="p61">
                  <b>{`אביחי טו גו`}</b>
                </p>
                <p className="p68">בעל עסק בקניון</p>
              </div>
              <div className="div367">
                לא האמנתי כמה הבדל ניקיון מקצועי יכול לעשות! אחרי שהצוות טיפל בחלונות הראווה והחנות, המקום נראה חדש לגמרי. הלקוחות שמו לב מיד והשירות היה מהיר, יסודי ואמין. ממליץ בחום!
              </div>
              <img className="group-child230" alt="" src="/group-365.svg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Component2.propTypes = {
  className: PropTypes.string,
};

export default Component2;
