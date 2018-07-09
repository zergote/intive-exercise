import React from 'react';
import './style.scss';

let Table = () => {
  return (
    <div className="table-container">
      <div className="table">
        <div className="scrollview">
          <table>
            <tr>
              <th className="th-name">
                <div>name</div>
              </th>
              <th className="th-country">
                <div>country</div>
              </th>
              <th className="th-birthday">
                <div>birthday</div>
              </th>
            </tr>
            <tr>
              <td>one</td>
              <td>two</td>
              <td>three longer</td>
            </tr>
            <tr>
              <td>one</td>
              <td>two</td>
              <td>three longer</td>
            </tr>
            <tr>
              <td>one</td>
              <td>two</td>
              <td>three longer</td>
            </tr>
            <tr>
              <td>one</td>
              <td>two</td>
              <td>three longer</td>
            </tr>
            <tr>
              <td>one</td>
              <td>two</td>
              <td>three longer</td>
            </tr>
            <tr>
              <td>one</td>
              <td>two</td>
              <td>three longer</td>
            </tr>
            <tr>
              <td>one</td>
              <td>two</td>
              <td>three longer</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Table;
