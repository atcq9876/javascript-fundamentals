const searchCandies = require('./searchCandies');

describe('searchCandies', () => {
  it('returns Mars and Maltesers when given Ma and 10', () => {
    expect(searchCandies('Ma', 10)).toEqual([ 'Mars', 'Maltesers' ]);
  });

  it('returns Mars when given Ma and 2', () => {
    expect(searchCandies('Ma', 2)).toEqual([ 'Mars' ]);
  });

  it('returns Skitties, Skittles and Starburst when given S and 10', () => {
    expect(searchCandies('S', 10)).toEqual([ 'Skitties', 'Skittles', 'Starburst' ]);
  });

  it('returns Skitties and Skittles when given S and 10', () => {
    expect(searchCandies('S', 4)).toEqual([ 'Skitties', 'Skittles' ]);
  });

  it('returns Mars when given ma and 2', () => {
    expect(searchCandies('ma', 2)).toEqual([ 'Mars' ]);
  });
});