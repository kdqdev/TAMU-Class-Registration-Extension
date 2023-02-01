
// Change to 
const ratings = require('@mtucourses/rate-my-professors').default;
// if using JS instead of TS
 //import ratings from '@mtucourses/rate-my-professors';

async function myfunction (name){

 const schools = await ratings.searchSchool('Texas A&M University');

//   console.log(schools);
  /*
    [
      {
        city: 'Houghton',
        id: 'U2Nob29sLTYwMg==',
        name: 'Michigan Technological University',
        state: 'MI'
      }
    ]
  */

  const teachers = await ratings.searchTeacher('Leyk', 'U2Nob29sLTEwMDM=');

  console.log(teachers);
  /*
    [
      {
        firstName: 'Ching-Kuang',
        id: 'VGVhY2hlci0yMjkxNjI=',
        lastName: 'Shene',
        school: {
          id: 'U2Nob29sLTYwMg==',
          name: 'Michigan Technological University'
        }
      }
    ] 
  */
  console.log(teachers[0]["id"]);

  const teacher = await ratings.getTeacher(teachers[0]["id"]);

  console.log(teacher);
  let peep = [teacher["avgDifficulty"], teacher["avgRating"]];
  return peep;
  

}
myfunction("leyk")