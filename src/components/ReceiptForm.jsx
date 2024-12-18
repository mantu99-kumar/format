import React from 'react';
import './ReceiptForm.css';

const ReceiptForm = () => {
  return (
//     <div className="receipt-container">
//       <h1 className="receipt-title">Brihanmumbai Municipal Corporation</h1>
//       <h2 className="receipt-subtitle">Deonar Abattoir</h2>
//       <div className="receipt-number">
//         <span>0019365</span>
//       </div>

//       <div className="receipt-section">
//         <div>
//           <strong>Non-refundable fee</strong>
//         </div>
//         <div className="receipt-date">
//           <strong>Date: ………………………</strong>
//         </div>
//       </div>

//       <div className="receipt-details">
//         <p>
//           Received Rupees ……………………………… Paise ……………………………… as entry fee of animals shown below from Mr. /Mrs.
//           ………………………………………………………
//         </p>
//         <p>Name of Broker: …………………………………………………………………………………</p>
//         <p>Name of Gawal: …………………………………………………………………………………</p>
//       </div>
// <div style={{display:'flex', justifyContent:'flex-end', alignItems:'flex-end'}} className=''>
// <table className="receipt-table">
//         <thead>
//           <tr>
//             <th>Rupees</th>
//             <th>Paise</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr><td></td><td></td></tr>
//           <tr><td></td><td></td></tr>
//           <tr><td></td><td></td></tr>
//         </tbody>
//       </table>
// </div>
     

//       <div className="footer">
//         <div className="for-record">For Record</div>
//         <div className="signature">For General Manager <br />(Deonar Abattoir)</div>
//       </div>

//       <div className="footer-note">
//         CA (R)69 &amp; 79-BMPP-55951-2022-23-210BKS. (100X2)
//       </div>
//     </div>


<div className="form-container">
      <div className="header">
        <div className="top-text">
          <span>गुमश. ५०५५-२००८/१/२००८ पुस्तक (१००x२)</span>
          <span className="right-align">प्र.ले. (एम)-७०</span>
        </div>
        <h2>Brihanmumbai Municipal Corporation</h2>
        <h3>Deonar Abattoir</h3>
      </div>

      <div className="form-body">
        <div className="form-details">
          <p>No............................................</p>
          <p>Date: ........................................</p>
        </div>

        <p className="fees">
          <strong>Non-refundable fees</strong>
        </p>

        <p>
          Received Rupees .................................. Paise ..................................
          as food-charges of animals shown below from Mr./Mrs. ...........................................
        </p>
        <p>
          Name of Dawawala: ..............................................................................
        </p>

        <div className="table">
          <div className="table-header">
            <div className="table-cell">Rupees</div>
            <div className="table-cell">Paise</div>
          </div>
          <div className="table-row">
            <div className="table-cell"></div>
            <div className="table-cell"></div>
          </div>
          <div className="table-row">
            <div className="table-cell"></div>
            <div className="table-cell"></div>
          </div>
          <div className="table-row">
            <div className="table-cell"></div>
            <div className="table-cell"></div>
          </div>
        </div>

        <p className="footer-note">
          The above amount has been accepted against the cheque.
        </p>

        <p>
          O. & M. O' Sanction No. MOM/8795 of 12-10-72 & D.M.C. (III)'s Sanction No. MDE/7866 of 13-10-72.
        </p>

        <p className="for-record">
          <strong>For Record</strong>
        </p>
      </div>

      <div className="signature">
        <p>For General Manager</p>
        <p>(Deonar Abattoir)</p>
      </div>
    </div>
  );
};

export default ReceiptForm;
