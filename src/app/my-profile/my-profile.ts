export interface IMyProfile {
  username: string;
  profilePhoto: string;
  repositories: [];
}
export class MyProfile implements IMyProfile {
  username: string;
  profilePhoto: string;
  repositories;
  constructor() {}
}
