export async function startTraining(
  dataset: string
) {

  return {
    dataset,
    status: "training"
  };

}
