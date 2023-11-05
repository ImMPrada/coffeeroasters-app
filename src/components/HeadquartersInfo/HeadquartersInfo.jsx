import './styles.scss';
import HeadquarterCard from "../HeadquarterCard/HeadquarterCard";
import UKCroquis from "../../assets/UKCroquis.svg";
import CACroquis from "../../assets/CACroquis.svg";
import AUSCroquis from "../../assets/AUSCroquis.svg";

function HeadquartersInfo() {
  return (
    <div className="headquartersinfo">
      <div className="headquartersinfo-group1">
        <HeadquarterCard
          imagePath={UKCroquis}
          title="United Kingdom"
          dir="68  Asfordby Rd"
          city="Alcaston"
          zip="SY6 1YA"
          phone="+44 1241 918425"
        />
        <HeadquarterCard
          imagePath={CACroquis}
          title="Canada"
          dir="1528  Eglinton Avenue"
          city="Toronto"
          zip="Ontario M4P 1A6"
          phone="+1 416 485 2997"
        />
      </div>
      <div className="headquartersinfo-group2">
        <HeadquarterCard
          imagePath={AUSCroquis}
          title="Australia"
          dir="36 Swanston Street"
          city="Kewell"
          zip="Victoria"
          phone="+61 4 9928 3629"
        />
      </div>
    </div>
  );
}

export default HeadquartersInfo;
