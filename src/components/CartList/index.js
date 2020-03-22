import React, { Component } from 'react'
import { increment, decrement } from '../../actions/cart'

export default class CartList extends Component {
  constructor() {
    super()
    this.state = {
      cartList: []
    }
  }

  decrement (id) {
    this.props.store.dispatch(decrement(id))
  }

  increment (id) {
    this.props.store.dispatch(increment(id))
  }

  getState = () => {
    const cartList = this.props.store.getState().cart
    this.setState({
      cartList
    })
  }

  componentDidMount() {
    this.getState()
    this.props.store.subscribe(this.getState)
  }

  render() {
    console.log(this.props.store)
    return (
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>商品</th>
            <th>价格</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          {
            this.state.cartList.map((item) => {
              return (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.goods}</td>
                  <td>{item.price}</td>
                  <td>
                    <button onClick={this.decrement.bind(this, item.id)}>-</button>
                    <span>{item.amount}</span>
                    <button onClick={this.increment.bind(this, item.id)}>+</button>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    )
  }
}
