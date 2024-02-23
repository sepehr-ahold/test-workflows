const core = require("@actions/core");
const github = require("@actions/github");

async function run() {
  try {
    const issueTitle = core.getInput("title");
    const issueBody = core.getInput("body");
    const token = core.getInput("repo-token");

    const octokit = new github.getOctokit(token);

    const newIssue = await octokit.rest.issues.create({
      repo: github.context.repo.repo,
      owner: github.context.repo.owner,
      title: issueTitle,
      body: issueBody,
    });
  } catch (error) {
    core.setFailed(error.message);
  }
}
run();
