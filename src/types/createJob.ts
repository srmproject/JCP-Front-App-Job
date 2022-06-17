export interface createJobObject {
  git: gitObject;
  job_description: string;
  job_name: string;
  lang_tpye: string;
  lang_version: string;
  project: string;
}
export interface gitObject {
  git_branch: string;
  git_filepath: string;
  git_url: string;
}
