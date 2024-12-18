import React from "react";
import './ReceiptForm.css';

const ReceiptForm2 = () => {
  return (
    <div className="form-container">
      <div className="form-header">
        <span className="original-copy">Original Copy</span>
        <div className="title-section">
          <h2>BRIHANMUMBAI MUNICIPAL CORPORATION</h2>
          <p className="ref-no">Sa.-212</p>
        </div>
      </div>

      <div className="form-details">
        <div className="row">
          <div>To,</div>
          <div className="form-meta">
            <span>Date: ..............</span>
            <span className="form-number">No. <b>010434</b></span>
          </div>
        </div>
        <div className="row">
          <div>Security Guard: ..............</div>
          <div>Department No.: ..............</div>
        </div>
        <div className="row">
          <div>
            On duty at this place:
            <span className="underline">..........................................................</span>
          </div>
        </div>
        <div className="row">
          <p>
            Please allow Mr./Mrs.
            <span className="underline">..........................................................</span> to take the following items
            from
            <span className="underline">.........................................................</span> office/work school to
            <span className="underline">..........................................................</span> this place.
          </p>
        </div>
      </div>

      <table className="requisition-table">
        <thead>
          <tr>
            <th>Requisition Sheet No.</th>
            <th>Details of items</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td></td>
            <td className="quantity-cell">
              <span>No.</span>
              <span>Kilograms</span>
            </td>
          </tr>
          {Array.from({ length: 7 }).map((_, index) => (
            <tr key={index}>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="footer">
        <p>Vehicle No.: ..........................................</p>
        <p>Signature of the recipient: ..........................................</p>
      </div>

      <div className="signature-section">
        Signature and designation of the officer issuing the order
      </div>
    </div>
  );
};

export default ReceiptForm2;
