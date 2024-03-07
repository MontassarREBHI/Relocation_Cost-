import { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.css";
import "bootstrap/dist/css/bootstrap.min.css";

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
  const [refund, setRefund] = useState({
    Orefund: 0,
    Oinvoice: 0,
    A1refund: 0,
    A1invoice: 0,
  });
  const [show, setShow] = useState(false);

  const calculate = () => {
    if (price.Oprice < price.A1Price)
      setRefund((prev) => {
        let priceOIncludingBSB =
          parseFloat(price.Oprice) + parseFloat(price.OBSB);
        return {
          ...prev,
          Orefund: price.A1Price - price.Oprice,
          Oinvoice: price.A1Price - priceOIncludingBSB,
        };
      });
    if (price.A1Price < price.A2Price)
      setRefund((prev) => {
        let priceA1IncludingBSB =
          parseFloat(price.A1Price) + parseFloat(price.A1BSB);
        return {
          ...prev,
          A1refund: price.A2Price - price.A1Price,
          A1invoice: price.A2Price - priceA1IncludingBSB,
        };
      });
    setShow(true);
  };

  return (
    <>
      <h1>Relocation Costs</h1>
      <p>Use this tool for easy refund and invoice calculations</p>
      <form>
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="originCost">Original Cost:</label>
              <input
                type="number"
                className="form-control"
                id="originCost"
                value={price.Oprice}
                onChange={(e) =>
                  setPrice((prev) => ({ ...prev, Oprice: e.target.value }))
                }
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="originBSB">BSB on Original:</label>
              <input
                type="number"
                className="form-control"
                id="originBSB"
                value={price.OBSB}
                onChange={(e) =>
                  setPrice((prev) => ({ ...prev, OBSB: e.target.value }))
                }
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="alt1Cost">Alt1 Cost:</label>
              <input
                type="number"
                className="form-control"
                id="alt1Cost"
                value={price.A1Price}
                onChange={(e) =>
                  setPrice((prev) => ({ ...prev, A1Price: e.target.value }))
                }
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="alt1BSB">BSB on Alt1:</label>
              <input
                type="number"
                className="form-control"
                id="alt1BSB"
                value={price.A1BSB}
                onChange={(e) =>
                  setPrice((prev) => ({ ...prev, A1BSB: e.target.value }))
                }
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="alt2Cost">Alt2 Cost:</label>
              <input
                type="number"
                className="form-control"
                id="alt2Cost"
                value={price.A2Price}
                onChange={(e) =>
                  setPrice((prev) => ({ ...prev, A2Price: e.target.value }))
                }
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="alt2BSB">BSB on Alt2:</label>
              <input
                type="number"
                className="form-control"
                id="alt2BSB"
                value={price.A2BSB}
                onChange={(e) =>
                  setPrice((prev) => ({ ...prev, A2BSB: e.target.value }))
                }
              />
            </div>
          </div>
        </div>
        <button
          type="button"
          className="btn btn-primary"
          style={{ marginTop: "10px", marginBottom: "8px" }}
          onClick={calculate}
        >
          Calculate
        </button>
      </form>

      <div>
        <p>
          <strong>Refund</strong> to G on <strong>Original</strong> RES :{" "}
          <strong>{refund.Orefund}</strong> and <strong>invoice</strong> to{" "}
          <strong>Original</strong> P : <strong>{refund.Oinvoice}</strong>
        </p>
        <hr />
        <br />
        <p>
          <strong>Refund</strong> to G on <strong>Alt 1</strong> RES :{" "}
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
