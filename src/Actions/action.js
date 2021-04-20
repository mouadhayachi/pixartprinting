export const selectJob = (payload) => {
    return {
        type: "SELECT_JOB",
        payload
    }
}

export const ApplyJob = (payload) => {
    return {
        type: "APPLY_JOB",
        payload
    }
}
