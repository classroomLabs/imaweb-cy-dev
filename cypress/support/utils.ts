import { TOKEN_KEY } from "./commands";

export const TOKEN = {
  accessToken: "xxx.xxx.xxx",
  user: {
    id: 1,
    name: "John Doe",
    email: "john@doe.com",
  },
};
// export a function that return s the current user-access-token stored at local storage
export const getUserAccessToken = (): any => {
  const userAccessToken = localStorage.getItem(TOKEN_KEY);
  if (!userAccessToken) {
    return TOKEN;
  }
  return JSON.parse(userAccessToken);
};

export function getUserActivities(fixtureContent: any): any[] {
  const activities = fixtureContent as unknown as any[];
  const userToken = getUserAccessToken();
  return activities.filter((activity: any) => activity.userId === userToken.user.id);
}

export function getMyActivitiesUrl(): string {
  const userToken = getUserAccessToken();
  return `${Cypress.env("apiUrl")}/activities/?userId=${userToken.user.id}`;
}
