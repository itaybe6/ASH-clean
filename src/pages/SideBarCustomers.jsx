import "./SideBarCustomers.css";
import { useNavigate } from 'react-router-dom';

const SideBarCustomers = ({user}) => {  
  const navigate = useNavigate();

  const Contact = () => {
    navigate(`/client-contact-us/${user.id}/`);
  }
  const Jobs = () => {
    navigate(`/clientJobs/${user.id}/`);
  }
  const edit = () => {
    navigate(`/client-edit-profile/${user.id}/`);
  }
  return (
    <div className="side-bar-customers">
      <div className="rectangle-parent89">
        <div className="group-child191" />
        <button className="vector-wrapper89">
          <img className="vector-icon98" alt="" src="/vector8.svg" />
        </button>
        <img className="icon58" alt="" src="/-02-13@2x.png" />
      </div>
      <div className="side-bar-customers-inner">
        <div className="group-parent46">
          <div className="group-parent47">
            <button className="vector-wrapper90" onClick={edit}>
              <img className="vector-icon99" alt="" src="/vector2.svg" />
            </button>
            <button className="parent55" onClick={Contact}>
              <div className="div231">צור קשר</div>
              <img
                className="icbaseline-contact-mail-icon5"
                alt=""
                src="/icbaselinecontactmail.svg"
              />
            </button>
          </div>
          <button className="vector-wrapper91" onClick={Jobs}>
            <img className="vector-icon100" alt="" src="/vector9.svg" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SideBarCustomers;
