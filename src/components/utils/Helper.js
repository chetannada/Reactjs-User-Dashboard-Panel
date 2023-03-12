export function filterData(searchText, userData) {
  const data = userData.filter((item) =>
    item?.name.toLowerCase().includes(searchText.toLowerCase())
  );
  return data;
}
