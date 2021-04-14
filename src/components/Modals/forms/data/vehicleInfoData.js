export const FIELD_YEAR = (() => {
  const yearNow = new Date().getFullYear();
  // "", == for default empty value (NONE)
  return [
    { id: "", label: "" },
    ...[...Array(yearNow - 1998)].map((x, i) => {
      const retValue = 1999 + i;
      return { id: retValue, label: retValue };
    }),
  ];
})();
