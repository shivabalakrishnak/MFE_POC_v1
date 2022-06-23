import React, { useState } from "react";

import "./BikeX.css";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import FormSubscribe from "./Form";

function BikesX() {
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  return (
    <>
      <div
        className="cars-container flex flex-wrap justify-evenly "
        onClick={onOpenModal}
      >
        <div className="card">
          <p>Aprilia RS 125 GP Replica</p>
          <img src="https://www.bennetts.co.uk/-/media/bikesocial/2021-january-images/top-10-ten-a1-125cc-bikes-spec-price/top-10-ten-a1-125cc-bikes-spec-price_22.ashx?h=493&la=en&w=740&hash=8EC08A1407BE4511F378918F1E808F81198D6368" />
        </div>

        <div className="card">
          <p>KTM RC 390</p>
          <img src="https://www.bennetts.co.uk/-/media/bikesocial/2021-january-images/top-10-ten-sportsbikes-2021/top-10-ten-sportsbikes-price-spec_02.ashx?h=493&la=en&w=740&hash=10EAD96F2B459ACC338B912941989123FDEF91B7" />
        </div>

        <div className="card">
          <p>Kawasaki Ninja 650</p>
          <img src="https://www.bennetts.co.uk/-/media/bikesocial/2021-january-images/top-10-ten-sportsbikes-2021/top-10-ten-sportsbikes-price-spec_03.ashx?h=493&la=en&w=740&hash=ABB3CE9F035F0A704D643A9345C51D5F360671A4" />
        </div>

        <div className="card">
          <p>Aprilia RS660</p>
          <img src="https://www.bennetts.co.uk/-/media/bikesocial/2021-january-images/top-10-ten-sportsbikes-2021/top-10-ten-sportsbikes-price-spec_04.ashx?h=493&la=en&w=740&hash=3C0337800F20EDC0A86091D5E2FBDC32EF4F9ABC" />
        </div>

        <div className="card">
          <p>BMW S1000RR</p>
          <img src="https://www.bennetts.co.uk/-/media/bikesocial/2021-january-images/top-10-ten-sportsbikes-2021/top-10-ten-sportsbikes-price-spec_05.ashx?h=493&la=en&w=740&hash=8644C27B9257977F4B9A0163EEC00803F55C02C4" />
        </div>

        <div className="card">
          <p>Kawasaki ZX-10R</p>
          <img src="https://www.bennetts.co.uk/-/media/bikesocial/2021-january-images/top-10-ten-sportsbikes-2021/top-10-ten-sportsbikes-price-spec_06.ashx?h=493&la=en&w=740&hash=F49DAC70E67C50B16702CD3CFCA374A7A3D1823A" />
        </div>

        <div className="card">
          <p>Suzuki GSX-R1000R</p>
          <img src="https://www.bennetts.co.uk/-/media/bikesocial/2021-january-images/top-10-ten-sportsbikes-2021/top-10-ten-sportsbikes-price-spec_07.ashx?h=493&la=en&w=740&hash=F1262BE8CD286B1B679DB554BED13C9DF3CC08EC" />
        </div>

        <div className="card">
          <p>Yamaha YZF-R1</p>
          <img src="https://www.bennetts.co.uk/-/media/bikesocial/2021-january-images/top-10-ten-sportsbikes-2021/top-10-ten-sportsbikes-price-spec_08.ashx?h=493&la=en&w=740&hash=B693DAA973A3C0B681CFA2CE13D3A7EE842F9007" />
        </div>

        <div className="card">
          <p>Honda CBR1000RR-R Fireblade</p>
          <img src="https://www.bennetts.co.uk/-/media/bikesocial/2021-january-images/top-10-ten-sportsbikes-2021/top-10-ten-sportsbikes-price-spec_09.ashx?h=493&la=en&w=740&hash=9B0A4A81FE5C447F0FA98E002F601D0E37FCBEFF" />
        </div>

        <div className="card">
          <p>Ducati Panigale V4S</p>
          <img src="https://www.bennetts.co.uk/-/media/bikesocial/2021-january-images/top-10-ten-sportsbikes-2021/top-10-ten-sportsbikes-price-spec_10.ashx?h=493&la=en&w=740&hash=4C0B183BD71CC4988E2B384AF9736DCA65F83566" />
        </div>
      </div>
      <Modal open={open} onClose={onCloseModal} center>
        <h2>All about Aprilia RS 125 GP Replica</h2>
        <div className="modal-info-cont">
          <div className="img-cont">
            <img src="https://www.bennetts.co.uk/-/media/bikesocial/2021-january-images/top-10-ten-sportsbikes-2021/top-10-ten-sportsbikes-price-spec_10.ashx?h=493&la=en&w=740&hash=4C0B183BD71CC4988E2B384AF9736DCA65F83566" />
          </div>
          <FormSubscribe></FormSubscribe>
        </div>
      </Modal>
    </>
  );
}

export default BikesX;
