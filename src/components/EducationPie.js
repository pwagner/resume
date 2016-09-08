import React from 'react';
import { VictoryPie } from 'victory';
import minBy from 'lodash/minBy';

const EducationPie = ({ education, work = null }) => {
  const data = education.map(({
    institution,
    area,
    studyType,
    educationType,
    startDate,
    endDate,
  }) => ({
    institution,
    area,
    studyType,
    educationType,
    startDate: new Date(startDate),
    endDate: new Date(endDate),
  }));

  // Include work experience if available.
  if (work) {
    const firstWork = minBy(work, 'startDate');
    if (firstWork) {
      data.push({
        institution: 'Work Experience',
        area: 'Freelance projects and employments',
        studyType: 'Profession',
        educationType: 'praxis',
        startDate: new Date(firstWork.startDate),
        endDate: new Date(),
      });
    }
  }

  // In order to show the start and end year, we have to add pseudo items.
  const firstItem = minBy(data, 'startDate');
  if (firstItem) {
    const overallStartDate = new Date(
      firstItem.startDate.getYear(),
      firstItem.startDate.getMonth(),
      firstItem.startDate.getDay() - 1
    );
    data.unshift({
      institution: 1900 + overallStartDate.getYear(),
      startDate: overallStartDate,
      endDate: overallStartDate,
      educationType: 'none',
    });

    // Uncomment the following line, in order to chronologically sort the entries.
    // Otherwise they will appear in the order of the JSON doc.
    // data.sort((a, b) => a.startDate.getTime() - b.startDate.getTime());

    data.push({
      institution: (new Date().getYear() + 1900).toString(),
      startDate: new Date(),
      endDate: new Date(),
      educationType: 'none',
    });
  }

  return (
    <VictoryPie
      endAngle={165}
      innerRadius={115}
      padAngle={1}
      startAngle={-165}
      data={data}
      padding={{
        top: 20,
        right: 40,
        bottom: 0,
        left: 40,
      }}
      x="institution"
      y={({ startDate, endDate }) => (
        endDate.getTime() - startDate.getTime()
      )}
      colorScale={[
        'white',
        'silver',
        'grey',
        '#bde880',
        '#777',
        '#93c54b',
      ]}
      style={{
        labels: {
          fill: '#333',
          fontSize: 9,
          padding: 55,
          textShadow: '1px 1px whitesmoke',
        },
      }}
    />
  );
};

const { string, shape, arrayOf } = React.PropTypes;
EducationPie.propTypes = {
  education: arrayOf(shape({
    institution: string,
    area: string,
    studyType: string,
    educationType: string,
    startDate: string,
    endDate: string,
    remark: string,
  })).isRequired,
  work: arrayOf(shape({
    startDate: string,
  })).isRequired,
};
EducationPie.defaultProps = {
  education: [],
  work: [],
};

export default EducationPie;
