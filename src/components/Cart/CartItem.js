import React, { Component } from "react";
export default class CartItem extends Component {
    render() {
    const { id, title, img, price, total, count } = this.props.item;
    const { increment, decrement,  } = this.props.value;

        return (
            <div className="col my-2 text-capitalize text-center">
            <div className="col-10 mx-auto col-lg-2">
                <img
                src={img}
                style={{ width: "25rem", heigth: "25rem" }}
                className="img-fluid"
                alt=""
                />
            </div>
            <div className="col-10 mx-auto col-lg-2">{title}
            </div>
            <div className="col-10 mx-auto col-lg-2 ">
                <strong>
                <span className="d-lg-none">Harga :</span> Rp.{price}
                </strong>
            </div>
            <div className="col-10 mx-auto col-lg-5 my-2 my-lg-0 ">
                <div className="d-flex justify-content-center">
                <div>
                    <span
                    className="btn btn-danger mx-1"
                    onClick={() => decrement(id)}
                    >
                    -
                    </span>
                    <span class="mx-2">{count}</span>
                    <span
                    className="btn btn-success mx-1"
                    onClick={() => increment(id)}
                    >
                    +
                    </span>
                </div>
                </div>
            </div>
            <div className="col-10 mx-auto col-lg-2 ">
            </div>

            <div className="col-10 mx-auto col-lg-5 ">
                <strong>Harga Total: Rp. {total} </strong>
            </div>
            </div>
        );
    }
}