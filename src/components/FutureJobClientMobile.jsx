import PropTypes from "prop-types";
import "./FutureJobClientMobile.css";

const FutureJobClientMobile = ({ className = "", namew, time, date, done }) => {
  return (
    <div className={`futurejobclientmobile ${className}`}>
      <div className="futurejobclientmobile-inner">
        <div className="futurejobclientmobile-inner">
          <div className="futurejobclientmobile-inner">
            <div className="futurejobclientmobile-inner">
              <div className="group-child223" />
              <div className="div347">{namew}</div>
              <div className="div348">{done}</div>
              <div className="div349">{time}</div>
              <div className="div350">{date}</div>
              <div className="div351">תאריך</div>
              <div className="div352">שעה</div>
              <div className="div353">עובד מבצע</div>
              <div className="div354">סטטוס</div>
              <div className="group-child224" />
              <div className="group-child225" />
              <div className="group-child226" />
              <div className="group-child227" />
              <div className="group-child228" />
            </div>
          </div>
        </div>
      </div>
      <img className="futurejobclientmobile-child" alt="" src="/line-26.svg" />
    </div>
  );
};

FutureJobClientMobile.propTypes = {
  className: PropTypes.string,
  namew: PropTypes.string,
  time: PropTypes.string,
  date: PropTypes.string,
  done: PropTypes.string,
};

export default FutureJobClientMobile;
