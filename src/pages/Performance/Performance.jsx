import Information from "./components/Information";
import * as S from "./Performance.style";

// images
import logo from "../../assets/images/Performance/logo.png";
import date from "../../assets/images/Performance/date.png";

const DUMMY_DATA = [
  { id: 1, time: "00:00-00:00", performance: "멋사공연", img: logo },
  { id: 2, time: "00:00-00:00", performance: "멋사공연", img: logo },
  { id: 3, time: "00:00-00:00", performance: "멋사공연", img: logo },
  { id: 4, time: "00:00-00:00", performance: "멋사공연", img: logo },
  { id: 5, time: "00:00-00:00", performance: "멋사공연", img: logo },
];

export default function PerformancePage() {
  return (
    <S.PerformanceLayout>
      <S.ImageBox>
        <img src={date} alt="date" />
      </S.ImageBox>
      <S.InformationBox>
        {DUMMY_DATA.map((prod) => (
          <Information
            key={prod.id}
            time={prod.time}
            performance={prod.performance}
            img={prod.img}
          />
        ))}
      </S.InformationBox>
    </S.PerformanceLayout>
  );
}
