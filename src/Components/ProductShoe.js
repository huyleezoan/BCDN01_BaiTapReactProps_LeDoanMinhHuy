import React, { Component } from 'react'

export default class ProductShoe extends Component {
    render() {
        let { product, changeInfoChild } = this.props;
        return (
            <div className="card" style={{ marginBottom: "30px" }}>
                <img src={product.image} alt=".." />
                <div className="card-body">
                    <h5 className="card-title" style={{ color: "red", fontWeight: "700" }}>{product.name}</h5>
                    <p className="card-text" style={{ color: "blue", fontWeight: "700", fontSize: "25px" }}>{product.price} $</p>
                    <p className="card-text" style={{ fontFamily: "Arial" }}>{product.shortDescription}</p>
                    <button type="button" className="btn btn-success" data-toggle="modal" data-target="#exampleModal" onClick={() => {
                        changeInfoChild(product)
                    }}>More detail</button>
                </div>
            </div>
        )
    }
}
