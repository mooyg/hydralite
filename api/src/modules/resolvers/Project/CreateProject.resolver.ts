import axios from "axios";
import { Arg, Mutation, Resolver } from "type-graphql";
import Project from "~/db/entity/Project.entity";
import User from "~/db/entity/User.entity";
import { CreateProjectInput } from "~/modules/input/Project/CreateProject.input";
import GithubRepo from "~/types/GithubRepo.type";
@Resolver()
export default class CreateProjectResolver {
  @Mutation(() => Project)
  async createProject(
    @Arg("input") input: CreateProjectInput
  ): Promise<Project | null> {
    // retrieve the project creator
    const owner = await User.findOne(input.creatorId);

    // fetch user repos from github via gh username
    const request: GithubRepo[] = (
      await axios({
        url: `https://api.github.com/users/${owner!.username}/repos`,
        method: "GET",
      })
    ).data;

    // verify its a valid repo id
    const ghRepo = request.find((repo) => repo.id === input.projectGhId);

    if (!ghRepo) {
      throw new Error("False repo");
    }

    return null;
  }
}

// let user = (await User.find({ relations: ["profile"] }))[0];

// let project = new Project();

// project.title = faker.lorem.words();
// project.githubId = faker.datatype.number(9999999999);
// project.owner = user!;
// project.collaborators = [user!];
// project.likers = [user!];
// project.description = faker.lorem.paragraph();
// project.followers = [user];

// project = await project.save();

// user.likedProjects = [project];
// user = await user.save();

// await project.reload();
// return project;
