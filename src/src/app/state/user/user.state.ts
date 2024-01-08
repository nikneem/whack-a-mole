export interface IUserState {
  id?: string;
  displayName?: string;
  emailAddress?: string;
  isExcluded: boolean;
  exclusionReason?: string;
  isLoading: boolean;
}
export const initialUserState: IUserState = {
  isExcluded: false,
  isLoading: false,
};
