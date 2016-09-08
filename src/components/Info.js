import React from 'react';
import moment from 'moment';

const Info = ({ birthday, citizenship, children }) => (
  <section className="info">
    <h2 className="text-uppercase">
      <i className="fa fa-lg fa-info-circle" /> Info:
    </h2>
    <ul className="list-inline">
      <li>
        <i className="fa fa-lg fa-birthday-cake" />
        Born on {moment(birthday).format('MMM DD, YYYY')}
      </li>
      <li>
        <i className="fa fa-lg fa-clock-o" />
        {moment().diff(birthday, 'years')} years old
      </li>
      <li>
        <i className="fa fa-lg fa-flag" />
        Citzenship: {citizenship}
      </li>
      {children > 0 &&
        <li>
          <i className="fa fa-lg fa-child" />
           {children === 1 ? '1 child' : `${children} children`}
        </li>
      }
    </ul>
  </section>
);

const { string, number } = React.PropTypes;
Info.propTypes = {
  birthday: string,
  citizenship: string,
  children: number,
};
Info.defaultProps = {
  birthday: '1800-01-01',
  citizenship: 'none',
  children: 0,
};

export default Info;
