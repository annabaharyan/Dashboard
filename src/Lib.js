export default function SearchSkills(arr, techs) {
  return arr.filter((item) => {
    return techs.every((skill) => item.skills.includes(skill));
  });
}
