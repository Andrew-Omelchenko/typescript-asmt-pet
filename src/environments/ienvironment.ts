export type TEnvironmentName = 'staging' | 'production';

export interface IEnvironment {
  production: boolean;
  environmentName: TEnvironmentName;
}
