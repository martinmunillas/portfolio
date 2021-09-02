export interface Project {
  _id: string;
  mainImage: string;
  name: string;
  service: string;
  description: string;
  video: string;
  demo: string;
  repo: string;
  images: string[];
}

interface RegularState {
  projects: Project[];
  info: {
    aboutMessage: string;
    aboutImage: string;
    contactText: string;
    github: string;
    email: string;
    linkedin: string;
    youtube: string;
    heroText: string;
    cvUrl: string;
  };
}

interface ErrorState {
  error: string;
}

export const hasntErrors = (state: State): state is RegularState =>
  !("error" in state);

export type State = RegularState | ErrorState;

const reducer = (state?: State): State =>
  state || { error: "There was an error" };

export default reducer;
