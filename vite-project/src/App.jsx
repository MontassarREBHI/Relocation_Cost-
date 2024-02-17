import { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.css";

import "./App.css";

function App() {
  const [price, setPrice] = useState({
    Oprice: 0,
    OBSB: 0,
    A1Price: 0,
    A1BSB: 0,
    A2Price: 0,
    A2BSB: 0,
  });
  const [show, setShow] = useState(false);

  const [refund, setRefund] = useState({
    Orefund: 0,
    Oinvoice: 0,
    A1refund: 0,
    A1invoice: 0,
  });
  let calculate = () => {
    if (price.Oprice < price.A1Price)
      setRefund((prev) => {
        let priceOInlcudingBSB =
          parseFloat(price.Oprice) + parseFloat(price.OBSB);
        return {
          ...prev,
          Orefund: price.A1Price - price.Oprice,
          Oinvoice: price.A1Price - priceOInlcudingBSB,
        };
      });
    if (price.A1Price < price.A2Price)
      setRefund((prev) => {
        let priceA1InlcudingBSB =
          parseFloat(price.A1Price) + parseFloat(price.A1BSB);
        return {
          ...prev,
          A1refund: price.A2Price - price.A1Price,
          A1invoice: price.A2Price - priceA1InlcudingBSB,
        };
      });
    setShow(true);
  };
  return (
    <>
      <h1>Relocation Costs</h1>
      <p>Use this tool for easy refund and invoice calculations</p>
      <form action="">
        <label>
          Original Cost:
          <input
            type="number"
            name="OriginCost"
            value={price.Oprice}
            onChange={(e) =>
              setPrice((prev) => {
                return { ...prev, Oprice: e.target.value };
              })
            }
          />
        </label>
        <label>
          BSB on Original:
          <input
            type="number"
            name="OriginBSB"
            value={price.OBSB}
            onChange={(e) =>
              setPrice((prev) => {
                return { ...prev, OBSB: e.target.value };
              })
            }
          />
        </label>
        <br />
        <br />
        <label>
          Alt1 Cost:
          <input
            type="number"
            name="Alt1Cost"
            value={price.A1Price}
            onChange={(e) =>
              setPrice((prev) => {
                return { ...prev, A1Price: e.target.value };
              })
            }
          />
        </label>
        <label>
          BSB on Alt1:
          <input
            type="number"
            name="Alt1BSB"
            value={price.A1BSB}
            onChange={(e) =>
              setPrice((prev) => {
                return { ...prev, A1BSB: e.target.value };
              })
            }
          />
        </label>
        <br />
        <br />
        <label>
          Alt2 Cost:
          <input
            type="number"
            name="Alt2Cost"
            value={price.A2Price}
            onChange={(e) =>
              setPrice((prev) => {
                return { ...prev, A2Price: e.target.value };
              })
            }
          />
        </label>
        <label>
          BSB on Alt2:
          <input
            type="number"
            name="Alt2BSB"
            value={price.A2BSB}
            onChange={(e) =>
              setPrice((prev) => {
                return { ...prev, A2BSB: e.target.value };
              })
            }
          />
        </label>
        <br />
        <br />
        <button type="button" onClick={() => calculate()}>
          Calculate
        </button>
      </form>

      <div>
        <p>
          <strong>Refund</strong> to G on <strong>Original</strong> P :{" "}
          <strong>{refund.Orefund}</strong> and <strong>invoice</strong> to{" "}
          <strong>Original</strong> P : <strong>{refund.Oinvoice}</strong>
        </p>
        <hr />
        <br />
        <p>
          <strong>Refund</strong> to G on <strong>Alt 1</strong> :{" "}
          <strong>{refund.A1refund}</strong> and <strong>invoice</strong> to{" "}
          <strong>Alt 1</strong> P : <strong>{refund.A1invoice}</strong>
        </p>
        <hr />
        <br />
      </div>
      <footer className="footer">
        <div className="footer-content">
          <div className="credit-rights">
            <p>&copy; 2024 TUN2 SENIORS. All rights reserved.</p>
          </div>
          <div className="social-media-links">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
