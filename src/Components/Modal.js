import React, { Component } from 'react'

export default class Modal extends Component {
    render() {
        let product = this.props.product;
        return (
            <div>
                <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Shoe Info</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>Properies</th>
                                            <th >Detailed Infomations</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th>ID</th>
                                            <td>{product.id}</td>
                                        </tr>
                                        <tr>
                                            <th>Name</th>
                                            <td>{product.name}</td>
                                        </tr>
                                        <tr>
                                            <th>Price</th>
                                            <td>{product.price} $</td>
                                        </tr>
                                        <tr>
                                            <th>Description</th>
                                            <td style={{ textAlign: "left" }}>{product.description}</td>
                                        </tr>
                                        <tr>
                                            <th>Quantity</th>
                                            <td>{product.quantity} pieces</td>
                                        </tr>
                                        <tr>
                                            <th>Image</th>
                                            <td>
                                                <img className="img-fluid" src={product.image} alt="" />
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
