import logo from "./logo.svg";
import "./css.css";
import React, { useState } from "react";
import checkout from "./checkout";

import "bootstrap/dist/css/bootstrap.min.css";



function Page() {


  const [selectedProducts, setSelectedProducts] = useState([]);
  const [selectedProductNames, setSelectedProductNames] = useState([]);

  const handleClick = (price, name) => {
    if (selectedProductNames.includes(name)) {
      setSelectedProductNames(selectedProductNames.filter((n) => n !== name));
    } else {
      setSelectedProductNames([...selectedProductNames, name]);
    }

    if (selectedProducts.includes(price)) {
      setSelectedProducts(selectedProducts.filter((p) => p !== price));
    } else {
      setSelectedProducts([...selectedProducts, price]);
    }
  };

  const sumSelectedProducts = () => {
    return selectedProducts.reduce((total, price) => total + price, 0);
  };

 
  return (
    <div>
      {/* Required meta tags */}
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      {/* Bootstrap CSS */}
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
        integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
        crossOrigin="anonymous"
      />

      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css"
        integrity="sha512-HK5fgLBL+xu6dm/Ii3z4xhlSUyZgTT9tuc/hSrtw6uzJOvgRr2a9jyxxT1ely+B+xFAmJKVSTbpM/CuL7qxO8w=="
        crossOrigin="anonymous"
      />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Titillium+Web:wght@600&display=swap"
        rel="stylesheet"
      />
      <title>RBXInstant</title>
      <header>
        <div className="container wall" style={{ transform: "scale()" }}>
          <img
            src="https://i.imgur.com/fgyACdU.png"
            style={{ width: "150px" }}
            alt="Italian Trulli"
          />
        </div>
      </header>
      <div className="container wall2">
        <h1 className="htr">Welcome to the #1 Shop</h1>
      </div>
      <div className="d-none d-sm-block top-spacer" />
      <div className="container wall" style={{}}>
        <div className="row d-flex">
          <div className="col-xs-1   order-3">
            <div></div>

            <div className="step-spacer" />
            <div className="section_title2 text-center" style={{}}>
              <span style={{ color: "#1069be" }}>Product</span> list{" "}
            </div>
            <hr />
            <div className="scrollableDiv scrollableContent">
              <div
                className="row justify-content-center"
                style={{
                  paddingLeft: "36px",
                  paddingTop: "10px",
                  paddingRight: "19px",
                }}
              >
                {productOptions.map((thing, index) => (
                  <div
                    key={index}
                    onClick={() => handleClick(thing.price, thing.name)}
                    className={`col-1 sub-card item-selectable item ${
                      selectedProductNames.includes(thing.name)
                        ? "selected"
                        : ""
                    }`}
                  >
                    <p className="testdiv">{thing.name.charAt(0)}</p>
                    <span
                      style={{
                        bottom: "1.5rem",
                        left: ".5rem",
                        position: "absolute",
                        borderStyle: "dashed",
                      }}
                    >
                      {thing.name}
                    </span>
                    <span
                      style={{ bottom: 0.2, left: 0.5, position: "absolute" }}
                    >
                      $1.50 USD
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <span
              className="d-inline-block align-middle"
              style={{ marginTop: ".5vw", fontSize: "22px" }}
            >
              Total:{" "}
              <span id="total" style={{ color: "#1069be" }}>
                {" "}
                {sumSelectedProducts()}
              </span>{" "}
            </span>
            <span
              className="d-inline-block align-middle"
              style={{ marginTop: ".5vw", fontSize: "22px", color: "#1069be" }}
            >
              {" "}
              USD
            </span>
            <input
              type="button"
              onClick={() =>
                checkout(sumSelectedProducts(), selectedProductNames)
              }
              className="btn btn-primary"
              style={{ float: "right" }}
              id="step2Btn"
              defaultValue="Purchase"
            />
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="tooManyItems"
        tabIndex={-1}
        aria-labelledby="tooManyItems"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="tooManyItems">
                Too Many Items
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              Due to the cap, only up to 4 items can be selected.
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
