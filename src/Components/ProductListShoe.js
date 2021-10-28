import React, { Component } from 'react'
import ProductShoe from './ProductShoe';

export default class ProductListShoe extends Component {
    renderListShoe = () => {
        let { arrShoe, changeInfo } = this.props;
        return arrShoe.map((shoe, index) => {
            return <div className="col-4" key={index}>
                <ProductShoe product = {shoe} changeInfoChild = {changeInfo} />
            </div>
        })
    }
    render() {
        return (
            <div className="row">
                {this.renderListShoe()}
            </div>
        )
    }
}
