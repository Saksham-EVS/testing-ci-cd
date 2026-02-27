const env_map = {
    "data-exporter-424705": {
      env: "dev",
      bucket: "testing-ci-cd-dataform-saksham",
      dataset: "raw_dataform_cicd_testing_saksham"
    },
    "my-qa-project": {
      env: "qa",
      bucket: "qa-raw",
      dataset: "qa_landing"
    },
    "my-prod-project": {
      env: "prod",
      bucket: "prod-raw-bucket",
      dataset: "prod_landing"
    }
  };

const projectId = dataform.projectConfig.defaultDatabase;


module.exports={
    env_map,
    projectId
}
