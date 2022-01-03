import './Backdrop.css';

const Backdrop = ({show, setSideToggle}) => {
    return show && <div className="backdrop" onClick={setSideToggle}></div>;
}

export default Backdrop;
