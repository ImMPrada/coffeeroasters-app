import { Children } from "react";
import InfoCard from "../InfoCard/InfoCard"
import './styles.scss'

function Cover(props) {
  const { image, title, content, children } = props;

  return (
    <>
      <div className="cover">
        <div className="cover-container">
          <div className="cover-container-image">
            <img src={image} />
          </div>
          <div className="cover-container-content">
            <p className="font-h1">{title}</p>
            <p className={`cover-container-content-text${children ? "-withchildren" : ""} body-text`}>{content}</p>
            {children}
          </div>
        </div>
      </div>
    </>
  )
}

export default Cover
