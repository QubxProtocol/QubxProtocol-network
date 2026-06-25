export function scheduleJob(
  jobId: string
) {

  return {
    jobId,
    queue: "high-priority",
    status: "scheduled"
  };

}
