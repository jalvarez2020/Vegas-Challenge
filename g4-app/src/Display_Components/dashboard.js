import React, { Component } from 'react'

export default class Dashboard extends Component {
    render() {
        return (
            <div>
                <h1>Customer Profile</h1>

<h2>John Doe</h2>
<p>Email: john.doe@email.com</p>
<p>Phone: 123-123-1234</p>
<p>Phone (Mobile): 123-123-9876</p>
<p>Since: March 2015</p>
<p>Location: 162.142.45.140, 8.13333</p>

<h2>Interests</h2>
<ul>
  <li>Photography</li>
  <li>Speed Cubes</li>
  <li>Fortnite</li>
  <li>Mother of Dragons</li>
</ul>

<h2>Orders</h2>

<table>
  <tr>
    <th>#</th>
    <th>Date</th>
    <th>Status</th>
    <th>Actions</th>
  </tr>
  <tr>
    <td>789</td>
    <td>2018-06-15T16:00:00Z</td>
    <td>Processing</td>
    <td><a href="/order/789">View</a></td>
  </tr>
  <tr>
    <td>456</td>
    <td>2018-06-10T15:55:00Z</td>
    <td>Shipped</td>
    <td><a href="/order/456">View</a></td>
  </tr>
  <tr>
    <td>123</td>
    <td>2018-06-01T16:00:00Z</td>
    <td>Delivered</td>
    <td><a href="/order/123">View</a></td>
  </tr>
</table>

            </div>
        )
    }
}
