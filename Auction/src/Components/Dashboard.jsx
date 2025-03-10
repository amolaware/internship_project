import React from 'react'; 
import { Link } from 'react-router-dom';
import './Dash.css'
function Dashboard() {
  return (
    <div>
      <h2>Auction Dashboard</h2>

      <Link to="/PostAuction" className='nav-link'>
      
        <button className='btn'>Post New Auction</button>
      </Link>

      <Link to="/AuctionItem" className="nav-link">
      <button className='btn'> Auction Item</button></Link>

      <ul>
        <li>
          <Link to="/auction/1">Vintage Watch - Current Bid: $150</Link>
        </li>
        <li>
          <Link to="/auction/2">Antique Vase - Current Bid: $250 (Closed)</Link>
        </li>
        <li>
          <Link to="/auction/3">Rare Comic Book - Current Bid: $300</Link>
        </li>
      </ul>
    </div>
  );
}

export default Dashboard;