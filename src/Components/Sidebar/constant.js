export const jobs = [
  { label: "Job 1", show: true, applied: false },
  { label: "Job 2", show: false, applied: false },
  { label: "Job 3", show: false, applied: false },
  { label: "Job 4", show: false, applied: false },
  { label: "Job 5", show: false, applied: false },
];

export const handleSelectedItem = (data, menuItem) => {
  const newData = data.map((elt) =>
    elt.label === menuItem.label
      ? { ...elt, show: true }
      : { ...elt, show: false }
  );
  return newData;
};

export const setAppliedJob = (data, element) => {
  const newData = data.map((elt) =>
    elt.label === element.label
      ? { ...elt, show: true, applied: true }
      : { ...elt, show: false }
  );
  return newData;
};
