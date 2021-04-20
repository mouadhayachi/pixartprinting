const initialState = {
  jobs: [
    { label: "Job 1", show: true, applied: false },
    { label: "Job 2", show: false, applied: false },
    { label: "Job 3", show: false, applied: false },
    { label: "Job 4", show: false, applied: false },
    { label: "Job 5", show: false, applied: false },
  ],
};

export default function reducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case "SELECT_JOB":
      return {
        jobs: state.jobs.map((elt) =>
          elt.label === payload.label
            ? { ...elt, show: true }
            : { ...elt, show: false }
        ),
      };
    case "APPLY_JOB":
      return {
        jobs: state.jobs.map((elt) =>
          elt.label === payload.label
            ? { ...elt, show: true, applied: true }
            : { ...elt, show: false }
        ),
      };
    default:
      return state;
  }
}
