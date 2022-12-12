const cohort = {
  id: 1234,
  name: 'May 2022',
  students: ['Andy', 'James', 'Scott', 'Lewis']
}

const printCohortInfo = (cohortObject) => {
  console.log(`Cohort ID: ${cohortObject.id} - Name: ${cohortObject.name} - ${cohortObject.students.length} students in this cohort`);
};

printCohortInfo(cohort);