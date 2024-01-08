export interface IUserCreateDto {
  displayName: string;
  emailAddress: string;
}
export interface IUserDetailsDto {
  id: string;
  displayName: string;
  emailAddress?: string;
  isExcluded: boolean;
  exclusionReason?: string;
}
