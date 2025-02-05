import "./ManagerJobWorkerMobile.css";

const ManagerJobWorkerMobile = ({
  className = "",
  nameb,
  address,
  dateTime,
}) => {
  return (
    <div className={`managerjobworkermobile ${className}`}>
      <div className="rectangle-parent116">
        <div className="instance-child7" />
        <div className="parent78">
          <b className="b126">תפקיד?</b>
          <div className="group-child225" />
        </div>
        <div className="group-parent51">
          <div className="group-wrapper8">
            <div className="rectangle-parent116">
              <b className="b127">{nameb}</b>
              <div className="div328">{address}</div>
            </div>
          </div>
          <div className="group-wrapper9">
            <div className="rectangle-parent116">
              <div className="div329">{dateTime}</div>
            </div>
          </div>
        </div>
        <button className="rectangle-parent117">
          <div className="group-child226" />
          <b className="b128">אישור</b>
        </button>
      </div>
    </div>
  );
};

export default ManagerJobWorkerMobile;
