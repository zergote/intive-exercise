import React from 'react';
import './style.scss';

let Table = props => {
  const { persons, getDerivateDataRequesting } = props;
  return (
    <div className="table-container">
      <div className="table">
        <div className="scrollview">
          <table className="table-generate">
            <thead>
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
            </thead>
            <tbody>
              {persons.map((item, index) => {
                return (
                  <tr
                    key={index}
                    onClick={() => getDerivateDataRequesting(item)}
                  >
                    <td>{item.name + ' ' + item.surname}</td>
                    <td>{item.country}</td>
                    <td>{item.birthday}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Table;
