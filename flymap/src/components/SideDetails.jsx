/* eslint-disable react/prop-types */
import axios from "axios";
import { useEffect, useState } from "react";

const SideDetails = ({ detailId, setShowDetail }) => {
  const [details, setDetails] = useState(null);
  useEffect(() => {
    setDetails(null);
    const options = {
      method: "GET",
      url: "https://flight-radar1.p.rapidapi.com/flights/detail",
      params: { flight: detailId },
      headers: {
        "X-RapidAPI-Key": "31e9c79c86mshe4747fa5bfc4d18p15a19djsn8a6c15467cd6",
        "X-RapidAPI-Host": "flight-radar1.p.rapidapi.com",
      },
    };

    axios.request(options).then((res) => setDetails(res.data));
  }, [detailId]);

  return (
    <div className="detail">
      <div className="detail-inner">
        <p className="close-icon">
          <span onClick={() => setShowDetail(false)}>X</span>
        </p>
        {!details ? (
          <p>Loading...</p>
        ) : (
          <>
            <h3>{details?.aircraft?.model?.text}</h3>
            <p>{details?.aircraft?.model?.code}</p>
            <p>Kuyruk Kodu: {details?.aircraft?.registration}</p>
            <p>Şirket: {details?.airline?.short}</p>
            <img
              className="flyimages"
              src={details?.aircraft?.images?.large[0]?.src}
            />
            <p>
              Kalkış:
              <a href={details?.airport?.origin?.website}>
                {details?.airport?.origin?.name}
              </a>
            </p>
            <p>
              Varış:
              <a href={details?.airport?.destination?.website}>
                {details?.airport?.destination?.name}
              </a>
            </p>
            <p>Durum: {details?.status?.text}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default SideDetails;
