import React from 'react';
import IconRating from 'react-icon-rating';

const Skills = ({ data }) => (
  <section className="skills">
    <h2 className="text-uppercase">
      <i className="fa fa-lg fa-wrench" /> Skills <i className="fa fa-lg fa-cogs" />
    </h2>
    <div className="row">
    {
      data.map(({ name, level, rating, keywords }, key) => (
        <div className="skills-item col-xs-12 col-sm-6 col-md-3" key={key}>
          <h3>{name}</h3>
          <p>{level}</p>
          <IconRating
            className="rating"
            currentRating={rating}
            hovering={false}
            toggledClassName="fa fa-star"
            untoggledClassName="fa fa-star-o"
            halfClassName="fa fa-star-half-o"
          />
          <ul className="list-inline">
            {
              keywords.sort().map((keyword, index) => (
                <li key={index}><span className="label label-default">{keyword}</span></li>
              ))
            }
          </ul>
        </div>
      ))
    }
    </div>
  </section>
);


const { string, shape, number, arrayOf } = React.PropTypes;
Skills.propTypes = {
  data: arrayOf(shape({
    name: string,
    level: string,
    rating: number,
    keywords: arrayOf(string),
  })).isRequired,
};
Skills.defaultProps = {
  data: [],
};

export default Skills;
